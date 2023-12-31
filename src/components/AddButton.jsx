import { FaFileCirclePlus } from "react-icons/fa6";
const AddButton = () => {
  const handleClick = () => {
    const form = document.querySelector("#popup-form");
    form.classList.remove("hidden");
    form.classList.add("flex");
  };
  return (
    <button
      onClick={handleClick}
      className="w-2/12 p-2 rounded-md flex text-white bg-sky-700 justify-center gap-2 items-center"
    >
      <FaFileCirclePlus />
      <p className="font-semibold text-sm">Buat catatan</p>
    </button>
  );
};

export default AddButton;
