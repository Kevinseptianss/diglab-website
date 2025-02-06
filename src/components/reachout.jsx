import COLORS from "./color";
import logoBlack from '../assets/logo2.png'

const ReachOut = () => {
  return (
    <div className="crique-light bg-black flex flex-row p-10 justify-center items-center">
      <h1 style={{ color: COLORS.green }} className="text-5xl font-bold px-5">
        REACH OUT
      </h1>
      <img src={logoBlack} alt="logo" className="w-30 h-10" />
      <h1 style={{ color: COLORS.green }} className="text-5xl font-bold px-5">
        LET&apos;S CREATE
      </h1>
    </div>
  );
};

export default ReachOut;
