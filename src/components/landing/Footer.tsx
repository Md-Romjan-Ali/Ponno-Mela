import { Button } from "@heroui/react";
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";
import Link from "next/link";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "All Items", href: "/products" },
    { label: "Categories", href: "/#why-us" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
];
const supportLinks = ["Help Center", "Shipping", "Returns", "Terms"];

export function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 px-6 py-16 text-slate-200 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-4">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-lg font-semibold shadow-lg shadow-amber-500/20">
                            P
                        </span>
                        <span className="text-xl font-semibold">Ponno-Mel</span>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-slate-400">
                        Ponno-Mel delivers premium pantry picks, artisan groceries, and modern gift bundles with a polished shopping experience.
                    </p>
                    <div className="flex items-center gap-3 text-slate-300">
                        <FiFacebook className="h-5 w-5" />
                        <FiInstagram className="h-5 w-5" />
                        <FiTwitter className="h-5 w-5" />
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Quick Links</h3>
                    <div className="mt-6 space-y-3">
                        {quickLinks.map((item) => (
                            <Link key={item.label} href={item.href} className="block text-sm text-slate-400 transition hover:text-white">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Customer Service</h3>
                    <div className="mt-6 space-y-3">
                        {supportLinks.map((item) => (
                            <a key={item} href="#" className="block text-sm text-slate-400 transition hover:text-white">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-amber-300">
                        <FiMail className="h-5 w-5" />
                        <span className="text-sm font-semibold uppercase tracking-[0.3em]">Newsletter</span>
                    </div>
                    <p className="text-sm leading-7 text-slate-400">
                        Subscribe for early access to seasonal collections, promotions, and expert pantry tips.
                    </p>
                    <form className="flex flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Email address"
                            className="min-w-0 flex-1 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                        />
                        <Button type="submit" variant="primary" size="md" className="rounded-full px-6 py-3 w-full sm:w-auto">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>

            <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                © 2026 Ponno-Mel. Crafted for premium shopping experiences.
            </div>
        </footer>
    );
}
