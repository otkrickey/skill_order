import React from 'react';
import './App.css';
import { SkillTabs } from './Skill';

function App() {
    return (
        <>
            <div className="fixed inset-0 min-h-screen min-w-full bg-gradient-to-br from-[#f53844] to-[#42378f]"></div>
            <div className='relative bg-transparent'>
                <header className="lg:flex lg:items-center lg:justify-between p-1">
                    <div className="flex-1 min-w-0 p-4 bg-[#ffffffee] rounded-lg">
                        <h1 className="font text-3xl font-bold leading-7 text-gray-900 sm:truncate">Count</h1>
                        {/* <h1 className="font text-3xl font-bold leading-7 text-gray-900 sm:truncate">スキルオーダー</h1> */}
                    </div>
                </header>
                <main className='p-1'>
                    <SkillTabs />
                </main>
            </div>
        </>
    );
}

export default App;
