import React from 'react';

const layers = [
    {
        num: '01 / UI',
        title: 'Presentation Layer',
        color: 'var(--accent-3)',
        skills: ['Flutter', 'Dart', 'GetX', 'Kotlin', 'Android Studio', 'React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Figma']
    },
    {
        num: '02 / LOGIC',
        title: 'Domain Layer',
        color: 'var(--accent)',
        skills: ['Clean Architecture', 'Role-Based Access Control', 'State Management', 'Business Logic Design', 'UCD / TAM Research', 'TensorFlow Lite']
    },
    {
        num: '03 / DATA',
        title: 'Data Layer',
        color: 'var(--accent-2)',
        skills: ['REST API Design', 'PostgreSQL', 'MongoDB', 'Node.js', 'Express.js', 'Dio HTTP Client', 'Postman', 'Git']
    }
];

export default function Skills() {
    return (
        <section id="stack" style={{ background: 'var(--bg)' }}>
            <div className="wrap max-w-app mx-auto px-7">
                <div className="reveal" style={{ marginBottom: '56px', maxWidth: '640px' }}>
                    <div className="eyebrow">Keahlian</div>
                    <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(26px, 3.4vw, 38px)' }}>
                        Skill, disusun seperti arsitektur yang saya pakai sehari-hari.
                    </h2>
                    <p style={{ color: 'var(--text-dim)', marginTop: '14px', fontSize: '15px', lineHeight: 1.6 }}>
                        Bukan daftar acak — tiga lapisan ini persis pola yang dipakai di modul ELIN: Presentation menangani apa yang dilihat pengguna, Domain menangani aturan bisnis, Data menjaga semuanya tetap konsisten di database.
                    </p>
                </div>

                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                    {layers.map((layer, idx) => (
                        <div key={idx} style={{
                            padding: '32px',
                            display: 'grid',
                            gridTemplateColumns: '220px 1fr',
                            gap: '24px',
                            borderBottom: idx < layers.length - 1 ? '1px solid var(--border)' : 'none',
                            background: idx === 0 ? 'linear-gradient(90deg, rgba(91, 141, 239, 0.06), transparent)' : idx === 1 ? 'linear-gradient(90deg, rgba(62, 207, 142, 0.06), transparent)' : 'linear-gradient(90deg, rgba(245, 166, 35, 0.06), transparent)'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: 'var(--text-faint)' }}>
                                    {layer.num}
                                </div>
                                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '19px', color: layer.color }}>
                                    {layer.title}
                                </h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignContent: 'flex-start' }}>
                                {layer.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="chip" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', padding: '7px 13px', borderRadius: '8px', background: 'var(--bg-elev)', border: '1px solid var(--border)', color: 'var(--text-dim)' }}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
