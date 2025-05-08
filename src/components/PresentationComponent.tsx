import { FaArrowDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const PresentationComponent = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "sine.inOut",
      },
    });

    if (inView) {
      tl.to(containerRef.current, {
        backgroundColor: "#171717",
        color: "#fafafa",
        duration: 0.6,
      });

      if (entry) {
        const spans = entry.target.querySelectorAll("h1 span");
        const memberItems = entry.target.querySelectorAll(".member-item");

        if (spans.length > 0) {
          tl.from(
            spans,
            {
              y: 50,
              opacity: 0,
              stagger: 0.15,
              duration: 0.8,
              ease: "back.out(0.6)",
            },
            "-=0.6"
          );
        }

        if (memberItems.length > 0) {
          tl.from(
            memberItems,
            {
              y: 40,
              opacity: 0,
              stagger: 0.2,
              duration: 0.7,
              ease: "elastic.out(1, 0.5)",
            },
            "-=0.4"
          );
        }
      }
    } else {
      gsap.to(containerRef.current, {
        backgroundColor: "#fafafa",
        color: "#171717",
        duration: 0.6,
      });
    }
  }, [inView, entry]);

  return (
    <section
      ref={(el) => {
        ref(el);
        containerRef.current = el;
      }}
      className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#fafafa] text-[#171717]"
    >
      <div className="flex flex-col items-center justify-center text-center gap-4 mt-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          Proyecto final arquitectura de computadoras
        </h1>
      </div>
    </section>
  );
};
