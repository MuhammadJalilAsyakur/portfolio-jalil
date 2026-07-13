import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './index.css';

function App() {
    useEffect(() => {
        // Scroll reveal animation
        const revealEls = document.querySelectorAll('.reveal');
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(el => io.observe(el));
    }, []);

    return (
        <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
            <Navigation />
            <main style={{ paddingTop: '64px' }}>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>

            <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 0', textAlign: 'center', color: 'var(--text-faint)', fontFamily: 'JetBrains Mono', fontSize: '12px' }}>
                <p>© 2026 Muhammad Jalil Asyakur — dibuat dengan perhatian pada detail, seperti sebuah PR yang siap di-merge.</p>
            </footer>
        </div>
    );
}

export default App;
