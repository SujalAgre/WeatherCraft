import soundFile from '../assets/sfx/mc-menu-btn-sfx.mp3';
import { useState } from 'react';

function SearchBox({ setData }) {
    const WEATHER_API = import.meta.env.VITE_WEATHER_API
    const [cityName, setCityName] = useState('')

    const fetchData = async () => {
        const response = await fetch(`${WEATHER_API}${cityName}`);
        response.json()
            .then(json => {
                setData(json);
            })
    };

    const playSound = () => {
        const audio = new Audio(soundFile);
        audio.play();
    };


    return (
        <>
            <div className="input-section">
                <input type="text" className="input-box"

                    onChange={(e) => {
                        setCityName(e.target.value);
                    }}

                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            playSound();
                            fetchData();
                        }
                    }}
                    placeholder="Enter location" />

                <button className="input-button"

                    onClick={() => {
                        playSound();
                        fetchData();
                    }}

                >Enter</button>
            </div>
        </>
    )
}

export default SearchBox;