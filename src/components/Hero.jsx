import React from 'react';

export default function Hero() {
    return (
        <section className="pt-32 pb-16 relative" style={{ paddingBottom: '100px' }}>
            <div className="wrap hero-grid max-w-app mx-auto px-7">
                <div>
                    <div className="eyebrow" style={{ color: 'var(--accent)', fontFamily: 'JetBrains Mono', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
                        Software Engineer — Flutter & Mobile
                    </div>

                    <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.08, marginBottom: '22px' }}>
                        Membangun sistem layanan yang <span style={{ color: 'var(--accent)' }}>rapi arsitekturnya</span>, dari UI sampai database.
                    </h1>

                    <p style={{ fontSize: '17px', color: 'var(--text-dim)', maxWidth: '520px', marginBottom: '32px', lineHeight: 1.6 }}>
                        Muhammad Jalil Asyakur — pengembang mobile & full-stack asal Tangerang. Membangun modul ELIN di platform INTRA BRIN, aplikasi internal yang dipakai seluruh pegawai Badan Riset dan Inovasi Nasional, dengan Clean Architecture, Flutter, dan REST API.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                        {['Flutter', 'Dart', 'Kotlin', 'GetX', 'Clean Architecture', 'REST API'].map((badge, idx) => (
                            <span key={idx} className="badge" style={{ fontSize: '12px', padding: '6px 12px', background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: '20px', color: 'var(--text-dim)' }}>
                                {badge}
                            </span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
                        <a href="#projects" className="btn btn-primary" style={{ background: 'var(--accent)', color: '#04140C', fontWeight: 600, fontFamily: 'JetBrains Mono', fontSize: '13px', padding: '13px 24px', borderRadius: '9px', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: '1px solid transparent', transition: 'all 0.2s' }}>
                            Lihat Proyek
                        </a>
                        <a href="#contact" className="btn btn-ghost" style={{ border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'JetBrains Mono', fontSize: '13px', padding: '13px 24px', borderRadius: '9px', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
                            Hubungi Saya
                        </a>
                    </div>

                    <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                        <div>
                            <b style={{ fontFamily: 'Space Grotesk', fontSize: '24px', display: 'block', color: 'var(--text)' }}>8 bln</b>
                            <span style={{ fontSize: '12px', color: 'var(--text-faint)', fontFamily: 'JetBrains Mono' }}>MAGANG DI BRIN</span>
                        </div>
                        <div>
                            <b style={{ fontFamily: 'Space Grotesk', fontSize: '24px', display: 'block', color: 'var(--text)' }}>3.78</b>
                            <span style={{ fontSize: '12px', color: 'var(--text-faint)', fontFamily: 'JetBrains Mono' }}>GPA / 4.00</span>
                        </div>
                        <div>
                            <b style={{ fontFamily: 'Space Grotesk', fontSize: '24px', display: 'block', color: 'var(--text)' }}>4 role</b>
                            <span style={{ fontSize: '12px', color: 'var(--text-faint)', fontFamily: 'JetBrains Mono' }}>AKSES DIKELOLA</span>
                        </div>
                    </div>
                </div>

                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', top: '6%', left: '-8%', fontFamily: 'JetBrains Mono', fontSize: '11px', background: 'var(--bg-elev)', border: '1px solid var(--border)', padding: '8px 12px', borderRadius: '9px', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 12px 30px -10px rgba(0,0,0,0.5)', animation: 'floaty 7s ease-in-out infinite' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '2px', background: 'var(--accent)' }}></span>
                        Role-based access
                    </div>

                    <div style={{ width: '260px', height: '530px', borderRadius: '36px', background: 'var(--bg-elev)', border: '1px solid var(--border)', position: 'relative', padding: '14px', boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02)', animation: 'floaty 6s ease-in-out infinite' }}>
                        <div style={{ width: '70px', height: '6px', background: 'var(--bg-elev-2)', borderRadius: '4px', margin: '0 auto 14px' }}></div>
                        <div style={{ background: 'var(--bg)', borderRadius: '22px', height: '100%', padding: '18px 14px', border: '1px solid var(--border)' }}>
                            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'var(--text-faint)', marginBottom: '14px', display: 'flex', justifyContent: 'space-between' }}>
                                <span>INTRA BRIN</span>
                                <span>ELIN</span>
                            </div>
                            <div style={{ fontFamily: 'Space Grotesk', fontSize: '15px', marginBottom: '16px' }}>Permintaan Kendaraan</div>
                            {[
                                { name: 'Budi — Civitas', status: 'Menunggu', color: 'var(--accent-2)' },
                                { name: 'Sari — Reviewer', status: 'Ditinjau', color: 'var(--accent-3)' },
                                { name: 'Andi — Examiner', status: 'Disetujui', color: 'var(--accent)' },
                                { name: 'Dedi — Service Desk', status: 'Disetujui', color: 'var(--accent)' }
                            ].map((role, idx) => (
                                <div key={idx} style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: '10px', padding: '12px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '12px', color: 'var(--text)' }}>{role.name}</span>
                                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', padding: '4px 9px', borderRadius: '20px', background: role.color === 'var(--accent)' ? 'rgba(62, 207, 142, 0.14)' : role.color === 'var(--accent-2)' ? 'rgba(245, 166, 35, 0.14)' : 'rgba(91, 141, 239, 0.14)', color: role.color }}>
                                        {role.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '10%', right: '-10%', fontFamily: 'JetBrains Mono', fontSize: '11px', background: 'var(--bg-elev)', border: '1px solid var(--border)', padding: '8px 12px', borderRadius: '9px', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 12px 30px -10px rgba(0,0,0,0.5)', animation: 'floaty 8s ease-in-out infinite reverse' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '2px', background: 'var(--accent-2)' }}></span>
                        PostgreSQL enum-safe
                    </div>
                </div>
            </div>
        </section>
    );
}
