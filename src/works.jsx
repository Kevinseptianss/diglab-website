/* eslint-disable react/prop-types */
import BodyWork from "./components/bodywork";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar2 from "./components/navbar2";
import TheContent from "./components/thecontent";
import ReachOut from "./components/reachout";
import { useState } from "react";

const DataList = [
  {
    title: "Ripper Golf",
    about:
      "We were assigned to develop the visual identity for mascot. The project included crafting the mascot's personality and designing t-shirt graphics tailored to their brand identity.",
    scope: "Character Illustration, Apparel Design, Visual Branding",
    business: "Retail (Clothing & Lifestyle)",
    year: "2023",
  },
  {
    title: "Regina Land",
    about:
      "Regina Land is a property business specializing in ready-to-build land plots. We handled their social media, developed visual content, and optimized Ads campaigns to effectively reach their audience.",
    scope: "Social Media Management, Ads Optimization, and Content Creation",
    business: "Property",
    year: "2024",
  },
  {
    title: "Prisa Development",
    about:
      "Prisa Development is a housing developer specializing in subsidized residential properties. We managed their social media, developed visual content, and optimized Ads campaigns to effectively reach their audience.",
    scope:
      "Social Media Management, Ads Optimization, Content Creation, and Visual Branding Identities",
    business: "Property",
    year: "2022",
  },
  {
    title: "Jaya Bakery",
    about:
      "Jaya Bakery is a popular bakery store in Lampung known for its variety of local pastries. We handled their social media management, develop visual content, and designed promotional materials.",
    scope:
      "Social Media Management, Visual Branding Identities, Promotional Material Design",
    business: "Food & Beverage (Bakery)",
    year: "2023",
  },
  {
    title: "SISCOMEBAG",
    about:
      "SISCOMEBAG is a store that specializes in authentic branded bags. We managed their social media platforms, developed visual content, organized photoshoots, and scouted talent.",
    scope:
      "Social Media Management, Ads Optimization, and Photoshoot Production",
    business: "Retail & E-commerce",
    year: "2023",
  },
  {
    title: "Ketan Susu Tagur",
    about:
      "Ketan Susu Tagur is a popular hangout spot serving signature snacks and drinks. We managed their social media, developed visual content, optimized Ads campaigns, organized photoshoots, and scouted talent.",
    scope:
      "Social Media Management, Ads Optimization, Content Creation, and Photoshoot Production",
    business: "Food & Beverage (Café)",
    year: "2024",
  },
  {
    title: "MAISON",
    about:
      "MAISON is a contemporary restaurant offering a unique dining experience. We created motion design flyers to promote their offerings and enhance their social media presence.",
    scope: "Motion Design, Social Media Content Creation",
    business: "Food & Beverage (Restaurant)",
    year: "2023",
  },
  {
    title: "Highvolstage",
    about:
      "HIGHVOLSTAGE is a multi-genre music festival. We designed the visual identities for the event, including motion videotron visuals, tickets, ID cards, stage installations, and the welcome gate.",
    scope: "Event Visual Identity Design, Motion Graphics",
    business: "Events & Entertainment (Music Festival)",
    year: "2023",
  },
];

const Works = ({openModal}) => {
  const [selection, setSelection] = useState(0);
  const [pagination, setPagination] = useState(0);

  const handlerSelection = (index) => {
    setSelection(index);
  }

  const handlerPagination = () => {
    setPagination(pagination === 0 ? 1 : 0);
    setSelection(0);
  }
  return (
    <>
      <Navbar2 openModal={openModal}/>
      <Header items={DataList} pagination={pagination} handlerPagination={handlerPagination} handlerSelection={handlerSelection} selection={selection} />
      <BodyWork items={DataList[selection]} />
      <TheContent items={DataList[selection]} />
      <ReachOut />
      <Footer />
    </>
  );
};

export default Works;
