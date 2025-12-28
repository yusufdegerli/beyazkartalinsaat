import { useParams, useNavigate, Link } from 'react-router-dom';
import { PageTransition } from '../components/Layout';
import { projects } from '../lib/data';
import { Calendar, Ruler, Building, Home, MapPin, ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Proje Bulunamadı</h1>
        <button onClick={() => navigate('/projeler')} className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Projelere Dön
        </button>
      </div>
    );
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % project.images.length);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <PageTransition>
      <div className="bg-slate-50 min-h-screen pb-24">
        
        {/* Hero / Cover Image */}
        <div className="relative h-[60vh] min-h-[500px]">
           <div className="absolute inset-0 bg-slate-900">
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-60"
               style={{backgroundImage: `url('${project.coverImage}')`}}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
           </div>
           
           <div className="absolute bottom-0 left-0 w-full p-8 pb-16">
             <div className="container mx-auto">
               <button onClick={() => navigate(-1)} className="text-white/80 hover:text-white mb-6 flex items-center gap-2 transition-colors">
                 <ArrowLeft size={20} /> Geri Dön
               </button>
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div>
                   <div className="flex items-center gap-3 mb-3">
                     <span className={`px-3 py-1 rounded-full text-sm font-semibold ${project.category === 'devam-eden' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-green-500/20 text-green-300 border border-green-500/30'}`}>
                       {project.category === 'devam-eden' ? 'Devam Eden Proje' : 'Tamamlanan Proje'}
                     </span>
                     <span className="flex items-center gap-1 text-slate-300 text-sm">
                       <MapPin size={14} /> {project.location}
                     </span>
                   </div>
                   <h1 className="text-4xl md:text-6xl font-bold text-white">{project.title}</h1>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Description & Gallery */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Description Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Proje Hakkında</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Galeri</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                      onClick={() => setSelectedImageIndex(idx)}
                    >
                      <img src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Features */}
            <div className="lg:col-span-1">
               <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary sticky top-24">
                 <h3 className="text-xl font-bold text-slate-900 mb-6">Proje Özellikleri</h3>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                         <Calendar size={20} />
                       </div>
                       <div>
                         <p className="text-sm text-slate-500">Başlangıç Tarihi</p>
                         <p className="font-semibold text-slate-900">{project.features.startDate}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                         <Calendar size={20} />
                       </div>
                       <div>
                         <p className="text-sm text-slate-500">Teslim Tarihi</p>
                         <p className="font-semibold text-slate-900">{project.features.deliveryDate}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                         <Ruler size={20} />
                       </div>
                       <div>
                         <p className="text-sm text-slate-500">İnşaat Alanı</p>
                         <p className="font-semibold text-slate-900">{project.features.totalArea}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                         <Building size={20} />
                       </div>
                       <div>
                         <p className="text-sm text-slate-500">Blok Sayısı</p>
                         <p className="font-semibold text-slate-900">{project.features.blockCount} Blok</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                         <Home size={20} />
                       </div>
                       <div>
                         <p className="text-sm text-slate-500">Bağımsız Bölüm</p>
                         <p className="font-semibold text-slate-900">{project.features.apartmentCount} Daire</p>
                       </div>
                    </div>
                 </div>

                 <Link 
                    to="/iletisim"
                    className="block w-full mt-8 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors text-center"
                 >
                    Detaylı Bilgi Al
                 </Link>
               </div>
            </div>

          </div>
        </div>

        {/* Lightbox / Modal for Images */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedImageIndex(null)}
            >
              <button className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={32} />
              </button>
              
              <button 
                className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors hidden md:block"
                onClick={handlePrevImage}
              >
                <ChevronLeft size={40} />
              </button>
              
              <button 
                className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors hidden md:block"
                onClick={handleNextImage}
              >
                <ChevronRight size={40} />
              </button>

              <motion.img 
                key={selectedImageIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={project.images[selectedImageIndex]} 
                alt="Full size" 
                className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
