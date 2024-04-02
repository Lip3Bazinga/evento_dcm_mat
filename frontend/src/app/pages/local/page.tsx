import Head from 'next/head';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importe os estilos do Leaflet

import styles from '@styles/Home.module.scss';

const DEFAULT_CENTER = [38.907132, -77.036546]

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
          <MapContainer center={DEFAULT_CENTER} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={DEFAULT_CENTER}>
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
