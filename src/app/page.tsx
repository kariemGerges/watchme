
'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { featuredProducts, categories, collections, features } from './data';

// Types

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubscribeSection from './components/SubscribeSection';
import ProductSlider from './components/ProductSlider';

const HomePage: React.FC = () => {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            <Head>
                <title>WATCHME | Luxury Watches</title>
                <meta
                    name="description"
                    content="Discover our collection of luxury timepieces"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navigation */}
            <Navbar />
            

            <main>
                {/* Hero Section with Parallax */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center"
                        style={{
                            transform: `translateY(${scrollY * 0.5}px)`,
                            backgroundImage: `url("/pictures/bg1.jpeg")`,
                            filter: 'brightness(0.6)',
                        }}
                    />
                    <div className="container mx-auto px-4 z-10 text-center">
                        <h1
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                            style={{
                                transform: `translateY(${-scrollY * 0.2}px)`,
                                opacity: Math.max(0, 1 - scrollY * 0.001),
                            }}
                        >
                            Time Is{' '}
                            <span className="text-amber-400">Luxury</span>
                        </h1>
                        <p
                            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
                            style={{
                                transform: `translateY(${-scrollY * 0.1}px)`,
                                opacity: Math.max(0, 1 - scrollY * 0.001),
                            }}
                        >
                            Craftsmanship that spans generations, designs that
                            define eras.
                        </p>
                        <button
                            className="bg-amber-400 text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-300 transition-colors"
                            style={{
                                transform: `translateY(${-scrollY * 0.05}px)`,
                            }}
                        >
                            Discover Collection
                        </button>
                    </div>
                    <div
                        className="absolute bottom-10 left-0 right-0 text-center"
                        style={{
                            opacity: Math.max(0, 1 - scrollY * 0.005),
                        }}
                    >
                        <div className="animate-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Featured Watch Section */}
                <section className="relative bg-gradient-to-b from-black to-gray-900 py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div
                                className="w-full md:w-1/2 relative"
                                style={{
                                    transform: `translateY(${Math.min(
                                        (scrollY - 500) * 0.1,
                                        100
                                    )}px)`,
                                }}
                            >
                                <div className="relative h-80 sm:h-96 md:h-[36rem] overflow-hidden rounded-lg">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url("/pictures/bg1.jpeg")`,
                                            transform: `scale(${
                                                1 +
                                                Math.min(
                                                    (scrollY - 500) * 0.0002,
                                                    0.2
                                                )
                                            })`,
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                className="w-full md:w-1/2 mt-8 md:mt-0"
                                style={{
                                    transform: `translateY(${Math.min(
                                        (scrollY - 700) * 0.05,
                                        50
                                    )}px)`,
                                }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                                    Chronos Series X
                                </h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Our flagship timepiece combines Swiss
                                    precision with timeless design. Every
                                    component is meticulously crafted and
                                    assembled by our master watchmakers.
                                </p>
                                <div className="mb-8">
                                    <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
                                        {[1, 2, 3].map((index) => (
                                            <div
                                                key={index}
                                                className="h-24 w-24 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden"
                                            >
                                                <div
                                                    className="h-full w-full bg-cover bg-center"
                                                    style={{
                                                        backgroundImage: `url("/window.svg")`,
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                    <span className="text-2xl font-bold">
                                        $5,299.00
                                    </span>
                                    <button className="bg-amber-400 text-black px-6 py-3 rounded-full font-medium hover:bg-amber-300 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="bg-black py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
                            Shop by Category
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="relative h-48 sm:h-64 rounded-lg overflow-hidden group cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url("${category.image}")`,
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Watch Collections */}
                <section className="relative bg-black py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2
                            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16 text-center"
                            style={{
                                transform: `translateY(${Math.min(
                                    (scrollY - 1200) * 0.05,
                                    50
                                )}px)`,
                            }}
                        >
                            Our Collections
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {collections.map((collection, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-lg h-80 sm:h-96"
                                    style={{
                                        transform: `translateY(${Math.min(
                                            (scrollY - 1300) *
                                                0.03 *
                                                ((index % 3) + 1),
                                            30 * ((index % 3) + 1)
                                        )}px)`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url("${collection.image}")`,
                                        }}
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                                        <h3 className="text-xl sm:text-2xl font-bold mb-2">
                                            {collection.name}
                                        </h3>
                                        <p className="text-gray-300 mb-4">
                                            {collection.description}
                                        </p>
                                        <button className="w-max bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded hover:bg-white/20 transition-colors">
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="text-center"
                                    style={{
                                        transform: `translateY(${Math.min(
                                            (scrollY - 1800) *
                                                0.02 *
                                                (index + 1),
                                            20 * (index + 1)
                                        )}px)`,
                                    }}
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-400 text-black mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product Showcase */}
                <section className="bg-black py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
                            Bestsellers
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredProducts
                                .slice(0, 4)
                                .map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="product-card"
                                        style={{
                                            transform: `translateY(${Math.min(
                                                (scrollY - 2200) *
                                                    0.02 *
                                                    ((index % 4) + 1),
                                                20 * ((index % 4) + 1)
                                            )}px)`,
                                        }}
                                    >
                                        <div className="relative overflow-hidden rounded-lg aspect-square mb-4 group">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{
                                                    backgroundImage: `url("${product.image}")`,
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform z-10">
                                                <button className="w-full bg-amber-400 text-black p-2 rounded font-medium hover:bg-amber-300 transition-colors">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-lg mb-1">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <div className="text-gray-300">
                                                {product.discountPrice ? (
                                                    <>
                                                        <span className="text-amber-400 font-medium">
                                                            $
                                                            {
                                                                product.discountPrice
                                                            }
                                                        </span>
                                                        <span className="ml-2 line-through">
                                                            ${product.price}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span>
                                                        ${product.price}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (star) => (
                                                            <svg
                                                                key={star}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className={`h-4 w-4 ${
                                                                    star <=
                                                                    product.rating
                                                                        ? 'text-amber-400'
                                                                        : 'text-gray-600'
                                                                }`}
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        )
                                                    )}
                                                </div>
                                                <span className="ml-1 text-xs text-gray-400">
                                                    ({product.reviewCount})
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <SubscribeSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};



export default HomePage;