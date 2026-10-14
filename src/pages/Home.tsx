import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ExperienceAndSkills from '../components/sections/ExperienceAndSkills';
import Skills from '../components/sections/Skills';
import Publications from '../components/sections/Publications';
import Projects from '../components/sections/Projects';
import AcademicsAndAchievements from '../components/sections/AcademicsAndAchievements';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <ExperienceAndSkills />
            <AcademicsAndAchievements />
            <Skills />
            <Publications />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;