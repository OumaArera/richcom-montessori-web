export default function Nursery() {
  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/nursery-hero.jpeg"
          alt="Nursery children learning at Richcom Montessori School"
          className="w-full h-72 md:h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            Nursery Program
          </h1>
        </div>
      </div>

      {/* ================= PROGRAM OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-900">
            Building Foundations for Lifelong Learning
          </h2>
          <p>
            Our Nursery program is designed for children aged 3 to 5 years. It
            bridges the gap between early infancy care and structured learning,
            nurturing curiosity, independence, and early cognitive skills.
          </p>
          <p>
            Children engage in a carefully prepared Montessori environment where
            hands-on learning, creative exploration, and social interaction
            form the core of daily activities. Our educators provide guidance
            and support tailored to each child’s developmental stage.
          </p>
        </div>

        {/* Image Content */}
        <div className="space-y-6">
          <img
            src="/nursery-activity1.jpeg"
            alt="Nursery children learning with Montessori materials"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <img
            src="/nursery-activity2.jpeg"
            alt="Nursery children collaborating in activities"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* ================= KEY FEATURES ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Key Features of Our Nursery Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-700">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Hands-On Learning</h3>
              <p>Engaging activities with Montessori materials for early cognitive growth.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Social & Emotional Skills</h3>
              <p>Collaboration, empathy, and communication are fostered through group activities.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Individual Attention</h3>
              <p>Educators provide guidance tailored to each child’s pace and personality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">Enroll Your Child in Our Nursery Today</h2>
        <p className="mb-8 text-gray-200">
          Give your child the gift of a strong educational foundation in a nurturing Montessori environment.
        </p>
        <a
          href="/admissions/apply"
          className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition"
        >
          Apply Now
        </a>
        </div>
        </div>
      </section>

    </section>
  );
}
