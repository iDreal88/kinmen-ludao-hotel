import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { RoomDetail } from './pages/RoomDetail';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { FloatingChat } from './components/FloatingChat';
import { BookingModal } from './components/BookingModal';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          {/* Pre-load WeChat QR for instant display */}
          <img src={`https://quickchart.io/qr?text=${encodeURIComponent('https://u.wechat.com/IBaHOaNeCRs9YrZHnRoCttg')}&size=250`} style={{ display: 'none' }} alt="preload" />
          <Header />
          <div key={location.pathname} className="page-transition">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/room/:id" element={<RoomDetail />} />
            </Routes>
          </div>
          <Footer />
          <FloatingChat />
          <BookingModal />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
