import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

export default function SkillsForm({ nextStep, prevStep }) {
  const { formData, setFormData } = useContext(FormContext);
  const [skillName, setSkillName] = useState("");
  const [level, setLevel] = useState("Intermediate");
  const [error, setError] = useState("");

  const handleAddSkill = () => {
    if (skillName.trim().length < 2) {
      setError("Skill name must be at least 2 characters");
      return;
    }
    const newSkill = { id: Date.now().toString(), name: skillName, level };
    setFormData({
      ...formData,
      skills: [...(formData.skills || []), newSkill],
    });
    setSkillName("");
    setLevel("Intermediate");
    setError("");
  };

  const handleRemoveSkill = (id) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s.id !== id),
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">Add Skill Sets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Add Skill</label>
            <input
              type="text"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className="w-full rounded-md px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
        </div>
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Experience level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full rounded-md px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>
      </div>

      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      <div className="flex flex-wrap gap-3 mb-6">
        {(formData.skills || []).map((skill) => (
          <div
            key={skill.id}
            className="flex items-center border border-gray-120 px-4 py-2 text-sm"
          >
            <span>
            <span className="text-gray-500"> {skill.name} ({skill.level})</span>
            </span>
            <button
              onClick={() => handleRemoveSkill(skill.id)}
              className="ml-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddSkill}
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded hover:bg-orange-600 text-sm font-medium"
      >
        Add <span className="text-lg leading-none">+</span>
      </button>

      <div className="mt-10 flex justify-end gap-4">
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
