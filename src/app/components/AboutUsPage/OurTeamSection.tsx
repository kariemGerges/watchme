import Image from 'next/image';

export default function OurStorySection() {
    return (
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Meet Our{' '}
            <span className="text-yellow-400">Expert Team</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-64 relative">
                    <Image
                        src="/api/placeholder/400/300"
                        alt="Team member"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-6 border-t-4 border-yellow-400">
                    <h3 className="text-xl font-bold text-white">
                        James Wilson
                    </h3>
                    <p className="text-yellow-400 mb-3">
                        Master Watchmaker
                    </p>
                    <p className="text-gray-300">
                        With over 30 years of experience, James
                        specializes in vintage and complex
                        mechanical timepieces.
                    </p>
                </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-64 relative">
                    <Image
                        src="/api/placeholder/400/300"
                        alt="Team member"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-6 border-t-4 border-yellow-400">
                    <h3 className="text-xl font-bold text-white">
                        Sarah Chen
                    </h3>
                    <p className="text-yellow-400 mb-3">
                        Horological Expert
                    </p>
                    <p className="text-gray-300">
                        Sarah&apos;s knowledge of watch history and
                        market trends helps customers find their
                        perfect timepiece.
                    </p>
                </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-64 relative">
                    <Image
                        src="/api/placeholder/400/300"
                        alt="Team member"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-6 border-t-4 border-yellow-400">
                    <h3 className="text-xl font-bold text-white">
                        Michael Rodriguez
                    </h3>
                    <p className="text-yellow-400 mb-3">
                        Technical Specialist
                    </p>
                    <p className="text-gray-300">
                        Michael&apos;s precision and attention to
                        detail ensure that every repair meets our
                        exacting standards.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}