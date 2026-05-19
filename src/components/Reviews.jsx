import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Reviews.css';

export const Reviews = () => {
    const { lang } = useLanguage();

    const reviews = [
        { name: "John D.", rating: 5, source: "Google", text: { en: "Absolutely beautiful hotel! The traditional architecture mixed with modern luxury is perfect.", zh: "非常美麗的飯店！傳統建築與現代奢華的完美結合。", cn: "非常美丽的饭店！传统建筑与现代奢华的完美结合。", ja: "絶対に美しいホテル！伝統的な建築とモダンな豪華さの完璧な組み合わせ。" } },
        { name: "Sarah L.", rating: 5, source: "Agoda", text: { en: "The 360° virtual tour convinced me to book, and seeing it in person was even better!", zh: "360°實境導覽讓我決定預訂，親眼看到更是驚豔！", cn: "360°实境导览让我决定预订，亲眼看到更是惊艳！", ja: "360°バーチャルツアーを見て予約しましたが、実際に見るとさらに良かったです！" } },
        { name: "Chen W.", rating: 5, source: "Booking.com", text: { en: "Best location in Kinmen. The rooms are incredibly spacious and the staff is wonderful.", zh: "金門最佳住宿地點。房間非常寬敞，工作人員非常棒。", cn: "金门最佳住宿地点。房间非常宽敞，工作人员非常棒。", ja: "金門で最高のロケーション。部屋は信じられないほど広く、スタッフは素晴らしいです。" } },
        { name: "Mika T.", rating: 5, source: "Google", text: { en: "A highly recommended experience. It feels like staying inside a living museum.", zh: "強烈推薦的住宿體驗。感覺就像住在活著的博物館裡。", cn: "强烈推荐的住宿体验。感觉就像住在活着的博物馆里。", ja: "強くお勧めする体験。生きている博物館の中に滞在しているような気分です。" } },
    ];

    const title = {
        en: "What Our Guests Say",
        zh: "旅客真實評價",
        cn: "旅客真实评价",
        ja: "お客様の声"
    };

    const renderSourceBadge = (source) => {
        if (source === 'Google') {
            return (
                <span style={{ 
                    color: '#4285F4', 
                    fontWeight: 'bold', 
                    fontSize: '0.8rem',
                    background: '#e8f0fe',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginLeft: 'auto'
                }}>
                    <i className="fab fa-google" style={{ fontSize: '0.85rem' }}></i> Google
                </span>
            );
        }
        if (source === 'Agoda') {
            return (
                <span style={{ 
                    color: '#e01a4f', 
                    fontWeight: 'bold', 
                    fontSize: '0.8rem',
                    background: '#fff0f3',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginLeft: 'auto'
                }}>
                    <span style={{ display: 'inline-flex', gap: '2px', alignItems: 'center' }}>
                        <span style={{width:'5px', height:'5px', borderRadius:'50%', background:'#87c440'}}></span>
                        <span style={{width:'5px', height:'5px', borderRadius:'50%', background:'#f5ab2d'}}></span>
                        <span style={{width:'5px', height:'5px', borderRadius:'50%', background:'#e72826'}}></span>
                    </span>
                    Agoda
                </span>
            );
        }
        if (source === 'Booking.com') {
            return (
                <span style={{ 
                    color: 'white', 
                    fontWeight: 'bold', 
                    fontSize: '0.8rem',
                    background: '#003580',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    marginLeft: 'auto'
                }}>
                    Booking
                </span>
            );
        }
        return null;
    };

    return (
        <section className="reviews-section reveal-up">
            <div className="section-title">
                <h2>{title[lang] || title.zh}</h2>
                <div className="underline"></div>
            </div>
            
            <div className="reviews-marquee-container">
                <div className="reviews-marquee">
                    {/* Render twice for continuous infinite scroll */}
                    {[...reviews, ...reviews].map((review, idx) => (
                        <div key={idx} className="review-card">
                            <div className="review-header">
                                <div className="review-avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="review-meta">
                                    <h4>{review.name}</h4>
                                    <div className="stars">
                                        {'★'.repeat(review.rating)}
                                    </div>
                                </div>
                                {renderSourceBadge(review.source)}
                            </div>
                            <p className="review-text">"{review.text[lang] || review.text.zh}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
