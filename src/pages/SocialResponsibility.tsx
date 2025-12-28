import { PageTransition } from '../components/Layout';
import { Heart, BookOpen, TreePine } from 'lucide-react';

const SocialResponsibility = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Sosyal Sorumluluk</h1>
            <p className="text-lg text-slate-600">
              Topluma değer katmak, işimizin bir parçası değil, var oluş sebebimizdir. Eğitimden çevreye, 
              kültürden sanata birçok alanda sürdürülebilir projeler üretiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-48 bg-green-100 flex items-center justify-center">
                  <TreePine className="w-20 h-20 text-green-600" />
               </div>
               <div className="p-8">
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Geleceğe Nefes</h3>
                 <p className="text-slate-600 mb-4">
                   Her konut projemiz için 1000 fidan dikiyor, çocuklarımıza daha yeşil bir dünya bırakmak için çalışıyoruz.
                 </p>
                 <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Çevre</span>
               </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-blue-600" />
               </div>
               <div className="p-8">
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Eğitime Destek</h3>
                 <p className="text-slate-600 mb-4">
                   Köy okullarını yeniliyor, kütüphaneler kuruyor ve başarılı öğrencilere burs imkanı sağlıyoruz.
                 </p>
                 <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Eğitim</span>
               </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-48 bg-red-100 flex items-center justify-center">
                  <Heart className="w-20 h-20 text-red-600" />
               </div>
               <div className="p-8">
                 <h3 className="text-xl font-bold text-slate-900 mb-3">İyilik Hareketi</h3>
                 <p className="text-slate-600 mb-4">
                   İhtiyaç sahibi ailelere düzenli gıda ve giysi yardımı yapıyor, toplumsal dayanışmayı güçlendiriyoruz.
                 </p>
                 <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">Yardımlaşma</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default SocialResponsibility;
