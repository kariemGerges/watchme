'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { featuredProducts as rawFeaturedProducts } from './data';

const featuredProducts = rawFeaturedProducts.map((product) => ({
    ...product,
    price: parseFloat(product.price),
}));

// Components
import ProductSlider from './components/HomePage/ProductSlider';
import FeaturesSection from './components/HomePage/FeaturesSection';
import FeaturedWatchSection from './components/HomePage/FeaturedWatchSection';
import CategoriesSection from './components/HomePage/CategoriesSection';
import OurCollectionsSection from './components/HomePage/OurCollectionsSection';
import TestimonialCards from './components/TestimonialCards';

// import images
import mainImage from '@/app/assets/images/w1.jpg';




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

            <main>
                {/* Hero Section with Parallax */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center"
                        style={{
                            transform: `translateY(${scrollY * 0.6}px)`,
                            backgroundImage: `url("/pictures/w1.jpg")`,
                            
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
                        {/* Scroll Down Indicator */}
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
                    <FeaturedWatchSection scrollY={scrollY} />
                </section>

                {/* Categories */}
                <section className="bg-black py-16 md:py-24">
                    <CategoriesSection />
                </section>

                {/* Our Collections */}
                <section className="relative bg-black py-16 md:py-24">
                    <OurCollectionsSection scrollY={scrollY} />
                </section>

                {/* Features Section */}
                <section className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24">
                    <FeaturesSection scrollY={scrollY} />
                </section>

                {/* Product Showcase */}
                <section className="bg-black py-16 md:py-24">
                    <ProductSlider
                        title="Featured"
                        products={featuredProducts}
                    />
                </section>
                <section className="bg-black">
                    <TestimonialCards />
                </section>
            </main>
        </div>
    );
};

export default HomePage;
