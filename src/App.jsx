import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import ModelsManagement from "./components/models-management/ModelsManagement";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return (
    <>
    
    <Navbar/>
    <Hero/>
<main className="max-w-7xl mx-auto w-[90%]">
  <ModelsManagement/>
</main>

    <Footer/>
    </>
  );
};

export default App;