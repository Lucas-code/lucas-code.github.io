"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { RiFiverrFill } from "react-icons/ri";
import { useBreakpoints } from "@/hooks/breakpoints";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";

export default function NavBar() {
  const { isDesktop, isTablet, is768px } = useBreakpoints();

  const [stopped, setStopped] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       const visibleSections = entries.filter((entry) => entry.isIntersecting);

    //       console.log(entries);

    //       if (visibleSections.length > 0) {
    //         // console.log(visibleSections);
    //         const sectionId = visibleSections[0].target.id;
    //         setCurrentSection(sectionId);
    //       }
    //       else {
    //         setCurrentSection(undefined);
    //       }
    //     },
    //     {
    //       root: null,
    //       rootMargin: "100% 0px -100% 0px",
    //       threshold: 0,
    //     }
    //   );

    //   observer.observe(document.getElementById("about")!);
    //   observer.observe(document.getElementById("experience")!);
    //   observer.observe(document.getElementById("projects")!);
    //   // observer.observe(document.getElementById("contact")!);

    //   return () => {
    //     observer.disconnect();
    //   }
    // }, []);

  useEffect(() => {
    const sectionIds = ["about", "experience", "projects"];
    const offset = 100; // section becomes active after it passes 100px from top

    let ticking = false;

    const updateCurrentSection = () => {
      const current = sectionIds
        .map((id) => {
          const element = document.getElementById(id);

          return {
            id,
            top: element?.getBoundingClientRect().top ?? Infinity,
          };
        })
        .filter((section) => section.top <= offset)
        .at(-1)?.id;
      
      setCurrentSection(current);

      ticking = false;
    };

    const handleScroll = () => {
      const contact = document.getElementById("contact");
      const nav = document.querySelector("nav");

      if (!contact || !nav) return;

      if (!stopped && nav.getBoundingClientRect().bottom >= contact.getBoundingClientRect().top) {
        setStopped(true);
      } if (nav.getBoundingClientRect().top > 0) {
        setStopped(false);
      }

      if (!ticking) {
        window.requestAnimationFrame(updateCurrentSection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
	
	if (!isMounted || is768px) {
    return null;
  }

	return (
    <>
      {/* {is768px ? (
        <Drawer swipeDirection="left">
          <DrawerTrigger render={<Button variant="ghost" className="fixed top-0 left-0 m-6 w-20 h-20 p-0 "><GiHamburgerMenu className="!size-[50px]" /></Button>} />
          <DrawerContent className="bg-gray-400/70 border-r-black backdrop-blur-md outline-black">
            <DrawerHeader>
              <DrawerTitle className="text-5xl">Menu</DrawerTitle>
            </DrawerHeader>
            <div>
              <DrawerClose render={<Button variant="ghost" className="w-full justify-start" onClick={() => { scrollToSection("experience"); }} />}>
                Experience
              </DrawerClose>
              <DrawerClose render={<Button variant="ghost" className="w-full justify-start" onClick={() => { scrollToSection("projects"); }} />}>
                Projects
              </DrawerClose>
              <DrawerClose render={<Button variant="ghost" className="w-full justify-start" onClick={() => { scrollToSection("contact"); }} />}>
                Contact
              </DrawerClose>
              <DrawerClose render={<Button variant="ghost" className="w-full justify-start" onClick={() => { scrollToSection("about"); }} />}>
                About
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      ) : ( */}
        <nav className={`${stopped ? `absolute bottom-0` : "fixed top-0"} w-full flex justify-between items-center p-6 bg-transparent z-100`}>
          <div id="page-links" className="flex gap-5 bg-[#919191] items-center rounded-full">
            <Button
              variant="ghost"
              onClick={() => { scrollToSection("about"); }}
              className={`h-full py-3 px-5 rounded-full cursor-pointer hover:bg-[#ebebeb]/60 ${currentSection === "about" && "bg-[#3795cf]"}`}
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => { scrollToSection("experience"); }}
              className={`h-full py-3 px-5 rounded-full cursor-pointer hover:bg-[#ebebeb]/60 ${currentSection === "experience" && "bg-[#3795cf]"}`}
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              onClick={() => { scrollToSection("projects"); }}
              className={`h-full py-3 px-5 rounded-full cursor-pointer hover:bg-[#ebebeb]/60 ${currentSection === "projects" && "bg-[#3795cf]"}`}
            >
              Projects
            </Button>
            {/* <Button
              variant="ghost"
              onClick={() => { scrollToSection("contact"); }}
              className="h-full py-5 px-10 rounded-full hover:bg-[#ebebeb]/60"
            >
              Contact
            </Button> */}
          </div>
          {isDesktop ? (
          <div id="social-links" className="flex gap-2 bg-[#919191] rounded-full">
            <Link href="https://github.com/Lucas-code" target="_blank" className="py-3 px-3 rounded-full cursor-pointer hover:bg-[#ebebeb]">
              <FaGithubSquare size={30} />
            </Link>
            <Link href="https://www.linkedin.com/in/lucas-pango/" target="_blank" className="py-3 px-3 rounded-full cursor-pointer hover:bg-[#ebebeb]">
              <FaLinkedin size={30} />
            </Link>
            <Link href="https://www.fiverr.com/s/VYa0G2z" target="_blank" className="py-3 px-3 rounded-full cursor-pointer hover:bg-[#ebebeb]">
              <RiFiverrFill size={30} />
            </Link>
          </div>
          ) : isTablet && (
            <div className="bg-[#919191] rounded-full">
              <Button
                variant="ghost"
                onClick={() => { scrollToSection("contact"); }}
                className={"h-full py-5 px-10 rounded-full cursor-pointer hover:bg-[#ebebeb]/60"}
              >
                Contact
              </Button>
            </div>
          )}
        </nav>
      {/* )} */}
    </>
	)
}