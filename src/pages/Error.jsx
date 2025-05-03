import { useRouteError } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";

function Error() {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <h1 className="text-6xl mb-5">Something went wrong 😢</h1>
      <p className="text-2xl mb-5">{error.data || error.message}</p>
      <ButtonBack />
    </div>
  );
}

export default Error;
