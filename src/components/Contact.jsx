import React from 'react';

export default function Contact() {
    return (
        <section id="contact" style={{ background: 'var(--bg)' }}>
            <div className="wrap max-w-app mx-auto px-7">
                <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(62, 207, 142, 0.08), rgba(91, 141, 239, 0.05))', border: '1px solid var(--border)', borderRadius: '20px', padding: '60px', textAlign: 'center' }}>
                    <div className="eyebrow" style={{ justifyContent: 'center' }}>Ayo terhubung</div>

                    <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(26px, 4vw, 38px)', marginBottom: '16px' }}>
                        Terbuka untuk peran Software Engineer & Mobile Developer.
                    </h2>

                    <p style={{ color: 'var(--text-dim)', maxWidth: '480px', margin: '0 auto 32px', fontSize: '15px', lineHeight: 1.6 }}>
                        Sedang mencari kesempatan penuh waktu maupun magang lanjutan di bidang mobile atau full-stack engineering. Jangan ragu untuk mengirim pesan.
                    </p>

                    <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:jalilasyakur@gmail.com" style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', padding: '12px 20px', borderRadius: '9px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', transition: 'all 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }} onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-dim)'; }}>
                            ✉ jalilasyakur@gmail.com
                        </a>
                        <a href="tel:+6288297917372" style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', padding: '12px 20px', borderRadius: '9px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', transition: 'all 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }} onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-dim)'; }}>
                            ☎ +62 882-9791-7372
                        </a>
                        <a href="https://github.com/MuhammadJalilAsyakur" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', padding: '12px 20px', borderRadius: '9px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', transition: 'all 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }} onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-dim)'; }}>
                            GitHub ↗
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', padding: '12px 20px', borderRadius: '9px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', transition: 'all 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }} onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-dim)'; }}>
                            LinkedIn ↗
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

