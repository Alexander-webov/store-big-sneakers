import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow transition duration-300"
    >
      ← Go Back
    </button>
  );
}

export default ButtonBack;
