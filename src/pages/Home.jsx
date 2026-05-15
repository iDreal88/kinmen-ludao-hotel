import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
    const { t } = useLanguage();
    const [lightboxImg, setLightboxImg] = useState(null);

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
                        <a href="#rooms" className="btn-book" style={{ background: 'white', color: 'var(--primary)' }}>{t('hero_btn_explore')}</a>
                        <a href="#gallery" className="btn-book">{t('hero_btn_gallery')}</a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="about-img">
                    <img src="/images/lobby_sky.jpg" alt="Lobby Sky View" />
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

            {/* Rooms Section */}
            <section id="rooms">
                <div className="section-title">
                    <h2>{t('rooms_title')}</h2>
                    <div className="underline"></div>
                    <p style={{ marginTop: '1rem', color: 'var(--text-light)' }}>{t('rooms_subtitle')}</p>
                </div>
                <div className="rooms-grid">
                    {/* Executive Suite */}
                    <div className="room-card">
                        <div className="room-img">
                            <img src="/room-types/VIP/vip1.jpg" alt="Executive Suite" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_exec_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_exec_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_exec_price')}</span>
                                <Link to="/room/exec" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Elegant Room */}
                    <div className="room-card">
                        <div className="room-img">
                            <img src="/room-types/TRP/trp3.jpg" alt="Elegant Room" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_elegant_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_elegant_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_elegant_price')}</span>
                                <Link to="/room/elegant" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Elite Room */}
                    <div className="room-card">
                        <div className="room-img">
                            <img src="/room-types/DS/ds1.jpg" alt="Elite Room" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_elite_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_elite_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_elite_price')}</span>
                                <Link to="/room/elite" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Boutique Room */}
                    <div className="room-card">
                        <div className="room-img">
                            <img src="/room-types/ST/st2.jpg" alt="Boutique Room" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_boutique_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_boutique_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_boutique_price')}</span>
                                <Link to="/room/boutique" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* Family Room */}
                    <div className="room-card">
                        <div className="room-img">
                            <img src="/room-types/CHR/chr1.jpg" alt="Family Room" />
                        </div>
                        <div className="room-info">
                            <h3 className="traditional-font" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{t('room_family_name')}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{t('room_family_desc')}</p>
                            <div className="room-card-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <span className="room-price" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{t('room_family_price')}</span>
                                <Link to="/room/family" className="btn-details" style={{ textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <span>{t('view_details')}</span> →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" style={{ background: '#fdfbf7' }}>
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
                            onClick={() => setLightboxImg(img)}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    ))}
                </div>
            </section>

            {/* Amenities Section */}
            <section id="amenities" style={{ background: '#f4f1ea' }}>
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

            {/* Contact Section */}
            <section id="contact" className="about" style={{ paddingBottom: '8rem' }}>
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
                            <a href="https://u.wechat.com/IBaHOaNeCRs9YrZHnRoCttg" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: '#07C160', color: 'white', borderRadius: '50%', textDecoration: 'none', fontSize: '1.5rem', transition: 'transform 0.3s', boxShadow: '0 4px 10px rgba(7, 193, 96, 0.2)' }}>
                                <i className="fab fa-weixin"></i>
                            </a>
                            <a href="https://www.facebook.com/kmldh/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: '#1877F2', color: 'white', borderRadius: '50%', textDecoration: 'none', fontSize: '1.5rem', transition: 'transform 0.3s', boxShadow: '0 4px 10px rgba(24, 119, 242, 0.2)' }}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>

                        {/* Dynamic QR Codes */}
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ textAlign: 'center', background: 'var(--bg)', padding: '1rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/ti/p/KYU_P86UPK" alt="LINE QR Code" style={{ width: '120px', height: '120px', borderRadius: '10px' }} />
                                <div className="traditional-font" style={{ marginTop: '0.8rem', fontWeight: 'bold', color: '#00B900', fontSize: '1.1rem' }}>{t('qr_line_title')}</div>
                            </div>
                            <div style={{ textAlign: 'center', background: 'var(--bg)', padding: '1rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://u.wechat.com/IBaHOaNeCRs9YrZHnRoCttg" alt="WeChat QR Code" style={{ width: '120px', height: '120px', borderRadius: '10px' }} />
                                <div className="traditional-font" style={{ marginTop: '0.8rem', fontWeight: 'bold', color: '#07C160', fontSize: '1.1rem' }}>{t('qr_wechat_title')}</div>
                            </div>
                            <div style={{ textAlign: 'center', background: 'var(--bg)', padding: '1rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.facebook.com/kmldh/" alt="Facebook QR Code" style={{ width: '120px', height: '120px', borderRadius: '10px' }} />
                                <div className="traditional-font" style={{ marginTop: '0.8rem', fontWeight: 'bold', color: '#1877F2', fontSize: '1.1rem' }}>{t('qr_fb_title')}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-img" style={{ borderRadius: '20px', overflow: 'hidden', height: '400px', boxShadow: 'var(--shadow)' }}>
                    <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=金門縣金寧鄉下埔下90號&t=&z=15&ie=UTF8&iwloc=&output=embed" title="Google Map"></iframe>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImg && typeof document !== 'undefined' && createPortal(
                <div className="modal active" onClick={() => setLightboxImg(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="modal-close" onClick={() => setLightboxImg(null)}>&times;</span>
                        <img src={lightboxImg} alt="Enlarged view" className="modal-img" />
                    </div>
                </div>,
                document.body
            )}
        </main>
    );
};
