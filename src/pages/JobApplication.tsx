import { PageTransition } from '../components/Layout';
import { Upload, Send } from 'lucide-react';

const JobApplication = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">İş Başvuru Formu</h1>
            <p className="text-slate-600">
              Beyaz Kartal İnşaat ailesine katılmak için aşağıdaki formu eksiksiz doldurunuz. 
              Başvurunuz İnsan Kaynakları departmanımız tarafından titizlikle değerlendirilecektir.
            </p>
          </div>

          <form className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            
            {/* 1. Kişisel Bilgiler */}
            <div className="p-8 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                Kişisel Bilgiler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Adınız</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Soyadınız</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">T.C. Kimlik No</label>
                  <input type="text" maxLength={11} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Doğum Tarihi</label>
                  <input type="date" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Cinsiyet</label>
                  <select className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option value="">Seçiniz</option>
                    <option value="kadin">Kadın</option>
                    <option value="erkek">Erkek</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Askerlik Durumu</label>
                  <select className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option value="">Seçiniz</option>
                    <option value="yapildi">Yapıldı</option>
                    <option value="tecilli">Tecilli</option>
                    <option value="muaf">Muaf</option>
                    <option value="ilgisiz">İlişiği Yok</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. İletişim Bilgileri */}
            <div className="p-8 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                İletişim Bilgileri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Cep Telefonu</label>
                  <input type="tel" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="05XX XXX XX XX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-posta Adresi</label>
                  <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div className="md:col-span-2">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">İl</label>
                        <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">İlçe</label>
                        <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                   </div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Açık Adres</label>
                   <textarea rows={3} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"></textarea>
                </div>
              </div>
            </div>

            {/* 3. Başvuru Bilgileri */}
            <div className="p-8 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">3</span>
                Başvuru Detayları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Başvurulan Bölüm</label>
                  <select className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option value="">Seçiniz</option>
                    <option value="muhendislik">Mühendislik / Mimarlık</option>
                    <option value="saha">Saha Operasyonları</option>
                    <option value="idari">İdari İşler / Ofis</option>
                    <option value="finans">Muhasebe / Finans</option>
                    <option value="satis">Satış ve Pazarlama</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Çalışma Şekli</label>
                  <select className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option value="tam">Tam Zamanlı</option>
                    <option value="yari">Yarı Zamanlı</option>
                    <option value="staj">Stajyer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Talep Edilen Net Ücret (TL)</label>
                  <input type="number" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Vardiyalı çalışabilir misiniz?</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="vardiya" className="w-4 h-4 text-primary focus:ring-primary" />
                      <span>Evet</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="vardiya" className="w-4 h-4 text-primary focus:ring-primary" />
                      <span>Hayır</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Eğitim ve Yabancı Dil */}
            <div className="p-8 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">4</span>
                Eğitim ve Nitelikler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Son Mezun Olunan Okul</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Bölüm</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mezuniyet Yılı</label>
                  <input type="number" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
              </div>
              
              <h3 className="text-sm font-bold text-slate-900 mb-4 border-t border-slate-200 pt-4">Yabancı Dil Bilgisi</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Yabancı Dil</label>
                    <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Örn: İngilizce" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Seviye</label>
                    <select className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                      <option value="">Seçiniz</option>
                      <option value="baslangic">Başlangıç</option>
                      <option value="orta">Orta</option>
                      <option value="ileri">İleri</option>
                    </select>
                 </div>
              </div>
            </div>

            {/* 5. İş Tecrübesi */}
            <div className="p-8 border-b border-slate-100">
               <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">5</span>
                İş Tecrübesi (Son İşyeri)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Firma Adı</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Pozisyon / Unvan</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Çalışma Süresi</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Örn: 2 Yıl" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ayrılma Nedeni</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
              </div>
            </div>

            {/* 6. Ek Bilgiler */}
            <div className="p-8 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">6</span>
                Ek Bilgiler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-4">Referans</h3>
                    <div className="space-y-4">
                       <input type="text" placeholder="Ad Soyad" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                       <input type="tel" placeholder="Telefon" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                    </div>
                 </div>
                 <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-4">Acil Durum Kişisi</h3>
                    <div className="space-y-4">
                       <input type="text" placeholder="Ad Soyad / Yakınlık" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                       <input type="tel" placeholder="Telefon" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                    </div>
                 </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">CV Yükle (PDF, DOCX)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-white transition-colors cursor-pointer group">
                  <Upload className="mx-auto h-10 w-10 text-slate-400 group-hover:text-primary transition-colors" />
                  <p className="mt-2 text-sm text-slate-600">Dosyayı buraya sürükleyin veya <span className="text-primary font-medium">seçmek için tıklayın</span></p>
                  <p className="text-xs text-slate-400 mt-1">Maksimum 5MB</p>
                </div>
              </div>
            </div>

            {/* Onay ve Gönder */}
            <div className="p-8">
              <label className="flex items-start gap-3 mb-8 cursor-pointer group">
                 <input type="checkbox" required className="mt-1 w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
                 <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                   Kişisel verilerimin KVKK kapsamında işlenmesini ve saklanmasını, verdiğim bilgilerin doğruluğunu kabul ediyorum.
                 </span>
              </label>

              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]">
                <Send size={20} />
                Başvuruyu Gönder
              </button>
            </div>

          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default JobApplication;
