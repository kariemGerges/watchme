// src/app/data.tsx
import { Product, Category, Feature, Collection } from './types';
import React from 'react';

export const featuredProducts: Product[] = [
    {
        id: 1,
        name: 'Classic Chronograph',
        price: '2,999.00',
        discountPrice: null,
        rating: 5,
        reviewCount: 128,
        image: '/window.svg',
        hoverImage: '/watch-1-hover.jpg',
        slug: 'classic-chronograph',
    },
    {
        id: 2,
        name: 'Ocean Explorer',
        price: '3,499.00',
        discountPrice: '2,999.00',
        rating: 4,
        reviewCount: 89,
        image: '/window.svg',
        hoverImage: '/watch-2-hover.jpg',
        slug: 'ocean-explorer',
    },
    {
        id: 3,
        name: 'Aviator Professional',
        price: '4,299.00',
        discountPrice: null,
        rating: 5,
        reviewCount: 246,
        image: '/window.svg',
        hoverImage: '/watch-3-hover.jpg',
        slug: 'aviator-professional',
    },
    {
        id: 4,
        name: 'Urban Minimalist',
        price: '1,999.00',
        discountPrice: '1,799.00',
        rating: 4,
        reviewCount: 156,
        image: '/window.svg',
        hoverImage: '/watch-4-hover.jpg',
        slug: 'urban-minimalist',
    },
];

export const categories: Category[] = [
    { name: "Men's Collection", image: '/window.svg' },
    { name: "Women's Collection", image: '/window.svg' },
    { name: 'Limited Editions', image: '/window.svg' },
];

export const collections: Collection[] = [
    {
        name: 'Altitude Series',
        description: 'For the modern explorer and adventurer',
        image: '/window.svg',
    },
    {
        name: 'Heritage Collection',
        description: 'Timeless classics with modern precision',
        image: '/window.svg',
    },
    {
        name: 'Oceanic Professional',
        description: 'Built for the depths, styled for the surface',
        image: '/window.svg',
    },
    {
        name: 'Metropolitan',
        description: 'Urban sophistication for everyday elegance',
        image: '/window.svg',
    },
    {
        name: 'Celestial',
        description: 'Inspired by the cosmos, crafted for earth',
        image: '/window.svg',
    },
    {
        name: 'Athletic Elite',
        description: 'Performance timepieces for the competitive spirit',
        image: '/window.svg',
    },
];

export const features: Feature[] = [
    {
        title: 'Swiss Movement',
        description:
            'Every CHRONO watch features a precision Swiss movement, the heart of exceptional timekeeping.',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
    {
        title: 'Lifetime Warranty',
        description:
            'We stand behind our craftsmanship with a comprehensive lifetime warranty for every timepiece.',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                />
            </svg>
        ),
    },
    {
        title: 'Master Craftsmanship',
        description:
            'Each watch is hand-assembled by our skilled watchmakers with decades of experience in horology.',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
            </svg>
        ),
    },
];
