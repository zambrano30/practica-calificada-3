export function Hero() {
  return (
    <>
      <section
        className="w-[50%] relative left-225 bg-[url('/illustration1.png')] bg-contain bg-no-repeat h-[60%] "
      >
        <div className="relative right-100 top-50  ">
          <h2 className="text-3xl font-bold mb-4">
            Bootstrap 5 theme
          </h2>
          <div className="mb-2">
            crafted by{" "}
            <strong className="text-black">ThemeWagon</strong>
          </div>
          <p className="mb-4">
            ThemeWagon offers a wide array of category-oriented Free and Premium
            Bootstrap HTML Templates and Themes.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Check Demo
          </a>
        </div>
      </section>
      <div className="w-full h-px bg-gray-400 opacity-20 " />
    </>
  );
}
