import { Dispatch } from 'react';
import { AppAction } from './messengerReducer';
import { Contact  } from "./page";

type chatProps = {
    contact: Contact,
    message: string,
    dispatch: Dispatch<AppAction>
}

export default function Chat({contact, message, dispatch}: chatProps) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact?.name}
        onChange={(e) => {
            dispatch({
                type: "edited_message",
                message: e.target.value,
                contactId: contact?.id
            })
        }}
      />
      <br />
      <button
        onClick={ () => {
            alert(message + ' from ' + contact.email);
            dispatch({
                type: "edited_message",
                message: '',
                contactId: contact?.id
            })

        }}
      >Send to {contact?.email}</button>
    </section>
  );
}