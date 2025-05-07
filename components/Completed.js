export default function Completed({ prevStep }) {

  return (
    <div className="py-12 px-4 flex flex-col items-center">
      
      <div className="text-center">
        <h2 className="text-2xl font-medium mb-4">
          <span className="text-orange-600">Great!</span> Thank You for Applying
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We appreciate your application. Our team will review it, and we’ll
          reach out soon if there’s a match. Stay tuned!
        </p>
      </div>

      <button
        className="mt-8 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded font-medium"
      >
        TRACK APPLICATION
      </button>
    </div>
  );
}
