import Head from 'next/head';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importe os estilos do Leaflet
import mapa1 from "@/../public/assets/images/mapa_1.png" 
import mapa2 from "@/../public/assets/images/mapa_2.png" 
import Image from 'next/image'
import styles from "./styles.module.sass"

export default function Local() {
  return (
    <main className={styles.container}>
      <h1>Mapa</h1>
      <div>
        <Image src={mapa1} alt="Imagem mapa 1" />
        <Image src={mapa2} alt="Imagem mapa 2" />
      </div>
      <h2>Departamento de Computação e Matemática da FFCLRP-USP - Campus da Usp, Ribeirão Preto - SP, 14040-900</h2>
    </main>
  );
}
