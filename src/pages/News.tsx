import { PageTransition } from '../components/Layout';

const News = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Bizden Haberler</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[1, 2, 3].map((i) => (
               <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6">
                 <div className="w-full md:w-48 h-32 bg-slate-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c54be3852f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}></div>
                 <div>
                   <span className="text-sm text-primary font-semibold">28 Aralık 2025</span>
                   <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">Yeni Projemiz Lansmana Çıktı</h3>
                   <p className="text-slate-600 line-clamp-2">Beyaz Kartal İnşaat'ın en yeni projesi Kartal Vadi, düzenlenen görkemli bir törenle tanıtıldı.</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default News;
