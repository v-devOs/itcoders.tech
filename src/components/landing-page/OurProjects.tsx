"use client";

import React from "react";
import { projects } from "@/data";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import "./carousel.css";
import Image from "next/image";

export const OurProjects = () => {
  return (
    <Flicking
      align="prev"
      circular={true}
      inputType={["pointer"]}
      autoResize={true}
    >
      {projects.map((project, index) => (
        <section key={index} className="carousel-cards">
          <div className="carousel-card">
            <div className="carousel-container">
              <Image
                src={project.image}
                width={800}
                height={500}
                alt={project.title}
                className="p-4 carousel-img"
              />
            </div>
            <div className="carousel-details">
              <h3 className="carousel-details-title">{project.title}</h3>
            </div>
          </div>
        </section>
      ))}
    </Flicking>
  );
};
