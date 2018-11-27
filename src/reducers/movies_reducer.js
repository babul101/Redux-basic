
// const data = {
//     type:'MOVIES_List',
//     payload:[{
//         id:'1',
//         list:'PULP_FICTION'
//     }]
// }



export default function(state=null,action) {
    switch(action.type) {
        case 'MOVIES_LIST':
            return action.payload;
        default:
            return state;    
    }
}