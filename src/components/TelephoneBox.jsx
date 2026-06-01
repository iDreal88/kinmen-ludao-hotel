import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TelephoneBox = () => {
    const { t, lang } = useLanguage();
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');
    const [stamp, setStamp] = useState('seal');
    const [isSent, setIsSent] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        setIsSent(true);
    };

    const handleReset = () => {
        setSender('');
        setMessage('');
        setStamp('seal');
        setIsSent(false);
    };

    const getStampImage = () => {
        if (stamp === 'seal') {
            return (
                <div className="postcard-stamp-seal">
                    <span>陸島</span>
                    <span>酒店</span>
                </div>
            );
        } else if (stamp === 'lion') {
            return (
                <div className="postcard-stamp-lion">
                    <span style={{ fontSize: '1.8rem' }}>🦁</span>
                    <span style={{ fontSize: '0.6rem', fontWeight: 'bold', display: 'block' }}>風獅爺</span>
                </div>
            );
        } else {
            return (
                <div className="postcard-stamp-box">
                    <span style={{ fontSize: '1.8rem' }}>📞</span>
                    <span style={{ fontSize: '0.6rem', fontWeight: 'bold', display: 'block' }}>金門</span>
                </div>
            );
        }
    };

    return (
        <section id="telephone-box" className="telephone-box-section">
            <div className="section-title">
                <h2>{t('tb_title')}</h2>
                <div className="underline"></div>
                <p style={{ marginTop: '1.2rem', color: 'var(--text-light)', maxWidth: '700px', margin: '1.2rem auto 0', fontSize: '1.05rem' }}>
                    {t('tb_subtitle')}
                </p>
            </div>

            <div className="telephone-box-container">
                {/* Left Side: Beautiful pure-CSS Kinmen Red Telephone Box */}
                <div className="telephone-box-visual">
                    <div className="css-phone-booth">
                        {/* Top character crown "金門" */}
                        <div className="booth-crown">
                            <div className="crown-arch">
                                <span className="crown-text">金門</span>
                            </div>
                        </div>
                        {/* Light/Sign Board */}
                        <div className="booth-sign">
                            <span>TELEPHONE</span>
                        </div>
                        {/* Main Body */}
                        <div className="booth-body">
                            {/* Window Panes Grid */}
                            <div className="booth-windows">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="window-pane">
                                        <div className="pane-glass"></div>
                                    </div>
                                ))}
                            </div>
                            {/* Glowing Phone inside */}
                            <div className="booth-interior">
                                <div className="inner-phone">📞</div>
                            </div>
                        </div>
                        {/* Base */}
                        <div className="booth-base"></div>
                    </div>
                </div>

                {/* Right Side: Postcard Interactive Form & Preview */}
                <div className="telephone-box-interactive">
                    {!isSent ? (
                        <form className="postcard-form" onSubmit={handleSend}>
                            <div className="form-group">
                                <label>{t('tb_sender_label')}</label>
                                <input 
                                    type="text" 
                                    value={sender} 
                                    onChange={e => setSender(e.target.value)} 
                                    placeholder={t('tb_sender_placeholder')}
                                    required 
                                    maxLength={20}
                                />
                            </div>

                            <div className="form-group">
                                <label>{t('tb_msg_label')}</label>
                                <textarea 
                                    value={message} 
                                    onChange={e => setMessage(e.target.value)} 
                                    placeholder={t('tb_msg_placeholder')}
                                    required
                                    rows={4}
                                    maxLength={150}
                                />
                            </div>

                            <div className="form-group">
                                <label>{t('tb_stamp_label')}</label>
                                <div className="stamp-selector">
                                    <button 
                                        type="button" 
                                        className={`stamp-opt ${stamp === 'seal' ? 'active' : ''}`}
                                        onClick={() => setStamp('seal')}
                                    >
                                        🔴 {t('tb_stamp1')}
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`stamp-opt ${stamp === 'lion' ? 'active' : ''}`}
                                        onClick={() => setStamp('lion')}
                                    >
                                        🦁 {t('tb_stamp2')}
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`stamp-opt ${stamp === 'box' ? 'active' : ''}`}
                                        onClick={() => setStamp('box')}
                                    >
                                        📞 {t('tb_stamp3')}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="btn-book" style={{ width: '100%', marginTop: '1rem', border: 'none', cursor: 'pointer' }}>
                                🚀 {t('tb_send_btn')}
                            </button>
                        </form>
                    ) : (
                        <div className="postcard-success-view">
                            <div className="success-banner">
                                <span className="success-check">🎉</span>
                                <h3>{t('tb_success_title')}</h3>
                                <p>{t('tb_success_desc')}</p>
                            </div>

                            {/* Beautiful Rendered Postcard */}
                            <div className="postcard-preview-card">
                                <div className="postcard-left">
                                    <h4 className="traditional-font">{t('tb_postcard_title')}</h4>
                                    <p className="postcard-content-text traditional-font">
                                        {message}
                                    </p>
                                    <div className="postcard-signature">
                                        <span>— {sender}</span>
                                    </div>
                                </div>
                                <div className="postcard-divider"></div>
                                <div className="postcard-right">
                                    <div className="postcard-stamp-holder">
                                        {getStampImage()}
                                    </div>
                                    <div className="postcard-address-lines">
                                        <div className="addr-line">To: 📍 金門縣金寧鄉下埔下90號</div>
                                        <div className="addr-line">No. 90, Xiapuxia, Kinmen</div>
                                        <div className="addr-line-label traditional-font">{t('tb_postcard_hotel')}</div>
                                    </div>
                                </div>
                                <div className="postcard-vintage-overlay"></div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', width: '100%' }}>
                                <button className="btn-book btn-secondary-hero" style={{ flex: 1, cursor: 'pointer', border: '1px solid var(--primary)', color: 'var(--primary)' }} onClick={() => window.print()}>
                                    🖨️ Print Card
                                </button>
                                <button className="btn-book" style={{ flex: 1, border: 'none', cursor: 'pointer' }} onClick={handleReset}>
                                    ✍️ Create Another
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
