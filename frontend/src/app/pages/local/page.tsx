import { Suspense } from "react"
import Loading from '../../loading'
import styles from './styles.module.sass'
import Head from "next/head"
import Map from "@/components/MapComponents/Map"

const local = () => {
  return(
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin=""/>
      </Head>
      <Suspense fallback={<Loading />}>
        <div className={styles.container}>
          <Map
           position={[0 , 0]}
          />
        </div>
      </Suspense>
    </>
  )
}

export default local