import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ExperienceAndSkills from '../components/sections/ExperienceAndSkills';
import Projects from '../components/sections/Projects';
import AcademicsAndAchievements from '../components/sections/AcademicsAndAchievements';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <ExperienceAndSkills />
            <Projects />
            <AcademicsAndAchievements />
            <Contact />
        </>
    );
};

export default Home;