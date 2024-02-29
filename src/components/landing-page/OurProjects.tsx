"use client";

import React from "react";
import { projects } from "@/data";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import "./carousel.css";

export const OurProjects = () => {
  return (
    <Flicking
      align="prev"
      circular={true}
      inputType={["pointer"]}
      autoResize={true}
    >
      {projects.map((project, index) => (
        <section key={index} className="cards">
          <div className="card">
            <div className="container">
              <img
                src={project.image}
                width={800}
                height={500}
                alt={project.title}
                className="p-4"
              />
            </div>
            <div className="details">
              <h3>{project.title}</h3>
            </div>
          </div>
        </section>
      ))}
    </Flicking>
  );
};
