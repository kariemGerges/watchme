import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    bgImage?: string;
    speed?: number;
    overlay?: boolean;
    overlayOpacity?: number;
}

const ParallaxSection = ({
    children,
    className = '',
    bgImage,
    speed = 0.1,
    overlay = true,
    overlayOpacity = 0.3,
}: ParallaxSectionProps) => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [elementTop, setElementTop] = useState(0);
    const [elementVisible, setElementVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!sectionRef.current) return;

        const element = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setElementVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        // Get element position
        const rect = element.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);

        return () => {
            observer.unobserve(element);
        };
    }, [sectionRef]);

    // Calculate parallax offset based on scroll position relative to element
    const getParallaxOffset = () => {
        if (!elementVisible) return 0;
        const relativeScroll = scrollY - elementTop + window.innerHeight;
        return relativeScroll * speed;
    };

    return (
        <section
            ref={sectionRef}
            className={`relative overflow-hidden ${className}`}
        >
            {bgImage && (
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        transform: `translateY(${getParallaxOffset()}px)`,
                        backgroundImage: `url("${bgImage}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            )}

            {overlay && bgImage && (
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                    }}
                />
            )}

            <div className="relative z-10">{children}</div>
        </section>
    );
};

export default ParallaxSection;
