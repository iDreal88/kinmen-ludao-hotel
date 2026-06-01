import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TulouExperience = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: '⭕',
            titleKey: 'tulou_card1_title',
            descKey: 'tulou_card1_desc',
            tag: 'Aesthetic Heritage'
        },
        {
            icon: '🍃',
            titleKey: 'tulou_card2_title',
            descKey: 'tulou_card2_desc',
            tag: 'Green Architecture'
        },
        {
            icon: '🪑',
            titleKey: 'tulou_card3_title',
            descKey: 'tulou_card3_desc',
            tag: 'Indonesian Rattan'
        }
    ];

    return (
        <section id="tulou-experience" className="tulou-experience-section reveal-up">
            <div className="section-title">
                <h2>{t('tulou_section_title')}</h2>
                <div className="underline"></div>
                <p style={{ marginTop: '1.2rem', color: 'var(--text-light)', maxWidth: '700px', margin: '1.2rem auto 0', fontSize: '1.05rem' }}>
                    {t('tulou_section_subtitle')}
                </p>
            </div>

            <div className="tulou-experience-grid">
                {features.map((feat, index) => (
                    <div className="tulou-exp-card" key={index}>
                        <div className="tulou-card-header">
                            <span className="tulou-card-tag">{feat.tag}</span>
                            <span className="tulou-card-number">0{index + 1}</span>
                        </div>
                        <div className="tulou-card-body">
                            <div className="tulou-card-icon">{feat.icon}</div>
                            <h3 className="traditional-font">{t(feat.titleKey)}</h3>
                            <p>{t(feat.descKey)}</p>
                        </div>
                        <div className="tulou-card-shine"></div>
                    </div>
                ))}
            </div>

            <div className="tulou-visual-banner">
                <div className="tulou-visual-content">
                    <div className="tulou-visual-glass">
                        <h3 className="traditional-font">「天圓地方，大美陸島」</h3>
                        <p style={{ fontStyle: 'italic', opacity: 0.95 }}>
                            Blending a thousand years of traditional Clay Roundhouse fortified clay wall architecture with the breath of tropical rattan craft, we create an escape that speaks of protection, family, and peaceful meditation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
