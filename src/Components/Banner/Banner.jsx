import "./Banner.css";

const Banner = ({ heading, title ,img}) => {
  return (
    <section style={{backgroundImage: `url(${img})`}} className="bgImg h-[60vh] mb-10 flex justify-center items-center ">
      <div className="bg-black w-10/12 bg-opacity-70 h-fit text-white p-24 text-center">
        <h1 className="text-5xl uppercase">{heading}</h1>
        <p className="mt-2">{title}</p>
      </div>
    </section>
  );
};

export default Banner;
