import { HiArrowLeft, HiStar } from "react-icons/hi";
import { getProductById } from "@/data/products";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { InteractionSection } from "@/components/products/InteractionSection";
import Link from "next/link";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

function ratingStars(rating: number) {
    const stars = [];
    const rounded = Math.round(rating);
    for (let i = 0; i < 5; i += 1) {
        stars.push(
            <HiStar
                key={i}
                className={`h-4.5 w-4.5 ${i < rounded ? "text-amber-400" : "text-slate-300"}`}
                aria-hidden="true"
            />
        );
    }
    return stars;
}

export default async function ProductDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
                <Navbar />
                <main className="flex-grow flex items-center justify-center px-6 py-20">
                    <div className="text-center max-w-md bg-white border border-slate-200/80 rounded-[2.5rem] p-8 shadow-sm">
                        <span className="text-4xl text-rose-500 mb-4 block">⚠️</span>
                        <h1 className="text-2xl font-bold text-slate-950">Product Not Found</h1>
                        <p className="mt-3 text-slate-600">
                            The product you are looking for does not exist or has been removed from our catalog.
                        </p>
                        <Link
                            href="/products"
                            className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800 shadow-md shadow-slate-950/10"
                        >
                            Back to Catalog
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            <Navbar />

            <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12 lg:px-8">
                {/* Navigation and Breadcrumbs */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950 group"
                    >
                        <HiArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" />
                        Back to Products
                    </Link>

                    <nav className="text-xs font-semibold text-slate-500 flex items-center gap-2 uppercase tracking-wider">
                        <Link href="/" className="hover:text-slate-900 transition">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-slate-900 transition">Products</Link>
                        <span>/</span>
                        <span className="text-slate-800 font-bold max-w-[200px] truncate">{product.name}</span>
                    </nav>
                </div>

                {/* Main Product Layout */}
                <div className="grid gap-12 lg:grid-cols-2 bg-white border border-slate-200/80 rounded-[2.5rem] p-6 md:p-12 shadow-sm">
                    {/* Left Column: Image Display */}
                    <div className="flex flex-col gap-4">
                        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-inner">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto object-cover max-h-[500px] md:max-h-[600px] rounded-[2rem] transition-transform duration-500 hover:scale-102"
                            />
                            <span
                                className={`absolute right-6 top-6 rounded-full px-4.5 py-1.5 text-xs font-bold shadow-md ${
                                    product.status === "In Stock"
                                        ? "bg-emerald-500 text-white border border-emerald-400"
                                        : "bg-rose-500 text-white border border-rose-400"
                                }`}
                            >
                                {product.status}
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Complete Information */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* Product Category */}
                            <span className="inline-flex rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-amber-600 mb-4">
                                {product.category}
                            </span>

                            {/* Product Title */}
                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                                {product.name}
                            </h1>

                            {/* Ratings & Reviews */}
                            <div className="mt-4 flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-0.5">
                                    {ratingStars(product.rating)}
                                </div>
                                <span className="text-sm font-bold text-slate-800">{product.rating.toFixed(1)}</span>
                                <span className="text-slate-300">|</span>
                                <span className="text-sm text-slate-500 font-medium">120+ Verified Reviews</span>
                            </div>

                            {/* Price */}
                            <div className="mt-6 flex items-baseline">
                                <span className="text-4xl font-extrabold text-slate-950 tracking-tight">{product.price}</span>
                                <span className="ml-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">USD / Unit</span>
                            </div>

                            {/* Availability status line */}
                            <div className="mt-4 flex items-center gap-2">
                                <span className={`inline-block h-2.5 w-2.5 rounded-full ${
                                    product.status === "In Stock" ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
                                }`} />
                                <span className="text-sm font-semibold text-slate-700">
                                    {product.status === "In Stock" ? "Ready to ship today" : "Out of stock / Pre-order"}
                                </span>
                            </div>

                            {/* Divider */}
                            <hr className="my-8 border-slate-100" />

                            {/* Short Description */}
                            <p className="text-base leading-8 text-slate-600">
                                {product.shortDescription}
                            </p>

                            {/* Detailed Description */}
                            <div className="mt-6">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Details</h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    {product.description}
                                </p>
                            </div>

                            {/* Product Highlights */}
                            {product.highlights && product.highlights.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Highlights</h3>
                                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-inside list-disc">
                                        {product.highlights.map((highlight, index) => (
                                            <li key={index} className="text-sm text-slate-600 font-medium marker:text-amber-500">
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Interactive Area (Qty & Add to Cart) */}
                        <InteractionSection product={product} />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
