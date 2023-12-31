import { deleteNote } from "../utils/local-data";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteNote(id);
    navigate(-1);
  };
  return (
    <button
      onClick={() => handleDelete(id)}
      className="w-20 bg-red-500 rounded-md p-2 text-white flex text-sm justify-center items-center gap-2"
    >
      <FaTrashCan />
      <p className="font-semibold">Hapus</p>
    </button>
  );
};
DeleteButton.propTypes = {
  id: PropTypes.string,
};
export default DeleteButton;
