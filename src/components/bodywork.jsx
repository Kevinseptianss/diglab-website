/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
    >
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/500x500" />
      </div>
    </Carousel>
  );
};

const BodyWork = ({ items }) => {
  return (
    <div className="p-20 crique-light flex flex-row">
      <div className="flex-1 pt-24">
        <h1 className="text-3xl font-bold">About This Project</h1>
        <p className="text-2xl">{items.about}</p>
        <h1 className="text-3xl font-bold pt-10">Scope of Work</h1>
        <p className="text-2xl">{items.scope}</p>
        <h1 className="text-3xl font-bold pt-10">Business Sector</h1>
        <p className="text-2xl">{items.business}</p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div style={{ width: "500px" }}>
          <MyCarousel />
        </div>
      </div>
    </div>
  );
};

export default BodyWork;
