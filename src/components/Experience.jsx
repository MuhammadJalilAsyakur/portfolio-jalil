import React from 'react';

const experiences = [
    {
        role: 'Software Engineering Intern',
        company: 'Badan Riset dan Inovasi Nasional (BRIN)',
        period: '2025 – Present',
        description: 'Developing the ELIN (Electronic License & Administrative Service) module inside INTRA BRIN — an internal HR and administration mobile platform used across Indonesia\'s national research agency. Built multi-step vehicle loan forms, real-time request tracking, multi-level approval dashboards, and a role-based access control system from the ground up.',
        tags: ['Flutter', 'GetX', 'Dart', 'Clean Architecture', 'REST API', 'Mobile Dev'],
        accent: ['Flutter', 'GetX', 'Dart']
    },
    {
        role: 'Android Developer',
        company: 'Bangkit Academy Batch 2 2024 — Google, GoTo, Traveloka',
        period: 'Sept 2024 – Jan 2025',
        description: 'Completed an intensive industry-backed program. Built Android applications in Kotlin, implemented machine learning models into mobile apps, and collaborated in cross-functional product teams.',
        tags: ['Kotlin', 'Android Studio', 'ML on Mobile', 'Team Collaboration'],
        accent: ['Kotlin', 'Android Studio']
    },
    {
        role: 'Independent Study — Full Stack Web',
        company: 'Skilvul × Kampus Merdeka Batch 5',
        period: 'Aug 2023 – Dec 2023',
        description: 'Completed the MERN stack full-stack web development track and acquired modern UI/UX design skills using Figma.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Figma'],
        accent: ['React', 'Node.js']
    }
];

export default function Experience() {
    return (
        <section id="experience" className="mb-25">
            <div className="text-xs font-medium tracking-widest text-purple-500 uppercase mb-4">Work history</div>
            <h2 className="font-syne font-bold text-4xl mb-12">Experience</h2>

            <div className="space-y-4">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="bg-dark-100 dark:bg-dark-700 bg-opacity-20 dark:bg-opacity-40 border border-dark-200 dark:border-dark-600 rounded-2xl p-7 hover:border-purple-500 hover:border-opacity-30 transition"
                    >
                        <div className="flex justify-between items-start gap-3 mb-3 flex-col sm:flex-row">
                            <div>
                                <h3 className="font-syne font-bold text-lg mb-1">{exp.role}</h3>
                                <p className="text-sm text-purple-500 font-medium">{exp.company}</p>
                            </div>
                            <span className="text-xs text-dark-400 dark:text-dark-400 whitespace-nowrap">{exp.period}</span>
                        </div>

                        <p className="text-sm text-dark-400 dark:text-dark-400 leading-relaxed mb-4">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className={`text-xs px-3 py-1 rounded-lg font-medium ${exp.accent.includes(tag)
                                            ? 'bg-purple-500 bg-opacity-20 border border-purple-500 border-opacity-30 text-purple-300'
                                            : 'bg-dark-200 dark:bg-dark-600 dark:bg-opacity-50 border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-300'
                                        }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
