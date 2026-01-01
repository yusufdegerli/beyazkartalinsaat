import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-20 pb-10 border-t border-navy-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 font-serif tracking-tight">Beyaz Kartal</h3>
            <p className="text-silver leading-relaxed font-light">
              Modern yaşam alanları inşa ederek geleceği şekillendiriyoruz. Güven, kalite ve estetik anlayışımızla sektörde fark yaratıyoruz.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"><Facebook size={18} /></a>
              <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"><Twitter size={18} /></a>
              <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-8 font-serif">Hızlı Erişim</h4>
            <ul className="space-y-4">
              <li><Link to="/kurumsal" className="text-silver hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Hakkımızda</Link></li>
              <li><Link to="/projeler" className="text-silver hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Projelerimiz</Link></li>
              <li><Link to="/haberler" className="text-silver hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Haberler</Link></li>
              <li><Link to="/iletisim" className="text-silver hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>İletişim</Link></li>
              <li><Link to="/ik/basvuru" className="text-silver hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Kariyer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-8 font-serif">İletişim</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="bg-navy-800 p-3 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Adres</span>
                  <span className="text-silver text-sm">Büyükdere Cad. No:123<br />Şişli, İstanbul</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                 <div className="bg-navy-800 p-3 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Telefon</span>
                  <span className="text-silver text-sm">+90 (212) 555 00 00</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                 <div className="bg-navy-800 p-3 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">E-posta</span>
                  <span className="text-silver text-sm">info@beyazkartal.com.tr</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-8 font-serif">Bülten</h4>
            <p className="text-sm text-silver mb-6 leading-relaxed">
              Yeni projelerimiz, lansman fırsatları ve duyurulardan haberdar olmak için e-bültenimize kayıt olun.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="bg-navy-800 border border-navy-700 rounded-sm px-4 py-3 w-full focus:ring-1 focus:ring-primary focus:border-primary outline-none text-white placeholder:text-slate-500 transition-all"
              />
              <button className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-3 rounded-sm transition-all w-full shadow-lg shadow-primary/20">
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver">© 2025 Beyaz Kartal İnşaat. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-silver">
             <Link to="/kvkk" className="hover:text-white transition-colors">KVKK</Link>
             <Link to="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</Link>
             <Link to="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
