import { Button, Card } from "@heroui/react";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { allProducts } from "@/data/products";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FilterSection } from "@/components/products/FilterSection";
import Link from "next/link";

interface PageProps {
    searchParams: Promise<{
        page?: string;
        category?: string;
        search?: string;
        sort?: string;
    }>;
}

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

export default async function ProductsPage({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const page = parseInt(resolvedSearchParams.page || "1", 10);
    const category = resolvedSearchParams.category || "";
    const search = resolvedSearchParams.search || "";
    const sort = resolvedSearchParams.sort || "";

    // 1. Extract categories
    const categories = ["All", ...Array.from(new Set(allProducts.map((p) => p.category)))];

    // 2. Filter products
    let products = [...allProducts];

    if (category && category !== "All") {
        products = products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
        const searchLower = search.toLowerCase();
        products = products.filter(
            (p) =>
                p.name.toLowerCase().includes(searchLower) ||
                p.category.toLowerCase().includes(searchLower) ||
                p.shortDescription.toLowerCase().includes(searchLower)
        );
    }

    // 3. Sort products
    const parsePrice = (priceStr: string) => {
        return parseFloat(priceStr.replace(/[^0-9.]/g, ""));
    };

    if (sort === "price-asc") {
        products.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sort === "price-desc") {
        products.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sort === "rating-desc") {
        products.sort((a, b) => b.rating - a.rating);
    } else if (sort === "name-asc") {
        products.sort((a, b) => a.name.localeCompare(b.name));
    }

    // 4. Pagination math
    const itemsPerPage = 12;
    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentPage = totalPages > 0 ? Math.max(1, Math.min(totalPages, page)) : 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    // Helper to generate dynamic URL with current search parameters
    const getPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (category && category !== "All") params.set("category", category);
        if (sort) params.set("sort", sort);
        params.set("page", pageNumber.toString());
        return `/products?${params.toString()}`;
    };

    // Helper for pagination page numbers
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;
        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);

            if (currentPage <= 2) {
                end = 4;
            } else if (currentPage >= totalPages - 1) {
                start = totalPages - 3;
            }

            if (start > 2) {
                pages.push("ellipsis-1");
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (end < totalPages - 1) {
                pages.push("ellipsis-2");
            }

            pages.push(totalPages);
        }
        return pages;
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            <Navbar />
            
            <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12 lg:px-8">
                {/* Hero Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">Catalog</p>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                        Explore Our Entire Market
                    </h1>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                        Choose from our carefully curated catalog of local farm delicacies, fresh pantry essentials, artisan jams, and specialty beverages.
                    </p>
                </div>

                {/* Filter and search controls */}
                <div className="mb-10 bg-white border border-slate-200/80 rounded-[2rem] p-6 shadow-sm">
                    <FilterSection
                        categories={categories}
                        initialSearch={search}
                        initialCategory={category || "All"}
                        initialSort={sort}
                    />
                </div>

                {/* Products Grid */}
                {paginatedProducts.length > 0 ? (
                    <>
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {paginatedProducts.map((product) => (
                                <Card
                                    key={product.id}
                                    className="flex flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl rounded-3xl"
                                >
                                    {/* Product Image */}
                                    <div className="group relative h-64 overflow-hidden bg-slate-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                        <span
                                            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
                                                product.status === "In Stock"
                                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/40"
                                                    : "bg-rose-50 text-rose-700 border border-rose-200/40"
                                            }`}
                                        >
                                            {product.status}
                                        </span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex flex-1 flex-col p-5">
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                                {product.category}
                                            </span>
                                            <span className="text-lg font-bold text-slate-950">{product.price}</span>
                                        </div>

                                        <h3 className="mt-3 text-lg font-bold text-slate-900 line-clamp-1">
                                            {product.name}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-600 line-clamp-2 flex-1">
                                            {product.shortDescription}
                                        </p>

                                        {/* Rating */}
                                        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                                            <div className="flex items-center gap-0.5">
                                                {ratingStars(product.rating)}
                                            </div>
                                            <span className="font-medium">{product.rating.toFixed(1)}</span>
                                        </div>

                                        {/* Details button */}
                                        <Button
                                            as={Link}
                                            href={`/products/${product.id}`}
                                            variant="ghost"
                                            size="md"
                                            className="mt-6 w-full justify-between rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-amber-400 hover:bg-amber-50"
                                        >
                                            View Details
                                            <HiChevronRight className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination Section */}
                        {totalPages > 1 && (
                            <div className="mt-16 flex justify-center">
                                <nav className="inline-flex items-center gap-1 sm:gap-2" aria-label="Pagination">
                                    {/* Previous Button */}
                                    {currentPage > 1 ? (
                                        <Link
                                            href={getPageUrl(currentPage - 1)}
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                                            aria-label="Previous page"
                                        >
                                            <HiChevronLeft className="h-5 w-5" />
                                        </Link>
                                    ) : (
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed">
                                            <HiChevronLeft className="h-5 w-5" />
                                        </span>
                                    )}

                                    {/* Page Numbers */}
                                    {getPageNumbers().map((pageNum, index) => {
                                        if (typeof pageNum === "string") {
                                            return (
                                                <span
                                                    key={`ellipsis-${index}`}
                                                    className="inline-flex h-10 w-10 items-center justify-center text-slate-400 font-semibold"
                                                >
                                                    •••
                                                </span>
                                            );
                                        }

                                        const isActive = currentPage === pageNum;
                                        return (
                                            <Link
                                                key={pageNum}
                                                href={getPageUrl(pageNum)}
                                                className={`inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-full px-3.5 text-sm font-bold transition-all duration-200 ${
                                                    isActive
                                                        ? "bg-slate-950 text-white shadow-md shadow-slate-950/20"
                                                        : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                                                }`}
                                            >
                                                {pageNum}
                                            </Link>
                                        );
                                    })}

                                    {/* Next Button */}
                                    {currentPage < totalPages ? (
                                        <Link
                                            href={getPageUrl(currentPage + 1)}
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                                            aria-label="Next page"
                                        >
                                            <HiChevronRight className="h-5 w-5" />
                                        </Link>
                                    ) : (
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed">
                                            <HiChevronRight className="h-5 w-5" />
                                        </span>
                                    )}
                                </nav>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-20 bg-white border border-slate-200/80 rounded-[2rem] p-8 shadow-sm">
                        <div className="text-amber-500 text-4xl mb-4 flex justify-center">🔍</div>
                        <h3 className="text-2xl font-bold text-slate-950">No products found</h3>
                        <p className="mt-2 text-slate-600 max-w-md mx-auto">
                            We couldn&apos;t find any items matching your search criteria. Try modifying your filters or clear your search query.
                        </p>
                        <Button
                            as={Link}
                            href="/products"
                            variant="primary"
                            size="md"
                            className="mt-6 rounded-full px-6 py-2.5"
                        >
                            Reset Catalog
                        </Button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
