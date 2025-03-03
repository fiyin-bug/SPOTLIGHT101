import React, { useEffect, useRef } from 'react';
import { Eye, Target } from 'lucide-react';

const About = () => {
    const sections = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        if (entry.target.classList.contains('typing-text')) {
                            entry.target.classList.add('typing-active');
                        }
                    } else {
                        entry.target.classList.remove('opacity-100', 'translate-y-0', 'typing-active');
                    }
                });
            },
            { threshold: 0.5 }
        );

        // ❗️ Filter out null elements to avoid errors
        const validSections = sections.current.filter((el) => el !== null);
        
        validSections.forEach((section) => observer.observe(section));

        return () => {
            validSections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    // ✅ Ensure refs are stored correctly
    const addToRefs = (el) => {
        if (el && !sections.current.includes(el)) {
            sections.current.push(el);
        }
    };

    return (
        <section className="min-h-screen bg-black text-white px-6 sm:px-12 lg:px-24 py-20">
            {/* About Spotlight Section */}
            <div className="max-w-4xl mx-auto text-center">
                <h4 
                    ref={addToRefs} 
                    className="text-2xl sm:text-3xl font-bold text-[#c5ac5a] mb-4 opacity-0 translate-y-12 transition-all duration-1000 ease-in-out"
                >
                    About Spotlight
                </h4>
                <p 
                    ref={addToRefs} 
                    className="text-lg leading-relaxed opacity-0 translate-y-12 transition-all duration-1000 ease-in-out"
                >
                    Spotlight Concert and Awards was founded 4 years ago with the vision of giving upcoming artists a spot in the limelight to prove themselves. Winners receive cash prizes worth millions of naira and a one-year record deal. Beyond the competition, attendees enjoy performances from top artists like the late Mohbad, Asake, Seyi Vibez, and more. Spotlight returns bigger and better in April 2025—don’t miss it!
                </p>
            </div>
         
            {/* Mission and Vision Section */}
            <div className="mt-66 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Vision */}
                <div>
                    <h2 className="text-2xl font-bold text-[#c5ac5a] mb-4 flex items-center gap-2">
                        Our Vision <Eye className="w-6 h-6" />
                    </h2>
                    <p 
                        ref={addToRefs} 
                        className="typing-text text-lg leading-relaxed border-r-2 border-[#c5ac5a] opacity-0 translate-y-12 transition-all duration-1000 ease-in-out"
                    >
                        We envision a future where artistic expression is celebrated and nurtured through an immersive platform. Spotlight aims to be a globally recognized event fostering creativity and excellence, providing talents a space to collaborate and innovate.
                    </p>
                </div>

                {/* Mission */}
                <div>
                    <h2 className="text-2xl font-bold text-[#c5ac5a] mb-4 flex items-center gap-2">
                        Our Mission <Target className="w-6 h-6" />
                    </h2>
                    <p 
                        ref={addToRefs} 
                        className="typing-text text-lg leading-relaxed border-r-2 border-[#c5ac5a] opacity-0 translate-y-12 transition-all duration-1000 ease-in-out"
                    >
                        Our mission is to create an inclusive platform that inspires Nigerian youths through culture and entertainment. By showcasing emerging talents, we foster growth, spark conversations, and empower artists to thrive.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
