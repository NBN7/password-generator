import { toast } from "react-hot-toast";

export const toastSuccess = (message: string) => {
  toast.success(message, {
    style: {
      backgroundColor: "#006FEF",
      color: "#fff",
      borderRadius: "10px",
    },
    duration: 1500,
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    style: {
      backgroundColor: "#006FEF",
      color: "#fff",
      borderRadius: "10px",
    },
    duration: 1500,
  });
};
