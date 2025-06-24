import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HeaderPage from './components/layout/HeaderPage';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import DisclaimerModal from './components/common/DisclaimerModal';
import NotFoundPage from './pages/NotFoundPage';

// Layout with Home Header (white text for home page)
const HomeLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
    <DisclaimerModal />
  </div>
);

// Layout with Page Header (ink-black text for other pages)
const PageLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <HeaderPage />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route with home header */}
        <Route
          path="/"
          element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }
        />
        
        {/* Other routes with page header */}
        <Route
          path="/menu"
          element={
            <PageLayout>
              <MenuPage />
            </PageLayout>
          }
        />
        
        <Route
          path="/reservation"
          element={
            <PageLayout>
              <ReservationPage />
            </PageLayout>
          }
        />
        
        <Route
          path="/about"
          element={
            <PageLayout>
              <AboutPage />
            </PageLayout>
          }
        />
        
        <Route
          path="/contact"
          element={
            <PageLayout>
              <ContactPage />
            </PageLayout>
          }
        />
        
        <Route
          path="/gallery"
          element={
            <PageLayout>
              <GalleryPage />
            </PageLayout>
          }
        />
        
        {/* 404 route with page header */}
        <Route
          path="*"
          element={
            <PageLayout>
              <NotFoundPage />
            </PageLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;