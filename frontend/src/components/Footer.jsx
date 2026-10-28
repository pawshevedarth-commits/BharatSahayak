import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Code2, Database, MessageSquare, ShieldCheck, Cpu } from 'lucide-react';

const FOOTER_LINKS = {
  Product: [
    { label: 'Features', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Schemes', path: '/schemes' },
    { label: 'User Journey', path: '/journey' },
  ],
  Resources: [
    { label: 'PM-KISAN', path: '/schemes' },
    { label: 'Ayushman Bharat', path: '/schemes' },
    { label: 'Widow Pension', path: '/schemes' },
    { label: 'All Schemes →', path: '/schemes' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/about' },
  ],
};

const TECH_STACK = [
  { icon: Code2, label: 'React + Vite' },
  { icon: Database, label: 'MongoDB' },
  { icon: MessageSquare, label: 'Twilio WhatsApp' },
  { icon: Cpu, label: 'Claude API' },
  { icon: ShieldCheck, label: 'Aadhaar PIN' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border mt-auto" style={{ background: '#100E26' }}>
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, #1D9E75, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #A78BFA)' }}>
                🇮🇳
              </div>
              <span className="text-white font-bold text-xl">
                Bharat<span style={{ color: '#7C3AED' }}>Sahayak</span>
              </span>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs italic">
              "AI that finds what the government owes you —<br/>
              before you even know to ask."
            </p>

            {/* Hindi tagline */}
            <p className="hindi text-white/30 text-sm mb-8">
              "सरकारी योजनाओं का फायदा, बिना झंझट के।"
            </p>

            {/* Tech stack chips */}
            <div className="space-y-2">
              <p className="text-xs text-white/30 uppercase tracking-wider font-semibold">Built with</p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-white/50 border border-dark-border">
                    <Icon size={11} className="text-primary" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-4 text-xs text-white/30">
          <div>© 2026 BharatSahayak. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
