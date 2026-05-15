import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { roomData } from '../data/roomData';

export const RoomDetail = () => {
    const { id } = useParams();
    const { lang } = useLanguage();
    const room = roomData[id];
    const [featuredImg, setFeaturedImg] = useState('');
    const tr = (zh, en, cn, ja) => {
        if (lang === 'en') return en;
        if (lang === 'ja') return ja;
        if (lang === 'cn') return cn;
        return zh;
    };

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
        <main id="roomDetailsMain" style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: 'calc(100vh - 200px)', backgroundColor: 'var(--bg)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h1 className="traditional-font" style={{ fontSize: '2.2rem', color: 'var(--primary-dark)', margin: 0 }}>
                        {tr(room.name_zh, room.name_en, room.name_cn, room.name_ja)}
                    </h1>
                    <Link to="/#rooms" style={{ textDecoration: 'none', padding: '0.6rem 1.2rem', backgroundColor: 'var(--bg)', borderRadius: '30px', color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem', border: '1px solid rgba(139,69,19,0.1)', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }} onMouseOver={e => {e.currentTarget.style.background='var(--primary)'; e.currentTarget.style.color='white';}} onMouseOut={e => {e.currentTarget.style.background='var(--bg)'; e.currentTarget.style.color='var(--primary)';}}>
                        {tr('← 返回列表', '← Back to Rooms', '← 返回列表', '← お部屋に戻る')}
                    </Link>
                </div>
                
                {/* Gallery Section */}
                <div className="room-gallery-container" style={{ marginBottom: '4rem' }}>
                    {/* Main Image */}
                    <div style={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                        <img loading="lazy" src={featuredImg || room.images[0]} alt={room.name_zh} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', opacity: 1 }} onMouseOver={e => e.currentTarget.style.transform='scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'} />
                    </div>
                    {/* Thumbnails Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignContent: 'start' }}>
                        {room.images.map((imgSrc, i) => (
                            <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', cursor: 'pointer', aspectRatio: '4/3', border: featuredImg === imgSrc ? '2px solid var(--primary)' : 'none' }} onClick={() => setFeaturedImg(imgSrc)}>
                                <img loading="lazy" src={imgSrc} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'} alt={`Thumbnail ${i}`} />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Price Info */}
                <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ width: '5px', height: '24px', background: 'var(--primary)', display: 'inline-block', borderRadius: '3px' }}></span>
                    <span>{tr('房價資訊', 'Pricing Information', '房价资讯', '料金情報')}</span>
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(139,69,19,0.1)', borderRadius: '12px', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
                        <h4 style={{ color: 'var(--text-light)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{tr('定價', 'List Price', '定价', '定価')}</h4>
                        <p style={{ color: 'var(--primary-dark)', fontSize: '1.8rem', fontWeight: '700' }}>NT$ {room.prices.fixed}</p>
                    </div>
                    <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(139,69,19,0.1)', borderRadius: '12px', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
                        <h4 style={{ color: 'var(--text-light)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{tr('假日', 'Holiday', '假日', '休日')}</h4>
                        <p style={{ color: 'var(--primary-dark)', fontSize: '1.8rem', fontWeight: '700' }}>NT$ {room.prices.holiday}</p>
                    </div>
                    <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(139,69,19,0.1)', borderRadius: '12px', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
                        <h4 style={{ color: 'var(--text-light)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{tr('平日', 'Weekday', '平日', '平日')}</h4>
                        <p style={{ color: 'var(--primary-dark)', fontSize: '1.8rem', fontWeight: '700' }}>NT$ {room.prices.weekday}</p>
                    </div>
                </div>
                
                {/* Room Info */}
                <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ width: '5px', height: '24px', background: 'var(--primary)', display: 'inline-block', borderRadius: '3px' }}></span>
                    <span>{tr('客房資訊', 'Room Information', '客房资讯', '客室情報')}</span>
                </h2>
                <div style={{ background: 'var(--card-bg)', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', marginBottom: '4rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)', alignItems: 'center' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem' }}>{tr('房型人數：', 'Occupancy:', '房型人数：', '宿泊人数：')}</div>
                        <div style={{ color: 'var(--text)' }}>{tr(room.occupancy.zh, room.occupancy.en, room.occupancy.cn, room.occupancy.ja)}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)', alignItems: 'center' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem' }}>{tr('房間型式：', 'Room Type:', '房间型式：', '部屋タイプ：')}</div>
                        <div style={{ color: 'var(--text)' }}>{tr('套房', 'Suite', '套房', 'スイート')}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)', alignItems: 'center' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem' }}>{tr('住宿包含：', 'Includes:', '住宿包含：', '含まれるもの：')}</div>
                        <div style={{ color: 'var(--text)' }}>{tr('精緻早餐', 'Premium Breakfast', '精致早餐', '朝食付き')}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', alignItems: 'start' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem', marginTop: '0.2rem' }}>{tr('客房設備：', 'Amenities:', '客房设备：', '客室設備：')}</div>
                        <div style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>{tr(room.equipment.zh, room.equipment.en, room.equipment.cn, room.equipment.ja)}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', padding: '1.2rem 0', alignItems: 'start', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                        <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.05rem', marginTop: '0.2rem' }}>{tr('客房簡介：', 'Description:', '客房简介：', 'お部屋の説明：')}</div>
                        <div style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>{tr(room.desc_zh, room.desc_en, room.desc_cn, room.desc_ja)}</div>
                    </div>
                </div>
                
                {/* Booking Policy Section */}
                <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ width: '5px', height: '24px', background: 'var(--primary)', display: 'inline-block', borderRadius: '3px' }}></span>
                    <span>{tr('訂房說明', 'Booking Policy', '订房说明', '予約ポリシー')}</span>
                </h2>
                <div style={{ backgroundColor: 'var(--bg)', borderRadius: '16px', padding: '3rem', marginBottom: '3rem', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        
                        <div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{tr('【平日、假日定義】', '【Weekday & Holiday】', '【平日、假日定义】', '【平日と休日の定義】')}</h4>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {tr('平日：星期日至星期四', 'Weekday: Sunday to Thursday', '平日：星期日至星期四', '平日：日曜日から木曜日')}</li>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {tr('假日：星期五至星期六', 'Holiday: Friday to Saturday', '假日：星期五至星期六', '休日：金曜日から土曜日')}</li>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {tr('定價：農曆春節期間、跨年、國定連續假日', 'Fixed Price: Chinese New Year, New Year\'s Eve, National Holidays', '定价：农历春节期间、跨年、国定连续假日', '定価：旧正月、大晦日、国定連休')}</li>
                            </ul>

                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{tr('【進退房時間】', '【Check-in & Check-out】', '【进退房时间】', '【チェックイン・チェックアウト時間】')}</h4>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {tr('進房時間：下午03:00以後', 'Check-in: After 03:00 PM', '进房时间：下午03:00以后', 'チェックイン：午後03:00以降')}</li>
                                <li style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.5rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span> {tr('退房時間：上午11:00以前', 'Check-out: Before 11:00 AM', '退房时间：上午11:00以前', 'チェックアウト：午前11:00以前')}</li>
                            </ul>

                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{tr('【匯款資訊－ATM轉帳/匯款】', '【Remittance Information】', '【汇款资讯－ATM转帐/汇款】', '【お振込情報】')}</h4>
                            <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #D32F2F', marginBottom: '2rem' }}>
                                <p style={{ color: 'var(--text)', lineHeight: '1.8', marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: tr('銀行代碼：<br>銀行帳號：<br>匯款銀行：<br>匯款戶名：', 'Bank Code:<br>Bank Account:<br>Remittance Bank:<br>Account Name:', '银行代码：<br>银行帐号：<br>汇款银行：<br>汇款户名：', '銀行コード：<br>口座番号：<br>振込先銀行：<br>口座名義：') }}></p>
                                <p style={{ color: '#D32F2F', fontWeight: '600', fontSize: '0.95rem', marginTop: '1rem' }}>{tr('※匯款後請務必來電確認【電話：0911-665-175】', '※Please call to confirm after remittance [Phone: 0911-665-175]', '※汇款后请务必来电确认【电话：0911-665-175】', '※お振込後、必ずお電話でご確認ください [電話：0911-665-175]')}</p>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{tr('【訂房程序】', '【Booking Procedure】', '【订房程序】', '【予約手順】')}</h4>
                            <ol style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '0.8rem' }}>{tr('請事先來電確認或預約。', 'Please call in advance to confirm or make a reservation.', '请事先来电确认或预约。', '事前にお電話でご確認またはご予約ください。')}</li>
                                <li style={{ marginBottom: '0.8rem' }}>{tr('經電話訂房確認OK後，請於訂房後3日內預付訂金(房價的30%)，若保留時間內未收到匯款將取消訂房。', 'After telephone confirmation, please pay a deposit (30% of room rate) within 3 days. Reservations without deposit will be cancelled.', '经电话订房确认OK后，请于订房后3日内预付订金(房价的30%)，若保留时间内未收到汇款将取消订房。', '電話でのご予約確認後、3日以内にデポジット(室料の30%)をお支払いください。')}</li>
                                <li style={{ marginBottom: '0.8rem' }}>{tr('匯款後請務必來電告知帳號後五碼，以便確認。', 'After remittance, please call to inform us of the last 5 digits of your account number.', '汇款后请务必来电告知帐号后五码，以便确认。', 'お振込後、口座番号の下5桁をお電話でお知らせください。')}</li>
                                <li style={{ marginBottom: '0.8rem' }}>{tr('收到訂金後將為您保留房間，餘款到付。', 'After receiving the deposit, we will reserve the room for you, the balance is payable on arrival.', '收到订金后将为您保留房间，余款到付。', 'デポジットお支払い後、お部屋を確保いたします。残金は到着時にお支払いください。')}</li>
                            </ol>
                            <p style={{ color: '#D32F2F', fontSize: '0.95rem', fontWeight: '600', marginBottom: '2rem' }}>{tr('※訂房時間早上09:00至下午17:30，請於訂房時間來電。', '※Booking hours are from 09:00 AM to 05:30 PM, please call during these hours.', '※订房时间早上09:00至下午17:30，请于订房时间来电。', '※ご予約受付時間は午前09:00から午後05:30までです。')}</p>

                            <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>{tr('【注意事項】', '【Precautions】', '【注意事项】', '【注意事項】')}</h4>
                            <ol style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '0.5rem' }}>{tr('禁止攜帶寵物。', 'No pets allowed.', '禁止携带宠物。', 'ペットの同伴は禁止されています。')}</li>
                                <li style={{ marginBottom: '0.5rem' }}>{tr('室內全面禁止酒、吸煙、嚼檳榔。', 'Drinking, smoking, and chewing betel nuts are strictly prohibited indoors.', '室内全面禁止酒、吸烟、嚼槟榔。', '室内での飲酒、喫煙、ビンロウの噛みタバコは固く禁じられています。')}</li>
                                <li style={{ marginBottom: '0.5rem' }}>{tr('入住時請出示身分證件以供登記，並繳清餘款。', 'Please show your ID card for registration when checking in, and pay the balance.', '入住时请出示身分证件以供登记，并缴清余款。', 'チェックイン時に身分証明書をご提示の上、残金をお支払いください。')}</li>
                                <li style={{ marginBottom: '0.5rem' }}>{tr('晚間10:00過後請降低音量，勿大聲喧嘩。', 'Please lower your volume after 10:00 PM and do not make loud noises.', '晚间10:00过后请降低音量，勿大声喧哗。', '午後10時以降は音量を下げ、大声を出さないでください。')}</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                     <a href="tel:+88682320048" className="btn-book" style={{ display: 'inline-block', textDecoration: 'none', padding: '1.2rem 4rem', fontSize: '1.2rem', borderRadius: '30px', boxShadow: '0 10px 25px rgba(139, 69, 19, 0.25)', transition: 'all 0.3s' }}>
                         {tr('立即來電訂房', 'Call to Book', '立即来电订房', '今すぐ電話予約')}
                     </a>
                </div>
            </div>
        </main>
    );
};
