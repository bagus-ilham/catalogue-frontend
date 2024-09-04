import MainLayout from "../components/layout/MainLayout";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import NewDropsSection from "../components/NewDropsSection";
import Footer from "../components/Footer";
import Container from "../components/layout/Container";


function HomePage() {
  return (
    <>
      <div className="bg-gray ">
        <MainLayout
          pageTitle="Catalogue Ansania"
          className="flex flex-col gap-y-32 bg"
        >
          <Container>
            <Header className={"mt-4"} />
            <HeroSection />
          </Container>
          <CategoriesSection />

          <Container>
            <NewDropsSection />
          </Container>
          <Footer/>
        </MainLayout>
      </div>
    </>
  );
}

export default HomePage;
