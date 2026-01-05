export default function Primary() {
  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/primary-hero.jpeg"
          alt="Primary school children learning at Richcom Montessori School"
          className="w-full h-72 md:h-[40vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            Primary Program
          </h1>
        </div>
      </div>

      {/* ================= PROGRAM OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-900">
            Developing Independent and Confident Learners
          </h2>
          <p>
            Our Primary program is designed for children aged 6 to 12 years. It emphasizes
            advanced academic skills, critical thinking, and collaborative learning while
            continuing to nurture independence and personal responsibility.
          </p>
          <p>
            Children engage in a Montessori environment that encourages exploration,
            discovery, and hands-on problem solving. Our educators guide students to
            reach their full potential academically, socially, and emotionally.
          </p>
        </div>

        {/* Image Content */}
        <div className="space-y-6">
          <img
            src="/primary-activity1.jpeg"
            alt="Primary children working on projects"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <img
            src="/primary-activity2.jpeg"
            alt="Primary children collaborating on activities"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* ================= KEY FEATURES ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Key Features of Our Primary Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-700">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Advanced Academics</h3>
              <p>Hands-on and engaging lessons in math, science, language, and cultural studies.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Critical Thinking & Creativity</h3>
              <p>Problem-solving, exploration, and creative projects develop independent thinkers.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Character & Leadership</h3>
              <p>Encouraging responsibility, empathy, and collaboration in a supportive environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">Enroll Your Child in Our Primary Program</h2>
        <p className="mb-8 text-gray-200">
          Give your child a strong academic and personal foundation for lifelong success.
        </p>
        <a
          href="/admissions/apply"
          className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition"
        >
          Apply Now
        </a>
        </ div>
        </ div>
      </section>

    </section>
  );
}
