import { archiveNote } from "../utils/local-data";
import { FaBoxArchive } from "react-icons/fa6";
import PropTypes from "prop-types";

const ArchiveButton = ({ id, getNoteById }) => {
  const handleArchive = () => {
    archiveNote(id);
    getNoteById();
  };

  return (
    <button
      onClick={() => handleArchive(id)}
      className="w-20 bg-sky-700 rounded-md p-2 text-white flex text-sm justify-center items-center gap-2"
    >
      <FaBoxArchive />
      <p className="font-semibold">Arsip</p>
    </button>
  );
};
ArchiveButton.propTypes = {
  id: PropTypes.string,
  getNoteById: PropTypes.func,
};
export default ArchiveButton;
