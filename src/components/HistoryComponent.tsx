import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

export const HistoryComponent = () => {
  const { ref: containerRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true, 
  });

  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      gsap.set(".card", {
        opacity: 0,
        y: 20,
      });
    }

    if (inView) {
      const ctx = gsap.context(() => {
        gsap.to(".card", {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          ease: "power3.out",
          duration: 0.8,
        });
      }, animationRef);

      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <div
      ref={(el) => {
        containerRef(el); 
        animationRef.current = el;
      }}
      className="min-h-screen bg-gray-100 text-gray-800 p-6 sm:p-12 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
        Historia de Apple Computer Inc.
      </h2>

      {/* Card 1: Fundación */}
      <div className="card bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 mb-8 max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
          Inicio de Apple Computer Inc.
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Esta historia se remonta al año{" "}
          <span className="text-gray-900 font-medium">1976</span>, cuando el{" "}
          <span className="text-gray-900 font-medium">1 de abril</span> de ese
          año tres muchachos crearon{" "}
          <span className="text-gray-900 font-medium">Apple Computer Inc.</span>
          : <span className="text-gray-900 font-medium">Steve Jobs</span>,{" "}
          <span className="text-gray-900 font-medium">Steve Wozniak</span> y{" "}
          <span className="text-gray-900 font-medium">Ronald Wayne</span>.
          Wozniak, a quien le decían Woz, era informático y un experto en su
          materia.
        </p>
      </div>

      {/* Card 2: Apple I */}
      <div className="card grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
            El primer producto
          </h3>
          <p className="text-gray-600 leading-relaxed">
            El <span className="text-gray-900 font-medium">Apple I</span> salió
            a la venta en{" "}
            <span className="text-gray-900 font-medium">julio de 1976</span> con
            el precio de{" "}
            <span className="text-gray-900 font-medium">666,66 dólares</span>.
            Se fabricaron{" "}
            <span className="text-gray-900 font-medium">200 unidades</span>. A
            diferencia de otras computadoras para aficionados de esos días, el{" "}
            <span className="text-gray-900 font-medium">Apple I</span> era un{" "}
            <span className="text-gray-900 font-medium">
              tablero de circuitos completamente ensamblado
            </span>{" "}
            que contenía{" "}
            <span className="text-gray-900 font-medium">62 chips</span>.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/apple-code.jpeg"
            alt="Código Apple I"
            className="rounded-lg shadow-md border border-gray-200 w-full h-auto max-h-64 object-cover"
          />
        </div>
      </div>

      {/* Card 3: Componentes */}
      <div className="card bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 mb-8 max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
          Componentes adicionales necesarios
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Para hacer una computadora funcional, los usuarios tenían que agregar:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 list-disc pl-5">
          <li>
            <span className="text-gray-900 font-medium">Carcasa:</span>{" "}
            necesaria para proteger y alojar los componentes.
          </li>
          <li>
            <span className="text-gray-900 font-medium">Transformador:</span>{" "}
            para proporcionar una fuente de alimentación estable.
          </li>
          <li>
            <span className="text-gray-900 font-medium">
              Interruptor de encendido:
            </span>{" "}
            para controlar el flujo de energía.
          </li>
          <li>
            <span className="text-gray-900 font-medium">Teclado ASCII:</span>{" "}
            para interactuar con la computadora.
          </li>
        </ul>
        <p className="text-gray-600 mt-4">
          Más adelante se comercializó una{" "}
          <span className="text-gray-900 font-medium">tarjeta opcional</span>{" "}
          que proporcionaba una interfaz para casetes de almacenamiento.
        </p>
      </div>

      {/* Card 4: Estado actual */}
      <div className="card grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl">
        <div className="flex items-center justify-center order-1 md:order-2">
          <img
            src="/images/apple-one.jpeg"
            alt="Apple I original"
            className="rounded-lg shadow-md border border-gray-200 w-full h-auto max-h-64 object-cover"
          />
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 order-2 md:order-1">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
            Estado actual del Apple I
          </h3>
          <p className="text-gray-600 leading-relaxed">
            De los{" "}
            <span className="text-gray-900 font-medium">
              200 modelos fabricados
            </span>
            , quedan alrededor de{" "}
            <span className="text-gray-900 font-medium">60-70 unidades</span> en
            todo el mundo. El Apple I no es solo lo primero que hizo Apple, sino
            el{" "}
            <span className="text-gray-900 font-medium">
              primer PC que combinó un microprocesador con conexión para teclado
              y monitor
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
