import React from 'react';

const projects = [
    {
        title: 'INTRA BRIN — ELIN Module',
        featured: true,
        badge: 'Featured — Internship Project',
        icon: '📱',
        subtitle: 'Flutter · GetX · Clean Architecture · REST API',
        description: 'A production-grade administrative service module embedded in BRIN\'s internal mobile platform. Handles vehicle loan requests, multi-step form flows with validation, real-time status tracking, and a multi-level approval workflow — all with role-based access control for civitas, service desk, reviewer, and examiner roles.',
        modules: [
            {
                name: 'Vehicle Loan System',
                desc: '3-step form with identity, detail, and document upload stages. Full validation with email regex, phone format, GetX state persistence.'
            },
            {
                name: 'Request Tracking',
                desc: 'Real-time status dashboard with filters, pull-to-refresh, skeleton loaders, and PDF download support.'
            },
            {
                name: 'Approval Workflow',
                desc: 'Dual-level review dashboards for Reviewer and Examiner roles. Approve/reject flows with modal confirmation.'
            },
            {
                name: 'Role-Based Access',
                desc: 'ElinRoleChecker permission system. Access-denied pages, role-specific views, data normalization to PostgreSQL enums.'
            }
        ]
    },
    {
        title: 'PanganKita',
        featured: false,
        description: 'Android app for Tangerang City Food Security Agency to digitize food product submission. UCD methodology, TAM-validated (BIU 4.50).',
        tags: ['Kotlin', 'Figma', 'UCD']
    },
    {
        title: 'Kitabantu Indonesia',
        featured: false,
        description: 'Web-based job platform connecting seekers and employers. Focused on responsive, modern UI components with smooth UX.',
        tags: ['React.js', 'Tailwind CSS']
    }
];

export default function Projects() {
    return (
        <section id="projects" className="mb-25">
            <div className="text-xs font-medium tracking-widest text-purple-500 uppercase mb-4">What I&apos;ve built</div>
            <h2 className="font-syne font-bold text-4xl mb-12">Projects</h2>

            <div className="space-y-6">
                {projects.map((project, idx) => (
                    <div key={idx}>
                        {project.featured ? (
                            <div className="bg-dark-700 dark:bg-dark-800 dark:bg-opacity-50 border border-dark-200 dark:border-dark-600 rounded-3xl p-9 relative overflow-hidden">
                                {/* Background glow effect */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative z-10">
                                    <span className="inline-block bg-emerald-400 bg-opacity-10 border border-emerald-400 border-opacity-20 rounded-full px-4 py-1.5 text-xs text-emerald-300 mb-6 font-medium">
                                        {project.badge}
                                    </span>

                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-500 bg-opacity-15 border border-purple-500 border-opacity-20 flex items-center justify-center text-2xl">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-syne font-bold text-2xl">{project.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-sm text-purple-500 font-medium mb-4">{project.subtitle}</p>
                                    <p className="text-base text-dark-400 dark:text-dark-400 leading-relaxed mb-6">{project.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.modules.map((module, i) => (
                                            <div key={i} className="bg-dark-100 dark:bg-dark-700 dark:bg-opacity-50 border border-dark-200 dark:border-dark-600 rounded-xl p-4">
                                                <p className="text-sm font-semibold mb-1">{module.name}</p>
                                                <p className="text-xs text-dark-400 dark:text-dark-400 leading-relaxed">{module.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-dark-100 dark:bg-dark-700 bg-opacity-20 dark:bg-opacity-40 border border-dark-200 dark:border-dark-600 rounded-2xl p-6 hover:border-purple-500 hover:border-opacity-30 transition">
                                <h3 className="font-syne font-bold text-lg mb-2">{project.title}</h3>
                                <p className="text-sm text-dark-400 dark:text-dark-400 leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-lg bg-purple-500 bg-opacity-15 border border-purple-500 border-opacity-30 text-purple-300 font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
