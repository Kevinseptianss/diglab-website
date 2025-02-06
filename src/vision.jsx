/* eslint-disable react/prop-types */
import BodyVision from "./components/BodyVision"
import Footer from "./components/footer"
import Navbar2 from "./components/navbar2"

const Vision = ({openModal}) => {
  return (
    <>
    <Navbar2 openModal={openModal} />
    <BodyVision />
    <Footer />
    </>
  )
}

export default Vision