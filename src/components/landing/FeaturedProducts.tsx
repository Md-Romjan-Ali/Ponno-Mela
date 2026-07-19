import { Button, Card } from "@heroui/react";
import { HiChevronRight, HiStar } from "react-icons/hi";
import { featuredProducts } from "@/data/products";
import Link from "next/link";

function ratingStars(rating: number) {
    const stars = [];
    const rounded = Math.round(rating);
    for (let i = 0; i < 5; i += 1) {
        stars.push(
            <HiStar
                key={i}
                className={`h-4 w-4 ${i < rounded ? "text-amber-400" : "text-slate-300"}`}
                aria-hidden="true"
            />
        );
    }
    return stars;
}

export function FeaturedProducts() {
    return (
        <section id="products" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">Featured Products</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Handpicked items for every meal and occasion.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                    Discover high-quality pantry favorites, fresh bundles, and premium grocery essentials crafted for modern homes.
                </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featuredProducts.map((product) => (
                    <Card
                        key={product.id}
                        className="overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="group relative overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${product.status === "In Stock"
                                    ? "bg-emerald-500/15 text-emerald-700"
                                    : "bg-rose-500/15 text-rose-700"
                                }`}>
                                {product.status}
                            </span>
                        </div>
                        <div className="p-5">
                            <div className="flex items-center justify-between gap-3">
                                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                                    {product.category}
                                </p>
                                <p className="text-lg font-semibold text-slate-950">{product.price}</p>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-slate-900">{product.name}</h3>
                            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                                <div className="flex items-center gap-0.5">{ratingStars(product.rating)}</div>
                                <span>{product.rating.toFixed(1)}</span>
                            </div>
                            <div className="mt-6">
                                <Button as={Link} href={`/products/${product.id}`} variant="ghost" size="md" className="w-full justify-between rounded-full border border-slate-200 px-5 py-3 text-slate-900 transition hover:border-amber-400 hover:bg-amber-50">
                                    Details
                                    <HiChevronRight className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button as={Link} href="/products" variant="secondary" size="lg" className="rounded-full px-8 py-3">
                    View All Items
                </Button>
            </div>
        </section>
    );
}
