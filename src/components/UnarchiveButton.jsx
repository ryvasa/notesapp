import { unarchiveNote } from "../utils/local-data";
import { FaBoxArchive } from "react-icons/fa6";
import PropTypes from "prop-types";

const UnarchiveButton = ({ id, getNoteById }) => {
  const handleUnarchive = () => {
    unarchiveNote(id);
    getNoteById();
  };

  return (
    <button
      onClick={() => handleUnarchive(id)}
      className="w-20 bg-sky-700 rounded-md p-2 text-white flex text-sm justify-center items-center gap-2"
    >
      <FaBoxArchive />
      <p className="font-semibold">Arsip</p>
    </button>
  );
};
UnarchiveButton.propTypes = {
  id: PropTypes.string,
  getNoteById: PropTypes.func,
};
export default UnarchiveButton;
