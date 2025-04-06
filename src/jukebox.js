const jukebox = [
    {
        name: 'Cat - Minecraft Music Disc - C418',
        location: 'src/assets/music/minecraft-music/Cat - Minecraft Music Disc - C418.mp3'
    },
    {
        name: 'Chirp - Minecraft Music Disc - C418',
        location: 'src/assets/music/minecraft-music/Chirp - Minecraft Music Disc - C418.mp3'
    },
    {
        name: 'Far - Minecraft Music Disc - C418',
        location: 'src/assets/music/minecraft-music/Far - Minecraft Music Disc - C418.mp3'
    },
    {
        name: 'Mall - Minecraft Music Disc - C418',
        location: 'src/assets/music/minecraft-music/Mall - Minecraft Music Disc - C418.mp3'
    },
    {
        name: 'Mellohi - Minecraft Music Disc - C418',
        location: 'src/assets/music/minecraft-music/Mellohi - Minecraft Music Disc - C418.mp3'
    },
    {
        name: 'Otherside - Minecraft Music Disc - Lena Raine',
        location: 'src/assets/music/minecraft-music/Otherside - Minecraft Music Disc - Lena Raine.mp3'
    },
    {
        name: 'Pigstep -  Minecraft Music Disc - Lena Raine',
        location: 'src/assets/music/minecraft-music/Pigstep -  Minecraft Music Disc - Lena Raine.mp3'
    },
    {
        name: 'Relic - Minecraft Music Disc - Aaron Cherof',
        location: 'src/assets/music/minecraft-music/Relic - Minecraft Music Disc - Aaron Cherof.mp3'
    },
    {
        name: 'Stal- Minecraft Music Disc - C418',
        location: 'src/assets/music/minecraft-music/Stal- Minecraft Music Disc - C418.mp3'
    },
    {
        name: 'Strad - Minecraft Music Disc - C418',
        location: 'src/assets/music/minecraft-music/Strad - Minecraft Music Disc - C418.mp3'
    },
    {
        name: 'Wait - Minecraft Music Disc - C418',
        location: 'src/assets/music/minecraft-music/Wait - Minecraft Music Disc - C418.mp3'
    },
    {
        name: 'Ward - Minecraft Music Disc - C418',
        location: 'src/assets/music/minecraft-music/Ward - Minecraft Music Disc - C418.mp3'
    },
]

const rand = Math.floor(Math.random() * jukebox.length);
const randMusic = jukebox[rand];

console.log(randMusic)

export default randMusic;
