import { About, Banner, Footer, Header, Hero, Offers, Values } from "@/Components/Home";

const Home = () => {
  return (
    <>
      <div className="hero-container text-white center">
        <Header />
        <Hero />
      </div>
      <About/>
      <Values/>
      <Offers/>
      <Banner/>
      <Footer/>
    </>
  );
};

export default Home;
