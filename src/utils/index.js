import { Notify } from "quasar";

export const Toast = function(message, type="success") {
  let color = "grey";
  let position = "center";

  switch (type) {
    case "error":
      color = "red";
      // position = "top";
      break;
    case "warning":
      color = "amber";
      // position = "top";
      break;
    default:
      break;
  }

  return Notify.create({
    message: message,
    timeout: 2000,
    color: color,
    textColor: "white",
    position: position
  });
};
