import { createStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import counter from '../modules/counter';

// 일반 리듀서
// const rootReducer = combineReducers({
//   counter: counter,
// });

// const store = createStore(rootReducer);

// 틀킷
const store = configureStore({
  reducer: {
    counter: counter,
  },
});

export default store;
