const board = [
                '', '', '',
                '', '','',
                '', '',''
];


const InitialState = {
    board: board,
    winner: false,
    players : ['X', 'O'],
    turn : 0
}

const reducers = (state={}, action) => {
    switch(action.type) {
        case 'MARK':
          return state;
        default:
            return state;
    }
}
export default reducers;
