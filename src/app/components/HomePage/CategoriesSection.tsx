import { categories } from "@/app/data";
export default function FeaturesSection() {
    return (
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
    );
}
