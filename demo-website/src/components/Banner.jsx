import RecordingStudio from '../assets/images/recording-studio.jpg'
import Recording from "../assets/images/Recording.webp"
import Mixing from "../assets/images/Mixing.jpeg"
import Mastering from "../assets/images/Mastering.jpg"
import { useEffect, useState } from "react";

function Banner() {
    const images = [RecordingStudio, Recording, Mixing, Mastering];
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
  }, []);

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

    return (
        <div className="h-[80vh] flex items-center justify-center">
    <img src={images[index]} key={images[index]} className={`pt-15 w-145 pl-20 md:w-900 md:pl-45 lg:w-1200 max-w-[1200px] max-h-[400px] object-cover rounded transition-opacity duration-[5000ms] ease-in-out delay- ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
    }/>
        </div>
    );
}

export default Banner