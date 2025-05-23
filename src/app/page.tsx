// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import Head from 'next/head';
// import { featuredProducts as rawFeaturedProducts } from './data';

// // Preprocess featured products only once
// const featuredProducts = rawFeaturedProducts.map((product) => ({
//     ...product,
//     price: parseFloat(product.price),
// }));

// // Components
// import ProductSlider from './components/HomePage/ProductSlider';
// import FeaturesSection from './components/HomePage/FeaturesSection';
// import FeaturedWatchSection from './components/HomePage/FeaturedWatchSection';
// import CategoriesSection from './components/HomePage/CategoriesSection';
// import OurCollectionsSection from './components/HomePage/OurCollectionsSection';
// import TestimonialCards from './components/TestimonialCards';

// // Helper: clamp value between min/max
// const clamp = (value: number, min: number, max: number) =>
//     Math.max(min, Math.min(max, value));

// const HomePage: React.FC = () => {
//     // Use scrollY for parallax/opacity, but throttle with animation frame
//     const [scrollY, setScrollY] = useState(0);
//     const scrollRef = useRef(0);
//     const ticking = useRef(false);

//     useEffect(() => {
//         // Use requestAnimationFrame for smoothness
//         const handleScroll = () => {
//             scrollRef.current = window.scrollY;
//             if (!ticking.current) {
//                 window.requestAnimationFrame(() => {
//                     setScrollY(scrollRef.current);
//                     ticking.current = false;
//                 });
//                 ticking.current = true;
//             }
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Smooth values (for smaller changes, optional)
//     // If you want to make it EVEN smoother (ease the value)
//     // const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });

//     return (
//         <div className="min-h-screen bg-black text-white">
//             <Head>
//                 <title>WATCHME | Luxury Watches</title>
//                 <meta
//                     name="description"
//                     content="Discover our collection of luxury timepieces"
//                 />
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <main>
//                 {/* Hero Section with Parallax */}
//                 <section className="relative h-screen flex items-center justify-center overflow-hidden">
//                     <div
//                         className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-300 will-change-transform"
//                         style={{
//                             transform: `translateY(${clamp(
//                                 scrollY * 0.1,
//                                 0,
//                                 400
//                             )}px)`,
//                             backgroundImage: `url("/pictures/w1.jpg")`,
//                             filter: 'brightness(0.6)',
//                         }}
//                     />
//                     <div className="container mx-auto px-4 z-10 text-center">
//                         <h1
//                             className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight transition-transform duration-300"
//                             style={{
//                                 transform: `translateY(${-clamp(
//                                     scrollY * 0.2,
//                                     0,
//                                     80
//                                 )}px)`,
//                                 opacity: Math.max(0, 1 - scrollY * 0.001),
//                                 willChange: 'transform, opacity',
//                             }}
//                         >
//                             Time Is{' '}
//                             <span className="text-amber-400">Luxury</span>
//                         </h1>
//                         <p
//                             className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto transition-transform duration-300"
//                             style={{
//                                 transform: `translateY(${-clamp(
//                                     scrollY * 0.1,
//                                     0,
//                                     40
//                                 )}px)`,
//                                 opacity: Math.max(0, 1 - scrollY * 0.001),
//                                 willChange: 'transform, opacity',
//                             }}
//                         >
//                             Craftsmanship that spans generations, designs that
//                             define eras.
//                         </p>
//                         <button
//                             className="bg-amber-400 text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-300 transition-colors"
//                             style={{
//                                 transform: `translateY(${-clamp(
//                                     scrollY * 0.05,
//                                     0,
//                                     20
//                                 )}px)`,
//                                 willChange: 'transform',
//                             }}
//                         >
//                             Discover Collection
//                         </button>
//                     </div>
//                     <div
//                         className="absolute bottom-10 left-0 right-0 text-center pointer-events-none"
//                         style={{
//                             opacity: Math.max(0, 1 - scrollY * 0.005),
//                             transition: 'opacity 0.2s',
//                         }}
//                     >
//                         <div className="animate-bounce">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6 mx-auto"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                 </section>
//                 {/* Featured Watch Section */}
//                 <section className="relative bg-gradient-to-b from-black to-gray-900 py-16 md:py-24">
//                     <FeaturedWatchSection scrollY={scrollY} />
//                 </section>
//                 {/* Categories */}
//                 <section className="bg-black py-16 md:py-24">
//                     <CategoriesSection />
//                 </section>
//                 {/* Our Collections */}
//                 <section className="relative bg-black py-16 md:py-24">
//                     <OurCollectionsSection scrollY={scrollY} />
//                 </section>
//                 {/* Features Section */}
//                 <section className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24">
//                     <FeaturesSection scrollY={scrollY} />
//                 </section>
//                 {/* Product Showcase */}
//                 <section className="bg-black py-16 md:py-24">
//                     <ProductSlider
//                         title="Featured"
//                         products={featuredProducts}
//                     />
//                 </section>
//                 <section className="bg-black">
//                     <TestimonialCards />
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default HomePage;
'use client';
import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    useMemo,
} from 'react';
import Head from 'next/head';
import { featuredProducts as rawFeaturedProducts } from './data';

// Preprocess featured products only once
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

// Helper: clamp value between min/max
const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(max, value));

// Optimized scroll hook with better performance
const useOptimizedScroll = () => {
    const [scrollY, setScrollY] = useState(0);
    const frameRef = useRef<number | undefined>(undefined);
    const lastScrollY = useRef(0);

    const updateScrollY = useCallback(() => {
        const currentScrollY = window.scrollY;

        // Only update if there's a meaningful change (reduces unnecessary renders)
        if (Math.abs(currentScrollY - lastScrollY.current) > 1) {
            setScrollY(currentScrollY);
            lastScrollY.current = currentScrollY;
        }

        frameRef.current = undefined;
    }, []);

    const handleScroll = useCallback(() => {
        if (frameRef.current === undefined) {
            frameRef.current = requestAnimationFrame(updateScrollY);
        }
    }, [updateScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [handleScroll]);

    return scrollY;
};

const HomePage: React.FC = () => {
    const scrollY = useOptimizedScroll();

    // Pre-calculate transform values to avoid recalculation on every render
    const transforms = useMemo(() => {
        const bgTransform = clamp(scrollY * 0.1, 0, 400);
        const titleTransform = -clamp(scrollY * 0.2, 0, 80);
        const subtitleTransform = -clamp(scrollY * 0.1, 0, 40);
        const buttonTransform = -clamp(scrollY * 0.05, 0, 20);
        const opacity = Math.max(0, 1 - scrollY * 0.001);
        const arrowOpacity = Math.max(0, 1 - scrollY * 0.005);

        return {
            bgTransform,
            titleTransform,
            subtitleTransform,
            buttonTransform,
            opacity,
            arrowOpacity,
        };
    }, [scrollY]);

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
                {/* Hero Section with Optimized Parallax */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    {/* Background with CSS Custom Properties for better performance */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-75 ease-out"
                        style={
                            {
                                '--bg-transform': `translateY(${transforms.bgTransform}px)`,
                                transform: 'var(--bg-transform)',
                                backgroundImage: `url("/pictures/w1.jpg")`,
                                filter: 'brightness(0.6)',
                            } as React.CSSProperties
                        }
                    />

                    <div className="container mx-auto px-4 z-10 text-center">
                        <h1
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight transition-all duration-75 ease-out"
                            style={
                                {
                                    '--title-transform': `translateY(${transforms.titleTransform}px)`,
                                    transform: 'var(--title-transform)',
                                    opacity: transforms.opacity,
                                } as React.CSSProperties
                            }
                        >
                            Time Is{' '}
                            <span className="text-amber-400">Luxury</span>
                        </h1>

                        <p
                            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto transition-all duration-75 ease-out"
                            style={
                                {
                                    '--subtitle-transform': `translateY(${transforms.subtitleTransform}px)`,
                                    transform: 'var(--subtitle-transform)',
                                    opacity: transforms.opacity,
                                } as React.CSSProperties
                            }
                        >
                            Craftsmanship that spans generations, designs that
                            define eras.
                        </p>

                        <button
                            className="bg-amber-400 text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-300 transition-colors duration-200"
                            style={
                                {
                                    '--button-transform': `translateY(${transforms.buttonTransform}px)`,
                                    transform: 'var(--button-transform)',
                                } as React.CSSProperties
                            }
                        >
                            Discover Collection
                        </button>
                    </div>

                    <div
                        className="absolute bottom-10 left-0 right-0 text-center pointer-events-none transition-opacity duration-150"
                        style={{ opacity: transforms.arrowOpacity }}
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