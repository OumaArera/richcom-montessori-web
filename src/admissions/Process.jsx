export default function AdmissionsProcess() {
  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/admissions-hero.jpeg"
          alt="Admissions at Richcom Montessori School"
          className="w-full h-72 md:h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            Admissions Process
          </h1>
        </div>
      </div>

      {/* ================= INTRODUCTION ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-700 space-y-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900">
          Simple Steps to Enroll Your Child
        </h2>
        <p>
          At Richcom Montessori School, we have designed an easy and transparent admissions
          process to help parents enroll their children efficiently. Follow these steps
          to secure a place in our nurturing Montessori environment.
        </p>
      </div>

      {/* ================= STEP-BY-STEP PROCESS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">

        {/* Step 1 */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
          <div className="text-4xl text-blue-900 font-bold mb-4">1</div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Submit Application</h3>
          <p>
            Fill out our online application form with basic child information and parent details.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
          <div className="text-4xl text-blue-900 font-bold mb-4">2</div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Assessment & Orientation</h3>
          <p>
            Your child will have a friendly assessment to understand their learning needs,
            followed by a classroom orientation visit.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
          <div className="text-4xl text-blue-900 font-bold mb-4">3</div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Admission Confirmation</h3>
          <p>
            Upon successful assessment, you will receive a confirmation and guidance on
            school fees and first-day preparations.
          </p>
        </div>

      </div>

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">Secure Your Child’s Place Today</h2>
        <p className="mb-8 text-gray-200">
          Complete the application process and give your child a strong start with Richcom Montessori School.
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
