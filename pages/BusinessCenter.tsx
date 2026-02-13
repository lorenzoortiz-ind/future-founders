import React from 'react';
import Button from '../components/Button';
import { Download, FileText, Layout, TrendingUp } from 'lucide-react';

const products = [
    {
        id: 1,
        title: "Pack Legal Fundadores",
        category: "Legal",
        price: "$97",
        desc: "Todos los contratos que necesitas: Pacto de Socios, Vesting Agreement, NDA, Contrato de Servicios B2B.",
        icon: <FileText size={32} />
    },
    {
        id: 2,
        title: "Modelo Financiero SaaS/Service",
        category: "Finanzas",
        price: "$49",
        desc: "Excel complejo simplificado. Proyecta tu P&L, flujo de caja y runway. Incluye dashboard para inversores.",
        icon: <TrendingUp size={32} />
    },
    {
        id: 3,
        title: "Sistema Operativo (Notion)",
        category: "Operaciones",
        price: "$59",
        desc: "La estructura exacta de Notion que usamos para gestionar 3 empresas. OKRs, CRM, Wiki y Gestión de Tareas.",
        icon: <Layout size={32} />
    },
    {
        id: 4,
        title: "Pitch Deck Template",
        category: "Fundraising",
        price: "$39",
        desc: "Plantilla de presentación para inversores basada en las mejores prácticas de YC y 500 Startups.",
        icon: <FileText size={32} />
    }
];

const BusinessCenter: React.FC = () => {
  return (
    <div className="bg-neutral-50 pt-20 min-h-screen">
      <div className="bg-white border-b border-neutral-200 py-16">
          <div className="max-w-7xl mx-auto px-6">
              <span className="text-ff-blue font-bold uppercase tracking-widest text-xs">Marketplace</span>
              <h1 className="font-display font-extrabold text-5xl mb-4 text-neutral-900">Business Center</h1>
              <p className="text-xl text-neutral-500 max-w-2xl">
                  Herramientas tácticas, templates y sistemas probados. Ahorra cientos de horas de trabajo y miles de dólares en consultores.
              </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                          <div className="bg-neutral-100 p-4 rounded-full text-da-magenta">
                              {product.icon}
                          </div>
                          <span className="bg-neutral-100 text-neutral-500 text-xs font-bold px-2 py-1 rounded uppercase">{product.category}</span>
                      </div>
                      
                      <h3 className="font-heading font-bold text-2xl mb-2">{product.title}</h3>
                      <p className="text-neutral-500 mb-8 flex-grow">{product.desc}</p>
                      
                      <div className="flex items-center justify-between border-t border-neutral-100 pt-6 mt-auto">
                          <span className="text-2xl font-bold text-neutral-900">{product.price}</span>
                          <Button size="sm">
                              Comprar
                          </Button>
                      </div>
                  </div>
              ))}
              
              {/* Coming Soon Card */}
              <div className="bg-neutral-100 rounded-lg border border-neutral-200 border-dashed p-8 flex flex-col items-center justify-center text-center opacity-75">
                  <h3 className="font-heading font-bold text-xl mb-2 text-neutral-400">Más recursos pronto</h3>
                  <p className="text-sm text-neutral-400">Estamos digitalizando nuevos procesos cada mes.</p>
              </div>
          </div>
      </div>
      
      <section className="bg-ff-blue text-white py-16 mt-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="font-display font-bold text-3xl mb-4">¿Necesitas algo a la medida?</h2>
              <p className="mb-8 text-blue-100">
                  Nuestros servicios DFY (Done For You) incluyen constitución de empresas en Delaware, Branding Corporativo y Setup Financiero.
              </p>
              <Button variant="white">Consultar Servicios DFY</Button>
          </div>
      </section>
    </div>
  );
};

export default BusinessCenter;