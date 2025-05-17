import { collections } from "@/app/data";
export default function FeaturesSection() {
    return (
            <div className="container mx-auto px-4">
                                <h2
                                    className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16 text-center"
                                    style={{
                                        transform: `translateY(${Math.min(
                                            (scrollY - 1200) * 0.05,
                                            50
                                        )}px)`,
                                    }}
                                >
                                    Our Collections
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {collections.map((collection, index) => (
                                        <div
                                            key={index}
                                            className="group relative overflow-hidden rounded-lg h-80 sm:h-96"
                                            style={{
                                                transform: `translateY(${Math.min(
                                                    (scrollY - 1300) *
                                                        0.03 *
                                                        ((index % 3) + 1),
                                                    30 * ((index % 3) + 1)
                                                )}px)`,
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{
                                                    backgroundImage: `url("${collection.image}")`,
                                                }}
                                            />
                                            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                                                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                                                    {collection.name}
                                                </h3>
                                                <p className="text-gray-300 mb-4">
                                                    {collection.description}
                                                </p>
                                                <button className="w-max bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded hover:bg-white/20 transition-colors">
                                                    Explore
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
    );
}