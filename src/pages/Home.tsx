import React from 'react';
import mission from '../img/mission.svg'
import challenge from '../img/challenge.svg'
import { MdLightbulbOutline } from 'react-icons/all'
import AnimatedWave from '../components/AnimatedWave'

export default function Home() {
    return (
        <div className="text-black">
            <section className="bg-blue-900 text-white" id="header">
                <div id="header-wave" style={{ filter: 'blur(6px)' }}>
                    <AnimatedWave/>
                </div>
                <div id="header-text">
                    <h5 className="font-w300">Welcome to the First Annual AI Education Challenge hosted by</h5>
                    <h1 className="text-blue-300 font-w600">Young Brains AI</h1>
                </div>
            </section>
            <section id="mission">
                <div className="container d-flex align-items-center">
                    <div style={{ marginRight: '20%' }}>
                        <h2 className="font-w600 mb-4">Our Mission</h2>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="btn-blue-500">Learn More</button>
                    </div>
                    <img src={mission} alt="" height="100%"/>
                </div>
            </section>
            <section className="bg-blue-800 text-white" id="statistics">
                <div className="container d-flex justify-content-around">
                    <div className="text-center">
                        <h1><MdLightbulbOutline className="pb-2" size={60}/>99+</h1>
                        <h5 className="text-blue-100">Statistic Here</h5>
                    </div>
                    <div className="text-center">
                        <h1><MdLightbulbOutline className="pb-2" size={60}/>99+</h1>
                        <h5 className="text-blue-100">Statistic Here</h5>
                    </div>
                    <div className="text-center">
                        <h1><MdLightbulbOutline className="pb-2" size={60}/>99+</h1>
                        <h5 className="text-blue-100">Statistic Here</h5>
                    </div>
                </div>
            </section>
            <section id="challenge">
                <div className="container d-flex align-items-center">
                    <img src={challenge} alt="" height="100%" style={{ marginRight: '20%' }}/>
                    <div className="text-right">
                        <h2 className="font-w600 mb-4">National AI Education Challenge</h2>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="btn-blue-500">Check it Out!</button>
                    </div>
                </div>
            </section>
            <section id="sponsors">
                <div className="container">
                    <h1 className="font-w600 text-center">Our Sponsors</h1>
                </div>
            </section>
        </div>
    )
}
