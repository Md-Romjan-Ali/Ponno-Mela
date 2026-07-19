"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiSearch } from "react-icons/hi";

interface FilterSectionProps {
    categories: string[];
    initialSearch: string;
    initialCategory: string;
    initialSort: string;
}

export function FilterSection({
    categories,
    initialSearch,
    initialCategory,
    initialSort,
}: FilterSectionProps) {
    const router = useRouter();
    const [search, setSearch] = useState(initialSearch);
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedSort, setSelectedSort] = useState(initialSort);

    const updateFilters = (newSearch: string, newCategory: string, newSort: string) => {
        const params = new URLSearchParams();
        if (newSearch) params.set("search", newSearch);
        if (newCategory && newCategory !== "All") params.set("category", newCategory);
        if (newSort) params.set("sort", newSort);
        params.set("page", "1"); // Reset to page 1 on filter change
        router.push(`/products?${params.toString()}`);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateFilters(search, selectedCategory, selectedSort);
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        updateFilters(search, category, selectedSort);
    };

    const handleSortChange = (sort: string) => {
        setSelectedSort(sort);
        updateFilters(search, selectedCategory, sort);
    };

    return (
        <div className="space-y-6">
            {/* Search and Sort row */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-md">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-full border border-slate-200 bg-white py-3 pl-12 pr-6 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/10"
                    />
                    <button
                        type="submit"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        aria-label="Submit search"
                    >
                        <HiSearch className="h-5 w-5" />
                    </button>
                </form>

                <div className="flex items-center gap-3">
                    <label htmlFor="sort-select" className="text-sm font-medium text-slate-500">
                        Sort by:
                    </label>
                    <select
                        id="sort-select"
                        value={selectedSort}
                        onChange={(e) => handleSortChange(e.target.value)}
                        className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/10"
                    >
                        <option value="">Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating-desc">Rating: High to Low</option>
                        <option value="name-asc">Name: A-Z</option>
                    </select>
                </div>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto scrollbar-none">
                {categories.map((category) => {
                    const isActive = selectedCategory === category || (category === "All" && !selectedCategory);
                    return (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                                isActive
                                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
