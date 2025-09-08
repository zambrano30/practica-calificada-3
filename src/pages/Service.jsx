
import React from 'react';

export function Service() {
  const services = [
    {
      id: 1,
      title: "Send Tasks Instantly",
      description:
        "Powerful planning, forecasting and task management to quickly and efficiently manage demands and budgets.",
      icon: "./icon1.png",
      link: "#",
    },
    {
      id: 2,
      title: "Better Organized",
      description: "Latest technology and team resources, business focused HR approach to keep optimal.",
      icon: "./icon2.png",
      link: "#",
    },
    {
      id: 3,
      title: "Analytical Statistics",
      description: "Manage and time complexities planning and keep more will keep your team in sync.",
      icon: "./icon3.png",
      link: "#",
    },
  ]

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="absolute inset-0 bg-[url('/themewagon/themewagon/themewagon/2.services/service.png')] bg-cover bg-center opacity-5" />
      
      <div className="relative container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600">
            We offer growth hackers to career development best practices. 
            We also support a wide range of services to ensure client satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <div className="text-center">
                <a
                  href={service.link}
                  className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 group"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

