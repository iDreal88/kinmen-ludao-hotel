import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';

const PannellumVideoPlayer = ({ videoSrc, close }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Unmute and play when opened
            videoRef.current.muted = false;
            videoRef.current.play().catch(err => {
                // If browser blocks unmuted autoplay, fallback to muted autoplay
                console.log("Unmuted autoplay blocked, retrying muted...", err);
                if (videoRef.current) {
                    videoRef.current.muted = true;
                    videoRef.current.play().catch(e => console.error("Autoplay failed:", e));
                }
            });
        }
    }, []);

    return (
        <div className="vt-modal-overlay" onClick={close}>
            <button className="vt-close-btn" onClick={close}>
                <i className="fas fa-times"></i> 關閉
            </button>
            <div className="vt-modal-content" onClick={e => e.stopPropagation()}>
                <video 
                    ref={videoRef}
                    src={videoSrc}
                    className="vt-standard-video"
                    controls
                    playsInline
                    loop
                    crossOrigin="anonymous"
                />
            </div>
        </div>
    );
};

export const VirtualTour = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shouldPreload, setShouldPreload] = useState(false);
    const { lang } = useLanguage();

    useEffect(() => {
        // Preload video after 2 seconds to avoid blocking main content rendering on initial load
        const timer = setTimeout(() => {
            setShouldPreload(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => {
        setShouldPreload(true);
    };

    const labels = {
        zh: { title: '360° 實境導覽', subtitle: '身歷其境，探索我們的客房與設施', btn: '開始導覽', close: '關閉' },
        cn: { title: '360° 实境导览', subtitle: '身历其境，探索我们的客房与设施', btn: '开始导览', close: '关闭' },
        en: { title: '360° Virtual Tour', subtitle: 'Immerse yourself and explore our rooms and facilities', btn: 'Start Tour', close: 'Close' },
        ja: { title: '360° バーチャルツアー', subtitle: '客室や施設をバーチャルで体験', btn: 'ツアー開始', close: '閉じる' },
    };
    const l = labels[lang] || labels.zh;

    return (
        <>
            <section id="virtual-tour" className="virtual-tour-section">
                <div className="virtual-tour-banner">
                    <div className="virtual-tour-content">
                        <i className="fas fa-vr-cardboard" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}></i>
                        <h2 className="traditional-font">{l.title}</h2>
                        <p>{l.subtitle}</p>
                        <button 
                            className="btn-book btn-primary-hero" 
                            style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} 
                            onClick={() => setIsOpen(true)}
                            onMouseEnter={handleMouseEnter}
                            onTouchStart={handleMouseEnter}
                        >
                            <i className="fas fa-play-circle"></i> {l.btn}
                        </button>
                    </div>
                </div>
            </section>

            {/* Hidden video element to trigger background preloading/caching */}
            {shouldPreload && !isOpen && (
                <video 
                    preload="auto" 
                    muted 
                    playsInline 
                    style={{ display: 'none' }}
                >
                    <source src="/images/hotel_video.MP4" type="video/mp4" />
                </video>
            )}

            {isOpen && typeof document !== 'undefined' && createPortal(
                <PannellumVideoPlayer videoSrc="/images/hotel_video.MP4" close={() => setIsOpen(false)} />,
                document.body
            )}
        </>
    );
};
