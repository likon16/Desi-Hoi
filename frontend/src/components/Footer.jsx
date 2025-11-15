import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footers() {
  return (
    <footer className="bg-gray-900 text-gray-400 rounded-base shadow-xs border border-default p-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

          {/* Column 1: ABOUT */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">ABOUT</h3>
            <ul className="space-y-2">
              {['Contact Us', 'About Us', 'Careers', 'Press', 'Desi Hoi Stories'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: HELP */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">HELP</h3>
            <ul className="space-y-2">
              {['Payments', 'Shipping', 'Cancellation & Returns', 'FAQ', 'Report Infringement'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CONSUMER POLICY */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">CONSUMER POLICY</h3>
            <ul className="space-y-2">
              {['Return Policy', 'Terms Of Use', 'Security', 'Privacy', 'Sitemap'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: SOCIAL */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">SOCIAL</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-xs">Download App:</p>
            <div className="flex gap-2 mt-2">
              <img src="/api/placeholder/100/30" alt="Play Store" className="h-8" />
              <img src="/api/placeholder/100/30" alt="App Store" className="h-8" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#" className="hover:text-white transition-colors">Sell On Desi Hoi</a>
              <a href="#" className="hover:text-white transition-colors">Advertise</a>
              <a href="#" className="hover:text-white transition-colors">Gift Cards</a>
              <a href="#" className="hover:text-white transition-colors">Help Center</a>
            </div>
            <p>© 2007–2025 <span className="text-white font-medium">DesiHoi.com</span></p>
          </div>
        </div>

      </div>
    </footer>
  );
}