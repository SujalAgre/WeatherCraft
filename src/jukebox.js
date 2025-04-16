const jukebox = [
    {
        name: 'Cat - Minecraft Music Disc - C418',
        location: '../assets/music/minecraft-music/Cat.mp3'
    },
    {
        name: 'Chirp - Minecraft Music Disc - C418',
        location: '../assets/music/minecraft-music/Chirp.mp3'
    },
    {
        name: 'Far - Minecraft Music Disc - C418',
        location: '../assets/music/minecraft-music/Far.mp3'
    },
    {
        name: 'Mall - Minecraft Music Disc - C418',
        location: '../assets/music/minecraft-music/Mall.mp3'
    },
    {
        name: 'Mellohi - Minecraft Music Disc - C418',
        location: '../assets/music/minecraft-music/Mellohi.mp3'
    },
    {
        name: 'Otherside - Minecraft Music Disc - Lena Raine',
        location: '../assets/music/minecraft-music/Otherside.mp3'
    },
    {
        name: 'Pigstep -  Minecraft Music Disc - Lena Raine',
        location: '../assets/music/minecraft-music/Pigstep.mp3'
    },
    {
        name: 'Relic - Minecraft Music Disc - Aaron Cherof',
        location: '../assets/music/minecraft-music/Relic.mp3'
    },
    {
        name: 'Stal- Minecraft Music Disc - C418',
        location: '../assets/music/minecraft-music/Stal.mp3'
    },
    {
        name: 'Strad - Minecraft Music Disc - C418',
        location: '../assets/music/minecraft-music/Strad.mp3'
    },
    {
        name: 'Wait - Minecraft Music Disc - C418',
        location: '../assets/music/minecraft-music/Wait.mp3'
    },
    {
        name: 'Ward - Minecraft Music Disc - C418',
        location: '../assets/music/minecraft-music/Ward.mp3'
    },
]

let randMusic;
export function selectMusic(){
    const rand = Math.floor(Math.random() * jukebox.length);
    randMusic = jukebox[rand];
}

console.log(randMusic)

export default randMusic;
