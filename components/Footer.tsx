import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-da-black text-white pt-20 pb-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ff-blue text-ff-yellow flex items-center justify-center font-display font-bold rounded-sm">
             FF
            </div>
            <span className="font-heading font-bold text-lg">Future Founders</span>
          </div>
          <p className="text-neutral-400 max-w-sm font-body">
            Transformamos ejecutivos en fundadores. El ecosistema para construir patrimonio empresarial real sin quemar las naves.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-ff-blue transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-da-magenta transition-colors"><Youtube size={20} /></a>
            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-ff-yellow hover:text-black transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-bold text-ff-yellow tracking-wider text-xs uppercase font-body">Ecosistema</h4>
          <ul className="space-y-2 text-sm text-neutral-300 font-body">
            <li><Link to="/bootcamp" className="hover:text-white transition-colors">Bootcamp</Link></li>
            <li><Link to="/nosotros" className="hover:text-white transition-colors">Sobre los Fundadores</Link></li>
            <li><Link to="/business-center" className="hover:text-white transition-colors">Business Center</Link></li>
            <li><Link to="/comunidad" className="hover:text-white transition-colors">Comunidad</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="font-bold text-ff-yellow tracking-wider text-xs uppercase font-body">Contenido</h4>
          <ul className="space-y-2 text-sm text-neutral-300 font-body">
            <li><Link to="/podcast" className="hover:text-white transition-colors">Podcast</Link></li>
            <li><Link to="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
            <li><Link to="/doble-agente" className="hover:text-white transition-colors">Libro Doble Agente</Link></li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-ff-yellow tracking-wider text-xs uppercase font-body">Contacto</h4>
          <p className="text-neutral-400 text-sm font-body">hola@futurefounders.pe</p>
          
          <div className="mt-6">
            <label className="block text-xs font-bold text-white mb-2 uppercase font-body">Únete al Newsletter Semanal</label>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-neutral-800 border border-neutral-700 text-white px-4 py-2 rounded-sm w-full focus:outline-none focus:border-ff-blue font-body"
              />
              <Link to="/newsletter">
                <button className="bg-ff-blue text-white px-4 py-2.5 rounded-sm font-bold uppercase hover:bg-white hover:text-ff-blue transition-colors h-full">
                  <Mail size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-body">
        <p>© 2026 Future Founders. Todos los derechos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;