import soundFile from '../assets/sfx/mc-menu-btn-sfx.mp3';
import { useState, useRef, useEffect } from 'react';

function Output({ data }) {
    const [showInfo, setShowInfo] = useState(false);
    const [showTrackName, setShowTrackName] = useState(false);
    const [track, setTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isTempC, setIsTempC] = useState(true);


    const jukeboxRef = useRef(null);

    const playSound = () => {
        new Audio(soundFile).play();
    };

    const loadRandomTrack = async () => {
        try {
            const response = await fetch('/jukebox.json');
            const tracks = await response.json();
            const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
            setTrack(randomTrack);
            jukeboxRef.current = new Audio(randomTrack.location);
        } catch (err) {
            console.error("Failed to load jukebox track:", err);
        }
    };

    useEffect(() => {
        loadRandomTrack();
    }, []);

    const jukebox = jukeboxRef.current;

    // Weather data
    const cityName = data?.location?.name ? `${data.location.name},` : '';
    const countryName = data?.location?.country || '';
    // const tempC = data?.current?.temp_c ? `${data.current.temp_c}°C` : 'Enter location';
    // const tempF = data?.current?.temp_f ? `${data.current.temp_f}°F` : 'Enter location';
    // const feelsLikeC = data?.current?.feelslike_c ? `feels like ${data.current.feelslike_c}°C` : '';
    const humidity = data?.current?.humidity || '';
    const region = data?.location?.region || '';
    const lat = data?.location?.lat || '';
    const lon = data?.location?.lon || '';


    const temperature = isTempC
        ? (data?.current?.temp_c !== undefined ? `${data.current.temp_c}°C` : 'Enter location')
        : (data?.current?.temp_f !== undefined ? `${data.current.temp_f}°F` : 'Enter location');

    const feelsLike = isTempC
        ? (data?.current?.feelslike_c !== undefined ? `feels like ${data.current.feelslike_c}°C` : '')
        : (data?.current?.feelslike_f !== undefined ? `feels like ${data.current.feelslike_f}°F` : '');

    return (
        <>
            <button className="info-btn" onClick={() => {
                playSound();
                setShowInfo(!showInfo);
            }}>i</button>

            <button className="jukebox-reset" onClick={async () => {
                playSound();
                if (isPlaying) {
                    if (jukebox) {
                        jukebox.pause();
                        jukebox.currentTime = 0;
                    }
                    await loadRandomTrack();
                    if (jukeboxRef.current) {
                        jukeboxRef.current.play();
                        setIsPlaying(true);
                    }
                }

            }}>⇆</button>

            <button
                className={`jukebox-btn ${showTrackName ? 'visible jukebox-btn-dark' : ''}`}
                onClick={() => {
                    playSound();
                    if (!jukebox) return;

                    if (jukebox.paused) {
                        jukebox.play();
                        setIsPlaying(true);
                    } else {
                        jukebox.pause();
                        setIsPlaying(false);
                    }

                    setShowTrackName(!showTrackName);
                }}
            >
                Jukebox
            </button>

            <p className={`jukebox-music-name ${showTrackName ? 'visible' : ''}`}>
                {track?.name || ''}
            </p>

            <div className={`info ${showInfo ? 'visible' : ''}`}>
                <p>Humidity: {humidity}</p>
                <p>Region: {region}</p>
                <p>Lat: {lat} Lon: {lon}</p>
                
                <p><i>Click on the temperature to change the unit.</i></p>
            </div>

            <div className="weather-info">
                <p className="city-name">{cityName} {countryName}</p>
                <p className="temperature" onClick={() => {
                    setIsTempC(!isTempC);
                }}>
                    {temperature}
                </p>

                <p className="city-name feelslike" onClick={()=>{
                    setIsTempC(!isTempC);
                }}>{feelsLike}</p>
            </div>

            <a href="https://github.com/SujalAgre/WeatherCraft" className='link' target="_blank" onClick={()=>{
                playSound();
            }}>GitHub</a>

            <video className="bg-video" autoPlay muted loop playsInline>
                <source src="https://ce974aiykb.ufs.sh/f/Qrlfab801UXfQc9jGf801UXfLGJgkc8vVyPp7olqDzdEF3ZB" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    );
}

export default Output;
