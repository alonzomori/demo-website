import { Element } from "react-scroll";

function About() {
    return (
        
        <section className="w-full ml-18 flex flex-col items-center justify-center text-center md:pl-50 px-6 pb-0">
        <Element name="about">
        <h1 className="text-4xl pl-3 pb-2 font-bold text-white mb-28 mt-[-30px] w-screen border-b-3 lg:w-screen">About Us</h1>
        </Element>
        <p className="w-[300px] mt-[-100px] pt-5 mx-auto leading-[30px] text-[14px] text-white lg:pl-4">Due Time Productions is a music production company that was founded in San Francisco, California, USA. We strive to provide you with nothing but the best sound quality any musician can ask for. We love the process and respect the artform known as music. Just like your inevitable rise to the top, we know that all good things come in Due Time. </p>
        </section>
    )
}

export default About