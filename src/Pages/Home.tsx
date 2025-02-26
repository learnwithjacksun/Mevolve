import { About, Banner, Footer, Header, Hero } from "@/Components/Home";

const Home = () => {
  return (
    <>
      <div className="hero-container text-white center">
        <Header />
        <Hero />
      </div>
      <About/>
      <Banner/>
      <Footer/>
    </>
  );
};

export default Home;
