import { useState } from "react";
import Link from "next/link";

interface Product {
  slug: string;
  name: string;
  image: string;
  hoverImage?: string;
  price: number;
  discountPrice?: number;
  rating?: number;
  reviewCount?: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 image-shine"
          style={{
            backgroundImage: `url("${
              isHovered && product.hoverImage
                ? product.hoverImage
                : product.image
            }")`,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 z-20 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="flex gap-2 justify-center">
            <button
              className="bg-white text-black p-2 rounded-full hover:bg-amber-400 transition-colors"
              title="Add to cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            <button
              className="bg-white text-black p-2 rounded-full hover:bg-amber-400 transition-colors"
              title="Add to wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
              className="bg-white text-black p-2 rounded-full hover:bg-amber-400 transition-colors"
              title="Quick view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Link
        href={`/products/${product.slug}`}
        className="block group-hover:text-amber-400 transition-colors"
      >
        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
      </Link>

      <div className="flex items-center justify-between">
        <div className="text-gray-300">
          {product.discountPrice ? (
            <>
              <span className="text-amber-400 font-medium">
                ${product.discountPrice}
              </span>
              <span className="ml-2 line-through">${product.price}</span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </div>

        {product.rating && (
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    star <= product.rating! ? "text-amber-400" : "text-gray-600"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-gray-400">
              ({product.reviewCount})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
