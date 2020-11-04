import { toast } from "react-toastify";
toast.configure();
class ToastService {
  success(message) {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  }
  error(message) {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  }
}

export default new ToastService();
