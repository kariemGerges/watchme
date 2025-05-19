export default function FeaturedWatchSection({ scrollY }: { scrollY: number }) {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div
                    className="w-full md:w-1/2 relative"
                    style={{
                        transform: `translateY(${Math.min(
                            (scrollY - 500) * 0.1,
                            100
                        )}px)`,
                    }}
                >
                    <div className="relative h-80 sm:h-96 md:h-[36rem] overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url("/pictures/bg1.jpeg")`,
                                transform: `scale(${
                                    1 + Math.min((scrollY - 500) * 0.0002, 0.2)
                                })`,
                            }}
                        />
                    </div>
                </div>
                <div
                    className="w-full md:w-1/2 mt-8 md:mt-0"
                    style={{
                        transform: `translateY(${Math.min(
                            (scrollY - 700) * 0.05,
                            50
                        )}px)`,
                    }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Chronos Series X
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Our flagship timepiece combines Swiss precision with
                        timeless design. Every component is meticulously crafted
                        and assembled by our master watchmakers.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
                            {[1, 2, 3].map((index) => (
                                <div
                                    key={index}
                                    className="h-24 w-24 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden"
                                >
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url("/window.svg")`,
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <span className="text-2xl font-bold">$5,299.00</span>
                        <button className="bg-amber-400 text-black px-6 py-3 rounded-full font-medium hover:bg-amber-300 transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}