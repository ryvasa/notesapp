import { useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import {
  addNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
} from "../utils/local-data";
import Search from "../components/Search";
import AddButton from "../components/AddButton";
import AddNote from "../components/AddNote";
import Navbar from "../components/Navbar";
import { useLocation, useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const { pathname } = useLocation();
  const search = searchParams.get("search");

  const getNotes = () => {
    if (pathname === "/") {
      setNotes(getAllNotes());
    } else if (pathname === "/notes/active") {
      setNotes(getActiveNotes());
    } else {
      setNotes(getArchivedNotes());
    }
  };

  const addNewNote = (data) => {
    addNote(data);
    getNotes();
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (search) {
      const filtered = notes.filter((item) =>
        item.title.toLowerCase().startsWith(search.toLowerCase())
      );
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(notes);
    }
  }, [notes, search]);

  return (
    <div>
      <AddNote addNewNote={addNewNote} />
      <div className="px-40">
        <div className="py-4">
          <h1 className="py-2 text-center text-sky-700 text-xl font-semibold">
            NotesApp
          </h1>
          <Navbar />
          <div className="flex gap-4 w-full justify-between">
            <div className="w-10/12">
              <Search setSearchParams={setSearchParams} />
            </div>
            <AddButton />
          </div>
        </div>
        <NoteList notes={filteredNotes} />
      </div>
    </div>
  );
};

export default Home;
