import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItemClass = ({ isActive }) =>
  `block px-4 py-2 transition ${
    isActive
      ? "text-blue-900 font-semibold"
      : "text-gray-700 hover:text-blue-900"
  }`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const toggleMobileSection = (section) => {
    setOpenMobileMenu(openMobileMenu === section ? null : section);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Richcom Montessori School Logo" className="h-20" />
            <span className="font-bold text-xl md:text-2xl text-blue-900 tracking-tight">
              Richcom Montessori
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm md:text-xl font-medium">

            {/* About */}
            <div className="relative group">
              <span className="cursor-pointer text-gray-700 group-hover:text-blue-900">
                About
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <NavLink to="/about/story" className={navItemClass}>
                  Our Story
                </NavLink>
                <NavLink to="/about/mission-vision" className={navItemClass}>
                  Mission & Vision
                </NavLink>
                <NavLink to="/about/montessori" className={navItemClass}>
                  Montessori Philosophy
                </NavLink>
              </div>
            </div>

            {/* Academics */}
            <div className="relative group">
              <span className="cursor-pointer text-gray-700 group-hover:text-blue-900">
                Academics
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <NavLink to="/academics/creche" className={navItemClass}>Creche</NavLink>
                <NavLink to="/academics/nursery" className={navItemClass}>Nursery</NavLink>
                <NavLink to="/academics/kindergarten" className={navItemClass}>Kindergarten</NavLink>
                <NavLink to="/academics/primary" className={navItemClass}>Primary</NavLink>
              </div>
            </div>

            {/* Admissions */}
            <div className="relative group">
              <span className="cursor-pointer text-gray-700 group-hover:text-blue-900">
                Admissions
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <NavLink to="/admissions/process" className={navItemClass}>Admission Process</NavLink>
                <NavLink to="/admissions/requirements" className={navItemClass}>Requirements</NavLink>
                {/* <NavLink to="/admissions/fees" className={navItemClass}>School Fees</NavLink> */}
              </div>
            </div>

            {/* School Life */}
            <div className="relative group">
              <span className="cursor-pointer text-gray-700 group-hover:text-blue-900">
                School Life
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <NavLink to="/school-life/facilities" className={navItemClass}>Facilities</NavLink>
                <NavLink to="/school-life/activities" className={navItemClass}>Activities</NavLink>
                <NavLink to="/school-life/events" className={navItemClass}>Events</NavLink>
              </div>
            </div>

            <NavLink to="/contact" className={navItemClass}>
              Contact
            </NavLink>

            <NavLink
              to="/admissions/apply"
              className="ml-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Apply Now
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-blue-900 hover:bg-blue-50 transition"
            >
            {menuOpen ? (
                <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
            ) : (
                <Menu className="w-6 h-6 transition-transform duration-200" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 text-gray-700">

          {/* Mobile Accordion */}
          {[
            { title: "About", key: "about", links: [
              { label: "Our Story", to: "/about/story" },
              { label: "Mission & Vision", to: "/about/mission-vision" },
              { label: "Montessori Philosophy", to: "/about/montessori" },
            ]},
            { title: "Academics", key: "academics", links: [
              { label: "Creche", to: "/academics/creche" },
              { label: "Nursery", to: "/academics/nursery" },
              { label: "Kindergarten", to: "/academics/kindergarten" },
              { label: "Primary", to: "/academics/primary" },
            ]},
            { title: "Admissions", key: "admissions", links: [
              { label: "Admission Process", to: "/admissions/process" },
              { label: "Requirements", to: "/admissions/requirements" },
            //   { label: "School Fees", to: "/admissions/fees" },
            ]},
            { title: "School Life", key: "school-life", links: [
              { label: "Facilities", to: "/school-life/facilities" },
              { label: "Activities", to: "/school-life/activities" },
              { label: "Events", to: "/school-life/events" },
            ]},
          ].map(section => (
            <div key={section.key}>
              <button
                onClick={() => toggleMobileSection(section.key)}
                className="w-full text-left font-semibold text-blue-900"
              >
                {section.title}
              </button>

              {openMobileMenu === section.key && (
                <div className="ml-4 mt-2 space-y-2">
                  {section.links.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={navItemClass}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>

          <NavLink
            to="/admissions/apply"
            className="block text-center bg-green-600 text-white py-2 rounded-lg"
          >
            Apply Now
          </NavLink>
        </div>
      )}
    </header>
  );
}
