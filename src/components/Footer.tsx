import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Our Lady of Assumption Murera School
            </h3>
            <p className="text-gray-400 text-sm mb-2">Catholic Diocese of Meru</p>
            <p className="text-gray-300 italic text-sm">
              "That All People May Have Life To The Full."
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  P.O. Box 547, 60600<br />Maua, Kenya
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <a
                  href="tel:0739834343"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  0739834343
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  CBC Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("daycare")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Daycare Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Our Lady of Assumption Murera School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
