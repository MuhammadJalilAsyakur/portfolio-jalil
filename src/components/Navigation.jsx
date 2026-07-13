import React from 'react';

export default function Navigation() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: 'rgba(10, 14, 23, 0.72)', borderBottomColor: 'var(--border)' }}>
            <nav className="max-w-app mx-auto px-7 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', letterSpacing: '0.02em' }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }}></span>
                    M. JALIL ASYAKUR
                </div>

                <div className="hidden md:flex gap-8 text-sm" style={{ color: 'var(--text-dim)' }}>
                    <a href="#about" className="transition hover:text-white">About</a>
                    <a href="#stack" className="transition hover:text-white">Stack</a>
                    <a href="#experience" className="transition hover:text-white">Experience</a>
                    <a href="#projects" className="transition hover:text-white">Projects</a>
                    <a href="#education" className="transition hover:text-white">Education</a>
                </div>

                <a href="#contact" className="btn-ghost btn" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', padding: '8px 16px', border: '1px solid var(--accent-dim)', borderRadius: '8px', color: 'var(--accent)' }}>
                    Hubungi →
                </a>
            </nav>
        </header>
    );
}
