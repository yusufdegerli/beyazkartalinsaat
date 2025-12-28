import { ArrowRight, Building2, Users, Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/Layout';

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-slate-900">
             <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Geleceği <span className="text-primary-foreground">İnşa Ediyoruz</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light">
            Modern mimari, sürdürülebilir yaşam alanları ve güvenilir yapılarla şehrin silüetine imza atıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/projeler" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-medium text-lg transition-all transform hover:scale-105">
              Projelerimizi İnceleyin
            </Link>
            <Link to="/iletisim" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-md font-medium text-lg transition-all backdrop-blur-sm">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Building2, count: "50+", label: "Tamamlanan Proje" },
              { icon: Users, count: "1000+", label: "Mutlu Aile" },
              { icon: Trophy, count: "25", label: "Yıllık Tecrübe" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow border border-slate-100">
                <stat.icon className="w-12 h-12 text-primary mb-4" />
                <span className="text-4xl font-bold text-slate-900 mb-2">{stat.count}</span>
                <span className="text-slate-600 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Öne Çıkan Projeler</h2>
              <p className="text-slate-600 max-w-xl">
                Her detayı özenle düşünülmüş, konfor ve estetiği buluşturan en yeni projelerimiz.
              </p>
            </div>
            <Link to="/projeler" className="hidden md:flex items-center text-primary font-medium hover:gap-2 transition-all">
              Tüm Projeler <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <div className={`w-full h-full bg-slate-200 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center`} 
                       style={{backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}} 
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase">Konut</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">Kartal Residence {i}</h3>
                  <p className="text-slate-500 mb-4 line-clamp-2">
                    Şehrin merkezinde, doğayla iç içe, modern mimarinin en güzel örneği.
                  </p>
                  <Link to={`/projeler/project-${i}`} className="inline-flex items-center text-slate-900 font-medium hover:text-primary transition-colors">
                    Detayları Gör <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/projeler" className="inline-flex items-center text-primary font-medium">
              Tüm Projeler <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Hayalinizdeki Eve Kavuşun</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Siz hayal edin, biz gerçekleştirelim. Projelerimiz hakkında detaylı bilgi almak için satış ofislerimizi ziyaret edin.
          </p>
          <Link to="/iletisim" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-md font-bold hover:bg-slate-100 transition-colors">
            İletişime Geçin
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
