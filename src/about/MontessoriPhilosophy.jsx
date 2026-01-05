export default function MontessoriPhilosophy() {
  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/montessori-philosophy-hero.jpeg"
          alt="Children learning with Montessori materials"
          className="w-full h-72 md:h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            Montessori Philosophy
          </h1>
        </div>
      </div>

      {/* ================= INTRODUCTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-900">
            Child-Centered Learning
          </h2>
          <p>
            At Richcom Montessori School, every child is recognized as a unique individual
            with their own pace, interests, and potential. Our classrooms are designed to
            allow children to explore, discover, and engage in hands-on learning.
          </p>

          <h2 className="text-2xl font-bold text-blue-900">
            Learning Through Exploration
          </h2>
          <p>
            Montessori materials are carefully prepared to teach concepts in a concrete,
            tangible way. Students learn by doing, which promotes deep understanding and
            long-term retention.
          </p>

          <h2 className="text-2xl font-bold text-blue-900">
            Independence and Responsibility
          </h2>
          <p>
            Children are encouraged to make choices, manage their own learning, and
            develop problem-solving skills. This cultivates confidence, self-discipline,
            and responsibility.
          </p>
        </div>

        <div className="space-y-6">
          <img
            src="/montessori-activity1.jpeg"
            alt="Children working individually with Montessori materials"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <img
            src="/montessori-activity2.jpeg"
            alt="Children collaborating in Montessori classroom"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* ================= WHY IT WORKS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Why Montessori Works
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Montessori education nurtures the whole child — academically, socially,
            emotionally, and ethically. By encouraging curiosity, independence, and
            collaborative learning, children develop a strong foundation for lifelong
            learning, confidence, and success.
          </p>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">
          Experience Montessori Education Today
        </h2>
        <p className="mb-8 text-gray-200">
          Join Richcom Montessori School and give your child a foundation for success.
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
