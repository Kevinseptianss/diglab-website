import COLORS from "./color";

const OurService = () => {
  return (
    <div className="crique-light">
      <div
        style={{ backgroundColor: COLORS.blue }}
        className="w-[200px] h-[80px] items-center justify-center flex mx-10"
      >
        <h1 style={{ color: COLORS.green }} className="text-3xl font-bold">
          Our Service
        </h1>
      </div>
      <div style={{ backgroundColor: COLORS.blue }} className="flex flex-row">
        <div className="p-10 w-[40%]">
          <h2 className="text-white text-2xl">
            Diglab has grown into a trusted <br />
            partner for businesses seeking to <br />
            elevate their presence, connect <br />
            with their audience, and bring their <br />
            ideas to life.
          </h2>
          <div className="border border-white inline-block p-2 px-5 my-3">
            <h1 style={{ color: COLORS.green }}>SEE MORE</h1>
          </div>
        </div>
        <div className="flex flex-col w-[60%]">
          <div className="border border-white flex-1 flex items-center justify-start text-white p-5">
            <h1 className="text-3xl font-bold">Social Media Development</h1>
          </div>
          <div className="border border-white flex-1 flex items-center justify-start text-white p-5">
            <h1 className="text-3xl font-bold">Marketing & Creative</h1>
          </div>
          <div className="border border-white flex-1 flex items-center justify-start text-white p-5">
            <h1 className="text-3xl font-bold">KOL Management</h1>
          </div>
          <div className="border border-white flex-1 flex items-center justify-start text-white p-5">
            <h1 className="text-3xl font-bold">Ads Optimization</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
