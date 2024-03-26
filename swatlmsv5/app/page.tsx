import Image from "next/image";

import Professional from "../components/professional/page";
import MSWord from "../components/msword/page";
import MSExcel from "../components/msexcel/page";
import Category from "../components/category/page";
import Hero from "../components/Hero";
import AllTutorials from "../components/all tutorials/page";
import Features from "../components/features";

export default function Home() {
  return (
  <>

    <main>
      <Hero />
      <AllTutorials />
      <Category />
      <MSWord />
      <MSExcel />
      <Professional/>
      <Features />
    </main>
  </>
  );
}
