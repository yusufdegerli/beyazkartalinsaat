import { PageTransition } from '../components/Layout';

const Board = () => {
  const members = [
    { name: "Ahmet Yılmaz", title: "Yönetim Kurulu Başkanı", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Ayşe Kaya", title: "Yönetim Kurulu Başkan Yrd.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Mehmet Demir", title: "Yönetim Kurulu Üyesi", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <PageTransition>
       <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">Yönetim Kurulu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {members.map((member, index) => (
               <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-center pb-6">
                 <div className="aspect-square bg-slate-200">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mt-6">{member.name}</h3>
                 <p className="text-primary font-medium">{member.title}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Board;
