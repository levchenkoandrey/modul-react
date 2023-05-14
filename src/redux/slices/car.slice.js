import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null,
    loading:false,
    error:null
};
const getAllCar = createAsyncThunk(
    'carSlice/getAllCar',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            await new Promise(resolve => setTimeout(resolve, 2000))
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const createNewCar = createAsyncThunk(
    'carSlice/createNewCar',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateNewCar = createAsyncThunk(
    'carSlice/updateNewCar',
    async ({id,car}, thunkAPI) => {
        try {
            await carService.updateById(id,car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.delete(id)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
    },
    // extraReducers:{
    //     [getAllCar.fulfilled]:(state,action)=>{
    //         state.cars = action.payload
    //     },
    //     [createNewCar.fulfilled]:state=>{
    //         state.trigger = !state.trigger
    //     }
    // }
    // extraReducers: builder =>
    //     builder
    //         .addCase(getAllCar.fulfilled, (state, action) => {
    //             state.cars = action.payload
    //             state.loading = false
    //         })
    //         .addCase(getAllCar.pending, state => {
    //             state.loading = true
    //         })
    //         .addCase(createNewCar.fulfilled,state=>{
    //             state.trigger = !state.trigger
    //             state.loading = false
    //         })
    //         .addCase(createNewCar.pending, state => {
    //             state.loading = true
    //         })
    //         .addCase(createNewCar.rejected, (state, action) => {
    //             state.error = action.payload
    //             state.loading = false
    //         })
    extraReducers: builder =>
        builder
            .addCase(getAllCar.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(updateNewCar.fulfilled, (state, action) => {
                state.carForUpdate = null
            })

            .addMatcher(isPending(),state => {
                state.loading =true
                state.error = null
            })
            .addMatcher(isFulfilled(),state => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isRejectedWithValue(),(state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addMatcher(isFulfilled(updateNewCar,createNewCar,deleteCar),state => {
                state.trigger = !state.trigger
            })
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getAllCar,
    createNewCar,
    updateNewCar,
    deleteCar
};

export {
    carReducer,
    carActions
}
