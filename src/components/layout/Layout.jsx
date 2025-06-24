import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import HeaderPage from './HeaderPage';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Determine which header to show based on the current path
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="flex flex-col min-h-screen">
      {isHomePage ? <Header /> : <HeaderPage />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;