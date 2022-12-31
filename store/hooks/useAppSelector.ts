import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootAppState } from '../index';

export const useAppSelector: TypedUseSelectorHook<RootAppState> = useSelector;
