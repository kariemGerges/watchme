'use client';
import { useState } from 'react';
import {
    Clock,
    ChevronLeft,
    ChevronRight,
    ShoppingBag,
    Heart,
} from 'lucide-react';
import Image from 'next/image';
import { limitedEditionWatches } from '@/app/data';
import Link from 'next/link';

export default function LimitedEditionPage() {
    const [currentIndex, setCurrentIndex] = useState(0);


    const currentWatch = limitedEditionWatches[currentIndex];

    const nextWatch = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % limitedEditionWatches.length
        );
    };

    const prevWatch = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + limitedEditionWatches.length) %
                limitedEditionWatches.length
        );
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-gray-900 to-black border-b border-yellow-500 p-6">
                <div className="container mx-auto px-4 py-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3">
                        LIMITED EDITION{' '}
                        <span className="text-yellow-500">TIMEPIECES</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Exceptional craftsmanship limited to a select few. Our
                        exclusive watches represent the pinnacle of our heritage
                        since 1973.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow bg-black">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Product Image */}
                        <div className="lg:w-1/2 relative">
                            <div className="bg-gray-900 p-2 border-2 border-yellow-500 rounded-lg">
                                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                                    LIMITED EDITION
                                </div>
                                <Image
                                    height={480}
                                    width={480}
                                    src={currentWatch.image}
                                    alt={currentWatch.name}
                                    className="w-full h-auto rounded"
                                />
                                <div className="flex justify-center mt-4 space-x-2">
                                    <button
                                        onClick={prevWatch}
                                        className="bg-gray-800 hover:bg-yellow-500 hover:text-black p-2 rounded-full transition"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    {limitedEditionWatches.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`w-3 h-3 rounded-full ${
                                                idx === currentIndex
                                                    ? 'bg-yellow-500'
                                                    : 'bg-gray-700'
                                            }`}
                                        />
                                    ))}
                                    <button
                                        onClick={nextWatch}
                                        className="bg-gray-800 hover:bg-yellow-500 hover:text-black p-2 rounded-full transition"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="lg:w-1/2">
                            <div className="flex items-center mb-4">
                                <Clock className="text-yellow-500 mr-2" />
                                <span className="text-yellow-500 font-medium">
                                    Since 1973
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold mb-2">
                                {currentWatch.name}
                            </h2>
                            <p className="text-2xl text-yellow-500 font-bold mb-6">
                                {currentWatch.price}
                            </p>

                            <p className="text-gray-300 mb-6">
                                {currentWatch.description}
                            </p>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-3 flex items-center">
                                    <span className="w-6 h-1 bg-yellow-500 mr-2 inline-block"></span>
                                    Key Features
                                </h3>
                                <ul className="space-y-2">
                                    {currentWatch.features.map(
                                        (feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start"
                                            >
                                                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2 inline-block"></span>
                                                <span>{feature}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <button className="w-full bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition flex justify-center items-center">
                                    <ShoppingBag className="mr-2" size={18} />
                                    RESERVE NOW
                                </button>
                                <button className="w-full bg-transparent border border-yellow-500 text-yellow-500 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 hover:text-black transition flex justify-center items-center">
                                    <Heart className="mr-2" size={18} />
                                    ADD TO WISHLIST
                                </button>
                            </div>

                            <div className="mt-8 p-4 border border-yellow-500 rounded-lg">
                                <p className="text-sm text-gray-300">
                                    As with all our limited edition timepieces,
                                    each watch comes with a certificate of
                                    authenticity, luxury presentation box, and
                                    lifetime warranty. Contact our concierge for
                                    personalized engraving options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Heritage Section */}
            <section className="bg-gray-900 border-t border-yellow-500">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl font-bold mb-4">
                                OUR{' '}
                                <span className="text-yellow-500">
                                    HERITAGE
                                </span>
                            </h2>
                            <p className="text-gray-300 mb-4">
                                Since 1973, we have been crafting exceptional
                                timepieces that blend tradition with innovation.
                                Our limited editions represent the pinnacle of
                                our artistry and technical prowess.
                            </p>
                            <p className="text-gray-300">
                                Each watch is meticulously assembled by our
                                master watchmakers, using only the finest
                                materials and movements to ensure precision and
                                longevity.
                            </p>
                            <div className="mt-6">
                                <Link
                                    href="/about"
                                    className="border-b-2 border-yellow-500 text-yellow-500 font-medium inline-flex items-center">
                                    DISCOVER OUR STORY
                                    <ChevronRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <div className="grid grid-cols-3 gap-2">
                                <div className="aspect-square bg-black border border-yellow-500">
                                    <Image
                                        width={160}
                                        height={160}
                                        src="/api/placeholder/160/160"
                                        alt="Heritage"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-yellow-500"></div>
                                <div className="aspect-square bg-black border border-yellow-500">
                                    <Image
                                        width={160}
                                        height={160}
                                        src="/api/placeholder/160/160"
                                        alt="Craftsmanship"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-yellow-500"></div>
                                <div className="aspect-square bg-black border border-yellow-500">
                                    <Image
                                        width={160}
                                        height={160}
                                        src="/api/placeholder/160/160"
                                        alt="Workshop"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
