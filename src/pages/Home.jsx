import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-white -top-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <img
          src="/home-hero.jpeg"
          alt="Children learning at Richcom Montessori School"
          className="w-full h-[75vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Nurturing Independent and Confident Learners
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                At Richcom Montessori School, we provide a child-centered
                learning environment that fosters independence, creativity,
                discipline, and a lifelong love for learning.
              </p>

              <div className="flex flex-wrap gap-4">
                <NavLink
                  to="/admissions/process"
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
                >
                  Admissions Open
                </NavLink>
                <NavLink
                  to="/about/story"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              A Strong Foundation for Lifelong Learning
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Richcom Montessori School is dedicated to nurturing the academic,
              social, and emotional development of every child. Guided by the
              Montessori philosophy, we create an environment where children
              learn through exploration, discovery, and purposeful activity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our approach respects the individuality of each child while
              encouraging responsibility, collaboration, and confidence. We
              partner closely with parents to ensure holistic growth and success.
            </p>
          </div>

          <img
            src="/montessori-learning.jpeg"
            alt="Hands-on Montessori learning"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* ================= ACADEMIC LEVELS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Academic Levels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Creche", text: "A safe and nurturing environment for early development." },
              { title: "Nursery", text: "Building independence and foundational skills." },
              { title: "Kindergarten", text: "Encouraging curiosity and structured learning." },
              { title: "Primary", text: "Developing confident, capable, and responsible learners." },
            ].map((level) => (
              <div
                key={level.title}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {level.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {level.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <img
            src="/school-environment.jpeg"
            alt="Safe and supportive school environment"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Why Choose Richcom Montessori School
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>• Child-centered Montessori approach</li>
              <li>• Qualified and dedicated educators</li>
              <li>• Safe, clean, and supportive learning environment</li>
              <li>• Focus on character and academic excellence</li>
              <li>• Strong partnership with parents</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">
          Give Your Child the Best Start
        </h2>
        <p className="mb-8 text-gray-200">
          Join a learning community that values excellence, independence, and care.
        </p>
        <NavLink
          to="/admissions/apply"
          className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition"
        >
          Apply Now
        </NavLink>
        </div>
        </div>
      </section>

    </main>
  );
}
