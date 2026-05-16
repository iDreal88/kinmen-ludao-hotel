import React, { useEffect } from 'react';

export const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext]);

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose}><i className="fas fa-times"></i></button>
            <button className="lightbox-prev" onClick={e => { e.stopPropagation(); onPrev(); }}><i className="fas fa-chevron-left"></i></button>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                <img src={images[currentIndex]} alt={`Photo ${currentIndex + 1}`} className="lightbox-img" />
            </div>
            <button className="lightbox-next" onClick={e => { e.stopPropagation(); onNext(); }}><i className="fas fa-chevron-right"></i></button>
            <div className="lightbox-counter">{currentIndex + 1} / {images.length}</div>
        </div>
    );
};
