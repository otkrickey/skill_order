import { Reducer } from 'react';
import { ActionType, GlobalState } from './types';

/** GlobalReducer */
type GlobalReducerType = Reducer<GlobalState, ActionType>;
export const GlobalReducer: GlobalReducerType = (state, action) => {
    switch (action.type) {
        case 'SET':
            return { ...state, skill: Object.assign({}, state.skill, { [action.payload.key]: action.payload.value }) };
        case 'ADD':
            return { ...state, skill: Object.assign({}, state.skill, { [Number(Object.keys(state.skill).reduce((a, b) => a > b ? a : b)) + 1]: action.payload.value }) };
        case 'REMOVE':
            const skill = state.skill;
            delete skill[action.payload.key]
            return { ...state, skill };
        case 'RESTART':
            return { ...state, skill: action.payload }
        default:
            throw new Error(`No Operation Type ${action} found`);
    }
};
