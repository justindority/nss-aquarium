const database = {
    fish: [
        {
            species: "Fish",
            name: "Jeremy",
            length: 4,
            diet: "bug",
            location: "Great Bay",
            image: "https://pbs.twimg.com/media/FS3lt1nUsAc6P0k.png"
        },
        {
            species: "Fish (puffed)",
            name: "Eric",
            length: 6,
            diet: "Ball",
            location: "Rusty Bucket Bay",
            image: "https://pbs.twimg.com/media/ElEIf79VgAAYISY.jpg" 
        },
        {
            species: "Jumping Fish",
            name: "Scott",
            length: 5,
            diet: "Lunchable",
            location: "Coral Capers",
            image: "https://pbs.twimg.com/media/Eny5N19VcAE6FSz.png"
        },
        {
            species: "Eel",
            name: "Unagi",
            length: "unknown",
            diet: "Mario",
            location: "Dire Dire Docks",
            image: "https://ukikipedia.net/mediawiki/images/2/2d/CtECOaP.png" 
        },
        {
            species: "Fish (Bottled)",
            name: "Little Guy",
            length: "Bottle",
            diet: "Rupees",
            location: "Curiosity Shop",
            image: "https://pbs.twimg.com/media/E8KJTZwXoAIobvi?format=png&name=4096x4096" 
        }

    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}