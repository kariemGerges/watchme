import { JSX } from "react";

export type Product = {
    id: number;
    name: string;
    price: string;
    discountPrice: string | null;
    rating: number;
    reviewCount: number;
    image: string;
    hoverImage: string;
    slug: string;
};

export type Category = {
    name: string;
    image: string;
};

export type Collection = {
    name: string;
    description: string;
    image: string;
};

export type Feature = {
    title: string;
    description: string;
    icon: JSX.Element;
};
