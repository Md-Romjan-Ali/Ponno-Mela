"use client";

import { useState } from "react";
import { HiMenu, HiOutlineShoppingBag, HiOutlineX } from "react-icons/hi";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Items", href: "/products" },
    { label: "Categories", href: "/#why-us" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const isLinkActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        if (href === "/products") {
            return pathname.startsWith("/products");
        }
        return false;
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md shadow-amber-500/20">
                        P
                    </span>
                    Ponno-Mel
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        const active = isLinkActive(link.href);
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-sm transition ${active
                                        ? "text-slate-900 font-semibold"
                                        : "text-slate-600 hover:text-slate-900"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <button className="relative inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                        <HiOutlineShoppingBag className="h-5 w-5" />
                        <span className="absolute -right-2 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1.5 text-[0.7rem] font-semibold text-white">
                            3
                        </span>
                    </button>
                    <Button variant="primary" size="md" className="rounded-full px-5 py-2.5">
                        Login
                    </Button>
                </div>

                <button
                    type="button"
                    aria-label="Open mobile menu"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <HiOutlineX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
                </button>
            </div>

            {mobileOpen ? (
                <div className="border-t border-slate-200 bg-white/95 px-6 py-4 shadow-sm md:hidden">
                    <div className="space-y-4">
                        {navLinks.map((link) => {
                            const active = isLinkActive(link.href);
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => {
                                        setMobileOpen(false);
                                    }}
                                    className={`block rounded-3xl px-4 py-3 text-sm transition ${active
                                            ? "bg-slate-100 text-slate-900 font-semibold"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                            <button className="relative inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                                <HiOutlineShoppingBag className="h-5 w-5" />
                                <span className="absolute -right-2 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1.5 text-[0.7rem] font-semibold text-white">
                                    3
                                </span>
                            </button>
                            <Button variant="primary" size="md" className="rounded-full px-5 py-2.5 w-full">
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            ) : null}
        </header>
    );
}
