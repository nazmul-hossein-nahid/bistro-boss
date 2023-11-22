const Sectiontitle = ({ subheading, heading }) => {
  return (
    <section className="flex justify-center">
      <div className="text-center ">
        <h4 className="text-yellow-500 text-xl">---{subheading}---</h4>
        <h2 className="text-4xl border-y-4 px-10 py-5 my-4">{heading}</h2>
      </div>
    </section>
  );
};

export default Sectiontitle;
