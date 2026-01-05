export default function Facilities() {
  const facilities = [
    {
      title: "Modern Music Classrooms",
      description:
        "Bright, spacious, and fully equipped classrooms designed to enhance learning and creativity.",
      image: "/facilities-classroom.jpeg"
    },
    {
      title: "Playgrounds & Outdoor Learning",
      description:
        "Safe and engaging outdoor spaces for physical development, exploration, and fun.",
      image: "/facilities-playground.jpeg"
    },
    {
      title: "Library & Reading Corners",
      description:
        "Well-stocked library and cozy reading areas to foster a love for books and learning.",
      image: "/facilities-library.jpeg"
    },
  ];

  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/facilities-hero.jpeg"
          alt="Richcom Montessori School Facilities"
          className="w-full h-72 md:h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            School Facilities
          </h1>
        </div>
      </div>

      {/* ================= INTRODUCTION ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-6 text-gray-700 text-center">
        <h2 className="text-2xl font-bold text-blue-900">
          State-of-the-Art Facilities for Holistic Development
        </h2>
        <p>
          At Richcom Montessori School, we provide modern, safe, and stimulating facilities
          to support every aspect of your child’s development—academically, physically,
          socially, and creatively.
        </p>
      </div>

      {/* ================= FACILITIES GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center text-gray-700">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">Experience Our Facilities Firsthand</h2>
        <p className="mb-8 text-gray-200">
          Visit Richcom Montessori School and see our modern, child-centered facilities
          that foster learning and growth.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition"
        >
          Book a Visit
        </a>
        </div>
        </div>
      </section>

    </section>
  );
}
