import React from 'react';

export default function About() {
    const facts = [
        { label: 'LOKASI', value: 'Kabupaten Tangerang, Banten' },
        { label: 'EMAIL', value: 'jalilasyakur@gmail.com' },
        { label: 'TELEPON', value: '+62 882-9791-7372' },
        { label: 'PENDIDIKAN', value: 'Informatika, Univ. Raharja' },
        { label: 'BAHASA', value: 'Indonesia (native), English (intermediate)' }
    ];

    return (
        <section id="about" style={{ background: 'var(--bg)' }}>
            <div className="wrap max-w-app mx-auto px-7">
                <div className="reveal" style={{ marginBottom: '56px', maxWidth: '640px' }}>
                    <div className="eyebrow">Tentang</div>
                    <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(26px, 3.4vw, 38px)' }}>
                        Dari kampus ke sistem produksi negara.
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '60px' }}>
                    <div className="reveal">
                        <p style={{ color: 'var(--text-dim)', marginBottom: '16px', fontSize: '15.5px', lineHeight: 1.6 }}>
                            Saat ini kandidat Sarjana Informatika di Universitas Raharja dengan fokus pada Clean Architecture, state management, dan sistem berbasis peran (role-based system). Ketertarikan utama ada di titik temu antara mobile engineering dan desain API — bagaimana satu form pengajuan bisa berjalan mulus dari layar HP sampai baris di PostgreSQL.
                        </p>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '16px', fontSize: '15.5px', lineHeight: 1.6 }}>
                            Selama magang di BRIN, saya membangun modul ELIN dari nol: form pengajuan tiga tahap dengan validasi real-time, dashboard pelacakan dengan multi-filter dan ekspor PDF, serta alur persetujuan dua tingkat untuk Reviewer dan Examiner — lengkap dengan kontrol akses untuk empat jenis peran pengguna.
                        </p>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '16px', fontSize: '15.5px', lineHeight: 1.6 }}>
                            Di luar mobile, saya juga nyaman di full-stack web (MERN, React, Next.js) berkat program independen di Skilvul, dan pernah masuk jalur Android Developer di Bangkit Academy — program kolaborasi Google, GoTo, dan Traveloka.
                        </p>
                    </div>

                    <div className="reveal" style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px' }}>
                        {facts.map((fact, idx) => (
                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)', fontSize: '14px' }}>
                                <span style={{ color: 'var(--text-faint)', fontFamily: 'JetBrains Mono', fontSize: '12px' }}>
                                    {fact.label}
                                </span>
                                <span style={{ color: 'var(--text)' }}>
                                    {fact.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
