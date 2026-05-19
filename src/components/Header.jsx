import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
    const { lang, setLang, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isRoomPage = location.pathname.startsWith('/room');

    return (
        <header id="header" className={scrolled || isRoomPage || menuOpen ? 'scrolled' : ''}>
            <div className="logo">
                <Link to="/">
                    <img src="/images/hotel_logo2.png" alt="Kinmen Ludao Hotel" />
                </Link>
            </div>
            <nav className={menuOpen ? 'open' : ''}>
                <ul>
                    <li><Link to="/#about" onClick={() => setMenuOpen(false)}>{t('nav_about')}</Link></li>
                    <li><Link to="/#rooms" onClick={() => setMenuOpen(false)}>{t('nav_rooms')}</Link></li>
                    <li><Link to="/#amenities" onClick={() => setMenuOpen(false)}>{lang === 'en' ? 'Facilities' : lang === 'ja' ? '施設' : lang === 'cn' ? '饭店设施' : '飯店設施'}</Link></li>
                    <li><Link to="/#virtual-tour" onClick={() => setMenuOpen(false)} style={{ color: 'var(--primary)' }}>{lang === 'en' ? '360° Tour' : lang === 'ja' ? '360° ツアー' : lang === 'cn' ? '360° 导览' : '360° 導覽'}</Link></li>
                    <li><Link to="/#attractions" onClick={() => setMenuOpen(false)}>{lang === 'en' ? 'Attractions' : lang === 'ja' ? '観光スポット' : lang === 'cn' ? '周边景点' : '周邊景點'}</Link></li>
                    <li><Link to="/#gallery" onClick={() => setMenuOpen(false)}>{t('nav_gallery')}</Link></li>
                    <li><Link to="/#contact" onClick={() => setMenuOpen(false)}>{t('nav_contact')}</Link></li>
                </ul>
                <div className="mobile-nav-controls">
                    <div className="lang-switcher">
                        <span className={`lang-btn ${lang === 'zh' ? 'active' : ''}`} onClick={() => setLang('zh')}>繁</span>
                        <span className={`lang-btn ${lang === 'cn' ? 'active' : ''}`} onClick={() => setLang('cn')}>简</span>
                        <span className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</span>
                        <span className={`lang-btn ${lang === 'ja' ? 'active' : ''}`} onClick={() => setLang('ja')}>JP</span>
                    </div>
                    <button 
                        onClick={() => {
                            setMenuOpen(false);
                            window.dispatchEvent(new CustomEvent('openBookingModal', {}));
                        }} 
                        className="btn-book" 
                        style={{ display: 'block', width: '100%', marginTop: '1.5rem', textAlign: 'center', border: 'none', cursor: 'pointer' }}
                    >
                        {t('btn_book')}
                    </button>
                </div>
            </nav>
            <div className="header-right">
                <div className="theme-toggle" onClick={toggleTheme} title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
                    <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
                </div>
                <div className="lang-switcher">
                    <span className={`lang-btn ${lang === 'zh' ? 'active' : ''}`} onClick={() => setLang('zh')}>繁</span>
                    <span className={`lang-btn ${lang === 'cn' ? 'active' : ''}`} onClick={() => setLang('cn')}>简</span>
                    <span className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</span>
                    <span className={`lang-btn ${lang === 'ja' ? 'active' : ''}`} onClick={() => setLang('ja')}>JP</span>
                </div>
                <button className="btn-book" onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal', {}))} style={{ border: 'none', cursor: 'pointer' }}>{t('btn_book')}</button>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </header>
    );
};
