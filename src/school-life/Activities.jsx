export default function Activities() {
  const activities = [
    {
      title: "Creative Arts",
      description:
        "Children express themselves through drawing, painting, crafts, and creative projects that develop imagination and fine motor skills.",
      image: "/activity-arts.jpeg",
    },
    {
      title: "Music & Dance",
      description:
        "Music, rhythm, and movement activities enhance coordination, cultural appreciation, and self-confidence.",
      image: "/activity-music.jpeg",
    },
    {
      title: "Sports & Physical Play",
      description:
        "Structured and free play activities support physical fitness, teamwork, and healthy social interaction.",
      image: "/activity-sports.jpeg",
    },
    {
      title: "Practical Life Skills",
      description:
        "Montessori practical life activities teach responsibility, independence, and everyday life skills.",
      image: "/activity-practical.jpeg",
    },
  ];

  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/activities-hero.jpeg"
          alt="School activities at Richcom Montessori School"
          className="w-full h-72 md:h-[75vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            School Activities
          </h1>
        </div>
      </div>

      {/* ================= INTRODUCTION ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center text-gray-700 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Learning Beyond the Classroom
        </h2>
        <p>
          At Richcom Montessori School, learning extends beyond academics.
          Our activities are carefully designed to support physical,
          emotional, social, and creative development while keeping learning fun and engaging.
        </p>
      </div>

      {/* ================= ACTIVITIES GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-gray-700">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {activity.title}
              </h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">
          A Balanced and Enriching School Experience
        </h2>
        <p className="mb-8 text-gray-200">
          Our activities help children discover their talents, build confidence,
          and enjoy learning in a supportive Montessori environment.
        </p>
        <a
          href="/admissions/apply"
          className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition"
        >
          Enroll Your Child
        </a>
        </div>
        </div>
      </section>

    </section>
  );
}
