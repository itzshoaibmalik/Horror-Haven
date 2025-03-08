
import { Link } from 'react-router-dom';
import { Github, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="horror-gradient border-t border-horror-light py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HorrorHaven. All Screams Reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-horror-blood transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-horror-blood transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-horror-blood transition-colors">
              Terms
            </Link>
            
            <div className="flex items-center gap-3 ml-4">
              <a href="#" className="text-muted-foreground hover:text-horror-blood transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-horror-blood transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
