

import '../styles/layout/Filters.scss';


const Filters = ({searchByCity, handleFilter}) => {

    const handleSubmit = (ev) => {
    ev.preventDefault();
        }

return (

    <form className="filters" onSubmit={handleSubmit} >
        <label htmlFor="city"></label>
        <input type="text" name="city" id="city" placeholder='Search a place' value={searchByCity} onChange={handleFilter}/>
        </form>

);
}

export default Filters;