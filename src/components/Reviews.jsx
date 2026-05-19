import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Reviews.css';

export const Reviews = () => {
    const { lang } = useLanguage();

    const reviews = [
        { 
            name: "Sarah L.", 
            rating: 5, 
            source: "Agoda", 
            text: { 
                en: "Absolutely beautiful hotel! The traditional architecture mixed with modern luxury is perfect.", 
                zh: "傳統閩南式建築與現代內部裝潢極具特色！寬敞又乾淨，極力推薦！", 
                cn: "传统闽南式建筑与现代内部装潢极具特色！宽敞又干净，极力推荐！", 
                ja: "伝統的な閩南様式の建築とモダンな内装がとてもユニーク！広くて清潔で、本当にお勧めです！" 
            } 
        },
        { 
            name: "Michael B.", 
            rating: 5, 
            source: "Trip.com", 
            text: { 
                en: "The room is incredibly spacious and family-friendly. Excellent service and prime location. Highly rated on Trip.com!", 
                zh: "客房空間非常大，對家庭出遊非常友善。服務人員熱情，地理位置佳。在Trip.com上評價很高，名不虛傳！", 
                cn: "客房空间非常大，对家庭出游非常友善。服务人员热情，地理位置佳。在Trip.com上评价很高，名不虚传！", 
                ja: "客室は非常に広く、家族旅行にとても最適です。スタッフの対応も親切で、ロケーションも抜群です！" 
            } 
        },
        { 
            name: "陳建宏", 
            rating: 5, 
            source: "ezTravel", 
            text: { 
                en: "Booked through ezTravel for our Kinmen trip. Quiet courtyard, bright rooms, and the traditional breakfast was delicious!", 
                zh: "用易遊網搭配高鐵跟行程來金門住陸島，非常滿意！庭院清幽，房間採光好，早餐傳統米粉湯很好吃！", 
                cn: "用易游网搭配高铁跟行程来金门住陆岛，非常满意！庭院清幽，房间采光好，早餐传统米粉汤很好吃！", 
                ja: "ezTravelで予約して金門島を訪れました。静かな中庭、明るい部屋、そして伝統的な朝食がとても美味しかったです！" 
            } 
        },
        { 
            name: "Mika T.", 
            rating: 5, 
            source: "Agoda", 
            text: { 
                en: "A highly recommended experience. It feels like staying inside a living museum with superb amenities.", 
                zh: "強烈推薦的住宿體驗。感覺就像住在活著的博物館裡，設施一流，服務周到。", 
                cn: "强烈推荐的住宿体验。感觉就像住在活着的博物馆里，设施一流，服务周到。", 
                ja: "強くお勧めする体験。生きている博物館の中に滞在しているような気分で、設備も素晴らしいです！" 
            } 
        },
    ];

    const title = {
        en: "What Our Guests Say",
        zh: "旅客真實評價",
        cn: "旅客真实评价",
        ja: "お客様の声"
    };

    const renderSourceBadge = (source) => {
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
        if (source === 'Trip.com') {
            return (
                <span style={{ 
                    color: '#1a73e8', 
                    fontWeight: 'bold', 
                    fontSize: '0.8rem',
                    background: '#e8f0fe',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <i className="fas fa-plane" style={{ fontSize: '0.75rem' }}></i> Trip.com
                </span>
            );
        }
        if (source === 'ezTravel') {
            return (
                <span style={{ 
                    color: '#f5222d', 
                    fontWeight: 'bold', 
                    fontSize: '0.8rem',
                    background: '#fff1f0',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <i className="fas fa-star" style={{ fontSize: '0.75rem' }}></i> ezTravel
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
