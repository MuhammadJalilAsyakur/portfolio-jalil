import React from 'react';

const skillCategories = [
    {
        name: 'Mobile',
        skills: ['Flutter', 'Kotlin', 'GetX', 'Dart', 'Android Studio']
    },
    {
        name: 'Frontend',
        skills: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS']
    },
    {
        name: 'Backend',
        skills: ['Node.js', 'Express', 'MongoDB', 'REST API']
    },
    {
        name: 'Design & Tools',
        skills: ['Figma', 'UX/UI Design', 'Git', 'Clean Architecture']
    }
];

export default function Skills() {
    return (
        <section id="skills" className="mb-25">
            <div className="text-xs font-medium tracking-widest text-purple-500 uppercase mb-4">Technical skills</div>
            <h2 className="font-syne font-bold text-4xl mb-12">Stack</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="bg-dark-100 dark:bg-dark-700 bg-opacity-20 dark:bg-opacity-40 border border-dark-200 dark:border-dark-600 rounded-2xl p-5 hover:border-purple-500 hover:border-opacity-30 transition"
                    >
                        <p className="text-xs font-medium tracking-widest text-purple-500 uppercase mb-4">{category.name}</p>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-dark-200 dark:bg-dark-600 dark:bg-opacity-50 text-dark-800 dark:text-dark-100 border border-dark-300 dark:border-dark-500"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
