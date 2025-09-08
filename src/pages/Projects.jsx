export default function OurProjects() {
  return (
    <section className="min-h-screen px-6 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white flex items-center my-16 md:my-24">
      <div className="max-w-6xl mx-auto flex flex-col justify-center py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl px-4">
            A glimpse of our recent projects and the innovative solutions we've created. Here are some of our latest
            projects.
          </p>

          {/* Decorative squiggly line */}
          <div className="absolute top-0 right-4 md:right-12 lg:right-24">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-purple-400">
              <path
                d="M5 20C15 5, 25 35, 35 20C45 5, 55 35, 55 20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 max-w-6xl mx-auto px-4">
          {/* Project 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="image1.png"
                alt="Project 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="/image2.png"
                alt="Project 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="image3.png"
                alt="Project 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="image4.png"
                alt="Project 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="image5.png"
                alt="Project 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project 6 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="image6.png"
                alt="Project 6"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* View More Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          >
            View More
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

