// pages/about.tsx
'use client';
import Head from 'next/head';
import React from 'react';
// components
import TestimonialsSection from '../components/TestimonialCards';
import OurStorySection from '../components/AboutUsPage/OurStorySection';
import ServicesSection from '../components/AboutUsPage/ServicesSection';
import TimeLineSection from '../components/AboutUsPage/TimeLineSection';
import OurTeamSection from '../components/AboutUsPage/OurTeamSection';
import HeroSection from '../components/AboutUsPage/HeroSection';

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>About Us | Precision Timepieces Since 1973</title>
                <meta
                    name="description"
                    content="With over 50 years of experience in the watch industry, we specialize in watch sales, repairs, and accessories. Learn about our legacy of precision since 1973."
                />
            </Head>

            {/* Hero Section */}
            <div className="bg-black text-white">
                <HeroSection />
            </div>

            {/* Our Story Section */}
            <section className="py-16 bg-gray-900 text-white">
                <OurStorySection />
            </section>

            {/* Services Section */}
            <section className="py-16 bg-black">
                <ServicesSection />
            </section>

            {/* Timeline Section */}
            <section className="py-16 bg-gray-900">
                <TimeLineSection />
            </section>

            {/* Team Section */}
            <section className="py-16 bg-black">
                <OurTeamSection />
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-900">
                <TestimonialsSection />
            </section>
        </>
    );
};

export default AboutPage;
