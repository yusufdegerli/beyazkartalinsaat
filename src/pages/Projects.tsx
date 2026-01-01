import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/Layout';
import { ArrowRight, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { getProjects } from '../lib/sanityQueries';
import type { SanityProject } from '../lib/sanityQueries';
import { urlFor } from '../sanity/client';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'tamamlanan' | 'devam-eden'>('all');
  const [projects, setProjects] = useState<SanityProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from Sanity
    getProjects()
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setIsLoading(false);
      });
  }, []);

  // Check URL params for initial filter
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/tamamlanan')) setFilter('tamamlanan');
    else if (path.includes('/devam-eden')) setFilter('devam-eden');
    else setFilter('all');
  }, [window.location.pathname]);

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.status === filter
  );

  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h1 className="text-4xl font-bold text-slate-900">Projelerimiz</h1>
            
            {/* Filter Buttons */}
            <div className="flex bg-white p-1 rounded-lg shadow-sm border border-slate-200">
              <button 
                onClick={() => setFilter('all')}
                className={cn(
                  "px-6 py-2 rounded-md text-sm font-medium transition-all",
                  filter === 'all' ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                )}
              >
                Tümü
              </button>
              <button 
                onClick={() => setFilter('devam-eden')}
                className={cn(
                  "px-6 py-2 rounded-md text-sm font-medium transition-all",
                  filter === 'devam-eden' ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                )}
              >
                Devam Eden
              </button>
              <button 
                onClick={() => setFilter('tamamlanan')}
                className={cn(
                  "px-6 py-2 rounded-md text-sm font-medium transition-all",
                  filter === 'tamamlanan' ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                )}
              >
                Tamamlanan
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                 <Link 
                   to={`/projeler/${project.slug.current}`} 
                   key={project._id} 
                   className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                 >
                   <div className="aspect-[4/3] overflow-hidden relative">
                     <div 
                       className="w-full h-full bg-slate-200 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center" 
                       style={{backgroundImage: `url('${urlFor(project.mainImage).url()}')`}} 
                     />
                     <div className="absolute top-4 left-4">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm",
                          project.status === 'devam-eden' ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
                        )}>
                          {project.status === 'devam-eden' ? 'Devam Ediyor' : 'Tamamlandı'}
                        </span>
                     </div>
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                   </div>
                   
                   <div className="p-6 flex flex-col flex-grow">
                     {project.location && (
                       <div className="flex items-center text-slate-500 text-sm mb-3">
                         <MapPin size={14} className="mr-1" />
                         {project.location}
                       </div>
                     )}
                     <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                       {project.title}
                     </h3>
                     <p className="text-slate-600 line-clamp-3 mb-6 text-sm flex-grow">
                       {project.description}
                     </p>
                     
                     <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-primary font-medium text-sm">
                       <span>Detayları İncele</span>
                       <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                     </div>
                   </div>
                 </Link>
              ))}
            </div>
          )}
          
          {!isLoading && filteredProjects.length === 0 && (
             <div className="text-center py-20">
                <p className="text-slate-500 text-lg">Bu kategoride henüz proje bulunmamaktadır.</p>
             </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;