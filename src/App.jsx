import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Testimonials from "./pages/testimonials/Testimonials";
import FAQs from "./pages/faqs/FAQs";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
