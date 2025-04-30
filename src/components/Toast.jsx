import { ToastContainer, toast } from "react-toastify";

function Toast({ text, children }) {
  const notify = () => toast(text);

  return (
    <div className="">
      <div onClick={notify}>{children}</div>

      <ToastContainer />
    </div>
  );
}

export default Toast;
