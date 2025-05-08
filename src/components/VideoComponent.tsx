import React, { useRef, useEffect } from "react";
import { FaMicrochip, FaApple } from "react-icons/fa";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import gsap from "gsap";

export const VideoComponent = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlayVideo = () => {
    if (overlayRef.current) {
      overlayRef.current.style.display = "none"; // Ocultar el overlay.
    }
    if (videoRef.current) {
      videoRef.current.classList.remove("hidden"); // Mostrar el video.
      videoRef.current.play(); // Reproducir el video.
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      // Inicializa los estilos desactivados
      gsap.set(".feature-card, .video-container", {
        opacity: 0,
        y: 20,
      });
    }

    const ctx = gsap.context(() => {
      // Anima los elementos al entrar en el viewport
      gsap.to(".feature-card, .video-container", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power3.out",
        duration: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-neutral-100 text-neutral-800 p-6 sm:p-12 flex flex-col items-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center text-neutral-900">
          Especificaciones Técnicas del Apple I
        </h2>

        {/* Video Section */}
        <div className="video-container relative aspect-video bg-neutral-200 rounded-xl overflow-hidden border border-neutral-300 hover:border-neutral-400 transition-all duration-300 mb-8">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover hidden rounded-xl"
            src="https://res.cloudinary.com/dyhudqjn6/video/upload/v1746598937/tsg6yrnksy4z50p0de1b.mp4"
            controls
          ></video>

          <div
            ref={overlayRef}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-200/80 to-neutral-100/70 cursor-pointer"
            onClick={handlePlayVideo}
          >
            <div className="text-center p-6 max-w-2xl">
              <div className="w-20 h-20 rounded-full bg-neutral-300 flex items-center justify-center hover:bg-neutral-400 transition-all duration-300 mx-auto mb-4">
                <TbDeviceDesktopAnalytics className="h-10 w-10 text-neutral-600" />
              </div>
              <h3 className="text-xl font-medium text-neutral-700 mb-2">
                Ver demostración técnica
              </h3>
              <p className="text-neutral-500">
                Un vistazo al funcionamiento interno del Apple I
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hardware */}
          <div className="feature-card bg-white p-6 rounded-xl border border-neutral-300 hover:border-neutral-400 transition-all duration-300 shadow-sm">
            <div className="flex items-center mb-4">
              <FaMicrochip className="h-6 w-6 mr-3 text-neutral-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                Hardware
              </h3>
            </div>
            <ul className="text-neutral-600 space-y-2">
              <li>Procesador MOS 6502 a 1MHz</li>
              <li>4KB de memoria RAM (ampliable a 8KB)</li>
              <li>62 chips en placa base</li>
            </ul>
          </div>

          {/* Software */}
          <div className="feature-card bg-white p-6 rounded-xl border border-neutral-300 hover:border-neutral-400 transition-all duration-300 shadow-sm">
            <div className="flex items-center mb-4">
              <FaApple className="h-6 w-6 mr-3 text-neutral-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                Software
              </h3>
            </div>
            <ul className="text-neutral-600 space-y-2">
              <li>Intérprete BASIC en cassette</li>
              <li>Monitor de 24 líneas x 40 columnas</li>
              <li>Entrada/salida por teclado ASCII</li>
            </ul>
          </div>

          {/* Innovación */}
          <div className="feature-card bg-white p-6 rounded-xl border border-neutral-300 hover:border-neutral-400 transition-all duration-300 shadow-sm">
            <div className="flex items-center mb-4">
              <MdOutlineIntegrationInstructions className="h-6 w-6 mr-3 text-neutral-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                Innovación
              </h3>
            </div>
            <ul className="text-neutral-600 space-y-2">
              <li>Primer computador con conexión integrada</li>
              <li>Diseño completamente ensamblado</li>
              <li>Precio accesible para la época ($666.66)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
