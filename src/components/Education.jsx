import React from 'react';

export default function Education() {
    return (
        <section id="education" style={{ background: 'var(--bg)' }}>
            <div className="wrap max-w-app mx-auto px-7">
                <div className="reveal" style={{ marginBottom: '56px', maxWidth: '640px' }}>
                    <div className="eyebrow">Pendidikan & Sertifikasi</div>
                    <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(26px, 3.4vw, 38px)' }}>
                        Fondasi akademis.
                    </h2>
                </div>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '22px' }}>
                    <div style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px' }}>
                        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '19px', marginBottom: '6px' }}>
                            Bachelor Degree in Informatics
                        </h3>
                        <div style={{ color: 'var(--accent-3)', fontFamily: 'JetBrains Mono', fontSize: '13px', marginBottom: '4px' }}>
                            Universitas Raharja, Tangerang
                        </div>
                        <div style={{ color: 'var(--text-faint)', fontFamily: 'JetBrains Mono', fontSize: '12px', marginBottom: '18px' }}>
                            Sept 2021 — Oct 2025
                        </div>
                        <div style={{ display: 'inline-block', fontFamily: 'JetBrains Mono', fontSize: '13px', background: 'rgba(62, 207, 142, 0.12)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '8px', marginBottom: '18px' }}>
                            GPA 3.78 / 4.00
                        </div>
                        <div style={{ fontSize: '13.5px', color: 'var(--text-dim)' }}>
                            Mata kuliah relevan: Web-based Application Development, Mobile Application Development, Software Analysis and Design, Database Systems.
                        </div>
                    </div>

                    <div style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px' }}>
                        <h4 style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                            Sertifikasi
                        </h4>
                        <div>
                            <div style={{ paddingTop: 0, paddingBottom: '14px', borderBottom: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '14px', marginBottom: '3px' }}>Mobile Developer — Kotlin</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-faint)', fontFamily: 'JetBrains Mono' }}>Bangkit Academy · Jan 2025</div>
                            </div>
                            <div style={{ paddingTop: '14px', paddingBottom: 0 }}>
                                <div style={{ fontSize: '14px', marginBottom: '3px' }}>Full-Stack Web Developer</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-faint)', fontFamily: 'JetBrains Mono' }}>Skilvul × Kampus Merdeka · Dec 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
