import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Check, ArrowRight, Download, BookOpen, Users, Briefcase } from 'lucide-react';
import Button from '../components/Button';

// Using specific filenames as requested
const IMAGES = {
  eddie: "/Eddie_ff.png",
  lorenzo: "/Lorenzo_ff.png",
  book: "/libro_doble_agente.png",
};

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-da-black overflow-hidden pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-ff-blue rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-da-magenta rounded-full blur-[100px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
           <span className="inline-block text-ff-yellow font-bold tracking-[0.2em] text-sm mb-6 uppercase animate-fade-in-up">
             Para ejecutivos que quieren más
           </span>
           
           <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8 max-w-5xl animate-fade-in-up delay-100">
             Transforma tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-ff-blue to-cyan-400">talento ejecutivo</span> en patrimonio empresarial.
           </h1>

           <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
             El programa más completo de Latinoamérica para construir una empresa rentable sin renunciar a tu carrera corporativa.
           </p>

           <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300 justify-center md:justify-start">
             <Link to="/bootcamp">
               <Button size="lg">Explorar Bootcamp</Button>
             </Link>
             <Link to="/business-center">
                <Button variant="ghost" className="text-white hover:text-ff-yellow border border-white/20 hover:border-ff-yellow rounded-md">
                  <Download size={18} className="mr-2" />
                  Recursos Gratuitos
                </Button>
             </Link>
           </div>

           {/* Social Proof */}
           <div className="mt-16 border-t border-white/10 pt-8 animate-fade-in-up delay-500">
             <p className="text-neutral-500 text-sm mb-4">Más de 10,000 profesionales confían en nosotros</p>
             <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 justify-center md:justify-start items-center">
               <span className="text-white font-bold text-xl font-heading">MIT</span>
               <span className="text-white font-bold text-xl font-heading">Singularity</span>
               <span className="text-white font-bold text-xl font-heading">Breca</span>
               <span className="text-white font-bold text-xl font-heading">Intercorp</span>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 2: VIDEO MANIFESTO */}
      <section className="py-24 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <p className="text-xs font-bold tracking-widest text-neutral-500 mb-6 uppercase">Mira nuestro manifiesto</p>
           
           <div className="relative group cursor-pointer rounded-sm overflow-hidden shadow-2xl aspect-video bg-neutral-900 flex items-center justify-center border-4 border-white">
             {/* Thumbnail placeholder or video embed */}
             <div className="absolute inset-0 bg-neutral-800 opacity-60 group-hover:opacity-40 transition-opacity"></div>
             <div className="relative z-10 text-center text-white px-4">
               <h3 className="font-heading font-bold text-2xl md:text-4xl mb-6 leading-tight">
                 "Tu salario es la droga que te dieron<br/>para olvidar tus sueños."
               </h3>
               <div className="w-20 h-20 bg-ff-blue rounded-full flex items-center justify-center mx-auto mt-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,51,255,0.6)]">
                 <Play fill="white" className="ml-1" size={32} />
               </div>
             </div>
           </div>
           
           <p className="mt-6 text-sm text-neutral-500 font-mono uppercase tracking-wide">2:47 min — La filosofía detrás de Future Founders</p>
        </div>
      </section>

      {/* SECTION 3: VALUE PROP & FOUNDERS INTRO */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 skew-x-12 transform translate-x-32 -z-0"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-ff-blue font-bold text-sm tracking-wide uppercase mb-2 block">Nuestro Por Qué</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-8 leading-tight">
              No queremos que sigas siendo un recurso valioso para otros.
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Después de 20 años construyendo empresas, entendimos una verdad incómoda: los ejecutivos más talentosos pasan décadas generando riqueza para otros mientras su propio patrimonio depende de un sueldo que puede desaparecer mañana.
              </p>
              <p className="font-bold text-neutral-900 text-xl border-l-4 border-da-magenta pl-4">
                Future Founders existe para cambiar esa ecuación.
              </p>
              <p>
                Te damos las herramientas, la estructura y el acompañamiento para que construyas un activo empresarial que trabaje para ti—mientras mantienes la estabilidad de tu carrera actual.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 border-t border-neutral-200 pt-8">
              <div>
                <p className="font-display font-bold text-4xl text-da-magenta">+$20M</p>
                <p className="text-sm font-bold text-neutral-900 uppercase mt-1">Facturados</p>
              </div>
              <div>
                <p className="font-display font-bold text-4xl text-da-magenta">155+</p>
                <p className="text-sm font-bold text-neutral-900 uppercase mt-1">Graduados</p>
              </div>
              <div>
                <p className="font-display font-bold text-4xl text-da-magenta">8+</p>
                <p className="text-sm font-bold text-neutral-900 uppercase mt-1">Industrias</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Founders visual composition */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="group relative">
                  <div className="bg-neutral-900 rounded-sm overflow-hidden shadow-xl h-80 md:h-96 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                     <img 
                      src={IMAGES.lorenzo} 
                      alt="Lorenzo Ortiz" 
                      className="w-full h-full object-cover" 
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/400x500/1a1a1a/white?text=Lorenzo"; }}
                     />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-20">
                       <p className="text-white font-display font-bold text-lg">Lorenzo Ortiz</p>
                       <p className="text-ff-yellow text-xs font-bold uppercase tracking-wider">Ops & Finance</p>
                     </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="group relative">
                  <div className="bg-neutral-900 rounded-sm overflow-hidden shadow-xl h-80 md:h-96 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                     <img 
                      src={IMAGES.eddie} 
                      alt="Eddie Ajalcriña" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/400x500/1a1a1a/white?text=Eddie"; }}
                     />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-20">
                       <p className="text-white font-display font-bold text-lg">Eddie Ajalcriña</p>
                       <p className="text-ff-yellow text-xs font-bold uppercase tracking-wider">Strategy & Growth</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-ff-blue/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DOUBLE AGENT BOOK FEATURE */}
      <section className="py-24 bg-da-magenta text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative flex justify-center">
             <div className="relative z-10 w-64 md:w-80 shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
               <img 
                src={IMAGES.book} 
                alt="Libro Doble Agente" 
                className="w-full rounded-sm shadow-[20px_20px_60px_rgba(0,0,0,0.5)]" 
                onError={(e) => { e.currentTarget.src = "https://placehold.co/600x800/E91E63/white?text=Book+Cover"; }}
               />
             </div>
             <div className="absolute inset-0 bg-black/20 transform rotate-[-6deg] translate-x-4 translate-y-4 rounded-sm blur-sm"></div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block bg-white text-da-magenta font-bold text-xs px-3 py-1 rounded-sm mb-6 animate-pulse uppercase tracking-widest">
              ¡Nuevo Lanzamiento!
            </span>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl mb-4">DOBLE AGENTE</h2>
            <h3 className="font-heading text-2xl opacity-90 mb-6">El Manual para Fundadores con Salario</h3>
            
            <p className="text-lg opacity-80 mb-8 max-w-lg leading-relaxed">
              20 misiones. 5 fases. Un framework completo para construir tu empresa mientras mantienes tu trabajo corporativo.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "El arte del espionaje empresarial aplicado a tu transición",
                "Frameworks probados de MIT y venture building real",
                "Casos de estudio de ejecutivos que lo lograron"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-white text-da-magenta p-0.5 rounded-full mt-1"><Check size={12} strokeWidth={4} /></div>
                  <span className="opacity-90 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link to="/doble-agente">
                <Button variant="white" size="lg">Obtener Copia ($29)</Button>
              </Link>
              <Link to="/doble-agente" className="text-white underline decoration-2 underline-offset-4 hover:text-neutral-200 text-sm font-bold uppercase tracking-wide">
                Ver preview gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BOOTCAMP PREVIEW */}
      <section className="py-32 bg-neutral-900 text-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-ff-blue to-[#001AFF] rounded-sm p-8 md:p-16 shadow-[0_20px_60px_rgba(0,51,255,0.3)] text-center relative overflow-hidden group">
             {/* Decorative grid */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>

             <span className="relative z-10 text-ff-yellow font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Programa Insignia</span>
             <h2 className="relative z-10 font-display font-extrabold text-4xl md:text-6xl mb-6">Future Founders Bootcamp</h2>
             <p className="relative z-10 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
               8 semanas para diseñar, validar y lanzar tu empresa. Un programa intensivo que te lleva desde la idea hasta la validación de mercado.
             </p>

             <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto mb-12 border-t border-white/20 pt-10">
               <div>
                 <div className="font-display font-bold text-3xl mb-1">8</div>
                 <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Semanas de Acción</div>
               </div>
               <div>
                 <div className="font-display font-bold text-3xl mb-1">10</div>
                 <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Founders máx.</div>
               </div>
               <div>
                 <div className="font-display font-bold text-3xl mb-1">1:1</div>
                 <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Mentoría Directa</div>
               </div>
               <div>
                 <div className="font-display font-bold text-3xl mb-1">DFY</div>
                 <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Servicios Incluidos</div>
               </div>
             </div>

             <div className="relative z-10 flex flex-col items-center">
               <Link to="/bootcamp">
                <button className="bg-white text-ff-blue font-extrabold uppercase py-4 px-12 rounded-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300">
                  Ver detalles del programa
                </button>
               </Link>
               <p className="mt-6 text-sm text-blue-200 font-medium">Próximo Cohorte: Marzo 2026</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES & RESOURCES (Condensed) */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-bold text-4xl text-neutral-900 mb-4">Business Center</h2>
              <p className="text-neutral-600 max-w-lg">No reinventes la rueda. Utiliza los mismos templates, contratos y modelos financieros que usamos en nuestras propias empresas.</p>
            </div>
            <Link to="/business-center">
               <Button variant="secondary" className="mt-6 md:mt-0">Ver todo el catálogo</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Briefcase size={24} />, title: "Toolkit de Gobernanza", desc: "Acuerdos de Socios y Estatutos. Term Sheets y Vesting.", price: "$49 USD" },
              { icon: <BookOpen size={24} />, title: "Manual de Operaciones", desc: "SOP Master Template. Estructura modular para procesos.", price: "$29 USD" },
              { icon: <Users size={24} />, title: "Modelo Financiero", desc: "Proyección a 5 Años. Flujo de caja y valoración.", price: "$49 USD" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-sm border border-neutral-200 hover:border-ff-blue hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-neutral-100 text-neutral-900 group-hover:bg-ff-blue group-hover:text-white rounded-sm flex items-center justify-center mb-6 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-neutral-500 text-sm mb-8 leading-relaxed h-10">{item.desc}</p>
                <div className="flex justify-between items-center border-t border-neutral-100 pt-4">
                  <span className="font-bold text-xl text-neutral-900">{item.price}</span>
                  <Link to="/business-center">
                    <span className="text-xs font-bold text-ff-blue uppercase flex items-center gap-1 group-hover:underline">
                      Comprar <ArrowRight size={12} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-32 bg-ff-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8">¿Listo para construir tu activo más valioso?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Agenda una llamada de diagnóstico gratuita. Analizaremos tu perfil y te diremos si estás listo para el Bootcamp.
          </p>
          <a href="https://calendly.com" target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-ff-yellow text-black hover:bg-white hover:text-ff-blue shadow-xl">
              Agendar llamada estratégica
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;