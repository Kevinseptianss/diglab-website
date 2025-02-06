import banner from "../assets/banner1.png";
import COLORS from "./color";



const Body = () => {
  return (
    <div className="flex flex-row p-10 justify-center" style={{ height: '90vh'}}>
      <div className="crique-light py-[100px] justify-end text-5xl">
        <h1 className="font-semibold" style={{color: COLORS.blue}}>WE CRAFT</h1>
        <h1 className="font-thin" style={{color: COLORS.blue}}>TOMORROW&apos;S</h1>
        <h1 className="font-semibold" style={{color: COLORS.blue}}>ELEGANCE</h1>
      </div>
      <img src={banner} className="w-[50vw] h-[40vw]"/>
    </div>
  );
};

export default Body;
