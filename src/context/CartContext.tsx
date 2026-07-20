"use client";

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CartItem {
    id: string;
    name: string;
    price: string;         // e.g. "$24.00"
    image: string;
    category: string;
    status: "In Stock" | "Out of Stock";
    quantity: number;
}

interface CartContextValue {
    cartItems: CartItem[];
    cartCount: number;
    cartTotal: number;
    addToCart: (product: Omit<CartItem, "quantity">, qty?: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, qty: number) => void;
    clearCart: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "ponno-mel-cart";

function parsePrice(priceStr: string): number {
    return parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
}

function loadFromStorage(): CartItem[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
        return [];
    }
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [mounted, setMounted] = useState(false);

    // Hydrate from localStorage after mount (avoids SSR mismatch)
    useEffect(() => {
        setCartItems(loadFromStorage());
        setMounted(true);
    }, []);

    // Persist every change
    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems, mounted]);

    // ── Derived values ──────────────────────────────────────────────────────

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const cartTotal = cartItems.reduce(
        (sum, item) => sum + parsePrice(item.price) * item.quantity,
        0
    );

    // ── Actions ─────────────────────────────────────────────────────────────

    const addToCart = useCallback(
        (product: Omit<CartItem, "quantity">, qty = 1) => {
            setCartItems((prev) => {
                const existing = prev.find((i) => i.id === product.id);
                if (existing) {
                    return prev.map((i) =>
                        i.id === product.id
                            ? { ...i, quantity: i.quantity + qty }
                            : i
                    );
                }
                return [...prev, { ...product, quantity: qty }];
            });
        },
        []
    );

    const removeFromCart = useCallback((id: string) => {
        setCartItems((prev) => prev.filter((i) => i.id !== id));
    }, []);

    const updateQuantity = useCallback((id: string, qty: number) => {
        if (qty <= 0) {
            setCartItems((prev) => prev.filter((i) => i.id !== id));
        } else {
            setCartItems((prev) =>
                prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
            );
        }
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                cartTotal,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useCart(): CartContextValue {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error("useCart must be used inside <CartProvider>");
    }
    return ctx;
}
