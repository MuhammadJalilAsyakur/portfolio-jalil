import React from 'react';



const projects = [
    {
        title: 'INTRA BRIN — Modul ELIN',
        tag: 'Production',
        description: 'Modul layanan administrasi lengkap di platform mobile nasional BRIN — mobile UI Flutter + backend REST API.',
        features: [
            'End-to-end: peminjaman kendaraan, pelacakan, dan persetujuan berjenjang.',
            'Clean Architecture (Domain / Data / Presentation) dengan GetX.',
            'RBAC untuk 4 peran + normalisasi data ke enum PostgreSQL.',
        ],
        stack: ['Flutter', 'Dart', 'GetX', 'PostgreSQL']
    },
    {
        title: 'PanganKita',
        tag: 'Skripsi',
        description: 'Prototipe Android untuk digitalisasi proses pengajuan produk pangan di Dinas Ketahanan Pangan Kota Tangerang.',
        features: [
            'Menerapkan metodologi User-Centered Design dari riset hingga delivery.',
            'Validasi TAM: PEOU 4.44, PU 4.34, Trust 4.42, BIU 4.50.',
        ],
        stack: ['Kotlin', 'Figma', 'Android Studio']
    },
    {
        title: 'KitaBantu Indonesia',
        tag: 'Independent',
        description: 'Platform web yang menghubungkan pencari kerja dan pemberi kerja secara efisien.',
        features: [
            'Menerjemahkan desain high-fidelity Figma jadi UI pixel-perfect berbasis komponen.',
            'Fokus pada UI responsif dan modern.',
        ],
        stack: ['React.js', 'Tailwind CSS', 'JavaScript']
    }
];

export default function Projects() {
    return (
        <section id="projects" style={{ background: 'var(--bg)' }}>
            <div className="wrap max-w-app mx-auto px-7">
                <div className="reveal" style={{ marginBottom: '56px', maxWidth: '640px' }}>
                    <div className="eyebrow">Proyek Pilihan</div>
                    <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(26px, 3.4vw, 38px)' }}>
                        Yang sudah dibangun dan dikirim.
                    </h2>
                </div>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
                    {projects.map((proj, idx) => (
                        <div key={idx} style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px', transition: 'transform 0.25s, border-color 0.25s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                                    {proj.title}
                                </h3>
                                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', padding: '4px 10px', borderRadius: '20px', background: 'rgba(62, 207, 142, 0.1)', color: 'var(--accent)', whiteSpace: 'nowrap' }}>
                                    {proj.tag}
                                </span>
                            </div>

                            <p style={{ color: 'var(--text-dim)', fontSize: '13.5px', lineHeight: 1.5 }}>
                                {proj.description}
                            </p>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                                {proj.features.map((feature, i) => (
                                    <li key={i} style={{ color: 'var(--text-dim)', fontSize: '13px', paddingLeft: '16px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-3)' }}>•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '6px' }}>
                                {proj.stack.map((tech, i) => (
                                    <span key={i} style={{ fontFamily: 'JetBrains Mono', fontSize: '10.5px', color: 'var(--text-faint)', background: 'var(--bg-elev-2)', border: '1px solid var(--border)', padding: '4px 9px', borderRadius: '6px' }}>
                                        {tech}
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