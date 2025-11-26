import { Element } from "react-scroll";

function Contact() {
    return (
         <Element name="contact">
         <section className="w-full ml-10 flex flex-col items-center justify-center text-center px-6 pb-0 md:pl-50">
        <h1 className="text-4xl pl-3 pb-2 font-bold text-white mb-28 mt-[-30px] w-screen border-b-3">Contact Us</h1>
        <form className="w-full max-w-md flex flex-col bg-gray-200 p-8 rounded-xl shadow-lg space-y-5 mt-[-70px] pt-5">
        <div>
          <label className="text-md">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 w-full p-3 rounded-lg bg-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your name"/>
        </div>
        <div>
          <label className="text-md">Email</label>
          <input
            type="email"
            name="email"
            className="mt-2 w-full p-3 rounded-lg bg-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your email"/>
        </div>
         <div>
          <label className="text-md">Message</label>
          <textarea name="message"
            className="mt-2 w-full p-3 rounded-lg bg-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gray-600 hover:bg-gray-400 rounded-lg font-semibold text-white transition-all cursor-pointer">Send Message</button>
        </form>
        </section>
        </Element>
    )
}

export default Contact