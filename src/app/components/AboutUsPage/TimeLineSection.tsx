export default function OurStorySection() {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Our <span className="text-yellow-400">Timeline</span>
            </h2>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                    {/* 1973 */}
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-yellow-400">
                                1973
                            </h3>
                            <p className="text-white">
                                Founded as a small watch repair shop by master
                                watchmaker Robert Pierce.
                            </p>
                        </div>
                        <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                            <div className="bg-black rounded-full h-3 w-3"></div>
                        </div>
                        <div className="md:w-1/2 md:pl-8"></div>
                    </div>

                    {/* 1985 */}
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8"></div>
                        <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                            <div className="bg-black rounded-full h-3 w-3"></div>
                        </div>
                        <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-yellow-400">
                                1985
                            </h3>
                            <p className="text-white">
                                Expanded business to include retail sales of
                                luxury watches and accessories.
                            </p>
                        </div>
                    </div>

                    {/* 1997 */}
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-yellow-400">
                                1997
                            </h3>
                            <p className="text-white">
                                Relocated to our current flagship location and
                                established service partnerships with major
                                brands.
                            </p>
                        </div>
                        <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                            <div className="bg-black rounded-full h-3 w-3"></div>
                        </div>
                        <div className="md:w-1/2 md:pl-8"></div>
                    </div>

                    {/* 2010 */}
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8"></div>
                        <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                            <div className="bg-black rounded-full h-3 w-3"></div>
                        </div>
                        <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-yellow-400">
                                2010
                            </h3>
                            <p className="text-white">
                                Launched our online store to reach watch
                                enthusiasts worldwide.
                            </p>
                        </div>
                    </div>

                    {/* Present */}
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-yellow-400">
                                Present
                            </h3>
                            <p className="text-white">
                                Continuing our legacy of exceptional service and
                                expertise, serving watch lovers across
                                generations.
                            </p>
                        </div>
                        <div className="bg-yellow-400 rounded-full h-6 w-6 flex items-center justify-center z-10">
                            <div className="bg-black rounded-full h-3 w-3"></div>
                        </div>
                        <div className="md:w-1/2 md:pl-8"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
