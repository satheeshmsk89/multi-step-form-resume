import { useState, useEffect, useContext } from "react";
import { FormContext } from "../context/FormContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function BasicDetails({ nextStep, prevStep }) {
  const { formData, setFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [localData, setLocalData] = useState({
    name: formData.name || "",
    lastname: formData.lastname || "",
    email: formData.email || "",
    phone: formData.phone || "",
  });

  const handleChange = (field, value) => {
    setLocalData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  useEffect(() => {
    const newErrors = {};

    if (!localData.name || localData.name.length < 3) {
      newErrors.name = "Min length- 3 characters.";
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(localData.email)) {
      newErrors.email = "Enter valid email id";
    }

    if (!/^\+\d{10,15}$/.test("+" + localData.phone)) {
      newErrors.phone = "Enter valid phone number";
    }

    setErrors(newErrors);
  }, [localData]);

  const handleNext = () => {
    const currentErrors = {};

    if (!localData.name || localData.name.length < 3) {
      currentErrors.name = "Min length- 3 characters.";
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(localData.email)) {
      currentErrors.email = "Enter valid email id";
    }

    if (!/^\+\d{10,15}$/.test("+" + localData.phone)) {
      currentErrors.phone = "Enter valid phone number";
    }

    if (Object.keys(currentErrors).length === 0) {
      setFormData((prev) => ({ ...prev, ...localData }));
      nextStep();
    } else {
      setErrors(currentErrors);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">Basic Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            value={localData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full bg-gray-100 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {touched.name && errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            value={localData.lastname}
            onChange={(e) => handleChange("lastname", e.target.value)}
            className="w-full bg-gray-100 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={localData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full bg-gray-100 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {touched.email && errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
          <PhoneInput
            country={"in"}
            value={localData.phone}
            onChange={(value) => handleChange("phone", value)}
            inputStyle={{
              width: "100%",
              height: "52px",
              border: "none",
              borderRadius: "0.375rem",
              backgroundColor: "#f9f9f9",
              paddingLeft: "60px",
              fontSize: "14px",
              boxShadow: "none",
            }}
            buttonStyle={{
              border: "none",
              backgroundColor: "#f9f9f9",
              borderTopLeftRadius: "0.375rem",
              borderBottomLeftRadius: "0.375rem",
            }}
            containerStyle={{
              width: "100%",
              borderRadius: "0.375rem",
              backgroundColor: "#f9f9f9",
            }}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: false,
            }}
          />
          {touched.phone && errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="mt-10 flex justify-end gap-4">
        <button
          onClick={prevStep}
          className="px-6 py-2 border border-black rounded-md text-sm font-medium hover:bg-gray-100"
        >
          BACK
        </button>
        <button
          onClick={handleNext}
          disabled={Object.keys(errors).length > 0}
          className={`px-8 py-2 rounded-md text-white text-sm font-medium ${
            Object.keys(errors).length === 0
              ? "bg-primary hover:bg-primary/90"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
