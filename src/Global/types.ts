import { SkillActionType, SkillPayloadType } from './Skilll';

export type { SkillPayloadType as PayloadSkill };

export interface Action<Type, Payload> { type: Type; payload: Payload; }

export interface GlobalState {
    skill: SkillPayloadType;
}

export type ActionType =
    | SkillActionType;