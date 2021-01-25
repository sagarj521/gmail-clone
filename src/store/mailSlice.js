import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    isSendMsgOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    }, 
    openSendMessage: state => {
      state.isSendMsgOpen = true;
    },
    closeSendMessage: state => {
      state.isSendMsgOpen = false;
    }
  },
});

export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIsSendMsgOpen = state => state.mail.isSendMsgOpen;
export const selectOpenMail = state => state.mail.selectedMail;

export default mailSlice.reducer;
