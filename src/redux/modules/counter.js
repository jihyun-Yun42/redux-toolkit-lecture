// 일반 리덕스 예시 코드

import { createSlice } from '@reduxjs/toolkit';

// Action Value
const ADD_NUMBER = 'ADD_NUMBER';
const MINUS_NUMBER = 'MINUS_NUMBER';

// Action Creator
// export const addNumber = (payload) => {
//   return {
//     type: ADD_NUMBER,
//     payload,
//   };
// };

// export const minusNumber = (payload) => {
//   return {
//     type: MINUS_NUMBER,
//     payload,
//   };
// };

// Initial State
const initialState = {
  number: 0,
};

// Reducer
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NUMBER:
//       return {
//         number: state.number + action.payload,
//       };
//     case MINUS_NUMBER:
//       return {
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

//createSlice -> Action Creator와 Reducer를 한번에 생성할 수 있게끔 만들어준 API
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// export default reducer
// export default counter;

// counterSlice.reducer로 모든 리듀서를 내보냄
export default counterSlice.reducer;

// action을 밖으로 내보내기
export const { addNumber, minusNumber } = counterSlice.actions;
