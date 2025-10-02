    import React, { useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    const HeroComponent = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section className="bg-gradient-to-r from-primary/90 to-secondary/80 text-white">
            
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    BUY, EAT & MAKE MONEY
                </h1>
                <p className="text-xl mb-8">
                    Dannie Agricultural Products Nigeria Limited brings you premium quality agricultural products while offering you an opportunity to earn through our MLM program.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                    to="/shop"
                    className="bg-secondary text-dark font-bold px-8 py-3 rounded-md hover:bg-opacity-90 transition"
                    >
                    Shop Now
                    </Link>
                    <Link
                    to="/mlm"
                    className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-opacity-90 transition"
                    >
                    Join MLM
                    </Link>
                </div>
                </div>
            </div>
        </section>
    );
    };

    export default HeroComponent;

