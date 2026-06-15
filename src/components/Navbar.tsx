import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 transition-all duration-300
      rounded-2xl shadow-md px-6 py-4 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-xl font-bold">
          <span className="text-blue-600">SANDEEP </span>
          <span className={theme === 'dark' ? 'text-white' : 'text-black'}>CHINNABOINA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`font-medium hover:text-blue-600 transition ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className={`border px-4 py-2 rounded-full font-semibold transition ${
              theme === 'dark'
                ? 'border-white hover:bg-white hover:text-black'
                : 'border-black hover:bg-black hover:text-white'
            }`}
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button + Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`block font-medium transition ${
                theme === 'dark'
                  ? 'text-white hover:text-blue-400'
                  : 'text-black hover:text-blue-600'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className={`block border px-4 py-2 rounded-full text-center font-semibold transition ${
              theme === 'dark'
                ? 'border-white hover:bg-white hover:text-black'
                : 'border-black hover:bg-black hover:text-white'
            }`}
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;