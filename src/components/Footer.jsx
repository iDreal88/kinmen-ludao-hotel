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
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                        {t('footer_desc')}
                    </p>
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
