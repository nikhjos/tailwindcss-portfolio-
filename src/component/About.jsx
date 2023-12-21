import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-elemets grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
            placeat doloribus. Ut cupiditate nostrum eaque deleniti corrupti
            nemo soluta labore eum saepe est, laboriosam numquam provident quo
            dolores, pariatur dolor necessitatibus dicta officiis modi! Totam
            soluta saepe veniam eaque atque.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
