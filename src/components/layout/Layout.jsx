import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import HeaderPage from './HeaderPage';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  
  // Update path state when location changes
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  
  // Determine which header to show
  const isHomePage = currentPath === '/' || currentPath === '';
  
  return (
    <div className="flex flex-col min-h-screen">
      {isHomePage ? <Header /> : <HeaderPage />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;