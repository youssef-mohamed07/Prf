import ContactUs from "../components/Home/ContactUs";
import HeroSection from "../components/Home/HeroSection";
import MissionVision from "../components/Home/MissionVision";
import OurFocus from "../components/Home/OurFocus";
import OurIndustryExpertise from "../components/Home/OurIndustryExpertise";
import OurServices from "../components/Home/OurServices";
import OurTeam from "../components/Home/OurTeam";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />

      <MissionVision />

      <WhyChooseUs />

      <OurServices />

      <OurFocus />

      <OurTeam />

      <OurIndustryExpertise />

      <ContactUs />
    </>
  );
};

export default Home;
