import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'
const initialState = {
    name : "",
    email : "",
    _id : "",
    verified : false,
    profilePic : "",
    status : "Offline",
    role : "user"
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        handleUserLogin : (state , action) => {
            state.name = action?.payload?.name
            state.email = action?.payload?.email
            state._id = action?.payload?._id
            state.verified = action?.payload?.verified
            state.status = action?.payload?.status
            state.role = action?.payload?.role
        },
        handleUserLogOut : (state , action) => {
            state.name = ""
            state.email = ""
            state._id = ""
            state.verified = ""
            state.status = ""
            state.role = ""
        }
    }
})

export const {handleUserLogOut , handleUserLogin} = userSlice.actions

export default userSlice.reducer