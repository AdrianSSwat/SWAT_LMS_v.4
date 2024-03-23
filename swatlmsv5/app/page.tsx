import Image from "next/image";
import { ThemeToggle } from '@/components/theme-toggle'
import Professional from "../components/professional/page";
import MSWord from "../components/msword/page";
import MSExcel from "../components/msexcel/page";
import Category from "../components/category/page";
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Category />
      <MSWord />
      <MSExcel />
      <Professional/>
      <ThemeToggle />

    </main>
  );
}
