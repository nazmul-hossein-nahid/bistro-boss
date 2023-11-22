import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Hero = () => {
  return (
    <section>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/BwVjwyP/01.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/kcCrVw1/02.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/k4rspVY/03.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/NSfDx0G/04.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/jyM0vrn/05.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/Dgmvms8/06.png" />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
