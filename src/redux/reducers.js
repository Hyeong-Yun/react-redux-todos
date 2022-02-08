import { ADD_TODO, COMPLETE_TODO, SHOW_COMPLETE, SHOW_ALL}  from './actions';
import { combineReducers } from 'redux';

const initialState = {todos: [], filter: "ALL"};



// combineReducers({
//     todos: todosReducer,
//     filter: filterReducer,
// });

export function todoApp (previousState = initialState, action){
    if(action.type === ADD_TODO){
        return {
            ...previousState,
            todos: [...previousState.todos, {text: action.text, done: false}]
        };
    }

    if(action.type === COMPLETE_TODO){
        return previousState.map((todo, index) => {
            if(index === action.index){
                return {...todo, done: true};
            }
        })
    }
    if(action.type === SHOW_COMPLETE){
        return {
            ...previousState,
            filter: "COMPLETE"
        }
    }
    if(action.type === SHOW_ALL){
        return {
            ...previousState,
            filter: "COMPLETE"
        }
    }
    return previousState;
}

