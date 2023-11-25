import React from "react";
import "./SectionCover.css"

const SectionCover = ({ img, title, sudTitle }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${img}
        )`,
      }}
      className="sectionCover w-full h-[70vh] flex justify-center items-center"
    >
      <div className="w-9/12 min-h-fit bg-black bg-opacity-70 p-20 text-center">
        <h1 className="text-7xl font-bold mb-5 uppercase">{title}</h1>
        <p className="text-xl font-">{sudTitle}</p>
      </div>
    </section>
  );
};

export default SectionCover;
