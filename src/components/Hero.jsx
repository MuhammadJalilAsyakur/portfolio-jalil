import React from 'react';

export default function Hero() {
    return (
        <section className="py-12 pb-24 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-25 rounded-full px-4 py-1.5 mb-7 text-xs text-purple-300 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Open to opportunities
            </div>

            {/* Heading */}
            <h1 className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tighter mb-6">
                Muhammad<br />
                <span className="text-purple-500">Jalil</span>{' '}
                <span className="bg-gradient-to-r from-red-400 to-emerald-400 bg-clip-text text-transparent">
                    Asyakur
                </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base text-dark-400 dark:text-dark-400 leading-relaxed mb-8 font-light">
                IT student &amp; software engineering intern building mobile and web applications. Currently crafting internal tools for Indonesia&apos;s national research agency.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-16 flex-wrap">
                <a
                    href="mailto:jalilasyakur@gmail.com"
                    className="bg-purple-500 text-white px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
                >
                    Get in touch
                </a>
                <a
                    href="https://github.com/MuhammadJalilAsyakur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent text-dark-900 dark:text-dark-50 px-7 py-3 rounded-lg text-sm border border-dark-200 dark:border-dark-700 hover:bg-dark-100 dark:hover:bg-dark-700 transition"
                >
                    View GitHub
                </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 flex-wrap pt-10 border-t border-dark-200 dark:border-dark-700">
                <div>
                    <div className="font-syne font-bold text-3xl text-dark-900 dark:text-dark-50">3.78</div>
                    <div className="text-xs text-dark-400 dark:text-dark-400 mt-1">GPA at Universitas Raharja</div>
                </div>
                <div>
                    <div className="font-syne font-bold text-3xl text-dark-900 dark:text-dark-50">3+</div>
                    <div className="text-xs text-dark-400 dark:text-dark-400 mt-1">Production projects shipped</div>
                </div>
                <div>
                    <div className="font-syne font-bold text-3xl text-dark-900 dark:text-dark-50">2</div>
                    <div className="text-xs text-dark-400 dark:text-dark-400 mt-1">Professional certifications</div>
                </div>
            </div>
        </section>
    );
}
