import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Summary({ nextStep, prevStep }) {
  const { formData, setFormData } = useContext(FormContext);
  const isResumeFile = formData.resume instanceof File;
  const resumeUrl = isResumeFile ? URL.createObjectURL(formData.resume) : null;

  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const handleConfirm = () => {
    setFormData({});
    localStorage.clear();
    nextStep();
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <h2 className="text-2xl font-semibold text-gray-800">Summary</h2>

      <div className="border-t pt-6">
        <h3 className="text-md font-semibold text-gray-800 mb-2">Resume</h3>
        {formData.resume ? (
          <p className="text-sm text-gray-700 items-right font-medium"> 
          <a href={resumeUrl} download={formData.resume.name} className="flex items-left text-blue-600 hover:underline text-sm">
          {formData.resume.name} <Image src="/download.png" alt="Download" className="ml-5"  width={15} height={15} />

        </a></p>
        ) : (
          <p className="text-red-500">No valid resume uploaded.</p>
        )}
      </div>
      
      <div className="border-t pt-6">
        <h3 className="text-md font-semibold text-gray-800 mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-gray-800">
          <div>
            <p className="font-medium">First Name</p>
            <p className="font-bold mt-3">{formData.name?.split(" ")[0]}</p>
          </div>
          <div>
            <p className="font-medium">Last Name</p>
            <p className="font-bold mt-3">{formData.lastname?.split(" ")[0]}</p>
          </div>
          <div className="mt-5">
            <p className="font-medium">Email ID</p>
            <p className="font-bold mt-3">{formData.email}</p>
          </div>
          <div className="mt-5">
            <p className="font-medium">Phone Number</p>
            <p className="font-bold mt-3">{formData.phone}</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-md font-semibold text-gray-800 mb-4">Skill Sets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-gray-800">
          {(formData.skills || []).map((skill, i) => (
            <div key={skill.id}>
              <p className="font-medium">Skill {i + 1}</p>
              <p className="font-bold mt-3">{skill.name}</p>
              <p className="font-medium mt-4">Experience Level</p>
              <p className="font-bold mt-3">{skill.level}</p>
              
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-md font-semibold text-gray-800 mb-4">Education</h3>
        <div className="space-y-4 text-sm mt-8 text-gray-800">
          {(formData.education || []).map((edu) => (
            <div key={edu.id} className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
              <div>
                <p className="font-medium">Degree Name</p>
                <p className="font-bold mt-3">{edu.degree}</p>
              </div>
              <div>
                <p className="font-medium">University</p>
                <p className="font-bold mt-3">{edu.university}</p>
              </div>
              <div>
                <p className="font-medium">Year of Starting</p>
                <p className="font-bold mt-3">{edu.year}</p>
              </div>
              <div>
                <p className="font-medium">Year of Completion</p>
                <p className="font-bold mt-3">{+edu.year + 3}</p> {/* Example logic — adjust as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6 space-y-6 text-sm text-gray-600">
        <p>
          By submitting this form, you confirm that all information provided is accurate
          and complete to the best of your knowledge. Any false or misleading information
          may result in disqualification or termination of employment if discovered later.
        </p>
        <p>
          Your personal data will be handled confidentially in accordance with our Privacy Policy.
        </p>
        <label className="flex items-start gap-2 text-gray-800">
          <input
            type="checkbox"
            className="mt-1"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <span>
            By submitting, you agree to our{" "}
              Terms & Conditions
          </span>
        </label>
      </div>

      <div className="flex justify-end gap-4 pt-6 border-t">
        <button
          onClick={prevStep}
          className="px-6 py-2 border border-black rounded-md text-sm font-medium hover:bg-gray-100"
        >
          EDIT
        </button>
        <button
          onClick={handleConfirm}
          disabled={!agreed}
          className={`px-8 py-2 text-sm font-medium rounded-md ${
            agreed ? "bg-primary hover:bg-primary/90 text-white hover:bg-orange-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
}
