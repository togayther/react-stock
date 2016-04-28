
export default function logger({ getState }) {
  return (next) => (action) => {
  	if (process.env.NODE_ENV !== 'production') {
	  console.log('dispatching', action);
	}
    const result = next(action);
    if (process.env.NODE_ENV !== 'production') {
	  console.log('next state', getState());
	}
    return result;
  };
}
