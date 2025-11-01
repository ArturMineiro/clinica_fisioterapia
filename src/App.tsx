import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Vacancies from "./components/Vacancies";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
        <Vacancies />
      </main>
      <Footer />
    </div>
  );
}
