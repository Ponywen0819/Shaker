var SuccessNotify = function SuccessNotify(title) {
    return Swal.fire({
        icon: "success",
        title: title,
        timer: 1500,
        showConfirmButton: false
    });
};

var FailNotify = function FailNotify(title) {
    return Swal.fire({
        icon: "error",
        title: title,
        timer: 1500,
        showConfirmButton: false
    });
};