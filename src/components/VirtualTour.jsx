import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { PannellumVideo } from 'pannellum-react';
import { useLanguage } from '../context/LanguageContext';

export const VirtualTour = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang } = useLanguage();

    const labels = {
        zh: { title: '360° 實境導覽', subtitle: '身歷其境，探索我們的客房與設施', btn: '開始導覽', close: '關閉' },
        cn: { title: '360° 实境导览', subtitle: '身历其境，探索我们的客房与设施', btn: '开始导览', close: '关闭' },
        en: { title: '360° Virtual Tour', subtitle: 'Immerse yourself and explore our rooms and facilities', btn: 'Start Tour', close: 'Close' },
        ja: { title: '360° バーチャルツアー', subtitle: '客室や施設をバーチャルで体験', btn: 'ツアー開始', close: '閉じる' },
    };
    const l = labels[lang] || labels.zh;

    return (
        <>
            {/* The trigger section on the page */}
            <section id="virtual-tour" className="virtual-tour-section">
                <div className="virtual-tour-banner">
                    <div className="virtual-tour-content">
                        <i className="fas fa-vr-cardboard" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}></i>
                        <h2 className="traditional-font">{l.title}</h2>
                        <p>{l.subtitle}</p>
                        <button className="btn-book" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary-dark)', color: 'white' }} onClick={() => setIsOpen(true)}>
                            <i className="fas fa-play-circle"></i> {l.btn}
                        </button>
                    </div>
                </div>
            </section>

            {/* The fullscreen Pannellum modal */}
            {isOpen && typeof document !== 'undefined' && createPortal(
                <div className="vt-modal-overlay">
                    <button className="vt-close-btn" onClick={() => setIsOpen(false)}>
                        <i className="fas fa-times"></i> {l.close}
                    </button>
                    <div className="vt-modal-content">
                        <PannellumVideo
                            video="/images/hotel_video.MP4"
                            loop
                            autoplay
                            muted
                            controls
                            width="100%"
                            height="100%"
                            pitch={10}
                            yaw={180}
                            hfov={110}
                            minHfov={50}
                            maxHfov={150}
                        />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};
