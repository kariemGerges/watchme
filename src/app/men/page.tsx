"use client";
import { useState } from 'react';
import { Star, Filter, ChevronDown, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { watches } from '@/app/data';


// Filter options
const categories = [
    'All',
    'Luxury',
    'Sport',
    'Digital',
    'Waterproof',
    'Dress',
    'Casual',
    'Limited',
];
const priceRanges = ['All', 'Under $200', '$200-$400', 'Over $400'];
const sortOptions = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Rating: High to Low',
    'Newest',
];

export default function MensWatchesPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPriceRange, setSelectedPriceRange] = useState('All');
    const [sortBy, setSortBy] = useState('Featured');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filter products based on selected filters
    const filteredProducts = watches.filter((product) => {
        // Category filter
        if (
            selectedCategory !== 'All' &&
            !product.category.some(
                (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
            )
        ) {
            return false;
        }

        // Price range filter
        if (selectedPriceRange === 'Under $200' && product.price >= 200) {
            return false;
        } else if (
            selectedPriceRange === '$200-$400' &&
            (product.price < 200 || product.price > 400)
        ) {
            return false;
        } else if (selectedPriceRange === 'Over $400' && product.price <= 400) {
            return false;
        }

        return true;
    });

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'Price: Low to High') {
            return a.price - b.price;
        } else if (sortBy === 'Price: High to Low') {
            return b.price - a.price;
        } else if (sortBy === 'Rating: High to Low') {
            return b.rating - a.rating;
        } else if (sortBy === 'Newest') {
            return a.new ? -1 : b.new ? 1 : 0;
        }
        return b.bestseller ? 1 : a.bestseller ? -1 : 0; // Featured sorts by bestseller
    });

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative">
                <div className="bg-black py-16 px-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            MEN&apos;S WATCHES
                        </h1>
                        <p className="text-yellow-400 text-lg mb-2">
                            Timeless Elegance Since 1973
                        </p>
                        <p className="text-gray-300 max-w-2xl">
                            Discover our premium collection of men&apos;s
                            watches, crafted with precision and designed to make
                            a statement. From classic timepieces to modern
                            innovations, find the perfect watch that matches
                            your style.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filter and Sort */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
                    <div>
                        <p className="text-gray-300">
                            Showing {sortedProducts.length} results
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded transition duration-300"
                        >
                            <Filter size={18} className="mr-2" />
                            Filters
                            <ChevronDown size={18} className="ml-2" />
                        </button>

                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none bg-gray-900 border border-gray-700 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-yellow-500"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                <ChevronDown size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Panel */}
                {isFilterOpen && (
                    <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-lg font-medium text-yellow-400 mb-4">
                                Categories
                            </h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <div
                                        key={category}
                                        className="flex items-center"
                                    >
                                        <input
                                            type="radio"
                                            id={`category-${category}`}
                                            name="category"
                                            checked={
                                                selectedCategory === category
                                            }
                                            onChange={() =>
                                                setSelectedCategory(category)
                                            }
                                            className="form-radio h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-700"
                                        />
                                        <label
                                            htmlFor={`category-${category}`}
                                            className="ml-2 text-sm text-gray-300"
                                        >
                                            {category}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-yellow-400 mb-4">
                                Price Range
                            </h3>
                            <div className="space-y-2">
                                {priceRanges.map((range) => (
                                    <div
                                        key={range}
                                        className="flex items-center"
                                    >
                                        <input
                                            type="radio"
                                            id={`price-${range}`}
                                            name="price"
                                            checked={
                                                selectedPriceRange === range
                                            }
                                            onChange={() =>
                                                setSelectedPriceRange(range)
                                            }
                                            className="form-radio h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-700"
                                        />
                                        <label
                                            htmlFor={`price-${range}`}
                                            className="ml-2 text-sm text-gray-300"
                                        >
                                            {range}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end items-end">
                            <button
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setSelectedPriceRange('All');
                                }}
                                className="bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white py-2 px-4 border border-gray-700 hover:border-gray-600 rounded transition duration-300"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                )}

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition duration-300"
                        >
                            <div className="relative">
                                <Image
                                    width={500}
                                    height={500}
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                                {product.new && (
                                    <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                                        NEW
                                    </div>
                                )}
                                {product.bestseller && (
                                    <div className="absolute top-2 right-2 bg-black text-yellow-500 text-xs font-bold px-2 py-1 rounded border border-yellow-500">
                                        BESTSELLER
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full flex items-center transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        <ShoppingCart
                                            size={18}
                                            className="mr-2"
                                        />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-medium text-white group-hover:text-yellow-400 transition duration-300">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center">
                                        <Star
                                            size={16}
                                            className="text-yellow-500 fill-current"
                                        />
                                        <span className="text-sm text-gray-300 ml-1">
                                            {product.rating}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="text-yellow-400 font-bold">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <button className="text-gray-300 hover:text-white text-sm underline">
                                        Quick View
                                    </button>
                                </div>

                                <div className="mt-2">
                                    <div className="flex flex-wrap gap-1">
                                        {product.category.map((cat) => (
                                            <span
                                                key={cat}
                                                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {sortedProducts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-300 text-lg mb-4">
                            No watches match your selected filters.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSelectedPriceRange('All');
                            }}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded transition duration-300"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center space-x-2">
                        <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition duration-300">
                            Previous
                        </button>
                        <button className="px-3 py-1 rounded bg-yellow-500 text-black font-medium">
                            1
                        </button>
                        <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition duration-300">
                            2
                        </button>
                        <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition duration-300">
                            3
                        </button>
                        <span className="text-gray-500">...</span>
                        <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition duration-300">
                            Next
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
