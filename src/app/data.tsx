// src/app/data.tsx
import { Product, Category, Feature, Collection, WatchLimitedEdition, MainProduct } from './types';
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


export const limitedEditionWatches: WatchLimitedEdition[] = [
    {
        id: 1,
        name: 'Heritage 1973 Chronograph',
        price: '$4,995',
        description:
            'A celebration of our founding year, this timepiece captures the essence of classic watchmaking with modern precision.',
        features: [
            'Limited to 50 pieces',
            'Swiss automatic movement',
            'Sapphire crystal',
            '50m water resistance',
        ],
        image: '/api/placeholder/480/480',
    },
    {
        id: 2,
        name: 'Golden Jubilee Tourbillon',
        price: '$12,750',
        description:
            'Commemorating five decades of excellence, the Golden Jubilee features our most sophisticated movement.',
        features: [
            'Limited to 25 pieces',
            'In-house tourbillon',
            '18k gold accents',
            '100m water resistance',
        ],
        image: '/api/placeholder/480/480',
    },
    {
        id: 3,
        name: 'Black Diamond Edition',
        price: '$8,250',
        description:
            'Elegance meets durability in this striking timepiece featuring black diamond hour markers.',
        features: [
            'Limited to 35 pieces',
            'Black PVD coating',
            'Diamond markers',
            '200m water resistance',
        ],
        image: '/api/placeholder/480/480',
    },
];


export // Sample watch data
const watches: MainProduct[] = [
    {
        id: 1,
        name: 'Chronograph Elite',
        price: 299.99,
        rating: 4.7,
        image: '/api/placeholder/300/300',
        category: ['luxury', 'chronograph'],
        new: false,
        bestseller: true,
    },
    {
        id: 2,
        name: 'Diver Pro 200m',
        price: 349.99,
        rating: 4.8,
        image: '/api/placeholder/300/300',
        category: ['sport', 'waterproof'],
        new: true,
        bestseller: false,
    },
    {
        id: 3,
        name: 'Classic Gold',
        price: 499.99,
        rating: 4.9,
        image: '/api/placeholder/300/300',
        category: ['luxury', 'dress'],
        new: false,
        bestseller: true,
    },
    {
        id: 4,
        name: 'Sport Digital',
        price: 129.99,
        rating: 4.5,
        image: '/api/placeholder/300/300',
        category: ['sport', 'digital'],
        new: false,
        bestseller: false,
    },
    {
        id: 5,
        name: 'Minimalist Black',
        price: 199.99,
        rating: 4.6,
        image: '/api/placeholder/300/300',
        category: ['casual', 'dress'],
        new: true,
        bestseller: false,
    },
    {
        id: 6,
        name: 'Pilot Chronometer',
        price: 399.99,
        rating: 4.7,
        image: '/api/placeholder/300/300',
        category: ['luxury', 'sport'],
        new: false,
        bestseller: false,
    },
    {
        id: 7,
        name: 'Vintage 1973 Limited',
        price: 899.99,
        rating: 5.0,
        image: '/api/placeholder/300/300',
        category: ['luxury', 'limited'],
        new: false,
        bestseller: true,
    },
    {
        id: 8,
        name: 'Smart Connect',
        price: 249.99,
        rating: 4.4,
        image: '/api/placeholder/300/300',
        category: ['smart', 'digital'],
        new: true,
        bestseller: false,
    },
];
