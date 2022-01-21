import { Skill, Skill_ID, Skill_Kind } from ".";
import { Blue, Gold, Green } from "./skills";

export class SkillClass<K extends Skill_Kind = Skill_Kind> {
    static Blue: Skill<'Blue'>[] = Blue;
    // static Gold: Skill<'Gold'>[] = Gold;
    // static Green: Skill<'Green'>[] = Green;
    // static Orange: Skill<'Orange'>[] = Orange;
    // static Red: Skill<'Red'>[] = Red;
    // static All: Skill<Skill_Kind>[] = ([] as Skill[]).concat(Blue, Gold, Green, Orange, Red);
    // public skills: Skill<K | Skill_Kind>[] = [];
    // constructor(skills?: Skill<K>[]) { this.skills = skills ? skills : SkillClass.All; }
    // public Higher_is(id: Skill_ID) { return this.skills.find(skill => skill.higher === id); }
    // public Source_is(id: Skill_ID) { return this.skills.find(skill => skill.source === id); }
}

export class SkillGroup<K extends Skill_Kind>{
    public skills: Skill<K>[] = [];
    constructor(skills: Skill<K>[]) { this.skills = skills; }
    public Higher_is(id: Skill_ID) { return this.skills.find(skill => skill.higher === id); }
    public Source_is(id: Skill_ID) { return this.skills.find(skill => skill.source === id); }
}