import React from 'react';
import Button from '../components/Button';
import { Check, Star, Book, Shield, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoubleAgent: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-da-magenta text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="relative z-10">
             <div className="flex items-center gap-2 mb-6">
                <span className="bg-black/30 text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest border border-white/20">Best Seller</span>
                <div className="flex text-ff-yellow">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
             </div>
             <h1 className="font-display font-extrabold text-6xl md:text-7xl mb-4 leading-none">DOBLE<br/>AGENTE</h1>
             <p className="text-2xl font-heading opacity-90 mb-8 border-l-4 border-ff-yellow pl-6 py-2">El Manual Táctico para Fundadores con Salario</p>
             <p className="text-lg opacity-80 mb-10 max-w-lg leading-relaxed">
               ¿Y si pudieras construir tu empresa mientras cobras tu sueldo corporativo? El 99% de los consejos de emprendimiento ("Sal de tu zona de confort", "Quema las naves") son irresponsables para un ejecutivo con familia e hipoteca. Este libro es el antídoto.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
               <Button variant="white" size="lg" className="text-da-magenta">Comprar Digital ($29)</Button>
               <Button variant="ghost" className="text-white border border-white/30 hover:bg-white/10">Descargar Capítulo 1</Button>
             </div>
           </div>
           
           <div className="flex justify-center relative z-10 mt-10 lg:mt-0">
             <div className="relative">
                <div className="absolute inset-0 bg-black/40 transform rotate-6 rounded-sm blur-md"></div>
                <img 
                  src="/libro_doble_agente.png" 
                  alt="Portada Libro Doble Agente" 
                  className="relative z-10 w-full max-w-md shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-all duration-500 rounded-sm"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/600x800/E91E63/white?text=DOBLE+AGENTE"; }}
                />
             </div>
           </div>
        </div>
      </div>

      {/* Framework Section */}
      <div className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-da-magenta font-bold uppercase tracking-widest text-sm">Metodología Propietaria</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-neutral-900">El Framework "Doble Agente"</h2>
          <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">20 Misiones distribuidas en 5 fases estratégicas para ir de la idea a la facturación sin poner en riesgo tu patrimonio actual.</p>
        </div>
        
        <div className="grid gap-8">
          {[
            { phase: "Fase I: Inteligencia", icon: <Target />, desc: "Evalúa tu posición actual, audita tus recursos ocultos e identifica tu ventaja injusta en el mercado." },
            { phase: "Fase II: Diseño de la Operación", icon: <Shield />, desc: "Diseña tu oferta de alto valor. Estructura legal y operativa blindada para operar en las sombras." },
            { phase: "Fase III: Validación Encubierta", icon: <Check />, desc: "Valida tu hipótesis con ventas reales. Cómo conseguir los primeros 5 clientes B2B sin web ni logo." },
            { phase: "Fase IV: Lanzamiento Táctico", icon: <Award />, desc: "Ejecuta tu lanzamiento al mercado. El arte de delegar la operación para no colapsar con tu empleo." },
            { phase: "Fase V: Extracción o Escalamiento", icon: <Book />, desc: "El momento de la verdad. Cuándo renunciar (y cuándo no). Modelos de Equity para socios operativos." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 p-8 border border-neutral-200 rounded-sm hover:border-da-magenta hover:shadow-lg transition-all duration-300 bg-white">
              <div className="w-16 h-16 bg-neutral-100 text-da-magenta rounded-sm flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl mb-2 flex items-center gap-3">
                    <span className="text-neutral-300">0{i + 1}</span> {item.phase}
                </h3>
                <p className="text-neutral-600 text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials / Social Proof */}
      <div className="bg-neutral-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-12">Lo que dicen los lectores</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-neutral-800 p-8 rounded-sm border border-neutral-700">
                    <div className="flex text-ff-yellow mb-4"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                    <p className="mb-6 italic text-neutral-300">"El único libro de negocios que entiende que no todos podemos renunciar mañana y comer ramen. Pragmático, directo y brutalmente honesto."</p>
                    <div>
                        <p className="font-bold text-white">Carlos M.</p>
                        <p className="text-xs text-neutral-400 uppercase">Director Comercial @ Telecom</p>
                    </div>
                </div>
                <div className="bg-neutral-800 p-8 rounded-sm border border-neutral-700">
                    <div className="flex text-ff-yellow mb-4"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                    <p className="mb-6 italic text-neutral-300">"Seguí la Fase 3 al pie de la letra y cerré mi primer contrato de $5k USD antes de terminar el libro. Vale 100 veces su precio."</p>
                    <div>
                        <p className="font-bold text-white">Ana P.</p>
                        <p className="text-xs text-neutral-400 uppercase">Gerente de Finanzas @ Retail</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="py-20 text-center bg-neutral-100">
        <h2 className="font-display font-bold text-4xl mb-6">Deja de planear y empieza a operar.</h2>
        <div className="flex justify-center gap-4">
            <Button size="lg">Comprar Libro ($29)</Button>
        </div>
      </div>
    </div>
  );
};

export default DoubleAgent;