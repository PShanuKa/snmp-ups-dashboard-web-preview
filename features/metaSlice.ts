import { createSlice, configureStore } from '@reduxjs/toolkit'

const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    sidebarOpen: false
  },
  reducers: {
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload
    }
  }
})

export const { setSidebarOpen } = metaSlice.actions

export default metaSlice.reducer

