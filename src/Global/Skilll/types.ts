import { Action } from '../';
import { Skill } from '../../data';

export type SkillPayloadType = { [i: number]: Skill }
export type SkillActionType =
    | Action<'SET', { key: number, value: Skill }>
    | Action<'ADD', { value: Skill }>
    | Action<'RESET', null>
    | Action<'RESTART', { [i: number]: Skill }>
    | Action<'REMOVE', { key: number }>
