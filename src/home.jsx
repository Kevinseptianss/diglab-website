/* eslint-disable react/prop-types */

import AboutUs from './components/aboutus'
import Body from './components/body'
import Footer from './components/footer'
import Navbar from './components/navbar'
import OurService from './components/ourservice'
import OurWorks from './components/ourworks'
import ReachOut from './components/reachout'
import RecentProject from './components/recentproject'

const Home = ({ openModal }) => {
  return (
    <div>
      <Navbar openModal={openModal} />
      <Body />
      <AboutUs />
      <OurWorks />
      <OurService />
      <RecentProject />
      <ReachOut />
      <Footer />
    </div>
  )
}

export default Home;