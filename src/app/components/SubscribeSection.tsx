const SubscribeSection: React.FC = () => {
    return (
        <section className="bg-amber-400 text-black py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Join Our Exclusive Club
                </h2>
                <p className="max-w-2xl mx-auto mb-8">
                    Be the first to receive updates on new releases, exclusive
                    offers, and invitations to private events.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 bg-white px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
