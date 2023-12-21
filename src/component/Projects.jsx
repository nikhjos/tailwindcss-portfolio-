import React from "react";
import { projects } from "../assets/data";
import SectionTitle from "./SectionTitle";
import ProjrctCard from "./ProjrctCard";

const Projects = () => {
  return (
    <section className="py-20 align-elements" id="project">
      <SectionTitle text="Web Creation" />
      <div className="grid py-16 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjrctCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
