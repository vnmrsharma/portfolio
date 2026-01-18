import { FaDownload } from "react-icons/fa";

export default function CVDownload() {
  return (
    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Download Resume
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Download my complete resume with detailed work experience, education, 
        and achievements.
      </p>
      <a
        href="/Vin_resume.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <FaDownload />
        Download PDF
      </a>
    </div>
  );
}

