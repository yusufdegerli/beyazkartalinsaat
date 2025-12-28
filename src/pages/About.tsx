import { PageTransition } from '../components/Layout';
import { Target, Shield, Zap } from 'lucide-react';

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
           <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
        </div>
        <h1 className="relative z-10 text-5xl font-bold text-white tracking-tight">Hakkımızda</h1>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
             <div className="lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="İnşaat Sahası" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-100 rounded-2xl -z-10 hidden lg:block"></div>
             </div>
             <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">25 Yıllık Tecrübe ile Geleceği İnşa Ediyoruz</h2>
                <div className="prose prose-slate lg:prose-lg">
                  <p>
                    Beyaz Kartal İnşaat olarak, kurulduğumuz günden bu yana inşaat sektöründe güven, kalite ve estetiğin simgesi olmayı başardık. 
                    Şehirlere değer katan, çevreye duyarlı ve insan odaklı projelerimizle yaşam standartlarını yükseltmeyi hedefliyoruz.
                  </p>
                  <p>
                    Uzman kadromuz ve yenilikçi bakış açımızla, sadece bina değil, komşuluk ilişkilerinin filizlendiği, çocukların güvenle büyüdüğü 
                    mutlu yuvalar inşa ediyoruz. Her projemizde teknolojinin en son imkanlarını kullanarak, sürdürülebilir bir gelecek için çalışıyoruz.
                  </p>
                </div>
             </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
               <Shield className="w-12 h-12 text-primary mb-6" />
               <h3 className="text-xl font-bold text-slate-900 mb-3">Güvenilirlik</h3>
               <p className="text-slate-600">Söz verdiğimiz zamanda, söz verdiğimiz kalitede teslimat yaparak müşterilerimizin güvenini her şeyin üzerinde tutuyoruz.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
               <Target className="w-12 h-12 text-primary mb-6" />
               <h3 className="text-xl font-bold text-slate-900 mb-3">Mükemmeliyet</h3>
               <p className="text-slate-600">Detaylara verdiğimiz önem ve işçilik kalitemizle, standartların ötesinde yaşam alanları oluşturuyoruz.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
               <Zap className="w-12 h-12 text-primary mb-6" />
               <h3 className="text-xl font-bold text-slate-900 mb-3">İnovasyon</h3>
               <p className="text-slate-600">Modern mimari trendleri ve inşaat teknolojilerini yakından takip ederek projelerimize entegre ediyoruz.</p>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;