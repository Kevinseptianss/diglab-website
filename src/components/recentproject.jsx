import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import COLORS from "./color";

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
    infinite={true}>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
      <div style={{ padding: "20px" }}><img src="https://placehold.co/1080x1920" /></div>
    </Carousel>
  );
};

const RecentProject = () => {
  return (
    <div>
      <div className="px-10 py-6 crique-light">
        <h1 style={{color: COLORS.blue}} className="text-3xl font-semibold">Recent Project</h1>
      </div>
      <div>
        <MyCarousel />
      </div>
    </div>
  );
};

export default RecentProject;
