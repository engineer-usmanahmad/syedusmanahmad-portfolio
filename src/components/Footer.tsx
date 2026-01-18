import { Link } from 'react-scroll';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-heading font-bold mb-2">Syed Usman Ahmad</h3>
                <p className="text-gray-400">© 2024 Syed Usman Ahmad. All rights reserved.</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
                <div className="flex gap-6 mb-4">
                    {['Home', 'About', 'Skills', 'Experience', 'Contact'].map((item) => (
                        <Link 
                            key={item} 
                            to={item.toLowerCase()} 
                            smooth={true} 
                            duration={500} 
                            className="text-gray-400 hover:text-accent cursor-pointer transition-colors text-sm font-medium"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                    Built with <FaHeart className="text-red-500 animate-pulse" /> for cloud excellence
                </p>
            </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Link 
        to="home" 
        smooth={true} 
        duration={800} 
        className="absolute bottom-8 right-8 w-12 h-12 bg-accent hover:bg-orange-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all hover:-translate-y-1 z-10"
      >
        <FaArrowUp className="text-white" />
      </Link>
    </footer>
  );
};

export default Footer;
