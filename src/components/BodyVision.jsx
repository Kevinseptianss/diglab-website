import COLORS from "./color";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

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
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
      <div style={{ padding: "20px" }}>
        <img src="https://placehold.co/300x300" />
      </div>
    </Carousel>
  );
};

const BodyVision = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "400px",
          marginTop: -37,
        }}
      >
        <div
          className="crique-light w-[125%] absolute"
          style={{
            backgroundColor: COLORS.blue,
            marginLeft: -100,
            marginTop: -50,
          }}
        >
          <h1 style={{ fontSize: 340, fontWeight: "550", color: COLORS.green }}>
            WE CRAFT
          </h1>
        </div>
      </div>

      <div className="crique-light flex items-center justify-center py-8">
        <h1
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: 40,
            fontWeight: 550,
          }}
        >
          Diglab began its journey in 2022 as a freelance creative <br />
          agency with a passion for innovation and storytelling.
          <br />
          From its inception, Diglab has partnered with brands and <br />
          businesses of all sizes, helping them achieve their goals <br />
          through our core services
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="https://placehold.co/1000x500"
          className="border border-black"
        />
      </div>

      <div className="bg-black clip-path-trapezoid w-[300px] h-[50px] flex justify-center items-center ml-56 mt-20">
        <h1 style={{ color: COLORS.green }} className="text-xl font-semibold">
          Vision & Mission
        </h1>
      </div>
      <div className="bg-black text-white py-12 px-8 flex flex-row">
        <div
          className="flex-1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <div style={{ width: "340px" }}>
            <MyCarousel />
          </div>
          <Link to='/works'>
            <div
              className="bg-black font-bold py-2 px-4 mt-4 w-[300px] items-center justify-center flex"
              style={{ border: "solid", borderColor: COLORS.white }}
            >
              <p style={{ color: COLORS.green }}>THE WORKS</p>
            </div>
          </Link>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl">
            To drive growth and create <br />
            meaningful impact through <br />
            creativity.
          </h1>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl">
            Deliver creative, effective, and <br />
            impactful solutions to achieve <br />
            their goals. <br />
            Build sustainable business <br />
            growth with responsible <br />
            strategies.
          </h1>
        </div>
      </div>
    </>
  );
};

export default BodyVision;
