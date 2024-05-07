"use client"
import { useEffect, useState } from 'react';

const Map = () => {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(450);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth < 450 ? 300 : 600;
      const newHeight = window.innerWidth < 450 ? 300 : 450;
      setWidth(newWidth);
      setHeight(newHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.5398135973194!2d-47.84774473175062!3d-21.16683895223855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bdc299d0b773%3A0xb5bd25d961a34cd!2sDepartamento%20de%20Computa%C3%A7%C3%A3o%20e%20Matem%C3%A1tica%20da%20FFCLRP-USP!5e0!3m2!1sen!2sbr!4v1715122584183!5m2!1sen!2sbr"
      width={width}
      height={height}
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;
