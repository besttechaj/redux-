// reducer -> What to do?

//this file is your reducer

//below we are passing the values from our action file , and after receiving the value reducer is performing the operations on them and returning the result

let initialState = 0;
export const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // export const incNumber = (num) => {
      //   return { type: 'INCREMENT', payload: num };
      // };
      //action is passing the value here and we are extracting them and performs the operation
      return state + action.payload; //action.payload -> inside payload we have num variable
    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
};

export default changeTheNumber;
