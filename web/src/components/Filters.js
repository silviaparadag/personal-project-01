import '../styles/layout/Filters.scss';

const Filters = ({ searchByCity, handleFilter }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleChangeSearchCityName = (ev) => {
    handleFilter(ev.target.value);
  };

  return (
    <form className="filters" onSubmit={handleSubmit}>
      <label htmlFor="search_city">Name</label>
      <input
        type="text"
        className="filters__city"
        name="search_city"
        id="search_city"
        placeholder="Search a place"
        value={searchByCity}
        onChange={handleChangeSearchCityName}
      />
    </form>
  );
};

export default Filters;
