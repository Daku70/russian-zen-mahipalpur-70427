import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "About Us", action: () => scrollToSection("why-choose-us") },
    { label: "Services", action: () => scrollToSection("services") },
    { label: "Prices", action: () => scrollToSection("services") },
    { label: "Gallery", action: () => scrollToSection("services") },
    { label: "Contact Us", action: () => scrollToSection("booking") },
  ];

  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            className="bg-spa-brown/90 backdrop-blur-sm border-gold/30 hover:bg-spa-dark/90 hover:border-gold shadow-elegant"
          >
            <Menu className="h-6 w-6 text-gold" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-spa-brown border-l-gold/30 z-[100]">
          <SheetHeader>
            <SheetTitle className="text-gold text-2xl">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="justify-start text-lg text-spa-cream hover:text-gold hover:bg-spa-dark/50 transition-smooth"
                onClick={() => {
                  item.action();
                  // Close the sheet after clicking
                  document.body.click();
                }}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
