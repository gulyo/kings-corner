import { TypeOptions } from "react-toastify";
import type { ToastOptions } from "react-toastify/dist/types";

export interface Message {
  type: TypeOptions;
  message: string;
  options?: ToastOptions;
}
