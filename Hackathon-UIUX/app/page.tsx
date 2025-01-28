import Brand from "@/components/Brand";
import Ceremics from "@/components/Ceremics";
import ClubBenefits from "@/components/ClubBenefits";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Touch from "@/components/Touch";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Brand />
      <Ceremics />
      <Products />
      <ClubBenefits />
      <Touch />
      <Footer />
    </div>
  );
}
