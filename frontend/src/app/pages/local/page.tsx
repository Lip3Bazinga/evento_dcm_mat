'use client';
import { Suspense } from "react"
import Loading from '../../loading'
import styles from './styles.module.sass'
import React, { useRef, useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

const Map1 = ({setMap1Object}) => {
  const map1Container = useRef();

    useEffect(() => {
      const map1 = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({

          center: [8546575.886939, 2137169.681579],
          zoom: 6
        }),
      });
      map1.setTarget(map1Container.current);
      setMap1Object(map1);

      return () => {
        map1.setTarget(undefined);
        setMap1Object(null);
      };
    }, []);
    return (<><div ref={map1Container} className="absolute inset-0"></div></>);
  };
  

const local = () => {
  return(
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        
      </div>
    </Suspense>
  )
}

export default local