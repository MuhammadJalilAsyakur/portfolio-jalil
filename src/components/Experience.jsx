import React from 'react';

const experiences = [
    {
        role: 'Software Engineer Intern',
        company: 'Badan Riset dan Inovasi Nasional (BRIN)',
        location: 'Jakarta Pusat',
        period: 'Nov 2025 — Jun 2026',
        description: [
            'Membangun modul ELIN (Electronic License & Administrative Service) di dalam INTRA BRIN, platform mobile Flutter produksi untuk seluruh pegawai BRIN.',
            'Merancang dan mengintegrasikan endpoint REST API untuk layanan e-Layanan ELIN, mencakup business logic, validasi data, hingga integrasi ke klien mobile.',
            'Membangun form pengajuan peminjaman kendaraan 3 tahap (identitas → detail → dokumen) dengan validasi real-time.',
            'Membuat dashboard pelacakan real-time dengan multi-filter, pull-to-refresh, skeleton loading, dan ekspor PDF.',
            'Mengembangkan alur persetujuan dua tingkat untuk peran Reviewer dan Examiner, lengkap dengan badge status.',
            'Menerapkan role-based access control (ElinRoleChecker) untuk 4 peran pengguna: Civitas, Service Desk, Reviewer, Examiner.'
        ],
        tags: ['Flutter 3.41', 'GetX', 'Dio', 'PostgreSQL', 'Clean Architecture']
    },
    {
        role: 'Android Developer — Learning Path',
        company: 'Bangkit Academy Batch 2',
        location: 'Google · GoTo · Traveloka',
        period: 'Sep 2024 — Jan 2025',
        description: [
            'Mengikuti program pengembangan Android intensif berbasis industri, salah satu jalur belajar teknologi paling kompetitif di Indonesia.',
            'Membangun aplikasi Android dengan Kotlin dan menerapkan model machine learning on-device dengan TensorFlow Lite.',
            'Berkolaborasi dalam tim produk lintas fungsi selama lebih dari 4 bulan sprint terstruktur.'
        ],
        tags: ['Kotlin', 'TensorFlow Lite', 'Figma']
    },
    {
        role: 'Full Stack Web Developer — Independent Study',
        company: 'Skilvul',
        location: 'Kampus Merdeka Batch 5',
        period: 'Aug 2023 — Dec 2023',
        description: [
            'Menyelesaikan kurikulum pengembangan web MERN stack secara menyeluruh, membangun aplikasi dari nol.',
            'Menguasai prinsip UI/UX dengan Figma dan menerapkannya di proyek nyata.'
        ],
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
    }
];

export default function Experience() {
    return (
        <section id="experience" style={{ background: 'var(--bg)' }}>
            <div className="wrap max-w-app mx-auto px-7">
                <div className="reveal" style={{ marginBottom: '56px', maxWidth: '640px' }}>
                    <div className="eyebrow">Pengalaman</div>
                    <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(26px, 3.4vw, 38px)' }}>
                        Jejak karier sejauh ini.
                    </h2>
                </div>

                <div className="reveal" style={{ position: 'relative', paddingLeft: '32px' }}>
                    <div style={{ position: 'absolute', left: '6px', top: '6px', bottom: '6px', width: '1px', background: 'var(--border)' }}></div>

                    {experiences.map((exp, idx) => (
                        <div key={idx} style={{ position: 'relative', paddingBottom: '52px' }}>
                            <div style={{ position: 'absolute', left: '-32px', top: '4px', width: '13px', height: '13px', borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--accent)' }}></div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px', alignItems: 'baseline' }}>
                                <span style={{ fontFamily: 'Space Grotesk', fontSize: '19px' }}>
                                    {exp.role}
                                </span>
                                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: 'var(--text-faint)' }}>
                                    {exp.period}
                                </span>
                            </div>

                            <div style={{ color: 'var(--accent-3)', fontSize: '13px', marginBottom: '14px', fontFamily: 'JetBrains Mono' }}>
                                {exp.company} · {exp.location}
                            </div>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '16px' }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ color: 'var(--text-dim)', fontSize: '14.5px', paddingLeft: '18px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '13px' }}>→</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                                {exp.tags.map((tag, i) => (
                                    <span key={i} className="chip" style={{ fontFamily: 'JetBrains Mono', fontSize: '10.5px', color: 'var(--text-faint)', background: 'var(--bg-elev-2)', border: '1px solid var(--border)', padding: '4px 9px', borderRadius: '6px' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
