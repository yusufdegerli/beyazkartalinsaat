import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import logoDark from '../assets/beyazkartallogo.png';
import logoLight from '../assets/beyazkartallogo_reverse.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const navLinks = [
    { name: 'Anasayfa', path: '/' },
    { 
      name: 'Kurumsal', 
      path: '/kurumsal',
      submenu: [
        { name: 'Hakkımızda', path: '/kurumsal/hakkimizda' },
        { name: 'Başkan’ın Mesajı', path: '/kurumsal/baskanin-mesaji' },
        { name: 'Yönetim Kurulu', path: '/kurumsal/yonetim-kurulu' },
        { name: 'Sosyal Sorumluluk', path: '/kurumsal/sosyal-sorumluluk' },
        { name: 'Kişisel Verilerin Korunması', path: '/kurumsal/kvkk' },
      ]
    },
    { 
      name: 'Projeler', 
      path: '/projeler',
      submenu: [
        { name: 'Tamamlanan Projeler', path: '/projeler/tamamlanan' },
        { name: 'Devam Eden Projeler', path: '/projeler/devam-eden' },
      ]
    },
    { 
      name: 'İnsan Kaynakları', 
      path: '/insan-kaynaklari',
      submenu: [
        { name: 'İK Politikası', path: '/ik/politika' },
        { name: 'İş Başvuru Formu', path: '/ik/basvuru' },
        { name: 'Çalışan Adayı Aydınlatma Metni', path: '/ik/aydinlatma-metni' },
      ]
    },
    { name: 'Haberler', path: '/haberler' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  // Text color logic: White at top (transparent bg), Dark when scrolled (white bg)
  const textColorClass = scrolled ? "text-navy-900" : "text-white";
  const hoverColorClass = scrolled ? "hover:text-primary" : "hover:text-primary/80";

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-transparent',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-gradient-to-b from-navy-900/80 to-transparent py-4'
      )}
    >
      <div className="w-full px-2 md:px-4 flex justify-between items-center">
        {/* Logo Container */}
        <Link to="/" className="relative z-50 -ml-2 h-20 w-48 flex items-center">
          <div className="relative w-full h-full">
            {/* Dark Logo (Scrolled) */}
            <motion.img 
              src={logoDark}
              alt="Beyaz Kartal Logo Dark" 
              initial={false}
              animate={{ opacity: scrolled ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-20 w-auto absolute left-0 top-0 object-contain"
            />
            {/* Light Logo (Top/Transparent) */}
            <motion.img 
              src={logoLight}
              alt="Beyaz Kartal Logo Light" 
              initial={false}
              animate={{ opacity: scrolled ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-20 w-auto absolute left-0 top-0 object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1 py-4",
                  textColorClass,
                  hoverColorClass
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
              </Link>
              
              {/* Desktop Submenu */}
              {link.submenu && (
                <div className="absolute top-full -left-4 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-2">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-6 py-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors border-l-2 border-transparent hover:border-primary"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn("lg:hidden p-2 z-50 transition-colors", scrolled ? "text-navy-900" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-8 pt-24 gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-100 last:border-none">
                  {link.submenu ? (
                    <div>
                      <button 
                        onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full text-lg font-bold text-navy-900 py-4"
                      >
                        {link.name}
                        <ChevronDown 
                          size={20} 
                          className={cn("transition-transform", activeSubmenu === link.name ? "rotate-180" : "")} 
                        />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50 rounded-lg mb-4"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="block py-3 px-4 text-slate-600 hover:text-primary"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="block text-lg font-bold text-navy-900 py-4 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;