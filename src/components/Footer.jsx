import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer>
            <div className="footer-grid">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <img src="/images/hotel_logo1.png" alt="Emblem" style={{ width: '100px', marginBottom: '1.5rem' }} />
                    <div className="footer-logo traditional-font">{t('footer_name')}</div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                        {t('footer_desc')}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <img src="/images/hotel_copyright.png" alt="合法旅館" style={{ height: '45px', objectFit: 'contain' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'var(--primary-light)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>合法旅館</span>
                            <span style={{ color: 'white', fontWeight: '600', fontSize: '1rem', letterSpacing: '0.5px' }}>交觀業字第1426號</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>{t('footer_links_title')}</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}><Link to="/#rooms" style={{ color: 'white', textDecoration: 'none' }}>{t('nav_rooms')}</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}><Link to="/#gallery" style={{ color: 'white', textDecoration: 'none' }}>{t('nav_gallery')}</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}><Link to="/#contact" style={{ color: 'white', textDecoration: 'none' }}>{t('nav_contact')}</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>{t('footer_service_title')}</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}><Link to="/#rooms" style={{ color: 'white', textDecoration: 'none' }}>{t('footer_policy')}</Link></li>
                        <li style={{ marginBottom: '0.5rem' }}><Link to="/#contact" style={{ color: 'white', textDecoration: 'none' }}>{t('footer_faq')}</Link></li>
                    </ul>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
                <p>&copy; {new Date().getFullYear()} {t('footer_copyright')}</p>
            </div>
        </footer>
    );
};
