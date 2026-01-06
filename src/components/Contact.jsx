import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-blue-100">
          We would love to hear from you. Reach out to Richcom Montessori School
          to learn more about admissions, programs, or to schedule a visit.
        </p>
      </section>

      {/* Contact Information */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Phone */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <Phone className="mx-auto text-green-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg text-blue-900 mb-2">
              Phone
            </h3>
            <p className="text-gray-600">
              +233 243 265 757
            </p>
            <p className="text-gray-600">
              +233 242 302 717
            </p>
            <p className="text-gray-600">
              +233 591 507 583
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <Mail className="mx-auto text-green-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg text-blue-900 mb-2">
              Email
            </h3>
            <p className="text-gray-600 break-all">
                info@richcommontessori.com
            </p>
            <p className="text-gray-600 break-all">
                admissions@richcommontessori.com
            </p>
          </div>

          {/* Location */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <MapPin className="mx-auto text-green-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg text-blue-900 mb-2">
              Location
            </h3>
            <p className="text-gray-600">
              Richcom Montessori School
            </p>
            <p className="text-gray-600">
              Accra, Ghana
            </p>
          </div>

          {/* Office Hours */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <Clock className="mx-auto text-green-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg text-blue-900 mb-2">
              Office Hours
            </h3>
            <p className="text-gray-600">
              Monday – Friday
            </p>
            <p className="text-gray-600">
              8:00 AM – 4:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* Visit School Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-blue-900 text-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Visit Our School
          </h2>
          <p className="text-blue-100 mb-8">
            We encourage parents and guardians to visit our campus to experience
            our Montessori environment firsthand.
          </p>

          <div className="space-y-4 text-blue-100">
            <p>
              📍 Please call ahead to schedule a visit.
            </p>
            <p>
              📞 Our staff will be happy to assist you.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
