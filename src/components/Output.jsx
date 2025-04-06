import soundFile from '../assets/sfx/mc-menu-btn-sfx.mp3';
import randMusic from '../jukebox';
import { useState, useRef } from 'react';


function Output({ data }) {

    const [visible, setVisible] = useState(false);
    const [musicName, setMusicName] = useState(false);


    console.log(data);

    const cityName = data?.location?.name ? `${data?.location?.name},` : '';
    const countryName = data?.location?.country || '';
    const tempC = data?.current?.temp_c ? `${data?.current?.temp_c}°C` : 'Enter location';
    const feelsLikeC = data?.current?.feelslike_c ? `feels like ${data?.current?.feelslike_c}°C` : '';
    const humidity = data?.current?.humidity || '';
    const region = data?.location?.region || '';
    const lat = data?.location?.lat || '';
    const lon = data?.location?.lon || '';

    const playSound = () => {
        const audio = new Audio(soundFile);
        audio.play();
    };

    const jukeboxRef = useRef(new Audio(randMusic.location));



    return (
        <>
            <button className="info-btn" onClick={() => {
                playSound();
                setVisible(!visible);
            }}>i</button>

            <button className={`jukebox-btn ${musicName ? 'visible' : ''} ${musicName ? 'jukebox-btn-dark' : ''}`}

                onClick={() => {
                    const jukebox = jukeboxRef.current;
                    
                    if (jukebox.paused) {
                        jukebox.play()
                    } else {
                        jukebox.pause()
                    }
                    setMusicName(!musicName);
                    playSound();

                }}

            >Jukebox</button>

            
                <p className={`jukebox-music-name ${musicName ? 'visible' : ''}`}>{randMusic.name}</p>
            

            <div className={`info ${visible ? 'visible' : ''}`}>
                <p>Humidity: {humidity}</p>
                <p>Region: {region}</p>
                <p>Lat: {lat} Lon: {lon}</p>
            </div>

            <div class="weather-info">
                <p class="city-name">{cityName} {countryName}</p>
                <p class="temperature">{tempC}</p>
                <p class="city-name">{feelsLikeC}</p>
            </div>

            <video className="bg-video" autoPlay muted loop playsinline>
                <source src={'https://files.catbox.moe/7ufeci.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )


}

export default Output;