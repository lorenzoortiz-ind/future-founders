import React from 'react';
import Button from '../components/Button';
import { Users, MessageCircle, Calendar, Globe } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="bg-neutral-100 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-6">Founders Circle</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Emprender es solitario. Emprender siendo ejecutivo es aún más solitario. 
                Únete a la red más exclusiva de profesionales construyendo patrimonio.
            </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                <div className="bg-ff-blue h-40 rounded-lg opacity-80"></div>
                <div className="bg-da-magenta h-40 rounded-lg translate-y-8 opacity-80"></div>
                <div className="bg-neutral-900 h-40 rounded-lg opacity-80"></div>
                <div className="bg-ff-yellow h-40 rounded-lg translate-y-8 opacity-80"></div>
            </div>
            <div className="order-1 md:order-2">
                <h2 className="font-display font-bold text-3xl mb-6">Tu Consejo Directivo Personal</h2>
                <p className="text-neutral-600 mb-6 text-lg">
                    El Founders Circle no es un grupo de WhatsApp. Es una membresía estructurada diseñada para generar accountability, resolver bloqueos operativos y compartir deal flow.
                </p>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="bg-neutral-100 p-3 rounded-full h-fit"><Users className="text-ff-blue" /></div>
                        <div>
                            <h4 className="font-bold">Masterminds Mensuales</h4>
                            <p className="text-sm text-neutral-500">Sesiones facilitadas para diseccionar retos específicos de tu negocio.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-neutral-100 p-3 rounded-full h-fit"><MessageCircle className="text-da-magenta" /></div>
                        <div>
                            <h4 className="font-bold">Canales Privados</h4>
                            <p className="text-sm text-neutral-500">Acceso 24/7 a expertos en legal, finanzas, marketing y growth.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-neutral-100 p-3 rounded-full h-fit"><Globe className="text-neutral-900" /></div>
                        <div>
                            <h4 className="font-bold">Directorio de Proveedores</h4>
                            <p className="text-sm text-neutral-500">Agencias y freelancers pre-validados por la comunidad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-da-black text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Acceso por Aplicación</h2>
            <p className="text-neutral-400 mb-8">
                Mantenemos la calidad del grupo alta filtrando cuidadosamente a cada miembro.
                Buscamos perfiles 'Giver' con experiencia ejecutiva real.
            </p>
            <Button variant="white">Aplicar al Circle</Button>
            <p className="mt-4 text-xs text-neutral-500">Membresía anual: $997 USD</p>
        </div>
      </section>
    </div>
  );
};

export default Community;