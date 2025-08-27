export function Hero() {
  return (
    <>
      <section className=" h-vh flex flex-col lg:flex-row items-center lg:items-stretch justify-between bg-gradient-to-r from-blue-50 to-white py-16 px-8 rounded-xl bg-[url(background)] ">
        <div className="flex-1 flex flex-col justify-center lg:items-start text-left font-semibold max-w-xl">
          <h2 className="text-4xl md:text-5xl  mb-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8AA4F2] to-[#C6B4EE]">
            Bootstrap 5 theme
          </h2>
          <div className="text-lg  mb-6 text-gray-500">
            crafted by{" "}
            <strong className=" text-black">ThemeWagon</strong>
          </div>
          <p className="text-lg mb-8 text-blue-950">
            ThemeWagon offers a wide array of category-oriented Free and Premium
            Bootstrap HTML Templates and Themes.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 my-4 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Check Demo
          </a>
        </div>
        
          <img
            src="/illustration1.png"
            alt="Hero Illustration"
            className="lg:w-[50%]  "
          />
        
      </section>
      <div className="w-full h-px bg-gray-400 opacity-20 my-8" />
    </>
  );
}
