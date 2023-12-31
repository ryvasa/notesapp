import Note from "./Note";
import PropTypes from "prop-types";

const NoteList = ({ notes }) => {
  return (
    <>
      {notes.length ? (
        <div className="grid grid-cols-4 gap-2 pt-2 pb-7">
          {notes.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center pt-20">
          <p className="text-2xl text-sky-700 font-bold">Tidak ada catatan</p>
        </div>
      )}
    </>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};
export default NoteList;
