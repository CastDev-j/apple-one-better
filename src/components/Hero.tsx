import { FaApple } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const HeroComponent = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const container = useRef(ref);

  useGSAP(() => {
    if (entry) {
      gsap.set(entry.target.querySelectorAll("svg, h1, h2, .arrow-down, p"), {
        opacity: 0,
        y: 30, 
      });

      const tl = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "sine.inOut", 
        },
      });

      tl.to(container.current, {
        opacity: 1,
        y: 0,
      });

      tl.to(
        [entry.target.querySelector("svg"), entry.target.querySelector("h1")],
        {
          opacity: 1,
          y: 0,
          stagger: 0.1, 
          ease: "back.out(1.2)", 
        }
      );

      tl.to(
        entry.target.querySelector("h2"),
        {
          opacity: 1,
          y: 0,
          ease: "expo.out", 
        },
        "-=0.3" 
      );

      tl.fromTo(
        entry.target.querySelector(".arrow-down"),
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 15, 
          repeat: -1,
          yoyo: true,
          duration: 1.2, 
          ease: "sine.inOut", 
        },
        "-=0.8"
      );

      tl.to(
        entry.target.querySelector("p"),
        {
          opacity: 0.5,
          y: 0,
          duration: 0.8, 
          ease: "expo.out",
        },
        "-=0.5" 
      );
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-center p-4"
    >
      <FaApple className="text-6xl" />

      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h1 className="font-semibold text-4xl">Apple One</h1>
        <h2 className="text-lg flex max-w-56 text-neutral-500">
          Todo lo que necesitas en un solo lugar
        </h2>
      </div>

      <div className="mt-[20vh] flex flex-col items-center justify-center text-center gap-4">
        <GoArrowDown className="arrow-down text-4xl" />
        <p className="text-neutral-500 text-sm mt-2 max-w-36">
          Desliza hacia abajo para ver más
        </p>
      </div>
    </section>
  );
};
