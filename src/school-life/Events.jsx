export default function Events() {
  const events = [
    {
      title: "Cultural Day",
      description:
        "A celebration of diversity where children showcase traditions, attire, music, and food from different cultures.",
      image: "/event-cultural.jpeg",
    },
    {
      title: "Sports Day",
      description:
        "A fun-filled day promoting teamwork, physical fitness, and healthy competition among students.",
      image: "/event-sports.jpeg",
    },
    {
      title: "Graduation Ceremony",
      description:
        "A memorable milestone celebrating our learners as they transition to the next academic level.",
      image: "/event-graduation.jpeg",
    },
    {
      title: "Open Day",
      description:
        "An opportunity for parents and guardians to visit the school, meet teachers, and explore our facilities.",
      image: "/event-openday.jpeg",
    },
  ];

  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/events-hero.jpeg"
          alt="School events at Richcom Montessori School"
          className="w-full h-72 md:h-[40vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            School Events
          </h1>
        </div>
      </div>

      {/* ================= INTRODUCTION ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center text-gray-700 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Celebrating Learning, Culture, and Community
        </h2>
        <p>
          Events at Richcom Montessori School bring our community together.
          Through celebrations, performances, and special days, children gain confidence,
          express creativity, and build strong social bonds.
        </p>
      </div>

      {/* ================= EVENTS GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-gray-700">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {event.title}
              </h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">
          Be Part of Our Vibrant School Community
        </h2>
        <p className="mb-8 text-gray-200">
          Join Richcom Montessori School and experience a community where learning,
          celebration, and growth go hand in hand.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition"
        >
          Contact Us
        </a>
        </div>
       </div>
      </section>

    </section>
  );
}
