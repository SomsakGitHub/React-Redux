const commentReducer = (state = [], action) => {
    // create system action

    switch(action.type) {
        case 'ADD_COMMENT':
        return state.concat([action.data]);
        case 'EDIT_COMMENT':
        return state.map((comment) => comment.id === action.id ? {
            ...comment,
            editing: !comment.editing
            } : comment)
        case 'DELETE_COMMENT':
        return state.filter((comment) => comment.id !== action.id);
        case 'UPDATE_COMMENT':
        return state.map((comment) => {
            if (comment.id === action.id) {
                return {
                    ...comment,
                    name: action.data.newName,
                    message: action.data.newMessage,
                    editing: !comment.editing
                }
            } else return comment;
        });
        default:
        return state;
    }
}

export default commentReducer;