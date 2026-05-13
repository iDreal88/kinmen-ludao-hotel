import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const BookingWidget = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const submitBooking = () => {
        window.location.href = 'tel:+88682320048';
    };

    return (
        <div id="bookingWidget" className={`booking-widget ${isVisible ? 'visible' : ''}`}>
            <div className="widget-input">
                <label>{t('check_in')}</label>
                <input type="date" id="checkinDate" />
            </div>
            <div className="widget-input">
                <label>{t('check_out')}</label>
                <input type="date" id="checkoutDate" />
            </div>
            <div className="widget-input">
                <label>{t('guests')}</label>
                <select id="guestCount" defaultValue="2 Adults">
                    <option value="1 Adult">{t('guest_1')}</option>
                    <option value="2 Adults">{t('guest_2')}</option>
                    <option value="3 Adults">{t('guest_3')}</option>
                    <option value="4 Adults">{t('guest_4')}</option>
                </select>
            </div>
            <button className="btn-book" style={{ height: 'fit-content', alignSelf: 'flex-end' }} onClick={submitBooking}>
                {t('btn_search')}
            </button>
        </div>
    );
};
