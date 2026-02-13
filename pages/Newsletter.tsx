import React from 'react';
import Button from '../components/Button';
import { Mail, Check, Zap, Lock } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-ff-blue/10 text-ff-blue rounded-full mb-8">
              <Mail size={24} />
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-6 text-neutral-900">The Sunday Brief</h1>
          <p className="text-xl text-neutral-500 font-body max-w-2xl mx-auto mb-12">
              Únete a más de 5,000 ejecutivos que reciben cada domingo una táctica accionable para construir su empresa sin renunciar a su empleo.
          </p>

          <div className="max-w-md mx-auto bg-neutral-50 p-2 rounded-lg border border-neutral-200 shadow-lg mb-8">
              <form className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder="tucorreo@empresa.com" 
                    className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:border-ff-blue font-body"
                  />
                  <Button fullWidth>Suscribirme Gratis</Button>
              </form>
              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-neutral-400">
                  <Lock size={12} /> Sin spam. Date de baja cuando quieras.
              </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left mt-16 border-t border-neutral-100 pt-16">
              <div>
                  <div className="text-ff-blue mb-4"><Zap size={24} /></div>
                  <h3 className="font-bold text-lg mb-2">100% Táctico</h3>
                  <p className="text-neutral-500 text-sm font-body">Nada de teoría motivacional. Solo frameworks, scripts y modelos mentales que usamos hoy.</p>
              </div>
              <div>
                  <div className="text-da-magenta mb-4"><Check size={24} /></div>
                  <h3 className="font-bold text-lg mb-2">Lectura de 5 min</h3>
                  <p className="text-neutral-500 text-sm font-body">Respetamos tu tiempo. Un correo, una idea, lectura rápida para tu café del domingo.</p>
              </div>
              <div>
                  <div className="text-ff-yellow text-neutral-900 mb-4"><Lock size={24} /></div>
                  <h3 className="font-bold text-lg mb-2">Deal Flow</h3>
                  <p className="text-neutral-500 text-sm font-body">Acceso prioritario a nuestros nuevos cohortes, inversiones y eventos privados.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Newsletter;