import { Contact  } from "./page";
import { Dispatch } from 'react';
import { AppAction } from './messengerReducer';

type contactListProps = {
    contacts: Array<Contact>,
    selectedId: number,
    dispatch: Dispatch<AppAction>
}

export default function ContactList({ contacts, selectedId, dispatch }: contactListProps) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={() => {
                    dispatch({
                        type: "changed_selection",
                        contactId: contact.id,
                        message: ''
                    })
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  