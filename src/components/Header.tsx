import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-1 bg-spa-brown/90 backdrop-blur-sm rounded-lg p-2 shadow-elegant">
          <NavigationMenuItem>
            <Link
              to="/"
              className={navigationMenuTriggerStyle() + " text-spa-cream hover:text-gold hover:bg-spa-dark/50"}
            >
              Home
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className={navigationMenuTriggerStyle() + " text-spa-cream hover:text-gold hover:bg-spa-dark/50"}
            >
              About Us
            </button>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <button
              onClick={() => scrollToSection("services")}
              className={navigationMenuTriggerStyle() + " text-spa-cream hover:text-gold hover:bg-spa-dark/50"}
            >
              Services
            </button>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <button
              onClick={() => scrollToSection("services")}
              className={navigationMenuTriggerStyle() + " text-spa-cream hover:text-gold hover:bg-spa-dark/50"}
            >
              Prices
            </button>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <button
              onClick={() => scrollToSection("services")}
              className={navigationMenuTriggerStyle() + " text-spa-cream hover:text-gold hover:bg-spa-dark/50"}
            >
              Gallery
            </button>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <button
              onClick={() => scrollToSection("booking")}
              className={navigationMenuTriggerStyle() + " text-spa-cream hover:text-gold hover:bg-spa-dark/50"}
            >
              Contact Us
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
