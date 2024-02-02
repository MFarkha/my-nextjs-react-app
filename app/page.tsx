'use client';

import { useReducer } from 'react';
import Chat from './chat';
import ContactList from './contactList';
import { initialState, messengerReducer } from './messengerReducer';
// import styles from "./page.module.css";
// e: ChangeEvent<HTMLInputElement>
// handleChange: EventHandler<ChangeEvent>

export type Contact = {
  id: number,
  email: string,
  name: string
}

export default function Home() {

  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact?.id}
        message={message}
        contact={contact!}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts: Array<Contact> = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];
