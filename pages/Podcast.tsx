import React from 'react';
import Button from '../components/Button';
import { Play, Mic, Headphones, ArrowUpRight } from 'lucide-react';

const episodes = [
  {
    id: 1,
    title: "El mito de 'Quemad las Naves'",
    desc: "Por qué renunciar a tu trabajo para emprender es el peor consejo financiero que puedes seguir en 2026.",
    duration: "45 min",
    guest: "Solo Episode"
  },
  {
    id: 2,
    title: "Cómo vender B2B siendo un desconocido",
    desc: "Estrategias de Outbound marketing para conseguir tus primeros 5 clientes corporativos sin tener página web.",
    duration: "52 min",
    guest: "Invitado: Javier G. (Ex-Oracle)"
  },
  {
    id: 3,
    title: "El dilema del Equity: ¿Cuánto dar a tus socios?",
    desc: "Modelos de distribución de acciones para co-founders operativos que no ponen capital.",
    duration: "38 min",
    guest: "Solo Episode"
  }
];

const Podcast: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-ff-blue text-white py-24 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-ff-yellow rounded-full blur-[120px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4 text-ff-yellow font-bold uppercase tracking-wider text-sm">
                    <Mic size={18} /> 
                    <span>Nuevo Episodio Cada Martes</span>
                </div>
                <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-6">Future Founders <br/><span className="text-white/50">Podcast</span></h1>
                <p className="text-xl text-blue-100 max-w-lg mb-8 font-body">
                    Conversaciones sin filtro sobre la transición de empleado a empleador. Dinero, miedos y tácticas reales.
                </p>
                <div className="flex gap-4">
                    <Button variant="white" className="text-ff-blue">Escuchar en Spotify</Button>
                    <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-ff-blue">Apple Podcasts</Button>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-80 h-80 bg-neutral-900 rounded-lg shadow-2xl flex items-center justify-center relative rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-ff-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                            <Headphones size={40} className="text-black" />
                        </div>
                        <h3 className="font-display font-bold text-2xl text-white">FF RADIO</h3>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="font-display font-bold text-3xl mb-12 text-neutral-900">Últimos Episodios</h2>
        <div className="space-y-6">
            {episodes.map((ep) => (
                <div key={ep.id} className="group border border-neutral-200 p-8 rounded-lg hover:border-ff-blue hover:shadow-lg transition-all duration-300 bg-white flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-ff-blue group-hover:text-white transition-colors">
                        <Play size={24} fill="currentColor" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2 text-xs font-bold uppercase tracking-wide text-neutral-400">
                            <span>EP {ep.id}</span>
                            <span>•</span>
                            <span>{ep.duration}</span>
                        </div>
                        <h3 className="font-heading font-bold text-2xl mb-2 text-neutral-900 group-hover:text-ff-blue transition-colors">{ep.title}</h3>
                        <p className="text-neutral-600 font-body">{ep.desc}</p>
                    </div>
                    <div>
                        <button className="p-3 border border-neutral-200 rounded-full hover:bg-neutral-900 hover:text-white transition-colors">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center">
            <Button variant="ghost">Ver todos los episodios</Button>
        </div>
      </section>
    </div>
  );
};

export default Podcast;