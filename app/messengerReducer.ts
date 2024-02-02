export const initialState: AppState = {
    selectedId: 0,
    messages: {
        0: 'Hello',
        1: '',
        2: ''
    }
};
export type AppState = {
    selectedId: number,
    messages: {
        [index: number]: string;
    }
}
export type AppAction = {
    type: string,
    contactId: number,
    message: string
}

export function messengerReducer(state: AppState, action: AppAction) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId
            };
        }
        case 'edited_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message
                }
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}  