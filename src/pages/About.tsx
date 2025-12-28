import { PageTransition } from '../components/Layout';

const About = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Kurumsal</h1>
          <div className="prose prose-slate lg:prose-xl max-w-none">
            <p>
              Beyaz Kartal İnşaat olarak 25 yılı aşkın süredir inşaat sektöründe güven ve kalitenin simgesi olduk. 
              Modern mimari anlayışımız, çevreye duyarlı projelerimiz ve insan odaklı yaklaşımımızla yaşam alanları inşa ediyoruz.
            </p>
            <p>
              Vizyonumuz, sadece bina yapmak değil, mutlu yuvalar ve sürdürülebilir topluluklar oluşturmaktır.
              Her projemizde en son teknolojileri kullanarak, estetik ve fonksiyonelliği bir araya getiriyoruz.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
