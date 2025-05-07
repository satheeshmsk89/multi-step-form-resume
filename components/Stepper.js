export default function Stepper({ steps, currentStep }) {
  return (
    <div className="w-full mt-2 py-8 bg-white">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-start justify-between relative">
          {steps.map((label, index) => {
            const isCompleted = index < currentStep || currentStep==5;
            const isCurrent = index === currentStep;
            const circleClasses = [
              "w-8",
              "h-8",
              "mx-auto",
              "rounded-full",
              "border-2",
              "flex",
              "items-center",
              "justify-center",
              "relative",
              "z-10",
              isCompleted
                ? "border-orange-500 bg-primary hover:bg-primary/90 text-white"
                : isCurrent
                ? "border-gray-400 bg-white"
                : "border-gray-300 bg-white",
            ].join(" ");

            return (
              <div key={index} className="flex-1 text-center relative">

                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-4 left-1/2 w-full h-0.5 ${
                      index < currentStep ? "bg-primary hover:bg-primary/90" : "bg-gray-300"
                    }`}
                    style={{ right: "-50%", left: "50%" }}
                  />
                )}

                <div className={circleClasses}>
                  {isCompleted ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : isCurrent ? (
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  ) : null}
                </div>
                <div className="mt-2 text-sm text-gray-700 font-medium">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
