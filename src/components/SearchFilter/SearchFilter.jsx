import css from "./SearchFilter.module.css"
export default function SearchFilter ({searchChange}){
    return(
        <div className={css.filterContainer}>
            <label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" id='filter' onChange={searchChange}/>
        </div>
    )
}