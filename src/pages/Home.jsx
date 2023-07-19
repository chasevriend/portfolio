import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import Stack from '../components/Stack'

const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Stack />
            <Projects />

            <Footer />
        </>
    )
}

export default Home