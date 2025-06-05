import HeroSection from "../../components/Home/HeroSection";
import WorkSection from "../../components/Home/WorkSection";
import TechnologySection from "../../components/Home/TechnologySection";
import CaseSection from "../../components/Home/CaseSection";
import CtaSection from "../../components/Home/CtaSection";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <WorkSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* Use Cases Section */}
      <CaseSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Home;
