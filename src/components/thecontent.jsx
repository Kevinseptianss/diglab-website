/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
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
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/1080x1920" />
      </div>
    </Carousel>
  );
};

const TheContent = ({ items }) => {
  return (
    <div className="crique-light flex flex-col">
        <div className="flex flex-row justify-between items-center px-20">
            <h1 className="text-4xl font-bold">The Content</h1>
            <h1 className="text-4xl font-bold">{items.year}</h1>
        </div>
        <div>
            <MyCarousel />
        </div>
    </div>
  )
}

export default TheContent