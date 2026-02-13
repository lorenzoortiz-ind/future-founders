import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, Users, Zap, Award, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Bootcamp: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-da-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-ff-blue opacity-20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="text-ff-yellow font-bold uppercase tracking-[0.2em] mb-4 inline-block">Cohort Based Course • 8 Semanas</span>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                Diseña, Valida y Lanza <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ff-blue to-cyan-400">Tu Empresa B2B</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12">
                El único programa de aceleración diseñado específicamente para ejecutivos en activo. Sin renunciar a tu trabajo hasta que tu empresa pague tu sueldo.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <Button size="lg" className="bg-white text-black hover:bg-ff-blue hover:text-white">Aplicar al Cohorte IX</Button>
                <div className="flex items-center gap-2 text-sm text-neutral-400 justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Quedan 4 cupos disponibles
                </div>
            </div>
        </div>
      </section>

      {/* Stats/Overview */}
      <section className="py-12 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <p className="text-3xl font-display font-bold text-neutral-900">8 Semanas</p>
                <p className="text-xs uppercase font-bold text-neutral-500 mt-1">Duración Intensiva</p>
            </div>
            <div>
                <p className="text-3xl font-display font-bold text-neutral-900">Online</p>
                <p className="text-xs uppercase font-bold text-neutral-500 mt-1">En vivo + Asíncrono</p>
            </div>
            <div>
                <p className="text-3xl font-display font-bold text-neutral-900">10 Plazas</p>
                <p className="text-xs uppercase font-bold text-neutral-500 mt-1">Cupo Limitado</p>
            </div>
            <div>
                <p className="text-3xl font-display font-bold text-neutral-900">Nivel</p>
                <p className="text-xs uppercase font-bold text-neutral-500 mt-1">Ejecutivo / Senior</p>
            </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-4xl mb-16 text-center">Plan de Estudios Táctico</h2>
            
            <div className="space-y-6">
                {[
                    { title: "Semana 1-2: Inteligencia de Mercado", desc: "Auditoría de activos personales. Identificación de problemas de alto valor en tu industria. Selección del nicho." },
                    { title: "Semana 3-4: Diseño de Oferta Irresistible", desc: "Creación del 'Grand Slam Offer'. Pricing y Packaging. Estructura de unit economics." },
                    { title: "Semana 5: Infraestructura Mínima Viable", desc: "Setup legal express. Configuración de CRM y herramientas de venta. Branding mínimo." },
                    { title: "Semana 6-7: Sistema de Ventas Outbound", desc: "Scripts de ventas. LinkedIn Automation. Cold Emailing. Cómo vender sin parecer vendedor." },
                    { title: "Semana 8: Lanzamiento y Operación", desc: "Onboarding de primeros clientes. Entrega del servicio. Plan de transición corporativa." }
                ].map((mod, i) => (
                    <div key={i} className="group border border-neutral-200 p-6 rounded-lg hover:border-ff-blue transition-colors cursor-default">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-heading font-bold text-xl group-hover:text-ff-blue transition-colors">{mod.title}</h3>
                            <span className="bg-neutral-100 text-neutral-500 text-xs font-bold px-2 py-1 rounded">MOD {i+1}</span>
                        </div>
                        <p className="text-neutral-600">{mod.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display font-bold text-4xl mb-16 text-center">Más que un curso, una incubadora.</h2>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-ff-blue rounded-full flex items-center justify-center mb-4"><Zap /></div>
                    <h3 className="font-bold text-xl">Ejecución, no teoría</h3>
                    <p className="text-neutral-400">No hay exámenes. El único KPI es cuánto logras vender durante el programa. Todo está diseñado para la acción.</p>
                </div>
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-da-magenta rounded-full flex items-center justify-center mb-4"><Users /></div>
                    <h3 className="font-bold text-xl">Comunidad de Pares</h3>
                    <p className="text-neutral-400">Estás rodeado de otros Directores y Gerentes. El networking aquí vale más que el precio del programa.</p>
                </div>
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-ff-yellow text-black rounded-full flex items-center justify-center mb-4"><Award /></div>
                    <h3 className="font-bold text-xl">Mentoría Directa</h3>
                    <p className="text-neutral-400">Acceso directo a Eddie y Lorenzo. Office hours semanales para desbloquear problemas específicos.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 border border-neutral-200 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-ff-yellow text-black text-xs font-bold px-4 py-1 uppercase">Inscripciones Abiertas</div>
            
            <h2 className="font-display font-bold text-4xl mb-4">Inversión</h2>
            <div className="flex items-baseline justify-center gap-2 mb-8">
                <span className="text-5xl font-extrabold">$3,995</span>
                <span className="text-neutral-500">USD</span>
            </div>
            
            <ul className="text-left max-w-sm mx-auto space-y-4 mb-10">
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-ff-blue" /> 8 Semanas de Programa en Vivo</li>
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-ff-blue" /> Acceso de por vida a grabaciones</li>
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-ff-blue" /> Toolkit de Negocios ($2,000 value)</li>
                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-ff-blue" /> 1 Año de Comunidad Alumni</li>
            </ul>

            <Button size="lg" fullWidth>Aplicar Ahora</Button>
            <p className="mt-4 text-xs text-neutral-500">Garantía de satisfacción de 14 días. Si no es lo que esperabas, te devolvemos tu dinero.</p>
        </div>
      </section>
    </div>
  );
};

export default Bootcamp;