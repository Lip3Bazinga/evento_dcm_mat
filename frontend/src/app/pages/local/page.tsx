import Head from 'next/head';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importe os estilos do Leaflet

// import styles from '@styles/Home.module.sass';

// const DEFAULT_CENTER = 

export default function Local() {
  return (
    <>
      <Head>
        <title>Local</title>
        <meta name="description" content="Local Page" />
      </Head>

      <div className={styles.container}>
        <h1>Local</h1>
        <div className={styles.mapContainer}>
          <MapContainer center={[38.907132, -77.036546]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={[38.907132, -77.036546]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}
