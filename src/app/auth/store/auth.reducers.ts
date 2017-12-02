
export interface State {
    token: string;
    authenticated: boolean;
}

const initialState: State = {
    token: null,
    authenticated: false
};

export function AuthReducers(state = initialState, action) {
    return state;
}
