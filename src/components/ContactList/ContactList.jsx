import css from "./ContactList.module.css"
export default function ContactList({items, filterVal, deleteContact}){
    return(
        <ul className="contactList">
          {items.filter(contact => { 
            return filterVal.toLowerCase() === ''
              ? contact
              : contact.name.toLowerCase().includes(filterVal)
          }).map(({id, name, number}) => {
            return (
              <li className={css.contact} key={id}>
                <p>{name}: {number}</p>
                <button type="button" onClick={() => deleteContact(id)}>Delete</button>
              </li>
            )
          })}
        </ul>
    )
}