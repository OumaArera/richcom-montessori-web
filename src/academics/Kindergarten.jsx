export default function Kindergarten() {
  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/kindergarten-hero.jpeg"
          alt="Kindergarten children learning at Richcom Montessori School"
          className="w-full h-72 md:h-[40vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            Kindergarten Program
          </h1>
        </div>
      </div>

      {/* ================= PROGRAM OVERVIEW ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-900">
            Preparing for Academic Excellence
          </h2>
          <p>
            Our Kindergarten program is designed for children aged 5 to 6 years, bridging the gap
            between early childhood and primary education. We focus on developing early literacy,
            numeracy, and problem-solving skills through engaging Montessori activities.
          </p>
          <p>
            In a child-centered environment, children explore hands-on learning materials,
            participate in collaborative projects, and develop independence and critical thinking.
            Our skilled educators guide each child with personalized attention and encouragement.
          </p>
        </div>

        {/* Image Content */}
        <div className="space-y-6">
          <img
            src="/kindergarten-activity1.jpeg"
            alt="Kindergarten children engaged in Montessori learning activities"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <img
            src="/kindergarten-activity2.jpeg"
            alt="Children collaborating in Montessori classroom"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* ================= KEY FEATURES ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Key Features of Our Kindergarten Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-700">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Hands-On Learning</h3>
              <p>Engaging activities that foster early literacy, numeracy, and critical thinking.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Social & Emotional Growth</h3>
              <p>Collaborative projects and guided group interactions nurture empathy and teamwork.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Individual Attention</h3>
              <p>Educators tailor guidance to each child's pace, interests, and learning style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">Enroll Your Child in Kindergarten Today</h2>
        <p className="mb-8 text-gray-200">
          Give your child the best start for primary school with a strong foundation in Montessori education.
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
