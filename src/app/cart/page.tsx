"use client";

import { useCallback } from "react";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import {
    HiMinus,
    HiPlus,
    HiTrash,
    HiOutlineShoppingBag,
    HiArrowLeft,
    HiOutlineRefresh,
    HiShoppingCart,
} from "react-icons/hi";
import Link from "next/link";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parsePrice(priceStr: string): number {
    return parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
}

function fmt(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
}

// ─── Empty State ─────────────────────────────────────────────────────────────

function EmptyCart() {
    return (
        <main className="flex-grow flex items-center justify-center px-6 py-24">
            <div className="text-center max-w-md">
                {/* Illustration */}
                <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-amber-50 border-2 border-amber-100">
                    <HiShoppingCart className="h-16 w-16 text-amber-400" />
                </div>

                <h1 className="text-3xl font-extrabold text-slate-950">
                    Your cart is empty
                </h1>
                <p className="mt-4 text-slate-600 leading-7">
                    Looks like you haven&apos;t added anything yet. Browse our
                    fresh selection and find something you love.
                </p>

                <Link
                    href="/products"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white shadow-md transition hover:bg-amber-500 hover:text-slate-950 hover:shadow-amber-500/20"
                >
                    <HiArrowLeft className="h-4 w-4" />
                    Continue Shopping
                </Link>
            </div>
        </main>
    );
}

// ─── Cart Item Row ────────────────────────────────────────────────────────────

interface CartItemRowProps {
    id: string;
    name: string;
    price: string;
    image: string;
    category: string;
    quantity: number;
    onIncrease: (id: string) => void;
    onDecrease: (id: string) => void;
    onRemove: (id: string) => void;
}

function CartItemRow({
    id,
    name,
    price,
    image,
    category,
    quantity,
    onIncrease,
    onDecrease,
    onRemove,
}: CartItemRowProps) {
    const unitPrice = parsePrice(price);
    const subtotal = unitPrice * quantity;

    return (
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center">
            {/* Image */}
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-1 min-w-0">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-amber-600">
                    {category}
                </span>
                <Link
                    href={`/products/${id}`}
                    className="text-base font-bold text-slate-900 truncate hover:text-amber-600 transition"
                >
                    {name}
                </Link>
                <span className="text-sm text-slate-500">
                    Unit price: <strong className="text-slate-700">{fmt(unitPrice)}</strong>
                </span>
            </div>

            {/* Qty controls */}
            <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                <button
                    onClick={() => onDecrease(id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-white hover:text-slate-900 hover:shadow-sm"
                    aria-label="Decrease quantity"
                >
                    <HiMinus className="h-3.5 w-3.5" />
                </button>
                <span className="w-9 text-center text-sm font-bold text-slate-800">
                    {quantity}
                </span>
                <button
                    onClick={() => onIncrease(id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-white hover:text-slate-900 hover:shadow-sm"
                    aria-label="Increase quantity"
                >
                    <HiPlus className="h-3.5 w-3.5" />
                </button>
            </div>

            {/* Subtotal */}
            <div className="text-right min-w-[5rem]">
                <p className="text-lg font-extrabold text-slate-950">
                    {fmt(subtotal)}
                </p>
                <p className="text-xs text-slate-400">{quantity} × {fmt(unitPrice)}</p>
            </div>

            {/* Remove */}
            <button
                onClick={() => onRemove(id)}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-rose-100 bg-rose-50 text-rose-500 transition hover:bg-rose-500 hover:text-white hover:border-rose-500"
                aria-label={`Remove ${name} from cart`}
                title="Remove item"
            >
                <HiTrash className="h-4 w-4" />
            </button>
        </div>
    );
}

// ─── Cart Page ────────────────────────────────────────────────────────────────

export default function CartPage() {
    const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

    const handleIncrease = useCallback((id: string) => {
        const item = cartItems.find((i) => i.id === id);
        if (item) updateQuantity(id, item.quantity + 1);
    }, [cartItems, updateQuantity]);

    const handleDecrease = useCallback((id: string) => {
        const item = cartItems.find((i) => i.id === id);
        if (item) updateQuantity(id, item.quantity - 1); // 0 → removes automatically
    }, [cartItems, updateQuantity]);

    const TAX_RATE = 0.05;
    const tax = cartTotal * TAX_RATE;
    const grandTotal = cartTotal + tax;

    const isEmpty = cartItems.length === 0;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            <Navbar />

            {isEmpty ? (
                <EmptyCart />
            ) : (
                <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-10">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">
                                Shopping Cart
                            </p>
                            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-950">
                                Your Cart
                                <span className="ml-3 rounded-full bg-slate-100 px-3 py-1 text-lg font-bold text-slate-500">
                                    {cartCount}
                                </span>
                            </h1>
                        </div>

                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950 group"
                        >
                            <HiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Continue Shopping
                        </Link>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1fr_380px] items-start">
                        {/* ── Item List ───────────────────────────────── */}
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <CartItemRow
                                    key={item.id}
                                    {...item}
                                    onIncrease={handleIncrease}
                                    onDecrease={handleDecrease}
                                    onRemove={removeFromCart}
                                />
                            ))}
                        </div>

                        {/* ── Order Summary ────────────────────────────── */}
                        <div className="sticky top-24">
                            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                                <h2 className="text-lg font-extrabold text-slate-950 mb-6">
                                    Order Summary
                                </h2>

                                <div className="space-y-4 text-sm">
                                    <div className="flex items-center justify-between text-slate-600">
                                        <span>Items ({cartCount})</span>
                                        <span className="font-semibold text-slate-800">{fmt(cartTotal)}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-slate-600">
                                        <span>Shipping</span>
                                        <span className="font-semibold text-emerald-600">Free</span>
                                    </div>

                                    <div className="flex items-center justify-between text-slate-600">
                                        <span>Estimated Tax (5%)</span>
                                        <span className="font-semibold text-slate-800">{fmt(tax)}</span>
                                    </div>

                                    <hr className="border-slate-100" />

                                    <div className="flex items-center justify-between text-slate-950">
                                        <span className="text-base font-extrabold">Total</span>
                                        <span className="text-2xl font-extrabold">{fmt(grandTotal)}</span>
                                    </div>
                                </div>

                                {/* Checkout CTA */}
                                <button className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 py-4 text-sm font-bold text-white shadow-md transition hover:bg-amber-500 hover:text-slate-950 hover:shadow-amber-500/20">
                                    <HiOutlineShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
                                    Proceed to Checkout
                                </button>

                                {/* Clear Cart */}
                                <button
                                    onClick={clearCart}
                                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 py-3 text-sm font-semibold text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                                >
                                    <HiOutlineRefresh className="h-4 w-4" />
                                    Clear Cart
                                </button>
                            </div>

                            {/* Trust badges */}
                            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-500">
                                {["🔒 Secure Checkout", "🚚 Free Shipping", "↩️ Easy Returns"].map((badge) => (
                                    <div
                                        key={badge}
                                        className="rounded-2xl border border-slate-200 bg-white px-3 py-2.5 font-medium shadow-sm"
                                    >
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            )}

            <Footer />
        </div>
    );
}
