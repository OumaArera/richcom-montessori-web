export default function MissionVision() {
  return (
    <section className="bg-white">
      
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/mission-vision.jpeg"
          alt="Montessori teacher guiding children"
          className="w-full h-72 md:h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center px-4">
            Our Mission & Vision
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Mission */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide a nurturing and child-centered Montessori learning 
            environment where every child is empowered to reach their full 
            potential academically, socially, and emotionally. We focus on 
            fostering independence, curiosity, critical thinking, and lifelong 
            love for learning.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through skilled educators, purposeful materials, and a safe 
            environment, we aim to build confident, responsible, and compassionate 
            learners who are ready to thrive in the modern world.
          </p>
        </div>

        {/* Vision */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be recognized as a leading Montessori school in Ghana, where 
            children experience holistic development, creativity, and a deep 
            understanding of themselves and the world around them. 
          </p>
          <p className="text-gray-700 leading-relaxed">
            We envision a learning community that nurtures independent thinkers, 
            compassionate citizens, and lifelong learners who contribute meaningfully 
            to society.
          </p>
        </div>

      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-center text-white py-12 px-6 sm:px-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      
        <h2 className="text-3xl font-bold mb-4">
          Join a Community that Values Growth and Excellence
        </h2>
        <p className="mb-8 text-gray-200">
          Experience Montessori education that shapes confident, independent learners.
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
