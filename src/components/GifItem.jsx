import Swal from "sweetalert2";

export const GifItem = ({ title, url }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(url);

    Swal.fire({
      toast: true,
      icon: "success",
      title: "Copiado al portapapeles",
      position: "top-end",
      customClass: {
        timerProgressBar: "bg-blue-300",
      },
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  return (
    <button
      onClick={handleCopyToClipboard}
      className="md:w-2/5 lg:w-1/4 flex flex-col content-center items-center justify-center overflow-hidden rounded-xl bg-white shadow-md"
    >
      <img src={url} alt={title} />
      <p className="m-4 bg-white text-center text-lg">{title}</p>
    </button>
  );
};
