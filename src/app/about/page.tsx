// pages/about.tsx
import { Clock, Hammer, Battery, ShoppingBag } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>About Us | Precision Timepieces Since 1973</title>
                <meta
                    name="description"
                    content="With over 50 years of experience in the watch industry, we specialize in watch sales, repairs, and accessories. Learn about our legacy of precision since 1973."
                />
            </Head>

            {/* Hero Section */}
            <div className="bg-black text-white">
                <div className="relative h-96 w-full">
                    <Image
                        src="/api/placeholder/1200/500"
                        alt="Watchmaker at work"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-40"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-yellow-400">Precision</span>{' '}
                            Timepieces
                        </h1>
                        <p className="text-xl md:text-2xl max-w-2xl">
                            Celebrating over 50 years of craftsmanship and
                            excellence in the watch industry
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <div className="relative h-80 w-full rounded-lg overflow-hidden border-4 border-yellow-400">
                                <Image
                                    src="/api/placeholder/600/400"
                                    alt="Our shop in 1973"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">
                                Our{' '}
                                <span className="text-yellow-400">Story</span>
                            </h2>
                            <p className="mb-4">
                                Founded in 1973, our journey began with a simple
                                passion: to provide exceptional timepieces and
                                unparalleled service to watch enthusiasts and
                                collectors alike.
                            </p>
                            <p className="mb-4">
                                What started as a small repair shop has evolved
                                into a respected name in the watch industry,
                                serving generations of customers with the same
                                dedication to craftsmanship and attention to
                                detail that defined us from the beginning.
                            </p>
                            <p>
                                Today, we continue our tradition of excellence,
                                combining time-honored techniques with modern
                                innovations to meet all your horological needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Our <span className="text-yellow-400">Services</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service 1 */}
                        <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-800 transition duration-300">
                            <div className="text-yellow-400 mb-4">
                                <ShoppingBag size={48} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                Premium Watches
                            </h3>
                            <p className="text-gray-300">
                                Explore our curated collection of luxury
                                timepieces from renowned brands and independent
                                watchmakers.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-800 transition duration-300">
                            <div className="text-yellow-400 mb-4">
                                <Hammer size={48} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                Expert Repairs
                            </h3>
                            <p className="text-gray-300">
                                From simple battery replacements to complex
                                movement overhauls, our skilled technicians
                                handle it all.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-800 transition duration-300">
                            <div className="text-yellow-400 mb-4">
                                <Clock size={48} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                Watch Accessories
                            </h3>
                            <p className="text-gray-300">
                                Complement your timepieces with our selection of
                                premium straps, winders, cases, and maintenance
                                tools.
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-800 transition duration-300">
                            <div className="text-yellow-400 mb-4">
                                <Battery size={48} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                Battery Service
                            </h3>
                            <p className="text-gray-300">
                                Quick and professional battery replacement for
                                all types of watches, with water-resistance
                                testing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Our <span className="text-yellow-400">Timeline</span>
                    </h2>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>

                        {/* Timeline items */}
                        <div className="space-y-12">
                            {/* 1973 */}
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold text-yellow-400">
                                        1973
                                    </h3>
                                    <p className="text-white">
                                        Founded as a small watch repair shop by
                                        master watchmaker Robert Pierce.
                                    </p>
                                </div>
                                <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                                    <div className="bg-black rounded-full h-3 w-3"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8"></div>
                            </div>

                            {/* 1985 */}
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-8"></div>
                                <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                                    <div className="bg-black rounded-full h-3 w-3"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold text-yellow-400">
                                        1985
                                    </h3>
                                    <p className="text-white">
                                        Expanded business to include retail
                                        sales of luxury watches and accessories.
                                    </p>
                                </div>
                            </div>

                            {/* 1997 */}
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold text-yellow-400">
                                        1997
                                    </h3>
                                    <p className="text-white">
                                        Relocated to our current flagship
                                        location and established service
                                        partnerships with major brands.
                                    </p>
                                </div>
                                <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                                    <div className="bg-black rounded-full h-3 w-3"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8"></div>
                            </div>

                            {/* 2010 */}
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-8"></div>
                                <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                                    <div className="bg-black rounded-full h-3 w-3"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold text-yellow-400">
                                        2010
                                    </h3>
                                    <p className="text-white">
                                        Launched our online store to reach watch
                                        enthusiasts worldwide.
                                    </p>
                                </div>
                            </div>

                            {/* Present */}
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold text-yellow-400">
                                        Present
                                    </h3>
                                    <p className="text-white">
                                        Continuing our legacy of exceptional
                                        service and expertise, serving watch
                                        lovers across generations.
                                    </p>
                                </div>
                                <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                                    <div className="bg-black rounded-full h-3 w-3"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Meet Our{' '}
                        <span className="text-yellow-400">Expert Team</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-gray-900 rounded-lg overflow-hidden">
                            <div className="h-64 relative">
                                <Image
                                    src="/api/placeholder/400/300"
                                    alt="Team member"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6 border-t-4 border-yellow-400">
                                <h3 className="text-xl font-bold text-white">
                                    James Wilson
                                </h3>
                                <p className="text-yellow-400 mb-3">
                                    Master Watchmaker
                                </p>
                                <p className="text-gray-300">
                                    With over 30 years of experience, James
                                    specializes in vintage and complex
                                    mechanical timepieces.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-gray-900 rounded-lg overflow-hidden">
                            <div className="h-64 relative">
                                <Image
                                    src="/api/placeholder/400/300"
                                    alt="Team member"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6 border-t-4 border-yellow-400">
                                <h3 className="text-xl font-bold text-white">
                                    Sarah Chen
                                </h3>
                                <p className="text-yellow-400 mb-3">
                                    Horological Expert
                                </p>
                                <p className="text-gray-300">
                                    Sarah's knowledge of watch history and
                                    market trends helps customers find their
                                    perfect timepiece.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-gray-900 rounded-lg overflow-hidden">
                            <div className="h-64 relative">
                                <Image
                                    src="/api/placeholder/400/300"
                                    alt="Team member"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6 border-t-4 border-yellow-400">
                                <h3 className="text-xl font-bold text-white">
                                    Michael Rodriguez
                                </h3>
                                <p className="text-yellow-400 mb-3">
                                    Technical Specialist
                                </p>
                                <p className="text-gray-300">
                                    Michael's precision and attention to detail
                                    ensure that every repair meets our exacting
                                    standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Customer{' '}
                        <span className="text-yellow-400">Testimonials</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-black p-6 rounded-lg border-b-4 border-yellow-400">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="inline-block mr-1"
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-300 italic mb-4">
                                "I've been a customer for over 15 years. Their
                                knowledge and service are unmatched. My vintage
                                Omega has never run better thanks to their
                                expert care."
                            </p>
                            <p className="text-white font-semibold">
                                — David T., Loyal Customer
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-black p-6 rounded-lg border-b-4 border-yellow-400">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="inline-block mr-1"
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-300 italic mb-4">
                                "As a watch collector, I'm extremely particular
                                about who handles my timepieces. Their team
                                consistently exceeds my expectations with their
                                expertise and attention to detail."
                            </p>
                            <p className="text-white font-semibold">
                                — Lisa M., Watch Enthusiast
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
