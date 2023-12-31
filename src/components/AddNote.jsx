import { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import PropTypes from "prop-types";

const AddNote = ({ addNewNote }) => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = () => {
    const form = document.querySelector("#popup-form");
    form.classList.remove("flex");
    form.classList.add("hidden");
  };

  const handleSubmit = () => {
    inputs.createdAt = new Date().toISOString();
    inputs.id = `${+new Date()}`;
    inputs.archived = false;
    addNewNote(inputs);
    handleClick();
    setInputs({ title: "", body: "" });
  };

  return (
    <div
      id="popup-form"
      className="hidden justify-center items-center pt-10 absolute z-50 bg-black/25 w-full h-full backdrop-blur-sm"
    >
      <div className=" relative flex gap-4 flex-col pb-10 pt-8 px-10 border rounded-md bg-white shadow-lg drop-shadow-2xl">
        <button
          onClick={handleClick}
          className="absolute top-2 right-2 text-red-500"
        >
          <FaCircleXmark size={20} />
        </button>
        <h1 className="text-center text-sky-700 text-xl font-semibold">
          Tambah Catatan Baru
        </h1>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="#title"
            className="text-sm text-sky-700 font-semibold"
          >
            Title
          </label>
          <input
            value={inputs.title}
            onChange={handleChange}
            name="title"
            id="title"
            type="text"
            className="rounded-md p-2 border-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="#body" className="text-sm text-sky-700 font-semibold">
            Body
          </label>
          <textarea
            value={inputs.body}
            onChange={handleChange}
            name="body"
            id="body"
            type="text"
            className="rounded-md p-2 border-2"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleSubmit()}
            className="border-none bg-sky-700 text-white rounded-md text-sm p-2 w-1/3"
          >
            Tambahkan
          </button>
        </div>
      </div>
    </div>
  );
};

AddNote.propTypes = {
  addNewNote: PropTypes.func,
};

export default AddNote;
