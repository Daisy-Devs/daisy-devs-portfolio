"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import DaisyIcon from "./daisy-icon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navLink =
  "text-sm font-geist-sans text-on-surface-variant hover:text-secondary transition-colors duration-200";

const activeNavLink =
  "text-sm font-geist-sans text-secondary font-bold border-b-2 border-dashed border-secondary";

const Navbar = () => {
  const path = usePathname();
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [])

  if (!mounted) return null // render nothing on server


  return (
    <nav
      aria-label="Main navigation"
      className="fixed shadow-drop-border top-4 left-1/2 z-50 w-[95%] md:w-[90%] max-w-5xl -translate-x-1/2 rounded-full border border-on-surface bg-surface/90 px-6 py-2 backdrop-blur-lg drop-border"
    >
      <div className="flex items-center justify-between gap-12">
        <a href="#" className="flex items-center gap-2 text-primary font-bold">
          <DaisyIcon />
          <span className="hidden sm:inline font-bricolage-grotesque font-extrabold text-2xl">
            Daisy Devs
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className={path == "/" ? activeNavLink : navLink}>
            Home
          </Link>

          <a
            href="/projects"
            className={path == "/projects" ? activeNavLink : navLink}
          >
            Projects
          </a>

          <a
            href="/about"
            className={path == "/about" ? activeNavLink : navLink}
          >
            About
          </a>

          <a
            href="/pricing"
            className={path == "/pricing" ? activeNavLink : navLink}
          >
            Pricing
          </a>
        </div>

        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        >
          {theme === "light" ? (
            <>
              Dark theme <Moon className="ml-2" />
            </>
          ) : (
            <>
              Light theme <Sun className="ml-2" />
            </>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
