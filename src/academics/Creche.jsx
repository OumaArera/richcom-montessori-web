export default function Creche() {
  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/creche-hero.jpeg"
          alt="Toddlers in Creche at Richcom Montessori School"
          className="w-full h-72 md:h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            Creche Program
          </h1>
        </div>
      </div>

      {/* ================= PROGRAM OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-900">
            Nurturing the Youngest Learners
          </h2>
          <p>
            Our Creche program at Richcom Montessori School is designed for children aged 6 months to 3 years.
            We provide a safe, loving, and stimulating environment where toddlers develop confidence,
            independence, and early social skills.
          </p>
          <p>
            Activities are carefully planned to promote sensory development, motor skills, language acquisition,
            and emotional well-being. Our trained caregivers guide each child individually, ensuring
            a positive and joyful learning experience.
          </p>
        </div>

        {/* Image Content */}
        <div className="space-y-6">
          <img
            src="/creche-activity1.jpeg"
            alt="Toddlers engaging in Montessori activities"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <img
            src="/creche-activity2.jpeg"
            alt="Children playing and learning in Creche"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* ================= KEY FEATURES ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Key Features of Our Creche Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-700">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Safe & Nurturing</h3>
              <p>Secure, clean, and comfortable environment for toddlers to explore safely.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Sensory Development</h3>
              <p>Activities and materials designed to enhance motor, sensory, and cognitive skills.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Individual Attention</h3>
              <p>Qualified caregivers guide each child according to their pace and interests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">Enroll Your Child in Our Creche Today</h2>
        <p className="mb-8 text-gray-200">
          Start your child's learning journey with a safe, loving, and stimulating Montessori environment.
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
