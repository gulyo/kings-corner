import { Subject } from "rxjs";
import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify/dist/types";
import { Message } from "./Message";

const messageBus = new Subject<Message>();

const defaultOptions: ToastOptions = {
  position: "bottom-center",
  autoClose: 1000,
  icon: true,
  closeButton: false,
  hideProgressBar: true,
};

messageBus.subscribe(({ type, message, options }: Message) => {
  toast[type](message, {
    ...defaultOptions,
    ...(options ?? {}),
  });
});

export const toastMessage = (msg: Message): void => messageBus.next(msg);
