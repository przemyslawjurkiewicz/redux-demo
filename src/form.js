import {
    EDIT_COMMENT
} from './actions';

const initialState = {
   text: '',
    id:''
};

function form(state = initialState, action) {
    switch (action.type) {
        case EDIT_COMMENT:
            return {
                id: action.id,
                text: action.text
            }
        default:
            return initialState;
    }
}

export default form;