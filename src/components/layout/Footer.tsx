import { contactInfo } from '@/data/projects';

export default function Footer() {
  return (
    <>
      {/* Dynamics / Links Section */}
      <section id="contact" className="px-4 md:px-6 py-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-gray-400 mb-2 text-sm">Changing the</p>
            <h2 className="text-4xl font-light text-white">Dynamics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-white mb-4 text-sm font-semibold tracking-wider">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/kurumsal" className="hover:text-white transition">Hakkımızda</a></li>
                <li><a href="/#projects" className="hover:text-white transition">Projeler</a></li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-white transition"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4 text-sm font-semibold tracking-wider">İletişim</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}
                    className="hover:text-white transition"
                  >
                    {contactInfo.phone1}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phone2.replace(/\s/g, '')}`}
                    className="hover:text-white transition"
                  >
                    {contactInfo.phone2}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4 text-sm font-semibold tracking-wider">Adres</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {contactInfo.addressTR}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <footer className="px-4 md:px-6 py-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} {contactInfo.companyName}. Tüm hakları saklıdır.
        </div>
      </footer>
    </>
  );
}
