import { PageTransition } from '../components/Layout';
import { FileText } from 'lucide-react';

const Kvkk = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200">
             <div className="bg-primary/10 p-4 rounded-xl">
               <FileText className="w-8 h-8 text-primary" />
             </div>
             <div>
               <h1 className="text-3xl font-bold text-slate-900">Kişisel Verilerin Korunması</h1>
               <p className="text-slate-500">Son Güncelleme: 28 Aralık 2025</p>
             </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h3>1. Amaç ve Kapsam</h3>
            <p>
              Bu aydınlatma metni, Beyaz Kartal İnşaat ("Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 
              uyarınca, kişisel verilerinizin toplanması, işlenmesi, aktarılması ve saklanması konusundaki prensiplerimizi açıklamaktadır.
            </p>

            <h3>2. İşlenen Kişisel Veriler</h3>
            <p>
              Şirketimiz tarafından sunulan hizmetlerden faydalanmanız sırasında, aşağıda belirtilen kişisel verileriniz işlenebilmektedir:
            </p>
            <ul>
              <li>Kimlik Bilgileri (Ad, Soyad, T.C. Kimlik No)</li>
              <li>İletişim Bilgileri (Telefon, E-posta, Adres)</li>
              <li>Müşteri İşlem Bilgileri (Talep, Şikayet, Sözleşme Detayları)</li>
            </ul>

            <h3>3. Kişisel Verilerin İşlenme Amaçları</h3>
            <p>
              Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul>
              <li>Ürün ve hizmetlerimizin sunulması ve satış süreçlerinin yürütülmesi</li>
              <li>Müşteri ilişkileri yönetimi ve memnuniyetinin sağlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Pazarlama analiz çalışmalarının yürütülmesi (Açık rızanız olması halinde)</li>
            </ul>

            <h3>4. Haklarınız</h3>
            <p>
              KVKK'nın 11. maddesi uyarınca, şirketimize başvurarak kişisel verilerinizin;
              işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, 
              yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Kvkk;
