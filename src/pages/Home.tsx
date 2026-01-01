import { ArrowRight, Building2, Users, Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import Hero3D from '../components/ui/Hero3D';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { getFeaturedProjects } from '../lib/sanityQueries';
import type { SanityProject } from '../lib/sanityQueries';
import { urlFor } from '../sanity/client';

const Home = () => {
  const heroRef = useRef(null);
  const [featuredProjects, setFeaturedProjects] = useState<SanityProject[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    getFeaturedProjects().then(setFeaturedProjects);
  }, []);

  return (
    <PageTransition>
      {/* Hero Section with Video & 3D */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-navy-900">
        
        {/* Video Background */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
        </motion.div>

        {/* 3D Element Overlay */}
        <Hero3D />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-8">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-normal font-serif py-4">
              Geleceği <span className="text-primary italic">İnşa Ediyoruz</span>
            </h1>
          </Reveal>
          
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Estetik, konfor ve güvenin buluştuğu noktada, yaşam standartlarınızı yükselten projeler üretiyoruz.
            </p>
          </Reveal>

          <Reveal width="100%" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/projeler" className="bg-white text-navy-900 hover:bg-slate-100 px-8 py-4 rounded-sm font-serif font-medium text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-white/20">
                Projelerimizi İnceleyin
              </Link>
              <Link to="/iletisim" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-sm font-serif font-medium text-lg transition-all backdrop-blur-sm hover:border-white">
                Bize Ulaşın
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Building2, count: "50+", label: "Tamamlanan Proje" },
              { icon: Users, count: "1000+", label: "Mutlu Aile" },
              { icon: Trophy, count: "25", label: "Yıllık Tecrübe" },
            ].map((stat, index) => (
              <Reveal key={index} delay={index * 0.2}>
                <div className="flex flex-col items-center p-8 bg-slate-50 rounded-sm border border-slate-100 hover:border-primary/20 transition-colors group text-center">
                  <div className="w-16 h-16 bg-navy-900 text-white flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <span className="text-5xl font-serif font-bold text-navy-900 mb-2">{stat.count}</span>
                  <span className="text-slate-600 font-medium tracking-wide uppercase text-sm">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">Öne Çıkan Projeler</h2>
              <p className="text-slate-600 max-w-xl text-lg">
                Her detayı özenle düşünülmüş, konfor ve estetiği buluşturan en yeni projelerimiz.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/projeler" className="hidden md:flex items-center text-navy-900 font-medium hover:gap-4 transition-all group">
                <span className="border-b border-navy-900 pb-0.5 group-hover:border-primary group-hover:text-primary transition-colors">Tüm Projeler</span> 
                <ArrowRight size={20} className="ml-2 group-hover:text-primary transition-colors" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project, i) => (
              <Reveal key={project._id} delay={i * 0.1}>
                <div className="group relative bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/0 z-10 transition-colors duration-500" />
                    <div className={`w-full h-full bg-slate-200 transition-transform duration-1000 group-hover:scale-110 bg-cover bg-center`} 
                         style={{backgroundImage: `url('${urlFor(project.mainImage).url()}')`}} 
                    />
                    <div className="absolute top-4 left-4 z-20">
                       <span className="bg-white/90 backdrop-blur text-navy-900 text-xs font-bold px-3 py-1 uppercase tracking-widest">
                         {project.status === 'devam-eden' ? 'Devam Eden' : 'Tamamlanan'}
                       </span>
                    </div>
                  </div>
                  <div className="p-8 relative z-20 bg-white -mt-10 mx-4 shadow-lg">
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-slate-500 mb-6 line-clamp-2 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <Link to={`/projeler/${project.slug.current}`} className="inline-flex items-center text-navy-900 font-semibold hover:text-primary transition-colors text-sm uppercase tracking-wide">
                      Projeyi İncele <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/projeler" className="inline-flex items-center text-navy-900 font-medium">
              Tüm Projeler <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Hayalinizdeki Yaşama <br/> <span className="text-blue-400">Adım Atın</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto font-light">
              Siz hayal edin, biz gerçekleştirelim. Projelerimiz hakkında detaylı bilgi almak için satış ofislerimizi ziyaret edin veya bize ulaşın.
            </p>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <Link to="/iletisim" className="inline-block bg-white text-navy-900 px-10 py-5 rounded-sm font-serif font-bold hover:bg-slate-100 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Bizimle İletişime Geçin
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
