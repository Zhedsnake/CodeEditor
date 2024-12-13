import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {RootState} from "../../store/reducers";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
