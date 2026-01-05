import { Phone, Mail, FileDown, MapPin } from "lucide-react";

export default function ApplyNow() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Apply to Richcom Montessori School
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are delighted that you are considering Richcom Montessori School
          for your child. Choose the application method that works best for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Download Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <FileDown className="mx-auto text-green-600 mb-4" size={36} />
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            Download Form
          </h3>
          <p className="text-gray-600 mb-4">
            Download and submit the completed admission form at the school.
          </p>
          <a
            href="/Richcom-Admission-Form.pdf"
            className="inline-block text-green-600 font-medium hover:underline"
          >
            Download PDF
          </a>
        </div>

        {/* Call */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <Phone className="mx-auto text-green-600 mb-4" size={36} />
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            Call Us
          </h3>
          <p className="text-gray-600 mb-2">
            Speak directly with our admissions team.
          </p>
          <a
            href="tel:+233XXXXXXXXX"
            className="text-green-600 font-medium hover:underline"
          >
            +233 XXX XXX XXX
          </a>
        </div>

        {/* Email */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <Mail className="mx-auto text-green-600 mb-4" size={36} />
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            Email Application
          </h3>
          <p className="text-gray-600 mb-2">
            Send your child’s details and inquiries via email.
          </p>
          <a
            href="mailto:admissions@richcommontessori.com"
            className="text-green-600 font-medium hover:underline break-all"
          >
            admissions@richcommontessori.com
          </a>
        </div>

        {/* Visit */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <MapPin className="mx-auto text-green-600 mb-4" size={36} />
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            Visit the School
          </h3>
          <p className="text-gray-600">
            Our admissions office is open on weekdays for walk-in inquiries.
          </p>
        </div>

      </div>

      {/* Footer CTA */}
      <div className="bg-blue-900 text-white text-center mt-16 max-w-4xl mx-auto py-12 px-6 rounded-3xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">
          We Look Forward to Welcoming Your Child
        </h2>
        <p className="text-gray-200">
          At Richcom Montessori School, every child is nurtured, guided, and
          inspired to reach their full potential.
        </p>
      </div>
    </section>
  );
}
