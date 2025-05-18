import Image from 'next/image';
export default function OurStorySection() {
    return (
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
    );
}