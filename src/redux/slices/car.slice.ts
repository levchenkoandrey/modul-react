import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {ICar, IError} from "../../interfaces";
import {carService} from "../../services";
import {AxiosError} from "axios";


export interface IState {
    cars: ICar[],
    errors: IError,
    trigger: Boolean,
    carForUpdate: ICar
}

const initialState: IState = {
    cars: [],
    errors: null,
    carForUpdate: null,
    trigger: false
};
const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const createCar = createAsyncThunk<void, { car: ICar }>(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car);
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const updateCar = createAsyncThunk<void, { car: ICar, id: number }>(
    'carSlice/updateCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            await carService.updateById(id, car);
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteCar = createAsyncThunk <void, { id: number }>(
    'carSlice/deleteCar',
        async ({id},{rejectWithValue}) => {
            try {
                await carService.deleteById(id);
            }catch (e) {
                const err = e as AxiosError
                return rejectWithValue(err.response.data)
            }
        }
)


const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(updateCar.fulfilled, state => {
                state.carForUpdate = null
            })
            .addMatcher(isFulfilled(),state => {
                state.errors = null
            })
            .addMatcher(isFulfilled(createCar, updateCar,deleteCar), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })
});

const {reducer: carReducer, actions} = slice;

const carAction = {
    ...actions,
    getAll,
    createCar,
    updateCar,
    deleteCar
}

export {
    carReducer,
    carAction
}