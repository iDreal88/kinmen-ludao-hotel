import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';

const WECHAT_URL = 'https://u.wechat.com/IBaHOaNeCRs9YrZHnRoCttg';
const WECHAT_QR = `https://quickchart.io/qr?text=${encodeURIComponent(WECHAT_URL)}&size=250`;

export const FloatingChat = () => {
    const [open, setOpen] = useState(false);
    const [showWechatQR, setShowWechatQR] = useState(false);
    const { lang } = useLanguage();

    const labels = {
        zh: { title: '快速聯絡', line: 'LINE 聯絡', wechat: '微信聯絡', call: '立即來電', scan: '請用微信掃描以下 QR Code', close: '關閉' },
        cn: { title: '快速联系', line: 'LINE 联络', wechat: '微信联络', call: '立即来电', scan: '请用微信扫描以下 QR Code', close: '关闭' },
        en: { title: 'Contact Us', line: 'Chat on LINE', wechat: 'WeChat Us', call: 'Call Now', scan: 'Scan this QR Code with WeChat', close: 'Close' },
        ja: { title: 'お問い合わせ', line: 'LINEで連絡', wechat: 'WeChatで連絡', call: '今すぐ電話', scan: 'WeChatでQRコードをスキャンしてください', close: '閉じる' },
    };
    const l = labels[lang] || labels.zh;

    return (
        <>
            <div className="floating-chat">
                <div className={`floating-chat-menu ${open ? 'open' : ''}`}>
                    <a href="https://line.me/ti/p/KYU_P86UPK" target="_blank" rel="noreferrer" className="chat-option-btn line-btn">
                        <i className="fab fa-line"></i><span>{l.line}</span>
                    </a>
                    <button className="chat-option-btn wechat-btn" onClick={() => { setShowWechatQR(true); setOpen(false); }}>
                        <i className="fab fa-weixin"></i><span>{l.wechat}</span>
                    </button>
                    <a href="tel:+88682320048" className="chat-option-btn phone-btn">
                        <i className="fas fa-phone-alt"></i><span>{l.call}</span>
                    </a>
                </div>
                <button className={`floating-chat-toggle ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label={l.title}>
                    <i className={`fas ${open ? 'fa-times' : 'fa-comment-dots'}`}></i>
                </button>
            </div>

            {showWechatQR && createPortal(
                <div className="wechat-qr-overlay" onClick={() => setShowWechatQR(false)}>
                    <div className="wechat-qr-card" onClick={e => e.stopPropagation()}>
                        <button className="wechat-qr-close" onClick={() => setShowWechatQR(false)}>
                            <i className="fas fa-times"></i>
                        </button>
                        <i className="fab fa-weixin" style={{ fontSize: '2.5rem', color: '#07C160', marginBottom: '0.8rem' }}></i>
                        <p style={{ fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-dark)' }}>{l.scan}</p>
                        <div style={{ background: 'white', padding: '12px', borderRadius: '12px', display: 'inline-block', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                            <img src={WECHAT_QR} alt="WeChat QR Code" style={{ width: '180px', height: '180px', display: 'block' }} />
                        </div>
                        <button className="btn-book" style={{ marginTop: '1.5rem', border: 'none', cursor: 'pointer' }} onClick={() => setShowWechatQR(false)}>
                            {l.close}
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};
