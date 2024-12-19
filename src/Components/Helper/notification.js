import { toast } from "react-toastify";

const notification = (status, text, duration = 5000) => {
  const options = {
    autoClose: duration, // Set the duration dynamically
  };

  switch (status) {
    case "success":
      toast.success(text || "Operation Successful!", options);
      break;
    case "error":
      toast.error(text || "Something went wrong!", options);
      break;
    case "info":
      toast.info(text || "Here is some information!", options);
      break;
    case "warning":
      toast.warn(text || "Be cautious!", options);
      break;
    default:
      toast(text || "Notification!", options);
      break;
  }
};

export default notification;
