import { PageTransition } from '../components/Layout';
import { Quote } from 'lucide-react';

const ChairmanMessage = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">Yönetim Kurulu Başkanı'nın Mesajı</h1>
            
            <div className="flex flex-col md:flex-row gap-12 items-start">
               {/* Chairman Photo Placeholder */}
               <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden shadow-lg relative">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Yönetim Kurulu Başkanı" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-slate-900">Ahmet Yılmaz</h3>
                    <p className="text-slate-500">Yönetim Kurulu Başkanı</p>
                  </div>
               </div>

               <div className="w-full md:w-2/3 relative">
                 <Quote className="absolute -top-6 -left-6 w-16 h-16 text-primary/10 -z-10" />
                 <div className="prose prose-slate prose-lg">
                   <p className="text-xl font-medium text-slate-800 leading-relaxed mb-6">
                     "Çeyrek asrı geride bıraktığımız bu yolculukta, en büyük sermayemiz müşterilerimizin bize duyduğu güven olmuştur."
                   </p>
                   <p>
                     Değerli Paydaşlarımız,
                   </p>
                   <p>
                     Beyaz Kartal İnşaat olarak yola çıktığımızda, sadece binalar inşa etmeyi değil, insanların huzurla yaşayacağı, 
                     anılarını biriktireceği yuvalar kurmayı hayal ettik. Bugün geriye dönüp baktığımda, binlerce ailenin mutluluğuna 
                     ortak olmanın gururunu yaşıyorum.
                   </p>
                   <p>
                     Sektörümüzdeki değişim ve dönüşümü yakından takip ederken, çevreye ve şehre olan sorumluluğumuzu asla unutmuyoruz. 
                     Sürdürülebilirlik, kalite ve estetik, projelerimizin vazgeçilmez üç sac ayağıdır.
                   </p>
                   <p>
                     Geleceğe emin adımlarla yürürken, köklerimizden aldığımız güçle yeniliklere açık olmaya, şehrimize değer katmaya 
                     ve sizlere en iyisini sunmaya devam edeceğiz.
                   </p>
                   <p className="mt-8 font-signature text-3xl text-slate-800">Ahmet Yılmaz</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ChairmanMessage;
