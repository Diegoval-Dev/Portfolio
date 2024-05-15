import { useState, useEffect } from 'react';
import { useSpring, animated, useTransition } from '@react-spring/web';
import Navbar from "./navbar";
import ProfileCard from "@components/header/profileCard";
import PresentationCard from '@components/header/presentationCard';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerSpring = useSpring({
        height: isScrolled ? '3.5rem' : '20rem',
        backgroundColor: isScrolled ? 'rgba(2, 6, 23, 0.5)' : 'rgb(2, 6, 23)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
        borderBottom: '1px solid rgb(51, 65, 85)',
        config: { duration: 300 },
    });

    const transitions = useTransition(!isScrolled, {
        from: { opacity: 0, transform: 'translateY(-20px)' },
        enter: { delay: 500, opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(-20px)' },
        config: { duration: 300 },
    });

    return (
        <animated.header style={headerSpring} className="w-full flex flex-col items-start sticky top-0 text-white transition-all duration-500 ease-in-out">
            <div className="w-full flex h-16 justify-between">
                <ProfileCard />
                <Navbar />
            </div>
            {transitions((style, item) =>
                item && (
                    <animated.div style={style} className="w-full flex justify-center">
                        <PresentationCard />
                    </animated.div>
                )
            )}
        </animated.header>
    );
}

export default Header;
