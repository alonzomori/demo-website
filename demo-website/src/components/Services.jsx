import Recording from "../assets/images/Recording.webp"
import Mixing from "../assets/images/Mixing.jpeg"
import Mastering from "../assets/images/Mastering.jpg"
import { Element } from "react-scroll";

function Services() {
    return (
        <Element name="services">
        <section className="w-full ml-10 flex flex-col items-center justify-center text-center px-6 pb-0 md:pl-50">
        <h1 className="text-4xl font-bold text-white pb-2 mb-28 mt-10 w-screen border-b-3 pr-">Services</h1>
        <div className="flex flex-col space-y-30 md:flex-row md:space-x-25 lg:space-x-25 lg:pl-10 items-center">

        <div className="flex flex-col items-center">
        <h2 className="w-[90px] mt-[-100px] pt-5 pb-2 leading-[30px] text-[20px] text-white">Recording</h2>
        <img className="w-80 lg:w-[350px] rounded" src={Recording} alt="Recording Image" />
        </div>

        <div className="flex flex-col items-center">
        <h2 className="w-[50px] mt-[-100px] pt-5 pb-2 leading-[30px] text-[20px] text-white lg:pr-10">Mixing</h2>
        <img className="w-80 lg:w-[350px] rounded" src={Mixing} alt="Mixing Image" />
        </div>

        <div className="flex flex-col items-center">
        <h2 className="w-[90px] mt-[-100px] pt-5 pb-2 leading-[30px] text-[20px] text-white">Mastering</h2>
        <img className="w-90 pb-30 lg:w-[420px] rounded" src={Mastering} alt="Mastering Image" />
        </div>

        </div>
        </section>
        </Element>
    )
}

export default Services