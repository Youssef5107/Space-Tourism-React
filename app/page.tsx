import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import HomePage from "./Home/Home-page";  

export default function Home() {
  return (
    <main>
      <Header />
      <HomePage />
    </main>
  );
}
