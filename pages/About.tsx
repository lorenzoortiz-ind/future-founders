import React from 'react';
import Button from '../components/Button';
import { Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Intro Header */}
      <section className="bg-neutral-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-ff-yellow font-bold uppercase tracking-widest text-sm mb-4 block">Nuestra Historia</span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-6">Corporate Rebels.</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-body">
            Somos Eddie y Lorenzo. Hemos estado exactamente donde tú estás: en la oficina de la esquina, con el sueldo alto, las acciones corporativas y la sensación constante de que estábamos construyendo el sueño de alguien más.
          </p>
        </div>
      </section>

      {/* Founders Detail Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        
        {/* Eddie */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-ff-blue rounded-sm -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
            <img 
              src="/Eddie_ff.png" 
              alt="Eddie Ajalcriña" 
              className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/600x700/1a1a1a/white?text=Eddie"; }}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-display font-bold text-4xl mb-2 text-neutral-900">Eddie Ajalcriña</h2>
            <p className="text-ff-blue font-bold uppercase tracking-wider text-sm mb-6">Strategy & Growth</p>
            
            <div className="space-y-4 text-neutral-600 font-body text-lg leading-relaxed mb-8">
              <p>
                El visionario detrás del método. Eddie se especializa en ver oportunidades de mercado donde otros ven ruido. Con más de 15 años liderando equipos comerciales en corporaciones multinacionales, descifró el código de cómo vender servicios B2B de alto ticket sin necesidad de una marca personal masiva.
              </p>
              <p>
                Su superpoder es la **Arquitectura de Ofertas**: la capacidad de empaquetar tu conocimiento experto en una propuesta que las empresas no pueden rechazar.
              </p>
            </div>

            <div className="flex gap-4">
               <a href="#" className="p-2 bg-neutral-100 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="p-2 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        {/* Lorenzo */}
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute top-4 right-4 w-full h-full border-2 border-da-magenta rounded-sm -z-10 group-hover:top-2 group-hover:right-2 transition-all duration-300"></div>
            <img 
              src="/Lorenzo_ff.png" 
              alt="Lorenzo Ortiz" 
              className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/600x700/1a1a1a/white?text=Lorenzo"; }}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-display font-bold text-4xl mb-2 text-neutral-900">Lorenzo Ortiz</h2>
            <p className="text-da-magenta font-bold uppercase tracking-wider text-sm mb-6">Ops & Finance</p>
            
            <div className="space-y-4 text-neutral-600 font-body text-lg leading-relaxed mb-8">
              <p>
                El arquitecto de sistemas. Mientras Eddie vende el sueño, Lorenzo construye la máquina que lo hace realidad. Experto en finanzas corporativas y eficiencia operativa, Lorenzo garantiza que una empresa no sea solo rentable, sino escalable y vendible.
              </p>
              <p>
                Su obsesión es el **Leverage Operativo**: crear sistemas que permitan facturar más trabajando menos. Es el cerebro detrás del modelo financiero que enseñamos en el Bootcamp.
              </p>
            </div>

            <div className="flex gap-4">
               <a href="#" className="p-2 bg-neutral-100 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="p-2 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

      </section>

      {/* Manifesto / Mission */}
      <section className="bg-neutral-100 py-24 text-center">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-8">Nuestra Filosofía</h2>
            <p className="text-2xl font-body text-neutral-800 italic mb-8">
              "Creemos que el emprendimiento no debe ser un salto al vacío, sino un puente bien construido."
            </p>
            <p className="text-neutral-600 font-body mb-8">
              Fundamos Future Founders para darte las herramientas que nosotros hubiéramos deseado tener hace 10 años. Sin humo, sin teoría académica, solo tácticas probadas en las trincheras del mundo corporativo y el venture building.
            </p>
            <Button>Conoce nuestro programa</Button>
         </div>
      </section>
    </div>
  );
};

export default About;