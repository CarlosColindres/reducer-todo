export const reducer = (state, actions) => {
    switch(actions.type) {
        case('ADD_TODO'): 
            return [...state, {
                todo: actions.todo,
                completed: false,
                id: actions.id
            }]
        case('TOGGLE_COMPLETE'):
            return[...state.map(elem => elem.todo === actions.payload ? {...elem, completed:!elem.completed} : elem)]
        case('CLEAR_COMPLETED'): 
            return[...state.filter(todo => !todo.completed)]
        default: 
            return state
    }
}