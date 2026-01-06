export default function Leadership() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Leadership & Governance
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Richcom Montessori School is guided by experienced leadership,
            strong governance, and dedicated management committed to academic
            excellence and ethical administration.
          </p>
        </div>

        {/* ================= BOARD OF DIRECTORS ================= */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-blue-900 mb-10 text-center">
            Board of Directors
          </h2>

          {/* Chairman Highlight */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-3 gap-8 items-start">

              {/* Image */}
              <div className="md:col-span-1 text-center">
                <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden bg-gray-200">
                  {/* Chairman image goes here */}
                  <img src="/chairman.png" alt="Mr Kwaku Duah Baffour Jnr" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-blue-900">
                  Mr. Nixon Kwaku Duah Jnr.
                </h3>
                <p className="text-green-600 font-medium">
                  Board Chairman
                </p>
              </div>

              {/* Bio */}
              <div className="md:col-span-2 text-gray-700 space-y-4 text-sm leading-relaxed">
                <p>
                  Mr. Kwaku Duah Jnr. holds a Bachelor of Science degree in Accounting
                  from Pentecost University, a Higher National Diploma in Accounting
                  from Sunyani Technical University, a professional certificate in
                  Journalism, and a Master’s degree in Development Management from KNUST.
                  He also holds an MBA (Accounting) from Texas A&M University,
                  Corpus Christi (USA).
                </p>

                <p>
                  He is a Personal Development Coach and a young professional with a
                  strong sense of achievement, known for initiating change and improving
                  operational systems while maintaining high ethical and moral standards.
                </p>

                <p>
                  His professional experience spans organizations including Continental
                  Christian Traders Limited (CCT Group), Glasten Estate Limited, Shaft FM,
                  Parrot FM, SITEL Group, Oliver Rainey & Wojket Accounting Firm (Texas),
                  and Davis Crane Motor Service (USA).
                </p>

                <p>
                  He currently serves as the Accountant for Alcuin School in Dallas,
                  Texas, and as an Administration, Management, and Internal Audit
                  Consultant for 1st Edmonds and Bothell Serenity Home Care in
                  Washington State.
                </p>
              </div>
            </div>
          </div>

          {/* Other Board Members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Mr Richard Danso", role: "Proprietor" },
              { name: "Mrs Comfort Danso", role: "Proprietress" },
              { name: "Mr Kyei Obeng Baffour", role: "Board Vice Chairman" },
              { name: "Mr Emmanuel Asare", role: "Board Member" },
              { name: "Mr Prince Annan", role: "Board Member" },
              { name: "Mr Bob Djah", role: "Board Member" },
              { name: "Miss Wendy Danso", role: "Board Secretary" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-md p-6 text-center"
              >
                <h4 className="font-semibold text-blue-900">
                  {member.name}
                </h4>
                <p className="text-green-600 text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MANAGEMENT TEAM ================= */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-10 text-center">
            Management Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Bandzi Raymond", role: "Headmaster" },
              { name: "Harden John", role: "Assistant Headmaster" },
              { name: "Mr Richard Danso", role: "Proprietor" },
              { name: "Mrs Comfort Danso", role: "Proprietress" },
              { name: "Mr David Boamah-Oduro", role: "General Manager – KDuah Consult" },
              { name: "Miss Jennifer Afriyie Denkyira", role: "Educationalist" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-md p-6 text-center"
              >
                <h4 className="font-semibold text-blue-900">
                  {member.name}
                </h4>
                <p className="text-green-600 text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
