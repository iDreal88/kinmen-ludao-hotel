import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { roomData } from '../data/roomData';

export const RoomDetail = () => {
    const { id } = useParams();
    const { lang } = useLanguage();
    const room = roomData[id];
    const [featuredImg, setFeaturedImg] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        if(room) {
            setFeaturedImg(room.images[0]);
        }
    }, [id, room]);

    if (!room) {
        return (
            <main style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Room not found</h2>
                <Link to="/">Return Home</Link>
            </main>
        );
    }

    return (
        <main id="roomDetailsMain" style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: 'calc(100vh - 200px)', background: '#fdfbf7' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h1 className="traditional-font" style={{ fontSize: '2.2rem', color: 'var(--primary-dark)', margin: 0 }}>
                        {lang === 'zh' ? room.name_zh : room.name_en}
                    </h1>
                    <Link to="/#rooms" style={{ textDecoration: 'none', padding: '0.6rem 1.2rem', background: 'var(--bg)', borderRadius: '30px', color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem', border: '1px solid rgba(139,69,19,0.1)', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }} onMouseOver={e => {e.currentTarget.style.background='var(--primary)'; e.currentTarget.style.color='white';}} onMouseOut={e => {e.currentTarget.style.background='var(--bg)'; e.currentTarget.style.color='var(--primary)';}}>
                        {lang === 'zh' ? '← 返回列表' : '← Back to Rooms'}
                    </Link>
                </div>
                
                {/* Gallery Section */}
                <div className="room-gallery-container" style={{ marginBottom: '4rem' }}>
                    {/* Main Image */}
                    <div style={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                        <img src={featuredImg || room.images[0]} alt={room.name_zh} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', opacity: 1 }} onMouseOver={e => e.currentTarget.style.transform='scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'} />
                    </div>
                    {/* Thumbnails Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignContent: 'start' }}>
                        {room.images.map((imgSrc, i) => (
                            <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', cursor: 'pointer', aspectRatio: '4/3', border: featuredImg === imgSrc ? '2px solid var(--primary)' : 'none' }} onClick={() => setFeaturedImg(imgSrc)}>
                                <img src={imgSrc} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'} alt={`Thumbnail ${i}`} />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Price Info */}
                <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ width: '5px', height: '24px', background: 'var(--primary)', display: 'inline-block', borderRadius: '3px' }}></span>
                    <span>{lang === 'zh' ? '房價資訊' : 'Pricing Information'}</span>
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    <div style={{ background: 'white', border: '1px solid rgba(139,69,19,0.1)', borderRadius: '12px', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
                        <h4 style={{ color: 'var(--text-light)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{lang === 'zh' ? '定價' : 'List Price'}</h4>
                        <p style={{ color: 'var(--primary-dark)', fontSize: '1.8rem', fontWeight: '700' }}>NT$ {room.prices.fixed}</p>
                    </div>
                    <div style={{ background: 'white', border: '1px solid rgba(139,69,19,0.1)', borderRadius: '12px', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
                        <h4 style={{ color: 'var(--text-light)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{lang === 'zh' ? '假日' : 'Holiday'}</h4>
                        <p style={{ color: 'var(--primary-dark)', fontSize: '1.8rem', fontWeight: '700' }}>NT$ {room.prices.holiday}</p>
                    </div>
                    <div style={{ background: 'white', border: '1px solid rgba(139,69,19,0.1)', borderRadius: '12px', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
                        <h4 style={{ color: 'var(--text-light)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{lang === 'zh' ? '平日' : 'Weekday'}</h4>
                        <p style={{ color: 'var(--primary-dark)', fontSize: '1.8rem', fontWeight: '700' }}>NT$ {room.prices.weekday}</p>
                    </div>
                </div>
                
                {/* Room Info */}
                <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ width: '5px', height: '24px', background: 'var(--primary)', display: 'inline-block', borderRadius: '3px' }}></span>
                    <span>{lang === 'zh' ? '客房資訊' : 'Room Information'}</span>
                </h2>
                <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', marginBottom: '4rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)', alignItems: 'center' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem' }}>{lang === 'zh' ? '房型人數：' : 'Occupancy:'}</div>
                        <div style={{ color: 'var(--text)' }}>{lang === 'zh' ? room.occupancy.zh : room.occupancy.en}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)', alignItems: 'center' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem' }}>{lang === 'zh' ? '房間型式：' : 'Room Type:'}</div>
                        <div style={{ color: 'var(--text)' }}>{lang === 'zh' ? '套房' : 'Suite'}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)', alignItems: 'center' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem' }}>{lang === 'zh' ? '住宿包含：' : 'Includes:'}</div>
                        <div style={{ color: 'var(--text)' }}>{lang === 'zh' ? '精緻早餐' : 'Premium Breakfast'}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', alignItems: 'start' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem', marginTop: '0.2rem' }}>{lang === 'zh' ? '客房設備：' : 'Amenities:'}</div>
                        <div style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>{lang === 'zh' ? room.equipment.zh : room.equipment.en}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', alignItems: 'start', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem', marginTop: '0.2rem' }}>{lang === 'zh' ? '客房簡介：' : 'Description:'}</div>
                        <div style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>{lang === 'zh' ? room.desc_zh : room.desc_en}</div>
                    </div>
                </div>
                
                {/* Booking Policy Section */}
                <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ width: '5px', height: '24px', background: 'var(--primary)', display: 'inline-block', borderRadius: '3px' }}></span>
                    <span>{lang === 'zh' ? '訂房說明' : 'Booking Policy'}</span>
                </h2>
                <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '3rem', marginBottom: '3rem', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        
                        <div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{lang === 'zh' ? '【平日、假日定義】' : '【Weekday & Holiday】'}</h4>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {lang === 'zh' ? '平日：星期日至星期四' : 'Weekday: Sunday to Thursday'}</li>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {lang === 'zh' ? '假日：星期五至星期六' : 'Holiday: Friday to Saturday'}</li>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {lang === 'zh' ? '定價：農曆春節期間、跨年、國定連續假日' : 'Fixed Price: Chinese New Year, New Year\'s Eve, National Holidays'}</li>
                            </ul>

                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{lang === 'zh' ? '【進退房時間】' : '【Check-in & Check-out】'}</h4>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {lang === 'zh' ? '進房時間：下午03:00以後' : 'Check-in: After 03:00 PM'}</li>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {lang === 'zh' ? '退房時間：上午11:00以前' : 'Check-out: Before 11:00 AM'}</li>
                            </ul>

                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{lang === 'zh' ? '【匯款資訊－ATM轉帳/匯款】' : '【Remittance Information】'}</h4>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #D32F2F', marginBottom: '2rem' }}>
                                <p style={{ color: 'var(--text)', lineHeight: '1.8', marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: lang === 'zh' ? '銀行代碼：<br>銀行帳號：<br>匯款銀行：<br>匯款戶名：' : 'Bank Code:<br>Bank Account:<br>Remittance Bank:<br>Account Name:' }}></p>
                                <p style={{ color: '#D32F2F', fontWeight: '600', fontSize: '0.95rem', marginTop: '1rem' }}>{lang === 'zh' ? '※匯款後請務必來電確認【電話：0911-665-175】' : '※Please call to confirm after remittance [Phone: 0911-665-175]'}</p>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{lang === 'zh' ? '【訂房程序】' : '【Booking Procedure】'}</h4>
                            <ol style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '0.8rem' }}>{lang === 'zh' ? '請事先來電確認或預約。' : 'Please call in advance to confirm or make a reservation.'}</li>
                                <li style={{ marginBottom: '0.8rem' }}>{lang === 'zh' ? '經電話訂房確認OK後，請於訂房後3日內預付訂金(房價的30%)，若保留時間內未收到匯款將取消訂房。' : 'After telephone confirmation, please pay a deposit (30% of room rate) within 3 days. Reservations without deposit will be cancelled.'}</li>
                                <li style={{ marginBottom: '0.8rem' }}>{lang === 'zh' ? '匯款後請務必來電告知帳號後五碼，以便確認。' : 'After remittance, please call to inform us of the last 5 digits of your account number.'}</li>
                                <li style={{ marginBottom: '0.8rem' }}>{lang === 'zh' ? '收到訂金後將為您保留房間，餘款到付。' : 'After receiving the deposit, we will reserve the room for you, the balance is payable on arrival.'}</li>
                            </ol>
                            <p style={{ color: '#D32F2F', fontSize: '0.95rem', fontWeight: '600', marginBottom: '2rem' }}>{lang === 'zh' ? '※訂房時間早上09:00至下午17:30，請於訂房時間來電。' : '※Booking hours are from 09:00 AM to 05:30 PM, please call during these hours.'}</p>

                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{lang === 'zh' ? '【注意事項】' : '【Precautions】'}</h4>
                            <ol style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '0.5rem' }}>{lang === 'zh' ? '禁止攜帶寵物。' : 'No pets allowed.'}</li>
                                <li style={{ marginBottom: '0.5rem' }}>{lang === 'zh' ? '室內全面禁止酒、吸煙、嚼檳榔。' : 'Drinking, smoking, and chewing betel nuts are strictly prohibited indoors.'}</li>
                                <li style={{ marginBottom: '0.5rem' }}>{lang === 'zh' ? '入住時請出示身分證件以供登記，並繳清餘款。' : 'Please show your ID card for registration when checking in, and pay the balance.'}</li>
                                <li style={{ marginBottom: '0.5rem' }}>{lang === 'zh' ? '晚間10:00過後請降低音量，勿大聲喧嘩。' : 'Please lower your volume after 10:00 PM and do not make loud noises.'}</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                     <a href="tel:+88682320048" className="btn-book" style={{ display: 'inline-block', textDecoration: 'none', padding: '1.2rem 4rem', fontSize: '1.2rem', borderRadius: '30px', boxShadow: '0 10px 25px rgba(139, 69, 19, 0.25)', transition: 'all 0.3s' }}>
                         {lang === 'zh' ? '立即來電訂房' : 'Call to Book'}
                     </a>
                </div>
            </div>
        </main>
    );
};
