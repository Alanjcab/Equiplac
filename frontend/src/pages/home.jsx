import Hero from "../components/home/hero.jsx";
import ServicesCarousel from "../components/home/servicesGrid.jsx";
import WhyEquiplac from "../components/home/whyEquiplac.jsx";
import ProjectsShowcase from "../components/home/projectsShowcase.jsx";
import ContactCta from "../components/home/contactCta.jsx";
import ClientsStrip from "../components/home/clientsStrip.jsx";
function Home() {
  return (
    <>
      <Hero />
      <ServicesCarousel />
      <WhyEquiplac />
      <ProjectsShowcase />
      <ContactCta />
      <ClientsStrip />
    </>
  );
}

export default Home;