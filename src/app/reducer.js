// //? initial state
// let lastId = 0
// // const formData = {
// //     firstName: '',
// //     lastName: '',
// //     number: '',
// //     email: '',
// //     password: ''
// // }

// const reducer = (state = {}, action) => {
//     switch (action.type) {
//         case "name":
//             return {
//                 ...state,// spread old state here
//                 // ! then update new content here i.e. name
//                 {
//                     id: ++lastId,
//                     description: action.payload.description
//                 }
//             }
//             break;
    
//         default:
//             return state
//             break;
//     }
// }