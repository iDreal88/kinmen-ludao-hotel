import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingChat = () => {
    const [open, setOpen] = useState(false);
    const { lang } = useLanguage();

    const labels = {
        zh: { title: '快速聯絡', line: 'LINE 聯絡', wechat: '微信聯絡', call: '立即來電' },
        cn: { title: '快速联系', line: 'LINE 联络', wechat: '微信联络', call: '立即来电' },
        en: { title: 'Contact Us', line: 'Chat on LINE', wechat: 'WeChat Us', call: 'Call Now' },
        ja: { title: 'お問い合わせ', line: 'LINEで連絡', wechat: 'WeChatで連絡', call: '今すぐ電話' },
    };
    const l = labels[lang] || labels.zh;

    return (
        <div className="floating-chat">
            <div className={`floating-chat-menu ${open ? 'open' : ''}`}>
                <a href="https://line.me/ti/p/KYU_P86UPK" target="_blank" rel="noreferrer" className="chat-option-btn line-btn">
                    <i className="fab fa-line"></i><span>{l.line}</span>
                </a>
                <a href="https://u.wechat.com/IBaHOaNeCRs9YrZHnRoCttg" target="_blank" rel="noreferrer" className="chat-option-btn wechat-btn">
                    <i className="fab fa-weixin"></i><span>{l.wechat}</span>
                </a>
                <a href="tel:+88682320048" className="chat-option-btn phone-btn">
                    <i className="fas fa-phone-alt"></i><span>{l.call}</span>
                </a>
            </div>
            <button className={`floating-chat-toggle ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label={l.title}>
                <i className={`fas ${open ? 'fa-times' : 'fa-comment-dots'}`}></i>
            </button>
        </div>
    );
};
