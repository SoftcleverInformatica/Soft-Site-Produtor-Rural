"use client"
import Header from "../sections/header/Header";
import AboutUs from "../sections/about-us/AboutUs";
import Client from "../sections/client/Client";
import Products from "../sections/product/Products";
import Segments from "../sections/segments/Segments";
import Differential from "../sections/differential/Diferential";
import Feedback from "../sections/feedback/Feedback";
import Questions from "../sections/questions/Questions";
import Footer from "../sections/footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col p-0 mx-auto b-0 justify-center max-w-[1440px] items-center">
      <Header/>
      <Client/>
      <Products/>
      <Feedback/>
      <AboutUs/>
      <Segments/>
      <Differential/>
      <Questions/>
      <Footer/>
    </main>
  );
}
