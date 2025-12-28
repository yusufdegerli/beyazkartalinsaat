import { PageTransition } from '../components/Layout';

const Projects = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Projelerimiz</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for projects list */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
               <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                 <div className="h-64 bg-slate-200 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`}}></div>
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Kartal Residence {i}</h3>
                   <p className="text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
