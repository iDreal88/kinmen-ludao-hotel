import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Attractions = () => {
    const { lang } = useLanguage();

    const data = [
        {
            id: 1,
            image: "/images/juguang_tower.jpg", 
            title: { zh: '莒光樓', cn: '莒光楼', en: 'Juguang Tower', ja: '莒光楼' },
            distance: { zh: '車程 10 分鐘', cn: '车程 10 分钟', en: '10 min drive', ja: '車で10分' },
            desc: {
                zh: '金門的象徵地標，登高可遠眺烈嶼及廈門風光，是來金門必訪的歷史景點。',
                cn: '金门的象征地标，登高可远眺烈屿及厦门风光，是来金门必访的历史景点。',
                en: 'An iconic landmark of Kinmen offering panoramic views of Little Kinmen and Xiamen.',
                ja: '金門の象徴的なランドマーク。頂上からは小金門やアモイの景色を一望できます。'
            },
            mapUrl: "https://www.google.com/maps/search/?api=1&query=莒光樓+金門"
        },
        {
            id: 2,
            image: "/images/zhaishan_tunnel.jpg", 
            title: { zh: '翟山坑道', cn: '翟山坑道', en: 'Zhaishan Tunnel', ja: '翟山坑道' },
            distance: { zh: '車程 15 分鐘', cn: '车程 15 分钟', en: '15 min drive', ja: '車で15分' },
            desc: {
                zh: '壯觀的A字型戰備水道，花崗岩洞穴倒影如夢似幻，感受鬼斧神工的震撼。',
                cn: '壮观的A字型战备水道，花岗岩洞穴倒影如梦似幻，感受鬼斧神工的震撼。',
                en: 'A majestic A-shaped military waterway reflecting Kinmen\'s unique wartime history.',
                ja: '壮大なA字型の軍事用水路。花崗岩の洞窟の反射が幻想的な雰囲気を醸し出します。'
            },
            mapUrl: "https://www.google.com/maps/search/?api=1&query=翟山坑道+金門"
        },
        {
            id: 3,
            image: "/images/shuitou_village.jpg", 
            title: { zh: '水頭聚落', cn: '水头聚落', en: 'Shuitou Village', ja: '水頭集落' },
            distance: { zh: '車程 12 分鐘', cn: '车程 12 分钟', en: '12 min drive', ja: '車で12分' },
            desc: {
                zh: '保留最完整的閩南傳統建築與洋樓群，古色古香，充滿濃厚的僑鄉風情。',
                cn: '保留最完整的闽南传统建筑与洋楼群，古色古香，充满浓厚的侨乡风情。',
                en: 'Well-preserved traditional Minnan architecture and beautiful western-style mansions.',
                ja: '保存状態の良い伝統的な閩南建築と美しい洋館が立ち並ぶノスタルジックな村。'
            },
            mapUrl: "https://www.google.com/maps/search/?api=1&query=水頭聚落+金門"
        }
    ];

    const sectionTitle = {
        zh: '探索金門', cn: '探索金门', en: 'Explore Kinmen', ja: '金門を探索する'
    };
    const sectionSubtitle = {
        zh: '發現飯店周邊的歷史與自然之美', cn: '发现饭店周边的历史与自然之美', en: 'Discover the history and beauty surrounding our hotel', ja: 'ホテル周辺の歴史と自然の美しさを発見'
    };

    return (
        <section id="attractions" className="reveal-up" style={{ backgroundColor: 'var(--bg)', paddingBottom: '6rem' }}>
            <div className="section-title">
                <h2>{sectionTitle[lang] || sectionTitle.zh}</h2>
                <div className="underline"></div>
                <p style={{ marginTop: '1rem', color: 'var(--text-light)' }}>{sectionSubtitle[lang] || sectionSubtitle.zh}</p>
            </div>
            <div className="attractions-grid">
                {data.map((item) => (
                    <div key={item.id} className="attraction-card">
                        <div className="attraction-img-wrapper">
                            <img src={item.image} alt={item.title[lang] || item.title.zh} loading="lazy" />
                            <div className="attraction-badge">
                                <i className="fas fa-car" style={{ marginRight: '5px' }}></i>
                                {item.distance[lang] || item.distance.zh}
                            </div>
                        </div>
                        <div className="attraction-content">
                            <h3 className="traditional-font">{item.title[lang] || item.title.zh}</h3>
                            <p>{item.desc[lang] || item.desc.zh}</p>
                            <a 
                                href={item.mapUrl} 
                                target="_blank" 
                                rel="noreferrer" 
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.2rem', padding: '0.5rem 1rem', background: 'var(--bg-alt)', color: 'var(--text)', textDecoration: 'none', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold', transition: 'all 0.2s', border: '1px solid rgba(139, 69, 19, 0.15)' }}
                                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'var(--btn-text)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-alt)'; e.currentTarget.style.color = 'var(--text)'; }}
                            >
                                <i className="fas fa-map-marker-alt" style={{ color: '#EA4335' }}></i> 
                                {lang === 'en' ? 'View on Map' : 
                                 lang === 'ja' ? '地図で見る' : 
                                 lang === 'cn' ? '在地图上查看' : '在地圖上查看'}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
