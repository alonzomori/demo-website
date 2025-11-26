import Recording from "../assets/images/Recording.webp"
import Mixing from "../assets/images/Mixing.jpeg"
import Mastering from "../assets/images/Mastering.jpg"
function Services() {
    return (
        <section className="w-full flex flex-col items-center justify-center text-center px-6 pb-0">
        <h1 className="text-4xl font-bold text-white mb-28 mt-10">Services</h1>

        <div className="flex flex-col space-y-30 md:flex-row md:space-x-30 lg:space-x-30 lg:pl-15 items-center">

        <div className="flex flex-col items-center">
        <h2 className="w-[90px] mt-[-100px] pt-5 leading-[30px] text-[20px] text-white">Recording</h2>
        <img className="w-80 lg:w-[350px]" src={Recording} alt="Recording Image" />
        </div>

        <div className="flex flex-col items-center">
        <h2 className="w-[50px] mt-[-100px] pt-5 leading-[30px] text-[20px] text-white lg:pr-10">Mixing</h2>
        <img className="w-80 lg:w-[350px]" src={Mixing} alt="Mixing Image" />
        </div>

        <div className="flex flex-col items-center">
        <h2 className="w-[90px] mt-[-100px] pt-5 leading-[30px] text-[20px] text-white">Mastering</h2>
        <img className="w-90 pb-30 lg:w-[420px]" src={Mastering} alt="Mastering Image" />
        </div>

        </div>
        </section>
    )
}

export default Services