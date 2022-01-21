export type Skill_Kind = 'All' | 'Gold' | 'Orange' | 'Blue' | 'Green' | 'Red';
export type Skill_ID<K extends Skill_Kind = Skill_Kind> = `${Skill_Type<K>}_${number}`;
export type Skill_Type<K extends Skill_Kind = Skill_Kind> = `__Skill_${K}`;
export type Skill_Group_Type<K extends Skill_Kind = Skill_Kind> = `__Skill_Group_${K}`;
export type Skill<K extends Skill_Kind = Skill_Kind> = {
    state: number;
    type: Skill_Type<K>;
    type_id: number;
    id: Skill_ID<K>;
    higher: Skill_ID<K> | ''
    source: Skill_ID<K> | ''
    eval: number;
    name: string;
    cost: [number, number, number, number, number, number];
}
export type SkillGroup<K extends Skill_Kind = Skill_Kind> = {
    id: Skill_Group_Type<K>;
    color: { selected: string; default: string; };
    type: '__Skill_Group';
    skill_type: Skill_Type<K>;
    name: string;
}
export type SkillGroups = { [K in Skill_Kind]: SkillGroup<K> }