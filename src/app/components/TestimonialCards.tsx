import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
    name: string;
    text: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ name, text }) => (
    <div className="p-4 rounded-lg border border-yellow-500 w-64 flex-shrink-0 mx-3 my-2 bg-black text-yellow-300">
        <p className="mb-2 text-sm h-20 overflow-hidden">{text}</p>
        <p className="font-semibold text-sm text-yellow-100">{name}</p>
        <div className="flex text-yellow-500 mt-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
            ))}
        </div>
    </div>
);

interface TestimonialsRowProps {
    testimonials: Testimonial[];
    direction: 'left' | 'right';
}

const TestimonialsRow: React.FC<TestimonialsRowProps> = ({
    testimonials,
    direction,
}) => (
    <div className="flex mb-4 overflow-hidden">
        <div className={`flex animate-scroll-${direction}`}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => {
    const allTestimonials: Testimonial[] = [
        {
            name: 'John Mechanic',
            text: 'They fixed my Classic Chronograph’s winding issue in no time—amazing craftsmanship!',
        },
        {
            name: 'Jane Diver',
            text: 'Battery replaced on my dive watch swiftly and professionally.',
        },
        {
            name: 'Mike Aviator',
            text: 'My Aviator Professional strap was resized perfectly, fits like a glove.',
        },
        {
            name: 'Sarah Quartz',
            text: 'They cleaned the quartz movement on my Urban Minimalist flawlessly.',
        },
        {
            name: 'Alex Crown',
            text: 'Repaired the crown seal on my timepiece; now it’s fully waterproof again.',
        },
        {
            name: 'Emily Crystal',
            text: 'Replaced the scratched crystal on my watch—looks brand new!',
        },
        {
            name: 'Carlos Service',
            text: 'Complete service on my Heritage Collection piece was top-notch.',
        },
        {
            name: 'Aisha Dial',
            text: 'Dial refinishing on my Altitude Series watch exceeded expectations.',
        },
        {
            name: 'Tom Precision',
            text: 'Accuracy improved drastically after their regulation service.',
        },
        {
            name: 'Luna Waterproof',
            text: 'Waterproofing treatment on my Ocean Explorer was expertly done.',
        },
        {
            name: 'Hassan Polish',
            text: 'Case polishing brought back the shine of my Celestial watch.',
        },
        {
            name: 'Olivia Bezel',
            text: 'Aligned the bezel on my Metropolitan perfectly—no more slipping.',
        },
        {
            name: 'Liam Timing',
            text: 'Precision timing adjustment made my Athletic Elite more reliable.',
        },
        {
            name: 'Sofia Seal',
            text: 'Replaced all seals on my timepiece; feels like factory new.',
        },
        {
            name: 'Yuki Overhaul',
            text: 'Full movement overhaul was thorough and quick—highly recommend!',
        },
    ];

    const shuffled = allTestimonials.sort(() => 0.5 - Math.random());
    const testimonialGroups = [
        shuffled.slice(0, 5),
        shuffled.slice(5, 10),
        shuffled.slice(10, 15),
    ];

    return (
        <section className="py-16 px-4 overflow-hidden bg-black">
            <style jsx global>
                {`
                    @keyframes scrollLeft {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes scrollRight {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                    .animate-scroll-left {
                        animation: scrollLeft 40s linear infinite;
                    }
                    .animate-scroll-right {
                        animation: scrollRight 40s linear infinite;
                    }
                `}
            </style>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">
                    Customer{' '}
                    <span className="text-yellow-400">Testimonials</span>
                </h2>
                <TestimonialsRow
                    testimonials={testimonialGroups[0]}
                    direction="left"
                />
                <TestimonialsRow
                    testimonials={testimonialGroups[1]}
                    direction="right"
                />
                <TestimonialsRow
                    testimonials={testimonialGroups[2]}
                    direction="left"
                />
            </div>
        </section>
    );
};

export default TestimonialsSection;
