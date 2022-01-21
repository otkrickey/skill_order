import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { Skill, Skill_Type } from '../data'
import { default_skill_data, delete_skill_data, skills } from '../data/skill'
import { useGlobalDispatch, useGlobalState } from '../Global'
import { classNames } from '../utils'

export default function SkillName({ _key: key, type }: { _key: number, type: Skill_Type }) {
    const state = useGlobalState();
    const dispatch = useGlobalDispatch();
    function onChange(value: Skill) {
        switch (value.id) {
            case default_skill_data.id:
                break;
            case delete_skill_data.id:
                dispatch({ type: 'REMOVE', payload: { key } });
                break
            default:
                console.log(value)
                dispatch({ type: 'SET', payload: { key, value } });
                if (state.skill[key].type === default_skill_data.type) dispatch({ type: 'ADD', payload: { value: default_skill_data } });
                break;
        }
    }
    const dropdown_options = () => state.skill[key].state === 0 ? skills : [delete_skill_data, ...skills];
    const skill_filter = (skill: Skill) => type === '__Skill_All' || type === skill.type || skill.type === '__Skill_All';
    return (
        <div className='w-56'>
            <Listbox value={state.skill[key]} onChange={onChange}>
                <div className='relative w-56'>
                    <Listbox.Button className='relative w-full py-1 pl-2 sm:py-2 sm:pl-3 pr-10 text-left bg-white rounded-lg shadow-sm cursor-default sm:text-sm'>
                        <span className='block truncate'>{state.skill[key].name}</span>
                        <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                            <SelectorIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options className='--scrollbar z-[100] absolute w-full mt-1 overflow-auto text-base bg-gray-100/90 backdrop-blur-xl rounded-md shadow-lg max-h-[70vh] sm:text-sm'>
                            {
                                dropdown_options()
                                    .filter(skill_filter)
                                    .map((skill, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) => classNames('cursor-default select-none relative py-2 pl-10 pr-4', active ? 'text-amber-900 bg-amber-100' : 'text-gray-900')}
                                            value={skill}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={classNames('block truncate', selected ? 'font-medium' : 'font-normal')} >{skill.name}</span>
                                                    {selected ? (<span className={classNames('absolute inset-y-0 left-0 flex items-center pl-3', active ? 'text-amber-600' : 'text-amber-600')} ><CheckIcon className='w-5 h-5' aria-hidden='true' /></span>) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))
                            }
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}