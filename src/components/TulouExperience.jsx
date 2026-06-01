import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TulouExperience = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: '⭕',
            titleKey: 'tulou_card1_title',
            descKey: 'tulou_card1_desc',
            tagKey: 'tulou_card1_tag'
        },
        {
            icon: '🍃',
            titleKey: 'tulou_card2_title',
            descKey: 'tulou_card2_desc',
            tagKey: 'tulou_card2_tag'
        },
        {
            icon: '🪑',
            titleKey: 'tulou_card3_title',
            descKey: 'tulou_card3_desc',
            tagKey: 'tulou_card3_tag'
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
                            <span className="tulou-card-tag">{t(feat.tagKey)}</span>
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
                        <h3 className="traditional-font">{t('tulou_banner_title')}</h3>
                        <p style={{ fontStyle: 'italic', opacity: 0.95 }}>
                            {t('tulou_banner_desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
