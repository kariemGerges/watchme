import Image from 'next/image';
export default function OurStorySection() {
    return (
        <div className="relative h-96 w-full">
            <Image
                src="/api/placeholder/1200/500"
                alt="Watchmaker at work"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-yellow-400">Precision</span>{' '}
                    Timepieces
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl">
                    Celebrating over 50 years of craftsmanship and excellence in
                    the watch industry
                </p>
            </div>
        </div>
    );
}
