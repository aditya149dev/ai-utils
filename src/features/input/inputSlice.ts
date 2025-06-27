import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

interface InputState {
  chatInputText: string | "";
  summarySelectedFile: File | null;
}

const initialState: InputState = {
  chatInputText: "",
  summarySelectedFile: null,
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    changeChatInputText: (state, action: PayloadAction<string | "">) => {
      state.chatInputText = action.payload;
    },
    changeSummarySelectedFile: (state, action: PayloadAction<File | null>) => {
      state.summarySelectedFile = action.payload;
    },
  },
});

export const { changeChatInputText, changeSummarySelectedFile } =
  inputSlice.actions;

export const selectChatInputText = (state: RootState) =>
  state.input.chatInputText;
export const selectSummarySelectedFile = (state: RootState) =>
  state.input.summarySelectedFile;

export default inputSlice.reducer;
