import { Phone } from "lucide-react";

export default function TeachingStaff() {
  const staff = [
    {
      name: "Bandzi Raymond",
      role: "Headmaster",
      phone: null,
    },
    {
      name: "Harden John",
      role: "Assistant Headmaster",
      phone: "0539566763",
    },
    {
      name: "Quada Irene",
      role: "Nursery One",
      phone: "0533778266",
    },
    {
      name: "Dassah Maris",
      role: "Nursery Two",
      phone: "0247575190",
    },
    {
      name: "Forson Precious",
      role: "Creche",
      phone: "0599806694",
    },
    {
      name: "Vanderpuye Juliet",
      role: "Creche",
      phone: "0541750003",
    },
    {
      name: "Dzorkye Christine",
      role: "Kindergarten One",
      phone: "0249806793",
    },
    {
      name: "Atakora Dora",
      role: "Kindergarten Two",
      phone: "0271344867",
    },
    {
      name: "Odoom Grace",
      role: "Primary One",
      phone: null,
    },
    {
      name: "Adodoadji Benjamin",
      role: "Primary Three",
      phone: "0573073772",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Teaching Staff
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our dedicated teaching staff are passionate professionals committed
            to nurturing each child’s academic, social, and emotional development
            in line with Montessori principles.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              {/* Name */}
              <h3 className="font-semibold text-blue-900 text-lg mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-green-600 font-medium mb-3">
                {member.role}
              </p>

              {/* Phone */}
              {member.phone ? (
                <a
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-green-600 transition break-all"
                >
                  <Phone size={16} />
                  {member.phone}
                </a>
              ) : (
                <p className="text-gray-400 text-sm">
                  Contact via school office
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
