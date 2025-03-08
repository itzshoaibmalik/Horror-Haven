
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Search, Film, Menu, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  onSearch?: (searchTerm: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
            <Ghost className="h-8 w-8 text-horror-blood animate-pulse-subtle" />
            <span className="text-horror-blood">Horror</span>Haven
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="horror-nav-item">Home</Link>
              <Link to="/movies" className="horror-nav-item">Movies</Link>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search movies..."
                  className="pl-10 w-64 bg-horror border-horror-light focus:border-horror-blood"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-horror-blood" />
              ) : (
                <Menu className="h-6 w-6 text-horror-blood" />
              )}
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-horror-light mt-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="horror-nav-item text-lg" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/movies" className="horror-nav-item text-lg" onClick={() => setMobileMenuOpen(false)}>
                Movies
              </Link>
            </nav>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search movies..."
                className="pl-10 w-full bg-horror border-horror-light focus:border-horror-blood"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
