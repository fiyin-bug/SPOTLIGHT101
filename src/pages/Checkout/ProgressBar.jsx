import PropTypes from 'prop-types';

function ProgressBar({ step }) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        <div className={`flex flex-col items-center ${step >= 1 ? "text-gold" : "text-gray-400"}`}>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= 1 ? "border-gold bg-black" : "border-gray-400 bg-gray-800"}`}
          >
            {step > 1 ? "✓" : "1"}
          </div>
          <span className="mt-2 text-sm font-medium">Tickets</span>
        </div>

        <div className={`flex-1 h-1 rounded-xl mb-6 mx-2 ${step >= 2 ? "bg-gold" : "bg-gray-400"}`}></div>

        <div className={`flex flex-col items-center ${step >= 2 ? "text-gold" : "text-gray-400"}`}>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= 2 ? "border-gold bg-black" : "border-gray-400 bg-gray-800"}`}
          >
            {step > 2 ? "✓" : "2"}
          </div>
          <span className="mt-2 text-sm font-medium">Contact</span>
        </div>

        <div className={`flex-1 h-1 rounded-xl mb-6 mx-2 ${step >= 3 ? "bg-gold" : "bg-gray-400"}`}></div>

        <div className={`flex flex-col items-center ${step >= 3 ? "text-gold" : "text-gray-400"}`}>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= 3 ? "border-gold bg-black" : "border-gray-400 bg-gray-800"}`}
          >
            3
          </div>
          <span className="mt-2 text-sm font-medium">Payment</span>
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  step: PropTypes.number.isRequired
};

export default ProgressBar;



