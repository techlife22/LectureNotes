let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log("All Data: ", netflix);
console.log("Just Season Info: ", netflix.season1.seasonInfo);
console.log("Just episonde 4 ", netflix.season1.seasonInfo.episodeInfo[3]);
console.log("Just episode name", netflix.season1.seasonInfo.episodeInfo[3].episodeName)

console.log("Episode 5 number and name: ", netflix.season1.seasonInfo.episodeInfo[4].episode);


/*
-JSON stands for JavaScript Object Notation
-the JSON is derived from JS object notation syntax, but the JSON format is text only
-JSON exists as a string, it's useful when you want to fetch data from a server. It needs to be converted to a native JS object; if you want to access it.

Example JSON data- https://rickandmortyapi.com/api/character/

{"info":{"count":671,"pages":34,"next":"https://rickandmortyapi.com/api/character/?page=2","prev":null},"results":[{"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg","episode":
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
//object constructor
console.log(Object.keys(spaceJam.monstars));
//grab values
console.log(Object.values(spaceJam.toonSquad));
