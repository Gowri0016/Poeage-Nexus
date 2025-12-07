import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaCogs,
  FaTshirt,
  FaBuilding,
  FaMicrochip,
  FaBolt,
  FaIndustry,
  FaLaptopCode,
  FaNetworkWired,
  FaServer
} from "react-icons/fa";

export default function JobsAdvanced() {

  const allJobs = [
    { id: "backend-dev", title: "Backend Developer", category: "Backend / IT", icon: <FaLaptopCode />, details: "Design and implement server-side logic, APIs and integrations." },
    { id: "node-dev", title: "Node.js Developer", category: "Backend / IT", icon: <FaLaptopCode />, details: "Build scalable Node.js services, REST/GraphQL APIs." },
    { id: "api-dev", title: "API Developer", category: "Backend / IT", icon: <FaLaptopCode />, details: "Design robust, versioned APIs and Swagger specs." },
    { id: "db-admin", title: "Database Administrator", category: "Backend / IT", icon: <FaServer />, details: "Manage databases, tuning, backups and migrations." },
    { id: "mongo-specialist", title: "MongoDB Specialist", category: "Backend / IT", icon: <FaServer />, details: "Schema design, aggregation pipelines, indexing." },

    { id: "production", title: "Production", category: "Production", icon: <FaIndustry />, details: "Operate machines & production workflows." },
    { id: "quality", title: "Quality Control", category: "Production", icon: <FaCogs />, details: "Check quality and ensure standards." },
    { id: "machine-op", title: "Machine Operator", category: "Production", icon: <FaCogs />, details: "Machine operation and maintenance." },

    { id: "fashion", title: "Fashion Design", category: "Design", icon: <FaTshirt />, details: "Design garments, textiles, patterns." },

    { id: "civil", title: "Civil Engineering", category: "Engineering", icon: <FaBuilding />, details: "Site supervision, CAD planning, construction." },
    { id: "mechanical", title: "Mechanical Engineering", category: "Engineering", icon: <FaBolt />, details: "Machines, maintenance, fabrication." },
    { id: "ece", title: "ECE", category: "Engineering", icon: <FaMicrochip />, details: "Electronics, communication systems." },
    { id: "eee", title: "EEE", category: "Engineering", icon: <FaBolt />, details: "Power systems, wiring, testing." },

    { id: "hardware-tech", title: "Hardware Technician", category: "Hardware", icon: <FaMicrochip />, details: "PC hardware repair, assembly." },
    { id: "network-engineer", title: "Networking Engineer", category: "Hardware", icon: <FaNetworkWired />, details: "Cabling, routers, switches." },
    { id: "embedded", title: "Embedded Engineer", category: "Hardware", icon: <FaMicrochip />, details: "Embedded firmware, drivers." },
    { id: "pcb-design", title: "PCB Design Engineer", category: "Hardware", icon: <FaMicrochip />, details: "PCB schematic & layout." },
  ];

  const categories = ["All Jobs", "Engineering", "Backend / IT", "Hardware", "Design", "Production"];
  const [activeTab, setActiveTab] = useState("All Jobs");
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(allJobs);

  const [selectedJob, setSelectedJob] = useState(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    resume: null,
  });

  // Filtering
  useEffect(() => {
    let result = allJobs.filter((j) => {
      const inTab = activeTab === "All Jobs" ? true : j.category === activeTab;
      const inQuery = (j.title + " " + j.details).toLowerCase().includes(query.toLowerCase());
      return inTab && inQuery;
    });
    setFiltered(result);
  }, [activeTab, query]);

  // Modal Open
  function openModal(job) {
    setSelectedJob(job);
  }

  // Auto-fill & scroll to form
  function applyFromModal(job) {
    setFormData((prev) => ({ ...prev, category: job.title }));
    setSelectedJob(null);

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 350);
  }

  // EmailJS Submit Handler
  function sendEmail(e) {
    e.preventDefault();

    const currentTime = new Date().toLocaleString();

    const form = e.target;

    emailjs
      .sendForm(
        "service_dk73ruq",
        "template_ielgg0f",
        form,
        "3Mza4yOqBPIR34fqoaYLl"
      )
      .then(
        () => {
          alert("Application sent successfully!");
          setFormData({ name: "", email: "", phone: "", category: "", resume: null });
        },
        (error) => {
          alert("Failed to send application.");
          console.log(error);
        }
      );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Explore Jobs & Apply</h1>
        <p className="text-gray-600 mb-8">Click a job card → view details → apply instantly.</p>

        {/* Tabs + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl font-medium transition ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search job role..."
              className="p-3 rounded-xl border border-gray-200 w-72 outline-none"
            />
            <div className="text-sm text-gray-500">Results: {filtered.length}</div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl text-blue-600">{job.icon}</div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{job.details}</p>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => openModal(job)}
                      className="px-4 py-2 rounded-md bg-white border border-gray-200 hover:shadow-md"
                    >
                      Details
                    </button>

                    <button
                      onClick={() => applyFromModal(job)}
                      className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ y: 40, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 20, scale: 0.97 }}
                className="bg-white w-11/12 max-w-xl p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                    <p className="text-gray-600 mt-2">{selectedJob.details}</p>
                  </div>

                  <button onClick={() => setSelectedJob(null)} className="text-xl">
                    ✖
                  </button>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => applyFromModal(selectedJob)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Apply Now
                  </button>

                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 bg-white border rounded-md"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Application Form (EmailJS) */}
        <div ref={formRef} className="mt-10">
          <form
            onSubmit={sendEmail}
            encType="multipart/form-data"
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full name"
                required
                className="p-3 border rounded-lg"
              />

              <input
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                type="email"
                required
                className="p-3 border rounded-lg"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone"
                required
                className="p-3 border rounded-lg"
              />

              <select
                name="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="p-3 border rounded-lg"
              >
                <option value="">Select job category</option>
                {allJobs.map((j) => (
                  <option key={j.id} value={j.title}>
                    {j.title}
                  </option>
                ))}
              </select>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-600 mb-2">
                  Upload Resume (PDF/DOC)
                </label>

                <input
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg"
              >
                Submit Application
              </button>

              <p className="text-gray-500 text-sm">
                Resume will be sent to <strong>poeagenexus@gmail.com</strong>
              </p>
            </div>

            {/* Hidden time + message fields */}
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            <input type="hidden" name="message" value="New job application received." />

          </form>
        </div>
      </div>
    </div>
  );
}
