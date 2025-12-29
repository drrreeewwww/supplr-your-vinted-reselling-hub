import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GuideSection from "@/components/GuideSection";
import MysteryBoxes from "@/components/MysteryBoxes";
import SupplierLists from "@/components/SupplierLists";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Supplr - Master Vinted Reselling | Guides, Boxes & Suppliers</title>
        <meta 
          name="description" 
          content="Everything you need to build a profitable Vinted reselling business. Get our definitive guide, mystery reselling boxes, and exclusive supplier lists." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <div id="products">
            <GuideSection />
            <MysteryBoxes />
            <SupplierLists />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
