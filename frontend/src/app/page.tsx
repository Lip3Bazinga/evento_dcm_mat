import Header from "./components/UI/header";
import banner from "../../public/assets/images/banner.jpeg"
import Partners from "./components/UI/partners";
import Image from 'next/image'
import styles from './styles.module.sass'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Image src={banner} alt="Banner" priority  />
      <Partners />
    </main>
  );
}
