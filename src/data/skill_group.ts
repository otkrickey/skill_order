import { SkillGroups } from ".";

const skill_groups: SkillGroups = {
    "All": {
        id: '__Skill_Group_All',
        color: { selected: "text-black bg-gradient-to-br from-white to-gray-300", default: "text-gray-200 hover:text-white" },
        type: "__Skill_Group",
        name: '全',
        skill_type: '__Skill_All',
    },
    "Gold": {
        id: '__Skill_Group_Gold',
        color: { selected: "text-white bg-gradient-to-br from-yellow-400 to-rose-700", default: "text-yellow-400 hover:text-yellow-200" },
        type: "__Skill_Group",
        name: '金',
        skill_type: '__Skill_Gold',
    },
    "Orange": {
        id: '__Skill_Group_Orange',
        color: { selected: "text-white bg-gradient-to-br from-yellow-400 to-orange-700", default: "text-orange-400 hover:text-orange-200" },
        type: "__Skill_Group",
        name: '橙',
        skill_type: '__Skill_Orange',
    },
    "Blue": {
        id: '__Skill_Group_Blue',
        color: { selected: "text-white bg-gradient-to-br from-cyan-400 to-blue-700", default: "text-blue-400 hover:text-blue-200" },
        type: "__Skill_Group",
        name: '青',
        skill_type: '__Skill_Blue',
    },
    "Green": {
        id: '__Skill_Group_Green',
        color: { selected: "text-white bg-gradient-to-br from-lime-400 to-green-700", default: "text-green-400 hover:text-green-200" },
        type: "__Skill_Group",
        name: '緑',
        skill_type: '__Skill_Green',
    },
    "Red": {
        id: '__Skill_Group_Red',
        color: { selected: "text-white bg-gradient-to-br from-pink-400 to-red-700", default: "text-red-400 hover:text-red-200" },
        type: "__Skill_Group",
        name: '赤',
        skill_type: '__Skill_Red',
    },
}
export default skill_groups;
