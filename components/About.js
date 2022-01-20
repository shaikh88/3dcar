import Image from 'next/image'

import blob from '../assets/blob.svg'


const About = () => {
    let noOfSvgs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
    return (
        <section className="about_root">
            <div className="first_section">
                <h1>Hi my name is Manik</h1>
                <h2>I am good with computers</h2>
            </div>
            <div className="second_section">
            {noOfSvgs.map((ele) => (
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" key={ele} style={{zIndex: `-${ele}`}}>
                    <path fill="#0F62FE" d="M45.2,-49.4C56.3,-34.1,61.4,-17,58.9,-2.5C56.5,12.1,46.4,24.2,35.3,37.1C24.2,50.1,12.1,63.9,-1.3,65.2C-14.7,66.5,-29.4,55.3,-36.7,42.4C-44,29.4,-43.8,14.7,-43.5,0.3C-43.2,-14.1,-42.8,-28.2,-35.5,-43.5C-28.2,-58.8,-14.1,-75.3,1.5,-76.8C17,-78.2,34.1,-64.7,45.2,-49.4Z" transform="translate(100 100)" />
                </svg>
            ))}
            </div>
        </section>
    )
}

export default About;