import PropTypes from "prop-types";

const Search = ({ setSearchParams }) => {
  const handleChange = (e) => {
    setSearchParams({ search: e.target.value });
  };
  return (
    <div>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Cari catatan..."
        className="border w-full px-5 py-2 rounded-lg text-black "
      />
    </div>
  );
};

Search.propTypes = {
  setSearchParams: PropTypes.func,
};

export default Search;
