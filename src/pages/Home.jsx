import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';

import { Lightbox } from '../components/Lightbox';
import { VirtualTour } from '../components/VirtualTour';
import { Attractions } from '../components/Attractions';
import { Reviews } from '../components/Reviews';
import { TulouExperience } from '../components/TulouExperience';
import { TelephoneBox } from '../components/TelephoneBox';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Home = () => {
    useScrollReveal();
    const { t, lang } = useLanguage();
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [showWechatQR, setShowWechatQR] = useState(false);

    const WECHAT_URL = 'https://u.wechat.com/IBaHOaNeCRs9YrZHnRoCttg';
    const WECHAT_QR = `https://quickchart.io/qr?text=${encodeURIComponent(WECHAT_URL)}&size=250`;


    // Some mock gallery images based on vanilla implementation
    const galleryImages = [
        '/room-types/LOBBY/lobby1.jpg',
        '/room-types/LOBBY/lobby2.jpg',
        '/room-types/LOBBY/lobby3.jpg',
        '/room-types/LOBBY/lobby4.jpg',
        '/room-types/LOBBY/lobby5.jpg',
        '/room-types/LOBBY/lobby6.jpg',
        '/room-types/LOBBY/lobby7.jpg',
        '/room-types/LOBBY/lobby8.jpg',
        '/room-types/LOBBY/lobby9.jpg',
        '/room-types/LOBBY/lobby10.jpg',
        '/room-types/LOBBY/lobby11.jpg',
        '/room-types/LOBBY/lobby12.jpg',
        '/room-types/LOBBY/lobby13.jpg',
        '/room-types/LOBBY/lobby14.jpg',
        '/room-types/LOBBY/lobby15.jpg',
        '/room-types/LOBBY/lobby16.jpg',
        '/room-types/BREAKFAST/bf1.jpg',
        '/room-types/BREAKFAST/bf2.jpg',
        '/room-types/BREAKFAST/bf3.jpg',
        '/room-types/BREAKFAST/bf4.jpg',
        '/room-types/BREAKFAST/bf5.jpg',
        '/room-types/BREAKFAST/bf6.jpg',
        '/room-types/BREAKFAST/bf7.jpg',
        '/room-types/BREAKFAST/bf8.jpg',
        '/room-types/BREAKFAST/bf9.jpg',
        '/room-types/BREAKFAST/bf10.jpg',
        '/room-types/BREAKFAST/bf11.jpg',
        '/room-types/BREAKFAST/bf12.jpg',
    ];

    const getBadgeText = (type) => {
        if (type === 'high_demand') return lang === 'en' ? '🔥 High Demand' : lang === 'ja' ? '🔥 人気集中' : lang === 'cn' ? '🔥 需求量大' : '🔥 需求量大';
        if (type === 'last_one') return lang === 'en' ? '⏳ Only 1 left!' : lang === 'ja' ? '⏳ 残り1室!' : lang === 'cn' ? '⏳ 仅剩1间!' : '⏳ 僅剩1間!';
    };

    return (
        <main>
            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-bg" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('/images/hotel_exterior.jpg')" }}>
                </div>
                <div className="hero-content">
                    <h1 className="traditional-font">{t('hero_title')}</h1>
                    <p>{t('hero_subtitle')}</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#rooms" className="btn-book btn-primary-hero">{t('hero_btn_explore')}</a>
                        <a href="#gallery" className="btn-book btn-secondary-hero">{t('hero_btn_gallery')}</a>
                    </div>
                </div>
            </section>

            {/* Virtual Tour Prototype */}
            <VirtualTour />

            {/* About Section */}
            <section id="about" className="about reveal-up">
                <div className="about-img">
                    <img loading="lazy" src="/images/lobby_sky.jpg" alt="Lobby Sky View" />
                </div>
                <div className="about-content">
                    <div className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                        <h2>{t('about_title')}</h2>
                        <div className="underline" style={{ margin: 0 }}></div>
                    </div>
                    <h3 className="traditional-font">{t('about_subtitle')}</h3>
                    <p>{t('about_p1')}</p>
                    <p>{t('about_p2')}</p>
                    <a href="#gallery" className="btn-book" style={{ background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
                        {t('about_btn')}
                    </a>
                </div>
            </section>

            {/* Tulou Clay Roundhouse Experience */}
            <TulouExperience />

            {/* Rooms Section */}
            <section id="rooms" className="reveal-up">
                <div className="section-title">
                    <h2>{t('rooms_title')}</h2>
                    <div className="underline"></div>
                    <p style={{ marginTop: '1rem', color: 'var(--text-light)' }}>{t('rooms_subtitle')}</p>
                </div>
                <div className="rooms-grid">
                    {/* vip */}
                    <div className="room-card">
                        <div className="room-img" style={{ position: 'relative' }}>
                            <div className="scarcity-badge">{getBadgeText('high_demand')}</div>
                            <img loading="lazy" src="/room-types/VIP/vip1.jpg" alt="vip" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_vip_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_vip_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_vip_price')}</span>
                                <Link to="/room/vip" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* trp */}
                    <div className="room-card">
                        <div className="room-img" style={{ position: 'relative' }}>
                            <div className="scarcity-badge">{getBadgeText('last_one')}</div>
                            <img loading="lazy" src="/room-types/TRP/trp1.jpg" alt="trp" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_trp_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_trp_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_trp_price')}</span>
                                <Link to="/room/trp" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* ds */}
                    <div className="room-card">
                        <div className="room-img">
                            <img loading="lazy" src="/room-types/DS/ds1.jpg" alt="ds" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_ds_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_ds_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_ds_price')}</span>
                                <Link to="/room/ds" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* st */}
                    <div className="room-card">
                        <div className="room-img">
                            <img loading="lazy" src="/room-types/ST/st1.jpg" alt="st" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_st_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_st_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_st_price')}</span>
                                <Link to="/room/st" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* chr */}
                    <div className="room-card">
                        <div className="room-img">
                            <img loading="lazy" src="/room-types/CHR/chr1.jpg" alt="chr" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_chr_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_chr_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_chr_price')}</span>
                                <Link to="/room/chr" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* tsb */}
                    <div className="room-card">
                        <div className="room-img">
                            <img loading="lazy" src="/room-types/TSB/tsb1.jpg" alt="tsb" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_tsb_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_tsb_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_tsb_price')}</span>
                                <Link to="/room/tsb" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" style={{ backgroundColor: 'var(--bg)' }}>
                <div className="section-title">
                    <h2>{t('gallery_title')}</h2>
                    <div className="underline"></div>
                    <p style={{ marginTop: '1rem', color: 'var(--text-light)' }}>{t('gallery_subtitle')}</p>
                </div>
                <div className="gallery-grid">
                    {galleryImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Gallery ${i}`}
                            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '15px', cursor: 'pointer', transition: 'transform 0.3s' }}
                            onClick={() => setLightboxIndex(i)}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    ))}
                </div>
            </section>

            {/* Red Telephone Box Postcard Experience */}
            <TelephoneBox />

            {/* Amenities Section */}
            <section id="amenities" className="reveal-up" style={{ background: 'var(--bg-alt)' }}>
                <div className="section-title">
                    <h2>{t('amenities_title')}</h2>
                    <div className="underline"></div>
                </div>
                <div className="amenities-grid">
                    <div className="amenity-item">
                        <div className="amenity-icon">🍽️</div>
                        <h4 className="traditional-font">{t('amenity_rest')}</h4>
                        <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>{t('amenity_rest_sub')}</p>
                    </div>
                    <div className="amenity-item">
                        <div className="amenity-icon">☕</div>
                        <h4 className="traditional-font">{t('amenity_cafe')}</h4>
                        <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>{t('amenity_cafe_sub')}</p>
                    </div>
                    <div className="amenity-item">
                        <div className="amenity-icon">🚐</div>
                        <h4 className="traditional-font">{t('amenity_shuttle')}</h4>
                        <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>{t('amenity_shuttle_sub')}</p>
                    </div>
                    <div className="amenity-item">
                        <div className="amenity-icon">📶</div>
                        <h4 className="traditional-font">{t('amenity_wifi')}</h4>
                        <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>{t('amenity_wifi_sub')}</p>
                    </div>
                </div>
            </section>

            {/* Attractions Section */}
            <Attractions />

            {/* Reviews Marquee */}
            <Reviews />

            {/* Contact Section */}
            <section id="contact" className="about reveal-up" style={{ paddingBottom: '8rem' }}>
                <div className="about-content">
                    <div className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                        <h2>{t('contact_title')}</h2>
                        <div className="underline" style={{ margin: 0 }}></div>
                    </div>
                    <p>{t('contact_p')}</p>
                    <ul style={{ marginTop: '2rem', listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}>📍 <strong>{t('address')}</strong><span>{t('address_val')}</span></li>
                        <li style={{ marginBottom: '1rem' }}>📞 <strong>{t('phone')}</strong><span>{t('phone_val')}</span> &nbsp;&nbsp;&nbsp;📠 <strong>{t('fax')}</strong><span>{t('fax_val')}</span></li>
                        <li style={{ marginBottom: '1rem' }}>📱 <strong>{t('mobile')}</strong><span>{t('mobile_val')}</span></li>
                    </ul>
                    <div style={{ marginTop: '2.5rem' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--primary-dark)', fontSize: '1.1rem' }}>{t('social_media')}</h4>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            <a href="https://line.me/ti/p/KYU_P86UPK" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: '#00B900', color: 'white', borderRadius: '50%', textDecoration: 'none', fontSize: '1.5rem', transition: 'transform 0.3s', boxShadow: '0 4px 10px rgba(0, 185, 0, 0.2)' }}>
                                <i className="fab fa-line"></i>
                            </a>
                            <button 
                                onClick={() => setShowWechatQR(true)}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: '#07C160', color: 'white', borderRadius: '50%', border: 'none', outline: 'none', boxShadow: 'none', cursor: 'pointer', fontSize: '1.5rem', transition: 'transform 0.3s' }}
                            >
                                <i className="fab fa-weixin"></i>
                            </button>
                            <a href="https://www.facebook.com/kmldh/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: '#1877F2', color: 'white', borderRadius: '50%', textDecoration: 'none', fontSize: '1.5rem', transition: 'transform 0.3s', boxShadow: '0 4px 10px rgba(24, 119, 242, 0.2)' }}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/kmludao" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white', borderRadius: '50%', textDecoration: 'none', fontSize: '1.5rem', transition: 'transform 0.3s', boxShadow: '0 4px 10px rgba(225, 48, 108, 0.2)' }}>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="about-img" style={{ borderRadius: '20px', overflow: 'hidden', height: '400px', boxShadow: 'var(--shadow)' }}>
                    <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=金門縣金寧鄉下埔下90號&t=&z=15&ie=UTF8&iwloc=&output=embed" title="Google Map"></iframe>
                </div>
            </section>

            {lightboxIndex !== null && (
                <Lightbox
                    images={galleryImages}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                    onPrev={() => setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length)}
                    onNext={() => setLightboxIndex(i => (i + 1) % galleryImages.length)}
                />
            )}

            {showWechatQR && createPortal(
                <div className="wechat-qr-overlay" onClick={() => setShowWechatQR(false)}>
                    <div className="wechat-qr-card" onClick={e => e.stopPropagation()}>
                        <button className="wechat-qr-close" onClick={() => setShowWechatQR(false)}>
                            <i className="fas fa-times"></i>
                        </button>
                        <i className="fab fa-weixin" style={{ fontSize: '2.5rem', color: '#07C160', marginBottom: '0.8rem' }}></i>
                        <p style={{ fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                            {lang === 'en' ? 'Scan this QR Code with WeChat' : 
                             lang === 'ja' ? 'WeChatでQRコードをスキャンしてください' : 
                             lang === 'cn' ? '请用微信扫描以下 QR Code' : '請用微信掃描以下 QR Code'}
                        </p>
                        <div style={{ background: 'white', padding: '12px', borderRadius: '12px', display: 'inline-block', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                            <img src={WECHAT_QR} alt="WeChat QR Code" style={{ width: '180px', height: '180px', display: 'block' }} />
                        </div>
                        <button className="btn-book" style={{ marginTop: '1.5rem', border: 'none', cursor: 'pointer' }} onClick={() => setShowWechatQR(false)}>
                            {lang === 'en' ? 'Close' : lang === 'ja' ? '閉じる' : lang === 'cn' ? '关闭' : '關閉'}
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </main>
    );
};
