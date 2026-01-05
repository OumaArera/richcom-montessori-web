export default function AdmissionRequirements() {
  const requirements = [
    "Completed application form (online or print)",
    "Child’s birth certificate or proof of age",
    "Recent passport-sized photographs of the child",
    "Immunization records and health certificate",
    "Previous school report (if applicable)",
    "Proof of residence (utility bill or ID)",
    "Parent/guardian identification"
  ];

  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <img
          src="/admissions-requirements-hero.jpeg"
          alt="Admission requirements at Richcom Montessori School"
          className="w-full h-72 md:h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            Admission Requirements
          </h1>
        </div>
      </div>

      {/* ================= INTRODUCTION ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-6 text-gray-700 text-center">
        <h2 className="text-2xl font-bold text-blue-900">
          What You Need to Enroll Your Child
        </h2>
        <p>
          Before your child begins their journey at Richcom Montessori School, ensure you have
          the necessary documents and information. Completing these requirements helps us provide
          a smooth and efficient enrollment process.
        </p>
      </div>

      {/* ================= REQUIREMENTS LIST ================= */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <ul className="space-y-4 list-disc list-inside text-gray-700">
          {requirements.map((req, index) => (
            <li key={index} className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition">
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">Ready to Enroll Your Child?</h2>
        <p className="mb-8 text-gray-200">
          Once you have gathered the necessary documents, complete your application and give your child the best start in Montessori education.
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
