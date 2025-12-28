import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Beyaz Kartal</h3>
            <p className="text-slate-400 leading-relaxed">
              Modern yaşam alanları inşa ederek geleceği şekillendiriyoruz. Güven, kalite ve estetik anlayışımızla sektörde fark yaratıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3">
              <li><Link to="/kurumsal" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link to="/projeler" className="hover:text-white transition-colors">Projelerimiz</Link></li>
              <li><Link to="/haberler" className="hover:text-white transition-colors">Haberler & Duyurular</Link></li>
              <li><Link to="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>İstanbul, Türkiye<br />Merkez Ofis</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+90 (212) 555 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@beyazkartal.com.tr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Bülten</h4>
            <p className="text-sm text-slate-400 mb-4">Yeni projelerimizden haberdar olmak için bültenimize abone olun.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="bg-slate-800 border-none rounded px-4 py-2 w-full focus:ring-1 focus:ring-primary text-white placeholder:text-slate-500"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded transition-colors">
                Kayıt
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2025 Beyaz Kartal İnşaat. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
