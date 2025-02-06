/* eslint-disable react/prop-types */
import Navbar2 from "./components/navbar2";
import COLORS from "./components/color";
import Footer from "./components/footer";
import ReachOut from "./components/reachout";

const Experience = ({openModal}) => {
  return (
    <>
      <Navbar2 openModal={openModal}/>
      <div
        className="text-white crique-light"
        style={{ backgroundColor: COLORS.blue }}
      >
        <div className="flex justify-center items-center p-10">
          <h1
            className="text-9xl font-semibold text-center"
            style={{ color: COLORS.green }}
          >
            DIGLAB <br /> EXPERIENCE
          </h1>
        </div>
        <div className="flex flex-wrap" style={{borderTop: 1, borderColor: 'white', borderStyle: 'solid'}}>
          <div className="w-1/2 p-10" style={{borderRight: 1, borderBottom: 1, borderColor: 'white', borderStyle: 'solid', height: 350}}>
            <h1 className="text-3xl font-bold">Social Media Development</h1>
            <h2 className="text-2xl">
              Crafting and managing content to build authentic connections with
              audiences through Social Media.
            </h2>
          </div>
          <div className="w-1/2 p-10" style={{borderBottom: 1, borderColor: 'white', borderStyle: 'solid', height: 350}}>
            <h1 className="text-3xl font-bold">Marketing & Creative</h1>
            <h2 className="text-2xl">
              Creating visually stunning and cohesive brand identities that
              resonate with target audiences.
            </h2>
          </div>
          <div className="w-1/2 p-10" style={{borderRight: 1, borderColor: 'white', borderStyle: 'solid', height: 350}}>
            <h1 className="text-3xl font-bold">KOL Management</h1>
            <h2 className="text-2xl">
              We specialize in crafting impactful collaborations between brands
              and Key Opinion Leaders (KOLs). By leveraging the influence of
              trusted voices, we help your brand connect with the right audience
              and drive measurable results.
            </h2>
          </div>
          <div className="w-1/2 p-10" style={{height: 350}}>
            <h1 className="text-3xl font-bold">Ads Optimization</h1>
            <h2 className="text-2xl">
              We create targeted campaigns on platforms like Facebook,
              Instagram, and TikTok, ensuring your message reaches the right
              audience at the right time with measurable results.
            </h2>
          </div>
        </div>
      </div>
      <ReachOut />
      <Footer />
    </>
  );
};

export default Experience;
