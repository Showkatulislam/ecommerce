import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from "../../firebase/firebase";
export const auth=getAuth(app)
const initialState={
    user:{email:"",roll:""},
   // user:{email:"showkatul@gmail.com",roll:""},
    loading:false,
    error:false,
    errorMessage:''
}
export const getUser=createAsyncThunk(
    'auth/getUser',async(data)=>{
        const res=await fetch(`${process.env.REACT_APP_URL}/user?email=${data}`)
        const result= await res.json()
        return result;
    }
)
export const createUser=createAsyncThunk(
    'auth/createUser',async({email,password})=>{
        const res=await createUserWithEmailAndPassword(auth,email,password)
        return res;
    }
)
export const loginUser=createAsyncThunk(
    'auth/loginUser',async({email,password})=>{
        const res=await signInWithEmailAndPassword(auth,email,password)
        return res;
    }
)
export const logOut=createAsyncThunk(
    'auth/logout',async()=>{
     const res =await signOut(auth)
     return res
    }
)
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        addUser:(state,{payload})=>{
            state.user.email=payload.email
        },
        addAdmin:(state,{payload})=>{
            state.user.roll=payload
        },
    },extraReducers:(build)=>{
        build.addCase(createUser.pending,(state,action)=>{
            state.loading=true;
            state.errorMessage=""
        }).addCase(createUser.fulfilled,(state,{payload})=>{
            state.loading=false;
            console.log((payload));
            state.user.email=payload.user.email;
            state.errorMessage=""
        }).addCase(createUser.rejected,(state,action)=>{
            state.error=false
            state.errorMessage=action.error.message
        })
        .addCase(loginUser.pending,(state,action)=>{
            state.loading=true;
            state.errorMessage=""
        })
        .addCase(loginUser.fulfilled,(state,{payload})=>{
            state.errorMessage=''
            state.user.email=payload.user.email;
            state.loading=false
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.error=true
            state.errorMessage=action.error.message
        })
        .addCase(logOut.pending,(state,action)=>{
            state.errorMessage=""
        })
        .addCase(logOut.fulfilled,(state,action)=>{
            state.user.email=""
            state.user.roll=""
            state.loading=false
        })
        .addCase(logOut.rejected,(state,action)=>{
            state.errorMessage=action.error.message
        })
        .addCase(getUser.pending,(state,action)=>{
            state.errorMessage=""
        })
        .addCase(getUser.fulfilled,(state,{payload})=>{
            if(payload.status==='success'){
                console.log('get user ',payload);
                state.user.roll=payload?.data?.roll
            }
            state.loading=false
        })
        .addCase(getUser.rejected,(state,action)=>{
            state.errorMessage=action.error.message
        })
    }
})

export const {addUser}=authSlice.actions

export default authSlice.reducer