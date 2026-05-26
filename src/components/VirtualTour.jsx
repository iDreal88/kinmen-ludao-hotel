import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';

const PannellumVideoPlayer = ({ videoSrc, close }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (!videoRef.current) return;

        // Initialize video.js with pannellum plugin
        if (window.videojs) {
            try {
                playerRef.current = window.videojs(videoRef.current, {
                    controls: false, // We will use our own custom controls
                    autoplay: true,
                    loop: true,
                    muted: true,
                    plugins: {
                        pannellum: {
                            yaw: 180,
                            pitch: 10,
                            hfov: 110,
                            minHfov: 50,
                            maxHfov: 150
                        }
                    }
                });
                
                // Keep react state in sync if video pauses/plays natively
                playerRef.current.on('play', () => setIsPlaying(true));
                playerRef.current.on('pause', () => setIsPlaying(false));
            } catch (error) {
                console.error("VideoJS/Pannellum initialization failed:", error);
            }
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
            }
        };
    }, []);

    const togglePlay = (e) => {
        e.stopPropagation();
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pause();
            } else {
                playerRef.current.play();
            }
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (playerRef.current) {
            const currentlyMuted = playerRef.current.muted();
            playerRef.current.muted(!currentlyMuted);
            setIsMuted(!currentlyMuted);
        }
    };

    return (
        <div className="vt-modal-overlay" style={{ position: 'relative' }}>
            <button className="vt-close-btn" onClick={close}>
                <i className="fas fa-times"></i> 關閉
            </button>
            <div className="vt-modal-content" style={{ width: '100%', height: '100%' }}>
                <style>{`
                    .pnlm-container {
                        z-index: 1 !important;
                    }
                `}</style>
                <div data-vjs-player style={{ width: '100%', height: '100%' }}>
                    <video 
                        ref={videoRef}
                        id="panorama"
                        className="video-js vjs-default-skin vjs-big-play-centered"
                        preload="auto"
                        autoPlay
                        loop
                        muted
                        crossOrigin="anonymous"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            
            {/* Custom Floating Controls */}
            <div style={{
                position: 'absolute', 
                bottom: '30px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                display: 'flex', 
                gap: '20px', 
                zIndex: 10000,
                background: 'rgba(0, 0, 0, 0.6)', 
                padding: '12px 24px', 
                borderRadius: '50px',
                backdropFilter: 'blur(5px)'
            }}>
                <button onClick={togglePlay} style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', width: '40px' }}>
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </button>
                <button onClick={toggleMute} style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', width: '40px' }}>
                    <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
                </button>
            </div>
        </div>
    );
};

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

            {isOpen && typeof document !== 'undefined' && createPortal(
                <PannellumVideoPlayer videoSrc="/images/hotel_video.MP4" close={() => setIsOpen(false)} />,
                document.body
            )}
        </>
    );
};
