import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../assets/data";
import SkillsCard from "./SkillsCard";

const Skill = () => {
  return (
    <section className="py-20 align-elements " id="skills">
      <SectionTitle title="tech Stack" />
      <div className="grid py-16 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skill;
