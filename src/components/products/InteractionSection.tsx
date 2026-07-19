"use client";

import { useState } from "react";
import { HiMinus, HiPlus, HiOutlineShoppingBag, HiCheck } from "react-icons/hi";

interface InteractionSectionProps {
    productStatus: string;
}

export function InteractionSection({ productStatus }: InteractionSectionProps) {
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const isOutOfStock = productStatus === "Out of Stock";

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleAddToCart = () => {
        if (isOutOfStock || isAdding) return;
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
            setIsAdded(true);
            setTimeout(() => {
                setIsAdded(false);
            }, 2000);
        }, 800);
    };

    return (
        <div className="mt-8 space-y-6">
            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-slate-500">Quantity:</span>
                <div className="flex items-center rounded-full border border-slate-200 bg-white p-1">
                    <button
                        onClick={handleDecrement}
                        disabled={quantity <= 1 || isOutOfStock}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none"
                        aria-label="Decrease quantity"
                    >
                        <HiMinus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-slate-800">
                        {isOutOfStock ? 0 : quantity}
                    </span>
                    <button
                        onClick={handleIncrement}
                        disabled={isOutOfStock}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none"
                        aria-label="Increase quantity"
                    >
                        <HiPlus className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <button
                    onClick={handleAddToCart}
                    disabled={isOutOfStock || isAdded || isAdding}
                    className={`group relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-full py-4 text-base font-bold text-white transition-all duration-300 ${
                        isOutOfStock
                            ? "bg-slate-300 cursor-not-allowed shadow-none"
                            : isAdded
                            ? "bg-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "bg-slate-950 shadow-md shadow-slate-950/10 hover:bg-amber-500 hover:text-slate-950 hover:shadow-xl hover:shadow-amber-500/15"
                    }`}
                >
                    {/* Animated Icon */}
                    {isAdded ? (
                        <HiCheck className="h-5 w-5 scale-110 transition-transform duration-300" />
                    ) : (
                        <HiOutlineShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-115 group-hover:translate-x-0.5 group-hover:-rotate-3" />
                    )}

                    <span>
                        {isOutOfStock
                            ? "Out of Stock"
                            : isAdding
                            ? "Adding to Cart..."
                            : isAdded
                            ? "Added to Cart!"
                            : "Add to Cart"}
                    </span>
                </button>
            </div>
        </div>
    );
}
