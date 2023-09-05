import Swal from "sweetalert2";

export const SuccessNotify = (title) =>
  Swal.fire({
    icon: "success",
    title: title,
    timer: 1500,
    showConfirmButton: false,
  });

export const FailNotify = (title) =>
  Swal.fire({
    icon: "error",
    title: title,
    timer: 1500,
    showConfirmButton: false,
  });
