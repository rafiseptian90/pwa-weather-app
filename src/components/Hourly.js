import React from "react";

export default function Hourly({weather, diffToHuman, display}){
    let footerStyles = 'grid gap-3 grid-cols-3 pt-2';

    if(display === "7"){
        footerStyles = 'flex flex-auto flex-nowrap flex-row items-center'
    }

    return(
        <div className={`card rounded-3xl glasses-shadow-black w-full text-white p-7 ${display === "7" ? 'bg-linear-accent glasses-blur' : 'bg-primary'}`}>
            <div className={`justify-between ${footerStyles}`}>
                { weather.hourly.slice(0, display).map((weather, i) => {
                    return(
                        <div className={`wrapper relative text-center ${display === "3" ? 'h-full bg-accent rounded-2xl py-2 px-4 shadow-2xl glasses-blur' : ''}`} key={i}>
                            <span className="block text-lg">{ diffToHuman(weather.dt).time }</span>
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" className={`weather-icon mx-auto -mt-3`}/>
                            <span className="block text-2xl font-semibold -mt-2 ml-1 header-font">
                            { Math.floor(weather.feels_like) } &deg;
                        </span>
                        </div>
                    )
                }) }
            </div>

            {
                display === "7"
                    ?
                    <span className="block font-medium text-gray-300 text-center mt-4">
                        Background by <a href="https://www.freepik.com">Freepik</a>
                    </span>
                    : ''
            }
        </div>
    )
}