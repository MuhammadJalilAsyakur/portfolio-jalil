import React from 'react';
import { Mail, Github, Globe } from 'lucide-react';

export default function Contact() {
    const links = [
        {
            label: 'jalilasyakur@gmail.com',
            href: 'mailto:jalilasyakur@gmail.com',
            icon: Mail
        },
        {
            label: 'GitHub',
            href: 'https://github.com/MuhammadJalilAsyakur',
            icon: Github
        },
        {
            label: 'Google Dev',
            href: 'https://g.dev/jalilasyakur',
            icon: Globe
        }
    ];

    return (
        <section id="contact" className="mb-25">
            <div className="bg-dark-700 dark:bg-dark-800 dark:bg-opacity-50 border border-dark-200 dark:border-dark-600 rounded-3xl p-12 text-center">
                <h2 className="font-syne font-bold text-4xl mb-3">Let&apos;s work together</h2>
                <p className="text-dark-400 dark:text-dark-400 text-base mb-10 max-w-md mx-auto">
                    I&apos;m currently interning at BRIN and open to new opportunities. Feel free to reach out.
                </p>

                <div className="flex justify-center gap-3 flex-wrap">
                    {links.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-dark-100 dark:bg-dark-700 dark:bg-opacity-50 border border-dark-200 dark:border-dark-600 rounded-lg px-5 py-3 text-sm font-medium hover:border-purple-500 hover:border-opacity-50 transition group"
                            >
                                <Icon size={16} className="opacity-70 group-hover:opacity-100" />
                                {link.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
