import { PageTransition } from '../components/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">İletişim</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Adınız</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Soyadınız</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-posta</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mesajınız</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
                  Gönder
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8 py-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Merkez Ofis</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Adres</p>
                      <p className="text-slate-600">Büyükdere Cad. No:123<br/>Şişli, İstanbul</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Telefon</p>
                      <p className="text-slate-600">+90 (212) 555 00 00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">E-posta</p>
                      <p className="text-slate-600">info@beyazkartal.com.tr</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-64 bg-slate-200 rounded-xl overflow-hidden">
                {/* Map Placeholder */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.678129532886!2d28.9774635!3d41.0667086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzAwLjEiTiAyOMKwNTgnMzguOSJF!5e0!3m2!1sen!2str!4v1635789000000!5m2!1sen!2str" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
