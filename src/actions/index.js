//action -> tells us what to do

//here we are sending calls to our reducer to perform operations

//incNumber will take one argument and passing it to reducer to perform  more operation
export const incNumber = (num) => {
  return { type: 'INCREMENT', payload: num };
};

export const decNumber = () => {
  return { type: 'DECREMENT' };
};
