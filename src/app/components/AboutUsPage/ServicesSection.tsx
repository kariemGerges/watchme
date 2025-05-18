import { Clock, Hammer, Battery, ShoppingBag } from 'lucide-react';

export default function OurStorySection() {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Our <span className="text-yellow-400">Services</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Service 1 */}
                <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-800 transition duration-300">
                    <div className="text-yellow-400 mb-4">
                        <ShoppingBag size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                        Premium Watches
                    </h3>
                    <p className="text-gray-300">
                        Explore our curated collection of luxury timepieces from
                        renowned brands and independent watchmakers.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-800 transition duration-300">
                    <div className="text-yellow-400 mb-4">
                        <Hammer size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                        Expert Repairs
                    </h3>
                    <p className="text-gray-300">
                        From simple battery replacements to complex movement
                        overhauls, our skilled technicians handle it all.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-800 transition duration-300">
                    <div className="text-yellow-400 mb-4">
                        <Clock size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                        Watch Accessories
                    </h3>
                    <p className="text-gray-300">
                        Complement your timepieces with our selection of premium
                        straps, winders, cases, and maintenance tools.
                    </p>
                </div>

                {/* Service 4 */}
                <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-800 transition duration-300">
                    <div className="text-yellow-400 mb-4">
                        <Battery size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                        Battery Service
                    </h3>
                    <p className="text-gray-300">
                        Quick and professional battery replacement for all types
                        of watches, with water-resistance testing.
                    </p>
                </div>
            </div>
        </div>
    );
}
