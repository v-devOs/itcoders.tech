"use client";

import { useState } from "react";
import { projects } from "@/data";

import "./carousel.css";

export const OurProjects = () => {
  // Determina si el número de fotos es par.
  const even: boolean = projects.length % 2 === 0;

  // Estado actual del carrusel.
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(projects.length / 2)
  );
  const [transform, setTransform] = useState(even ? -250 : 0);

  // Se encarga de mover el carrusel hacia la izquierda o derecha.
  const slide = (direction: string) => {
    if (direction === "left" && activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
      setTransform(transform + 520);
    }

    if (direction === "right" && activeIndex !== projects.length - 1) {
      setActiveIndex(activeIndex + 1);
      setTransform(transform - 520);
    }
  };

  // Se encarga de mover el carrusel hacia la imagen seleccionada.
  const slideByImage = (event: any, index: number) => {
    if (index !== activeIndex) {
      event.preventDefault();
      slide(index < activeIndex ? "left" : "right");
    }
  };

  return (
    <div className="carousel">
      <ul
        className={even ? "even" : undefined}
        style={{ transform: `translateX(${transform}px)` }}
      >
        {projects.map((project, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active" : undefined}
            onClick={(event) => slideByImage(event, index)}
          >
            <a href="">
              <img src={project.image} alt={project.title} />
              <div className="meta">
                <span className="cta">Ver más</span>
                <span className="caption">{project.title}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="arrows">
        <span
          className={activeIndex == 0 ? "left disabled" : "left"}
          onClick={() => slide("left")}
        />
        <span
          className={
            activeIndex == projects.length - 1 ? "right disabled" : "right"
          }
          onClick={() => slide("right")}
        />
      </div>
    </div>
  );
};
