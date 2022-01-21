import { Tab } from '@headlessui/react';
import React, { useEffect } from 'react';
import { skill_groups } from '../data';
import { useGlobalDispatch, useGlobalState } from '../Global';
import { classNames } from '../utils';
import SkillName from './SkillName';

export default function SkillTabGroup() {
    const state = useGlobalState();
    const dispatch = useGlobalDispatch();
    // onload: load saved data | create new data
    useEffect(() => { const data = localStorage.getItem('selected_skill'); if (!data || data === 'undefined') { localStorage.setItem('selected_skill', JSON.stringify(state.skill)); } else { dispatch({ type: 'RESTART', payload: JSON.parse(data) }); } }, [])
    // overwrite save data when base data changes
    useEffect(() => { localStorage.setItem('selected_skill', JSON.stringify(state.skill)); }, [state])
    return (
        <div className='bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-md drop-shadow-xl rounded-lg p-1 sm:p-3 max-w-5xl'>
            <div className='w-full max-w-5xl flex flex-col gap-1 sm:gap-3'>
                <Tab.Group>
                    <Tab.List className='flex p-1 sm:p-2 gap-1 sm:gap-3 bg-gradient-to-br from-black/75 to-black/90 backdrop-blur-md drop-shadow-lg rounded-xl'>
                        {Object.values(skill_groups).map((skill_group) => (
                            <Tab
                                key={skill_group.id}
                                className={({ selected }) => {
                                    const color = skill_group.color;
                                    return classNames(
                                        'w-full py-2 text-sm leading-5 font-medium rounded-lg',
                                        selected ? 'shadow font-bold' : 'hover:bg-white/[0.12]',
                                        selected ? color.selected : color.default
                                    )
                                }}
                            >
                                {skill_group.name}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels>
                        {
                            Object.values(skill_groups).map((skill_group, i) => (
                                <Tab.Panel
                                    key={i}
                                    className='p-1'
                                >
                                    <ul className='flex flex-col gap-1 sm:gap-3'>
                                        {Object.entries(state.skill).filter(([key, skill]) => skill.type === '__Skill_All' || skill_group.skill_type === '__Skill_All' || skill_group.skill_type === skill.type).map(([key, skill]) => (
                                            <li key={key} className='p-1 sm:p-3 rounded-xl bg-white/50'>
                                                <SkillName _key={Number(key)} type={skill_group.skill_type} />
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))
                        }
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}