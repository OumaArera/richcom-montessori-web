import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Richcom Montessori School Logo"
                className="h-10 w-auto bg-white p-1 rounded"
              />
              <span className="text-lg font-bold text-white">
                Richcom Montessori
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-300">
              Richcom Montessori School is committed to nurturing confident,
              independent, and compassionate learners through a child-centered
              Montessori approach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about/story" className="hover:text-green-400">About Us</NavLink></li>
              <li><NavLink to="/academics/primary" className="hover:text-green-400">Academics</NavLink></li>
              <li><NavLink to="/admissions/process" className="hover:text-green-400">Admissions</NavLink></li>
              <li><NavLink to="/school-life/activities" className="hover:text-green-400">School Life</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-green-400">Contact</NavLink></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-white font-semibold mb-4">Academic Levels</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/academics/creche" className="hover:text-green-400">Creche</NavLink></li>
              <li><NavLink to="/academics/nursery" className="hover:text-green-400">Nursery</NavLink></li>
              <li><NavLink to="/academics/kindergarten" className="hover:text-green-400">Kindergarten</NavLink></li>
              <li><NavLink to="/academics/primary" className="hover:text-green-400">Primary</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 Ghana</li>
              <li>📞 +233 XXX XXX XXX</li>
              <li>✉️ info@richcommontessori.com</li>
              <li>🕒 Mon – Fri: 8:00 AM – 4:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          {/* Copyright */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Richcom Montessori School. All rights reserved.
          </p>

          {/* Developer Credit */}
          <p className="mt-3 md:mt-0">
            Developed and maintained by{" "}
            <a
              href="https://zafrika.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Zafrika Tech Lab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
