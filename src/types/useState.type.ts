import {SetStateAction, Dispatch} from "react";

export type IUseState<T> = Dispatch<SetStateAction<T>>