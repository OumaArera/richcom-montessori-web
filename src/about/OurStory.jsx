export default function OurStory() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Story
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Building a strong foundation for lifelong learning through
            purpose-driven Montessori education.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="/our-story.jpeg"
              alt="Children learning in a Montessori classroom at Richcom Montessori School"
              className="rounded-2xl shadow-lg w-full h-[75vh] object-cover"
            />
          </div>

          {/* Story Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-base">

            <p>
              Richcom Montessori School was founded with a clear and purposeful
              vision: to provide a nurturing learning environment where every
              child is empowered to discover their full potential. From the
              beginning, the school was established to go beyond traditional
              teaching, placing the child at the center of the learning
              experience.
            </p>

            <p>
              Inspired by the Montessori philosophy, Richcom Montessori School
              embraces a child-centered approach that encourages independence,
              confidence, creativity, and responsibility. We believe that each
              child learns at their own pace and thrives best in an environment
              that respects their individuality and natural curiosity.
            </p>

            <p>
              Over the years, the school has grown into a trusted learning
              community where academic excellence is balanced with character
              development. Our classrooms are carefully prepared to support
              hands-on learning, critical thinking, and meaningful engagement,
              ensuring that children develop both intellectually and socially.
            </p>

            <p>
              Today, Richcom Montessori School remains committed to partnering
              with parents and guardians to shape well-rounded learners who are
              confident, disciplined, and prepared for the future. Our story is
              one of purpose, care, and an unwavering belief in the potential of
              every child.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
