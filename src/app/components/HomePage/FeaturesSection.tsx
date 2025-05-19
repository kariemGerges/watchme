import React from "react";
import { features } from "@/app/data";

export default function FeaturesSection({ scrollY }: { scrollY: number }) {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="text-center"
                        style={{
                            transform: `translateY(${Math.min(
                                (scrollY - 1800) * 0.02 * (index + 1),
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
                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
