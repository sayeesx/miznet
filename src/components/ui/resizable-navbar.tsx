"use client";
import { cn } from "../../../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import React, { useRef, useState, useEffect } from "react";


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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("fixed top-0 left-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-hide navbar on scroll for mobile
  useEffect(() => {
    if (!isMobile || !isClient) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isClient]);

  if (isMobile && isClient) {
    return (
      <div
        className={cn(
          "fixed top-0 left-0 right-0 transition-transform duration-500 ease-in-out",
          show ? "translate-y-0" : "-translate-y-full",
          "z-[60] mx-auto w-full max-w-full flex flex-row items-center justify-between self-start bg-white px-1 py-1 gap-1 overflow-x-auto whitespace-nowrap border-b border-gray-200 shadow-sm flex-nowrap min-w-0",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  // Desktop: use motion.div with animation
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(4px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
        borderRadius: visible ? 9999 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 18,
        mass: 0.8,
        duration: 0.7,
      }}
      style={{}}
      className={cn(
        "relative z-[60] mx-auto w-full max-w-full flex flex-row items-center justify-between self-start bg-white px-4 py-2 gap-4 overflow-x-auto whitespace-nowrap border-b border-gray-200 shadow-sm flex-nowrap min-w-0",
        visible ? "rounded-full" : "rounded-none",
        visible && "bg-white/80",
        className,
      )}
    >
      {children}
    </motion.div>
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
      onMouseLeave={() => {}}
      className={cn(
        "flex flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 min-w-0",
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
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-3 h-3"
              >
                <div className="w-3 h-3 border border-[#fc0404] border-t-transparent rounded-full animate-spin" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 0.8,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
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
  children,
  className,
  isOpen,
}: Omit<MobileNavMenuProps, 'onClose'>) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
      onClick={e => {
        if (pathname === "/" && isClient) {
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
    {
      name: "Features",
      link: "/miznet",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [filteredNavItems, setFilteredNavItems] = useState(navItems);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isClient) {
      setFilteredNavItems(navItems);
    }
  }, [isClient, isMobile]);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={filteredNavItems} className="flex flex-row items-center w-auto gap-1 sm:gap-4 min-w-0" />
        </NavBody>
      </Navbar>
    </div>
  );
}
