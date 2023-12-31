import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";

const Note = ({ note }) => {
  const content = (text) => {
    if (text.length > 180) {
      return text.slice(0, 180) + "...";
    }
    return text;
  };
  return (
    <Link
      to={`/notes/${note.id}`}
      className="border-2 rounded-lg p-4 w-64 h-64 relative"
    >
      <h1 className="font-semibold">{note.title}</h1>
      <p className="text-sky-700 py-1 text-sm">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="text-sm">{content(note.body)}</p>
      {note.archived && (
        <div className="absolute bottom-4 right-4 text-sky-700">
          <FaBoxArchive />
        </div>
      )}
    </Link>
  );
};

const noteShapeItem = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  archived: PropTypes.bool,
  createdAt: PropTypes.string,
};

Note.propTypes = {
  note: PropTypes.shape(noteShapeItem).isRequired,
};

export default Note;
