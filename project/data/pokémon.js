//The resistance and wealnesses are only from the first type

let 
pokémon = {
    list: [
        {
            name: "Aegislash",
            type: [
                "steel",
                "ghost"
            ],
            hp: 60,
            stamina: 180,
            might: 140,
            resistance: 150,
            speed: 10
        },
        {
            name: "Anorith",
            type: [
                "rock",
                "bug"
            ],
            hp: 45,
            stamina: 100,
            might: 95,
            resistance: 50,
            speed: 75
        },
        {
            name: "Aromatisse",
            type: [
                "fairy"
            ],
            hp: 101,
            stamina: 160,
            might: 72,
            resistance: 89,
            speed: 29
        },
        {
            name: "Articuno",
            type: [
                "ice",
                "flying"
            ],
            hp: 90,
            stamina: 150,
            might: 95,
            resistance: 125,
            speed: 85
        },
        {
            name: "Blaziken",
            type: [
                "fire",
                "fighting"
            ],
            hp: 80,
            stamina: 130,
            might: 120,
            resistance: 70,
            speed: 80
        },
        {
            name: "Bulbasaur",
            type: [
                "grass",
                "poison"
            ],
            hp: 45,
            stamina: 80,
            might: 49,
            resistance: 49,
            speed: 45
        },
        {
            "name": "Caterpie",
            "type": [
                "bug"
            ],
            "hp": 45,
            "stamina": 70,
            "might": 30,
            "resistance": 35,
            "speed": 45
        },
        {
            "name": "Charizard",
            "type": [
                "fire",
                "flying"
            ],
            "hp": 78,
            "stamina": 120,
            "might": 84,
            "resistance": 78,
            "speed": 100
        },
        {
            "name": "Corviknight",
            "type": [
                "flying",
                "steel"
            ],
            "hp": 98,
            "stamina": 140,
            "might": 87,
            "resistance": 105,
            "speed": 67
        },
        {
            "name": "Darkrai",
            "type": [
                "dark"
            ],
            "hp": 70,
            "stamina": 120,
            "might": 135,
            "resistance": 90,
            "speed": 125
        },
        {
            "name": "Ditto",
            "type": [
                "normal"
            ],
            "hp": 48,
            "stamina": 90,
            "might": 48,
            "resistance": 48,
            "speed": 48
        },
        {
            "name": "Dragapult",
            "type": [
                "dragon",
                "ghost"
            ],
            "hp": 88,
            "stamina": 130,
            "might": 120,
            "resistance": 75,
            "speed": 142
        },
        {
            "name": "Dragonite",
            "type": [
                "dragon",
                "flying"
            ],
            "hp": 91,
            "stamina": 150,
            "might": 134,
            "resistance": 100,
            "speed": 80
        },
        {
            "name": "Drapion",
            "type": [
                "poison",
                "dark"
            ],
            "hp": 70,
            "stamina": 110,
            "might": 90,
            "resistance": 110,
            "speed": 95
        },
        {
            "name": "Eevee",
            "type": [
                "normal"
            ],
            "hp": 55,
            "stamina": 80,
            "might": 55,
            "resistance": 50,
            "speed": 55
        },
        {
            "name": "Electrike",
            "type": [
                "electric"
            ],
            "hp": 40,
            "stamina": 60,
            "might": 45,
            "resistance": 40,
            "speed": 65
        },
        {
            "name": "Flamigo",
            "type": [
                "flying",
                "fighting"
            ],
            "hp": 82,
            "stamina": 120,
            "might": 115,
            "resistance": 74,
            "speed": 90
        },
        {
            "name": "Gardevoir",
            "type": [
                "psychic",
                "fairy"
            ],
            "hp": 68,
            "stamina": 110,
            "might": 125,
            "resistance": 115,
            "speed": 80
        },
        {
            "name": "Gengar",
            "type": [
                "ghost",
                "poison"
            ],
            "hp": 60,
            "stamina": 100,
            "might": 130,
            "resistance": 75,
            "speed": 110
        },
        {
            "name": "Geodude",
            "type": [
                "rock",
                "ground"
            ],
            "hp": 40,
            "stamina": 70,
            "might": 80,
            "resistance": 100,
            "speed": 20
        },
        {
            "name": "Glaceon",
            "type": [
                "ice"
            ],
            "hp": 65,
            "stamina": 110,
            "might": 130,
            "resistance": 95,
            "speed": 65
        },
        {
            "name": "Grovyle",
            "type": [
                "grass"
            ],
            "hp": 50,
            "stamina": 80,
            "might": 65,
            "resistance": 45,
            "speed": 95
        },
        {
            "name": "Gyarados",
            "type": [
                "water",
                "flying"
            ],
            "hp": 95,
            "stamina": 150,
            "might": 125,
            "resistance": 79,
            "speed": 81
        },
        {
            "name": "Haunter",
            "type": [
                "ghost",
                "poison"
            ],
            "hp": 45,
            "stamina": 70,
            "might": 115,
            "resistance": 55,
            "speed": 95
        },
        {
            "name": "Jynx",
            "type": [
                "ice",
                "psychic"
            ],
            "hp": 65,
            "stamina": 100,
            "might": 115,
            "resistance": 95,
            "speed": 95
        },
        {
            "name": "Lickilicky",
            "type": [
                "normal"
            ],
            "hp": 110,
            "stamina": 150,
            "might": 85,
            "resistance": 95,
            "speed": 50
        },
        {
            "name": "Litten",
            "type": [
                "fire"
            ],
            "hp": 45,
            "stamina": 70,
            "might": 65,
            "resistance": 40,
            "speed": 70
        },
        {
            "name": "Lucario",
            "type": [
                "fighting",
                "steel"
            ],
            "hp": 70,
            "stamina": 100,
            "might": 110,
            "resistance": 70,
            "speed": 90
        },
        {
            "name": "Machamp",
            "type": [
                "fighting"
            ],
            "hp": 90,
            "stamina": 140,
            "might": 130,
            "resistance": 80,
            "speed": 55
        },
        {
            "name": "Magneton",
            "type": [
                "electric",
                "steel"
            ],
            "hp": 50,
            "stamina": 90,
            "might": 120,
            "resistance": 95,
            "speed": 70
        },
        {
            "name": "Marowak",
            "type": [
                "ground"
            ],
            "hp": 60,
            "stamina": 100,
            "might": 80,
            "resistance": 110,
            "speed": 45
        },
        {
            "name": "Metagross",
            "type": [
                "steel",
                "psychic"
            ],
            "hp": 80,
            "stamina": 140,
            "might": 135,
            "resistance": 130,
            "speed": 70
        },
        {
            "name": "Mewtwo",
            "type": [
                "psychic"
            ],
            "hp": 106,
            "stamina": 150,
            "might": 154,
            "resistance": 90,
            "speed": 130
        },
        {
            "name": "Mimikyu",
            "type": [
                "ghost",
                "fairy"
            ],
            "hp": 55,
            "stamina": 100,
            "might": 90,
            "resistance": 105,
            "speed": 96
        },
        {
            "name": "Oshawott",
            "type": [
                "water"
            ],
            "hp": 55,
            "stamina": 80,
            "might": 63,
            "resistance": 45,
            "speed": 45
        },
        {
            "name": "Palkia",
            "type": [
                "water",
                "dragon"
            ],
            "hp": 90,
            "stamina": 140,
            "might": 120,
            "resistance": 100,
            "speed": 100
        },
        {
            "name": "Pikachu",
            "type": [
                "electric"
            ],
            "hp": 35,
            "stamina": 80,
            "might": 55,
            "resistance": 40,
            "speed": 90
        },
        {
            "name": "Rayquaza",
            "type": [
                "dragon",
                "flying"
            ],
            "hp": 105,
            "stamina": 150,
            "might": 150,
            "resistance": 90,
            "speed": 95
        },
        {
            "name": "Rhyhorn",
            "type": [
                "ground",
                "rock"
            ],
            "hp": 80,
            "stamina": 120,
            "might": 85,
            "resistance": 95,
            "speed": 25
        },
        {
            "name": "Rowlet",
            "type": [
                "grass",
                "flying"
            ],
            "hp": 68,
            "stamina": 90,
            "might": 55,
            "resistance": 55,
            "speed": 42
        },
        {
            "name": "Sandslash",
            "type": [
                "ground"
            ],
            "hp": 75,
            "stamina": 110,
            "might": 100,
            "resistance": 120,
            "speed": 65
        },
        {
            "name": "Scizor",
            "type": [
                "bug",
                "steel"
            ],
            "hp": 70,
            "stamina": 120,
            "might": 130,
            "resistance": 100,
            "speed": 65
        },
        {
            "name": "Scolipede",
            "type": [
                "bug",
                "poison"
            ],
            "hp": 60,
            "stamina": 90,
            "might": 100,
            "resistance": 89,
            "speed": 112
        },
        {
            "name": "Skrelp",
            "type": [
                "poison",
                "water"
            ],
            "hp": 50,
            "stamina": 80,
            "might": 60,
            "resistance": 60,
            "speed": 30
        },
        {
            "name": "Skuntank",
            "type": [
                "poison",
                "dark"
            ],
            "hp": 103,
            "stamina": 110,
            "might": 93,
            "resistance": 67,
            "speed": 84
        },
        {
            "name": "Snorlax",
            "type": [
                "normal"
            ],
            "hp": 160,
            "stamina": 200,
            "might": 110,
            "resistance": 65,
            "speed": 30
        },
        {
            "name": "Steelix",
            "type": [
                "steel",
                "ground"
            ],
            "hp": 75,
            "stamina": 120,
            "might": 85,
            "resistance": 200,
            "speed": 30
        },
        {
            "name": "Thievul",
            "type": [
                "dark"
            ],
            "hp": 70,
            "stamina": 90,
            "might": 58,
            "resistance": 58,
            "speed": 90
        },
        {
            "name": "Togepi",
            "type": [
                "fairy"
            ],
            "hp": 35,
            "stamina": 70,
            "might": 20,
            "resistance": 65,
            "speed": 20
        },
        {
            "name": "Togetic",
            "type": [
                "fairy",
                "flying"
            ],
            "hp": 55,
            "stamina": 85,
            "might": 40,
            "resistance": 75,
            "speed": 40
        },
        {
            "name": "Tornadus",
            "type": [
                "flying"
            ],
            "hp": 79,
            "stamina": 110,
            "might": 115,
            "resistance": 70,
            "speed": 111
        },
        {
            "name": "Wobbuffet",
            "type": [
                "psychic"
            ],
            "hp": 190,
            "stamina": 200,
            "might": 33,
            "resistance": 58,
            "speed": 33
        },
        {
            "name": "Yveltal",
            "type": [
                "dark",
                "flying"
            ],
            "hp": 126,
            "stamina": 140,
            "might": 131,
            "resistance": 95,
            "speed": 99
        },
        {
            "name": "Zamazenta",
            "type": [
                "fighting"
            ],
            "hp": 92,
            "stamina": 160,
            "might": 120,
            "resistance": 130,
            "speed": 138
        }
    ]
}