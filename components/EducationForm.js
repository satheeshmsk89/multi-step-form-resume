import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

export default function EducationForm({ nextStep, prevStep }) {
  const { formData, setFormData } = useContext(FormContext);
  const [entry, setEntry] = useState({ degree: "", university: "", year: "" });
  const [errors, setErrors] = useState("");

  const handleAdd = () => {
    const { degree, university, year } = entry;
    if (!degree || !university || !/^(19|20)\d{2}$/.test(year)) {
      setErrors("All fields are required and year must be valid (e.g., 2022)");
      return;
    }
    const newEd = { ...entry, id: Date.now().toString() };
    setFormData({
      ...formData,
      education: [...(formData.education || []), newEd],
    });
    setEntry({ degree: "", university: "", year: "" });
    setErrors("");
  };

  const handleRemove = (id) => {
    setFormData({
      ...formData,
      education: formData.education.filter((e) => e.id !== id),
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">Add Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Add University/College</label>
        <input
          type="text"
          value={entry.degree}
          onChange={(e) => setEntry({ ...entry, degree: e.target.value })}
          className="w-full rounded-md px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">University/College</label>
          <input
          type="text"
          value={entry.university}
          onChange={(e) => setEntry({ ...entry, university: e.target.value })}
          className="w-full rounded-md px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Starting Year</label>
        <input
          type="text"
          value={entry.year}
          placeholder="(e.g., 2025)"
          onChange={(e) => setEntry({ ...entry, year: e.target.value })}
          className="col-span-1 md:col-span-2 w-full rounded-md px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      </div>

      {errors && <p className="text-red-500 text-sm mb-4">{errors}</p>}

      <button
        onClick={handleAdd}
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded hover:bg-orange-600 text-sm font-medium mb-6"
      >
        Add <span className="text-lg leading-none">+</span>
      </button>

      <div className="space-y-3 mb-10">
        {(formData.education || []).map((edu) => (
          <div
            key={edu.id}
            className="flex max-w-xl justify-between items-center border rounded-md px-4 py-3 bg-white"
          >
            <div>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm text-gray-600">{edu.university} — {edu.year}</p>
            </div>
            <button
              onClick={() => handleRemove(edu.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={prevStep}
          className="px-6 py-2 border border-black rounded-md text-sm font-medium hover:bg-gray-100"
        >
          BACK
        </button>
        <button
          onClick={nextStep}
          className="px-8 py-2 bg-primary hover:bg-primary/90 text-white rounded-md text-sm font-medium hover:bg-orange-600"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
