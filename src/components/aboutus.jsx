import COLORS from "./color";

const AboutUs = () => {
  return (
    <div className="crique-light">
      <div className="bg-black clip-path-trapezoid w-[200px] h-[50px] flex justify-center items-center mx-10">
        <h1 style={{color: COLORS.green}} className="text-xl font-semibold">About Us</h1>
      </div>
      <div className="bg-black text-white py-12 px-8">
        <p className="text-2xl font-semibold">
          Diglab is a digital agency for fast-growing businesses,<br /> 
          delivering creative solutions to help raise funds, drive<br /> 
          product sales, simplify complex ideas, and attract top<br />
          talent.
        </p>
        <div className="bg-black font-bold py-2 px-4 mt-4 inline-block" style={{border: "solid", borderColor: COLORS.white,}}>
          <p style={{color: COLORS.green}}>See More</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
