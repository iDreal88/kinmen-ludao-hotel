import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { roomData } from '../data/roomData';

const WECHAT_URL = 'https://u.wechat.com/IBaHOaNeCRs9YrZHnRoCttg';
const WECHAT_QR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(WECHAT_URL)}`;


export const BookingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showWechatQR, setShowWechatQR] = useState(false);
    const { lang } = useLanguage();
    const [formData, setFormData] = useState({ name: '', phone: '', checkin: '', checkout: '', room: '', guests: '2', requests: '' });

    useEffect(() => {
        const handleOpen = (e) => {
            setIsOpen(true);
            setSubmitted(false);
            if (e.detail?.roomId) setFormData(prev => ({ ...prev, room: e.detail.roomId }));
        };
        window.addEventListener('openBookingModal', handleOpen);
        return () => window.removeEventListener('openBookingModal', handleOpen);
    }, []);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const tr = (zh, en, cn, ja) => ({ en, ja, cn }[lang] || zh);

    const roomOptions = Object.values(roomData).map(r => ({
        id: r.id,
        name: tr(r.name_zh, r.name_en, r.name_cn, r.name_ja)
    }));

    const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const roomName = roomOptions.find(r => r.id === formData.room)?.name || formData.room;
        const msg = `🏨 訂房申請 / Booking Request
━━━━━━━━━━━━
👤 ${formData.name}
📞 ${formData.phone}
📅 ${tr('入住', 'Check-in', '入住', 'チェックイン')}: ${formData.checkin}
📅 ${tr('退房', 'Check-out', '退房', 'チェックアウト')}: ${formData.checkout}
🛏 ${roomName}
👥 ${formData.guests} ${tr('人', 'guests', '人', '名')}
📝 ${formData.requests || tr('無', 'None', '无', 'なし')}
━━━━━━━━━━━━`;
        try {
            await navigator.clipboard.writeText(msg);
            setCopied(true);
        } catch (e) {
            // clipboard not available, still proceed
        }
        setSubmitted(true);
        // Don't auto-open any app — let user choose LINE or WeChat in success state
    };

    if (!isOpen) return null;

    const T = {
        title: tr('訂房申請', 'Booking Request', '订房申请', '予約リクエスト'),
        name: tr('姓名 *', 'Full Name *', '姓名 *', 'お名前 *'),
        phone: tr('聯絡電話 *', 'Phone Number *', '联系电话 *', '電話番号 *'),
        checkin: tr('入住日期 *', 'Check-in Date *', '入住日期 *', 'チェックイン日 *'),
        checkout: tr('退房日期 *', 'Check-out Date *', '退房日期 *', 'チェックアウト日 *'),
        room: tr('房型選擇', 'Room Type', '房型选择', '部屋タイプ'),
        selectRoom: tr('-- 請選擇房型 --', '-- Select Room --', '-- 请选择房型 --', '-- 部屋を選択 --'),
        guests: tr('入住人數', 'Guests', '入住人数', '宿泊人数'),
        requests: tr('特殊需求', 'Special Requests', '特殊需求', 'ご要望'),
        submit: tr('複製訂房資訊', 'Copy Booking Info', '复制订房资讯', '予約情報をコピー'),
        successTitle: tr('訂房資訊已複製！', 'Booking Info Copied!', '订房资讯已复制！', '予約情報がコピーされました！'),
        successMsg: tr('請選擇您偏好的聯絡方式，貼上訊息並傳送給我們：', 'Choose your preferred platform, paste and send the message to us:', '请选择您偏好的联络方式，粘贴消息并发送给我们：', 'ご希望の連絡方法を選択し、メッセージを貼り付けてお送りください：'),
        line: tr('開啟 LINE 聯絡', 'Open LINE', '打开 LINE 联络', 'LINEで連絡'),
        wechat: tr('開啟微信聯絡', 'Open WeChat', '打开微信联络', 'WeChatで連絡'),
        call: tr('來電預訂', 'Call to Book', '来电预订', '電話予約'),
        close: tr('關閉', 'Close', '关闭', '閉じる'),
    };

    return (
        <>
        <div className="booking-overlay" onClick={() => setIsOpen(false)}>
            <div className="booking-modal" onClick={e => e.stopPropagation()}>
                <div className="booking-modal-header">
                    <h2>{T.title}</h2>
                    <button className="booking-close-btn" onClick={() => setIsOpen(false)}><i className="fas fa-times"></i></button>
                </div>

                {submitted ? (
                    <div className="booking-success">
                        <div className="success-icon"><i className="fas fa-copy"></i></div>
                        <h3>{T.successTitle}</h3>
                        <p>{T.successMsg}</p>
                        <div className="success-actions">
                            <a href="https://line.me/ti/p/KYU_P86UPK" target="_blank" rel="noreferrer" className="success-btn line-success-btn">
                                <i className="fab fa-line"></i> {T.line}
                            </a>
                            <button className="success-btn wechat-success-btn" onClick={() => setShowWechatQR(true)}>
                                <i className="fab fa-weixin"></i> {T.wechat}
                            </button>
                            <a href="tel:+88682320048" className="success-btn phone-success-btn">
                                <i className="fas fa-phone-alt"></i> {T.call}
                            </a>
                        </div>
                        <button className="btn-book" style={{ marginTop: '1.5rem' }} onClick={() => setIsOpen(false)}>{T.close}</button>
                    </div>
                ) : (
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{T.name}</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. 王小明" />
                            </div>
                            <div className="form-group">
                                <label>{T.phone}</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="e.g. 0911-665-175" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{T.checkin}</label>
                                <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{T.checkout}</label>
                                <input type="date" name="checkout" value={formData.checkout} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{T.room}</label>
                                <select name="room" value={formData.room} onChange={handleChange}>
                                    <option value="">{T.selectRoom}</option>
                                    {roomOptions.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>{T.guests}</label>
                                <select name="guests" value={formData.guests} onChange={handleChange}>
                                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>{T.requests}</label>
                            <textarea name="requests" value={formData.requests} onChange={handleChange} rows={3} placeholder={tr('例：需要嬰兒床、素食早餐...', 'e.g. Need baby cot, vegetarian breakfast...', '例：需要婴儿床、素食早餐...', '例：ベビーベッド、ベジタリアン朝食...')}></textarea>
                        </div>
                        <button type="submit" className="btn-book booking-submit-btn">
                            <i className="fab fa-line"></i> {T.submit}
                        </button>
                    </form>
                )}
            </div>
        </div>

        {showWechatQR && createPortal(
            <div className="wechat-qr-overlay" onClick={() => setShowWechatQR(false)}>
                <div className="wechat-qr-card" onClick={e => e.stopPropagation()}>
                    <button className="wechat-qr-close" onClick={() => setShowWechatQR(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                    <i className="fab fa-weixin" style={{ fontSize: '2.5rem', color: '#07C160', marginBottom: '0.8rem' }}></i>
                    <p style={{ fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                        {tr('請用微信掃描以下 QR Code', 'Scan this QR Code with WeChat', '请用微信扫描以下 QR Code', 'WeChatでQRコードをスキャンしてください')}
                    </p>
                    <div style={{ background: 'white', padding: '12px', borderRadius: '12px', display: 'inline-block', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                        <img src={WECHAT_QR} alt="WeChat QR Code" style={{ width: '180px', height: '180px', display: 'block' }} />
                    </div>
                    <button className="btn-book" style={{ marginTop: '1.5rem', border: 'none', cursor: 'pointer' }} onClick={() => setShowWechatQR(false)}>
                        {tr('關閉', 'Close', '关闭', '閉じる')}
                    </button>
                </div>
            </div>,
            document.body
        )}
        </>
    );
};
