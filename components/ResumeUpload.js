import { useContext, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";

export default function ResumeUpload({ nextStep }) {
  const { formData, setFormData } = useContext(FormContext);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && (file.type === "application/pdf" || file.name.endsWith(".doc") || file.name.endsWith(".docx"))) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setError("");
    } else {
      setError("Please upload a valid PDF or DOC file.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  return (
    <div className="max-w-xl px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Upload Resume</h2>

      <div
        className={`border-2 border-dashed rounded-md p-8 flex flex-col items-center justify-center text-center transition ${
          isDragging ? "border-orange-500 bg-orange-50" : "border-gray-300"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <div className="mb-4">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.87505 22.6368H6.70751C3.38853 22.3997 1.89844 19.8484 1.89844 17.5793C1.89844 15.3102 3.38855 12.7476 6.65108 12.5218C7.11393 12.4766 7.52032 12.8379 7.55418 13.312C7.58805 13.7749 7.23815 14.1813 6.76401 14.2151C4.57394 14.3732 3.59179 16.0214 3.59179 17.5906C3.59179 19.1597 4.57394 20.8079 6.76401 20.966H8.87505C9.3379 20.966 9.72173 21.3498 9.72173 21.8127C9.72173 22.2755 9.3379 22.6368 8.87505 22.6368Z" fill="#F66135"/>
          <path d="M19.2718 22.6367C19.2492 22.6367 19.2379 22.6367 19.2154 22.6367C18.7525 22.6367 18.3236 22.2529 18.3236 21.79C18.3236 21.3046 18.6848 20.9434 19.1589 20.9434C20.5475 20.9434 21.7893 20.4579 22.7601 19.5887C24.5212 18.0534 24.6341 15.8407 24.16 14.2828C23.6858 12.7362 22.365 10.9639 20.062 10.6816C19.6895 10.6365 19.396 10.3543 19.3282 9.98172C18.8767 7.27235 17.4204 5.39837 15.2078 4.72103C12.9274 4.00982 10.2631 4.70974 8.60365 6.44825C6.98932 8.13031 6.61679 10.4897 7.55378 13.0862C7.71182 13.5265 7.4861 14.0119 7.04582 14.1699C6.60555 14.328 6.1201 14.1022 5.96205 13.6619C4.82186 10.4784 5.34117 7.43039 7.38448 5.28548C9.47295 3.0954 12.8258 2.22614 15.7045 3.10669C18.3461 3.9195 20.2088 6.09828 20.8861 9.12374C23.1891 9.64304 25.0405 11.3928 25.7743 13.8087C26.5758 16.439 25.8533 19.1484 23.8777 20.8643C22.6247 21.9932 20.9877 22.6367 19.2718 22.6367Z" fill="#F66135"/>
          <path d="M14 25.9557C11.7309 25.9557 9.60857 24.7478 8.4458 22.7948C8.32162 22.6029 8.19744 22.3771 8.09584 22.1287C7.71201 21.3272 7.50879 20.4128 7.50879 19.4645C7.50879 15.8859 10.4214 12.9733 14 12.9733C17.5786 12.9733 20.4912 15.8859 20.4912 19.4645C20.4912 20.4241 20.288 21.3272 19.8816 22.1626C19.7913 22.3771 19.6671 22.6029 19.5316 22.8174C18.3914 24.7478 16.2691 25.9557 14 25.9557ZM14 14.6667C11.3583 14.6667 9.20214 16.8229 9.20214 19.4645C9.20214 20.1644 9.34891 20.8192 9.63113 21.4175C9.72145 21.6094 9.80045 21.7675 9.89076 21.9142C10.7487 23.3705 12.3179 24.2624 13.9887 24.2624C15.6595 24.2624 17.2286 23.3705 18.0753 21.9368C18.1769 21.7675 18.2673 21.6094 18.335 21.4514C18.6398 20.8305 18.7865 20.1757 18.7865 19.4758C18.7978 16.8229 16.6416 14.6667 14 14.6667Z" fill="#F66135"/>
          <path d="M13.3565 21.4287C13.142 21.4287 12.9276 21.3497 12.7582 21.1804L11.6406 20.0628C11.3132 19.7354 11.3132 19.1935 11.6406 18.8661C11.9679 18.5388 12.5098 18.5388 12.8372 18.8661L13.3791 19.408L15.1853 17.7372C15.5353 17.4211 16.0659 17.4437 16.382 17.7824C16.6981 18.121 16.6755 18.6629 16.3368 18.979L13.9323 21.203C13.7629 21.3497 13.5597 21.4287 13.3565 21.4287Z" fill="#F66135"/>
          </svg>
        </div>
        <p className="font-medium mb-3">Choose a file or drag & drop it here</p>
        <p className="text-sm text-gray-500 mb-4">Please upload your resume (PDF, DOC formats only)</p>
        <button
          type="button"
          className="border border-gray-400 px-6 py-2 rounded-md text-sm hover:bg-gray-100"
          onClick={() => fileInputRef.current.click()}
        >
          Browse File
        </button>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>

      {formData.resume && (
          <div className="mt-6 flex items-center justify-between border border-orange-100 bg-orange-50 px-20 py-3 rounded-md">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">

                <div className="w-10 h-10 bg-white border border-red-300 rounded-md flex items-center justify-center">
                  <span className="text-xs font-semibold text-red-600">PDF</span>
                </div>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800">{formData.resume.name}</p>
                <p className="text-xs text-gray-500">
                  {((formData.resume.size / 1024).toFixed(0))} KB of {(formData.resume.size / 1024).toFixed(0)} KB • <span className="text-green-600 font-medium">Completed</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setFormData((prev) => ({ ...prev, resume: null }))}
              className="text-orange-500 hover:text-orange-700 transition pl-5"
              aria-label="Remove file"
            >
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5297 5.32145C16.5142 5.32145 16.491 5.32145 16.4677 5.32145C12.3639 4.9103 8.26789 4.75515 4.21066 5.1663L2.6281 5.32145C2.30228 5.35248 2.01525 5.11975 1.98422 4.79394C1.95319 4.46812 2.18592 4.18884 2.50398 4.15781L4.08653 4.00266C8.21358 3.58375 12.3949 3.74666 16.584 4.15781C16.9021 4.18884 17.1348 4.47587 17.1038 4.79394C17.0805 5.09648 16.8245 5.32145 16.5297 5.32145Z" fill="#F66135"/>
                <path d="M6.83264 4.53796C6.80161 4.53796 6.77058 4.53796 6.73179 4.53021C6.42149 4.4759 6.20427 4.17336 6.25858 3.86305L6.42924 2.84681C6.55337 2.10207 6.72403 1.07031 8.53156 1.07031H10.5641C12.3793 1.07031 12.55 2.14086 12.6664 2.85456L12.837 3.86305C12.8913 4.18111 12.6741 4.48366 12.3638 4.53021C12.0458 4.58451 11.7432 4.3673 11.6967 4.05699L11.526 3.0485C11.4174 2.37359 11.3941 2.24171 10.5718 2.24171H8.53931C7.71701 2.24171 7.70149 2.35032 7.58513 3.04075L7.4067 4.04924C7.36016 4.33627 7.11191 4.53796 6.83264 4.53796Z" fill="#F66135"/>
                <path d="M12.0381 17.7493H7.05774C4.35033 17.7493 4.24173 16.2521 4.15639 15.0419L3.65215 7.23002C3.62887 6.91196 3.87712 6.63269 4.19518 6.60941C4.521 6.5939 4.79252 6.83438 4.81579 7.15245L5.32003 14.9644C5.40537 16.1435 5.4364 16.5857 7.05774 16.5857H12.0381C13.6672 16.5857 13.6983 16.1435 13.7758 14.9644L14.2801 7.15245C14.3033 6.83438 14.5826 6.5939 14.9007 6.60941C15.2187 6.63269 15.467 6.9042 15.4437 7.23002L14.9395 15.0419C14.8541 16.2521 14.7455 17.7493 12.0381 17.7493Z" fill="#F66135"/>
                <path d="M10.8355 13.4826H8.25223C7.93417 13.4826 7.67041 13.2189 7.67041 12.9008C7.67041 12.5827 7.93417 12.319 8.25223 12.319H10.8355C11.1536 12.319 11.4173 12.5827 11.4173 12.9008C11.4173 13.2189 11.1536 13.4826 10.8355 13.4826Z" fill="#F66135"/>
                <path d="M11.4872 10.3794H7.60843C7.29037 10.3794 7.02661 10.1156 7.02661 9.79758C7.02661 9.47952 7.29037 9.21576 7.60843 9.21576H11.4872C11.8053 9.21576 12.0691 9.47952 12.0691 9.79758C12.0691 10.1156 11.8053 10.3794 11.4872 10.3794Z" fill="#F66135"/>
                </svg>

            </button>
          </div>
        )}

      <div className="mt-8 flex justify-end">
        <button
          onClick={nextStep}
          disabled={!formData.resume}
          className={`px-6 py-2 rounded-md text-white ${
            formData.resume ? "bg-primary hover:bg-primary/90" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
