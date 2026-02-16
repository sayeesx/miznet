"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// Custom hook for mobile detection that avoids hydration issues
const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile: hasMounted ? isMobile : false, hasMounted };
};

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn("fixed top-0 left-0 z-40 w-full transition-all duration-300", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible },
          )
          : child,
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  const { isMobile } = useMobileDetection();

  // Mobile rendering
  if (isMobile) {
    return (
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] mx-auto w-full flex flex-row items-center justify-between bg-white px-2 py-2 border-b border-gray-100 shadow-sm",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  // Desktop rendering
  return (
    <div
      className={cn(
        "relative z-[60] mx-auto flex w-full flex-row items-center justify-between self-start px-6 py-3 transition-all duration-300 ease-in-out border-b border-transparent",
        visible
          ? "bg-white/90 shadow-md backdrop-blur-md rounded-full mt-4 border-gray-200 max-w-4xl"
          : "bg-transparent max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const pathname = usePathname();
  const [loadingItem, setLoadingItem] = React.useState<string | null>(null);

  const handleItemClick = (itemLink: string) => {
    setLoadingItem(itemLink);
    if (onItemClick) onItemClick();

    // Clear loading after navigation
    setTimeout(() => setLoadingItem(null), 1000);
  };

  return (
    <div
      onMouseLeave={() => { }}
      className={cn(
        "flex flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 min-w-0 overflow-hidden flex-nowrap",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isActive = pathname === item.link;
        const isLoading = loadingItem === item.link;

        return (
          <div key={`link-${idx}`} className="relative">
            <Link
              onClick={() => handleItemClick(item.link)}
              className={cn(
                "relative px-3 py-2 text-neutral-600 dark:text-neutral-300 flex flex-col items-center transition-colors duration-200",
                isActive && 'font-bold !text-[#fc0404]',
              )}
              href={item.link}
            >
              <span className="relative z-20">{item.name}</span>
            </Link>
            {isLoading && (
              <div
                className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-3 h-3"
              >
                <div className="w-3 h-3 border border-[#fc0404] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden transition-all duration-300 ease-spring",
        visible
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-lg rounded-md translate-y-5 px-3 w-[90%]"
          : "bg-transparent translate-y-0 px-0 w-full rounded-[2rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  className,
  isOpen,
}: Omit<MobileNavMenuProps, 'onClose' | 'children'>) => {
  const navItems = [
    { name: "Features", link: "/miznet" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
  ];

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-xl dark:bg-neutral-950 animate-in fade-in slide-in-from-top-5 duration-200",
        className,
      )}
    >
      {navItems.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className="block w-full py-2 px-2 text-base font-medium text-black hover:bg-gray-100 rounded"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
      onClick={e => {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          e.preventDefault();
        }
      }}
    >
      <span className="font-extrabold text-base sm:text-lg md:text-xl text-black">Miznet AI</span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
  )) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer transition duration-150 inline-block text-center focus:outline-none focus:ring-2 focus:ring-[#fc0404] focus:ring-offset-2 border border-transparent focus:border-[#fc0404] active:border-[#fc0404]";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-md hover:bg-neutral-100 hover:scale-100 hover:-translate-y-0.5 active:scale-95 active:bg-neutral-200",
    secondary: "bg-transparent shadow-none dark:text-white hover:bg-neutral-100/60 hover:scale-100",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-md hover:bg-neutral-900/90 hover:scale-100",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:shadow-md hover:from-blue-600 hover:to-blue-800 hover:scale-100",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export function NavbarDemo() {
  const navItems = [
    { name: "Features", link: "/miznet" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="flex flex-row items-center w-auto gap-1 sm:gap-4 min-w-0" />
        </NavBody>
      </Navbar>
    </div>
  );
}
