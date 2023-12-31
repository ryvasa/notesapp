import { useEffect, useState } from "react";
import { archiveNote, getNote, unarchiveNote } from "../utils/local-data";
import { useParams, useNavigate } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { FaBoxArchive, FaBoxOpen } from "react-icons/fa6";
import DeleteButton from "../components/DeleteButton";

const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({});

  const getNoteById = () => {
    const noted = getNote(id);
    if (!noted) {
      navigate("/notfound");
    } else {
      setNote(noted);
    }
  };

  const handleArchive = () => {
    archiveNote(id);
    getNoteById();
  };

  const handleUnarchive = () => {
    unarchiveNote(id);
    getNoteById();
  };

  useEffect(() => {
    getNoteById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4 border-2 backdrop-blur-md drop-shadow-2xl rounded-lg p-4 w-1/2  h-5/6 overflow-y relative">
        <h1 className="font-semibold text-xl">{note.title}</h1>
        <p className="text-sky-700 py-1 text-md">
          {showFormattedDate(note.createdAt)}
        </p>
        <p className="text-md">{note.body}</p>
        <div className="absolute bottom-3 right-3 flex gap-4">
          {note.archived ? (
            <button
              onClick={() => handleUnarchive(note.id)}
              className="w-32 bg-sky-700 rounded-md p-2 text-white flex text-sm justify-center items-center gap-2"
            >
              <FaBoxOpen />
              <p className="font-semibold">Batal arsip</p>
            </button>
          ) : (
            <button
              onClick={() => handleArchive(note.id)}
              className="w-20 bg-sky-700 rounded-md p-2 text-white flex text-sm justify-center items-center gap-2"
            >
              <FaBoxArchive />
              <p className="font-semibold">Arsip</p>
            </button>
          )}
          <DeleteButton id={note.id} />
        </div>
      </div>
    </div>
  );
};

export default Note;
