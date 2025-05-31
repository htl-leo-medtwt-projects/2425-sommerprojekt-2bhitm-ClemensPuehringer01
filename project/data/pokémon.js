let pokémon = {
    list: [
        {
            name: "Bulbasaur",
            type: ["grass", "poison"],
            hp: 45, stamina: 80, might: 49, resistance: 49, speed: 45, pokedexNr: "0001"
        },
        {
            name: "Ivysaur",
            type: ["grass", "poison"],
            hp: 60, stamina: 100, might: 62, resistance: 63, speed: 60, pokedexNr: "0002"
        },
        {
            name: "Venusaur",
            type: ["grass", "poison"],
            hp: 80, stamina: 120, might: 82, resistance: 83, speed: 80, pokedexNr: "0003"
        },
        {
            name: "Charmander",
            type: ["fire"],
            hp: 39, stamina: 70, might: 52, resistance: 43, speed: 65, pokedexNr: "0004"
        },
        {
            name: "Charmeleon",
            type: ["fire"],
            hp: 58, stamina: 90, might: 64, resistance: 58, speed: 80, pokedexNr: "0005"
        },
        {
            name: "Charizard",
            type: ["fire", "flying"],
            hp: 78, stamina: 120, might: 84, resistance: 78, speed: 100, pokedexNr: "0006"
        },
        {
            name: "Squirtle",
            type: ["water"],
            hp: 44, stamina: 80, might: 48, resistance: 65, speed: 43, pokedexNr: "0007"
        },
        {
            name: "Wartortle",
            type: ["water"],
            hp: 59, stamina: 100, might: 63, resistance: 80, speed: 58, pokedexNr: "0008"
        },
        {
            name: "Blastoise",
            type: ["water"],
            hp: 79, stamina: 120, might: 83, resistance: 100, speed: 78, pokedexNr: "0009"
        },
        {
            name: "Caterpie",
            type: ["bug"],
            hp: 45, stamina: 70, might: 30, resistance: 35, speed: 45, pokedexNr: "0010"
        },
        {
            name: "Pikachu",
            type: ["electric"],
            hp: 35, stamina: 80, might: 55, resistance: 40, speed: 90, pokedexNr: "0025"
        },
        {
            name: "Sandslash",
            type: ["ground"],
            hp: 75, stamina: 110, might: 100, resistance: 120, speed: 65, pokedexNr: "0028"
        },
        {
            name: "Machamp",
            type: ["fighting"],
            hp: 90, stamina: 140, might: 130, resistance: 80, speed: 55, pokedexNr: "0068"
        },
        {
            name: "Geodude",
            type: ["rock", "ground"],
            hp: 40, stamina: 70, might: 80, resistance: 100, speed: 20, pokedexNr: "0074"
        },
        {
            name: "Magneton",
            type: ["electric", "steel"],
            hp: 50, stamina: 90, might: 120, resistance: 95, speed: 70, pokedexNr: "0082"
        },
        {
            name: "Haunter",
            type: ["ghost", "poison"],
            hp: 45, stamina: 70, might: 115, resistance: 55, speed: 95, pokedexNr: "0093"
        },
        {
            name: "Gengar",
            type: ["ghost", "poison"],
            hp: 60, stamina: 100, might: 130, resistance: 75, speed: 110, pokedexNr: "0094"
        },
        {
            name: "Marowak",
            type: ["ground"],
            hp: 60, stamina: 100, might: 80, resistance: 110, speed: 45, pokedexNr: "0105"
        },
        {
            name: "Rhyhorn",
            type: ["ground", "rock"],
            hp: 80, stamina: 120, might: 85, resistance: 95, speed: 25, pokedexNr: "0111"
        },
        {
            name: "Jynx",
            type: ["ice", "psychic"],
            hp: 65, stamina: 100, might: 115, resistance: 95, speed: 95, pokedexNr: "0124"
        },
        {
            name: "Gyarados",
            type: ["water", "flying"],
            hp: 95, stamina: 150, might: 125, resistance: 79, speed: 81, pokedexNr: "0130"
        },
        {
            name: "Ditto",
            type: ["normal"],
            hp: 48, stamina: 90, might: 48, resistance: 48, speed: 48, pokedexNr: "0132"
        },
        {
            name: "Eevee",
            type: ["normal"],
            hp: 55, stamina: 80, might: 55, resistance: 50, speed: 55, pokedexNr: "0133"
        },
        {
            name: "Flareon",
            type: ["fire"],
            hp: 65, stamina: 130, might: 130, resistance: 60, speed: 65, pokedexNr: "0136"
        },
        {
            name: "Snorlax",
            type: ["normal"],
            hp: 160, stamina: 200, might: 110, resistance: 65, speed: 30, pokedexNr: "0143"
        },
        {
            name: "Articuno",
            type: ["ice", "flying"],
            hp: 90, stamina: 150, might: 95, resistance: 125, speed: 85, pokedexNr: "0144"
        },
        {
            name: "Dragonite",
            type: ["dragon", "flying"],
            hp: 91, stamina: 150, might: 134, resistance: 100, speed: 80, pokedexNr: "0149"
        },
        {
            name: "Mewtwo",
            type: ["psychic"],
            hp: 106, stamina: 150, might: 154, resistance: 90, speed: 130, pokedexNr: "0150"
        },
        {
            name: "Chikorita",
            type: ["grass"],
            hp: 45, stamina: 80, might: 49, resistance: 65, speed: 45, pokedexNr: "0152"
        },
        {
            name: "Bayleef",
            type: ["grass"],
            hp: 60, stamina: 100, might: 62, resistance: 80, speed: 60, pokedexNr: "0153"
        },
        {
            name: "Meganium",
            type: ["grass"],
            hp: 80, stamina: 120, might: 82, resistance: 100, speed: 80, pokedexNr: "0154"
        },
        {
            name: "Cyndaquil",
            type: ["fire"],
            hp: 39, stamina: 70, might: 52, resistance: 43, speed: 65, pokedexNr: "0155"
        },
        {
            name: "Quilava",
            type: ["fire"],
            hp: 58, stamina: 90, might: 64, resistance: 58, speed: 80, pokedexNr: "0156"
        },
        {
            name: "Typhlosion",
            type: ["fire"],
            hp: 78, stamina: 120, might: 84, resistance: 78, speed: 100, pokedexNr: "0157"
        },
        {
            name: "Totodile",
            type: ["water"],
            hp: 50, stamina: 80, might: 65, resistance: 64, speed: 43, pokedexNr: "0158"
        },
        {
            name: "Croconaw",
            type: ["water"],
            hp: 65, stamina: 100, might: 80, resistance: 80, speed: 58, pokedexNr: "0159"
        },
        {
            name: "Feraligatr",
            type: ["water"],
            hp: 85, stamina: 120, might: 105, resistance: 100, speed: 78, pokedexNr: "0160"
        },
        {
            name: "Togepi",
            type: ["fairy"],
            hp: 35, stamina: 70, might: 20, resistance: 65, speed: 20, pokedexNr: "0175"
        },
        {
            name: "Togetic",
            type: ["fairy", "flying"],
            hp: 55, stamina: 85, might: 40, resistance: 75, speed: 40, pokedexNr: "0176"
        },
        {
            name: "Wobbuffet",
            type: ["psychic"],
            hp: 190, stamina: 200, might: 33, resistance: 58, speed: 33, pokedexNr: "0202"
        },
        {
            name: "Steelix",
            type: ["steel", "ground"],
            hp: 75, stamina: 120, might: 85, resistance: 200, speed: 30, pokedexNr: "0208"
        },
        {
            name: "Scizor",
            type: ["bug", "steel"],
            hp: 70, stamina: 120, might: 130, resistance: 100, speed: 65, pokedexNr: "0212"
        },
        {
            name: "Treecko",
            type: ["grass"],
            hp: 40, stamina: 70, might: 45, resistance: 35, speed: 70, pokedexNr: "0252"
        },
        {
            name: "Grovyle",
            type: ["grass"],
            hp: 50, stamina: 80, might: 65, resistance: 45, speed: 95, pokedexNr: "0253"
        },
        {
            name: "Sceptile",
            type: ["grass"],
            hp: 70, stamina: 100, might: 85, resistance: 65, speed: 120, pokedexNr: "0254"
        },
        {
            name: "Torchic",
            type: ["fire"],
            hp: 45, stamina: 70, might: 60, resistance: 40, speed: 45, pokedexNr: "0255"
        },
        {
            name: "Combusken",
            type: ["fire", "fighting"],
            hp: 60, stamina: 85, might: 85, resistance: 60, speed: 55, pokedexNr: "0256"
        },
        {
            name: "Blaziken",
            type: ["fire", "fighting"],
            hp: 80, stamina: 130, might: 120, resistance: 70, speed: 80, pokedexNr: "0257"
        },
        {
            name: "Mudkip",
            type: ["water"],
            hp: 50, stamina: 80, might: 50, resistance: 50, speed: 40, pokedexNr: "0258"
        },
        {
            name: "Marshtomp",
            type: ["water", "ground"],
            hp: 70, stamina: 100, might: 70, resistance: 70, speed: 50, pokedexNr: "0259"
        },
        {
            name: "Swampert",
            type: ["water", "ground"],
            hp: 100, stamina: 140, might: 110, resistance: 90, speed: 60, pokedexNr: "0260"
        },
        {
            name: "Electrike",
            type: ["electric"],
            hp: 40, stamina: 60, might: 45, resistance: 40, speed: 65, pokedexNr: "0309"
        },
        {
            name: "Anorith",
            type: ["rock", "bug"],
            hp: 45, stamina: 100, might: 95, resistance: 50, speed: 75, pokedexNr: "0347"
        },
        {
            name: "Metagross",
            type: ["steel", "psychic"],
            hp: 80, stamina: 140, might: 135, resistance: 130, speed: 70, pokedexNr: "0376"
        },
        {
            name: "Rayquaza",
            type: ["dragon", "flying"],
            hp: 105, stamina: 150, might: 150, resistance: 90, speed: 95, pokedexNr: "0384"
        },
        {
            name: "Drapion",
            type: ["poison", "dark"],
            hp: 70, stamina: 110, might: 90, resistance: 110, speed: 95, pokedexNr: "0452"
        },
        {
            name: "Glaceon",
            type: ["ice"],
            hp: 65, stamina: 110, might: 130, resistance: 95, speed: 65, pokedexNr: "0471"
        },
        {
            name: "Lickilicky",
            type: ["normal"],
            hp: 110, stamina: 150, might: 85, resistance: 95, speed: 50, pokedexNr: "0463"
        },
        {
            name: "Palkia",
            type: ["water", "dragon"],
            hp: 90, stamina: 140, might: 120, resistance: 100, speed: 100, pokedexNr: "0484"
        },
        {
            name: "Darkrai",
            type: ["dark"],
            hp: 70, stamina: 120, might: 135, resistance: 90, speed: 125, pokedexNr: "0491"
        },
        {
            name: "Oshawott",
            type: ["water"],
            hp: 55, stamina: 80, might: 63, resistance: 45, speed: 45, pokedexNr: "0501"
        },
        {
            name: "Scolipede",
            type: ["bug", "poison"],
            hp: 60, stamina: 90, might: 100, resistance: 89, speed: 112, pokedexNr: "0545"
        },
        {
            name: "Aegislash",
            type: ["steel", "ghost"],
            hp: 60, stamina: 180, might: 140, resistance: 150, speed: 10, pokedexNr: "0681"
        },
        {
            name: "Aromatisse",
            type: ["fairy"],
            hp: 101, stamina: 160, might: 72, resistance: 89, speed: 29, pokedexNr: "0683"
        },
        {
            name: "Skrelp",
            type: ["poison", "water"],
            hp: 50, stamina: 80, might: 60, resistance: 60, speed: 30, pokedexNr: "0690"
        },
        {
            name: "Yveltal",
            type: ["dark", "flying"],
            hp: 126, stamina: 140, might: 131, resistance: 95, speed: 99, pokedexNr: "0717"
        },
        {
            name: "Rowlet",
            type: ["grass", "flying"],
            hp: 68, stamina: 90, might: 55, resistance: 55, speed: 42, pokedexNr: "0722"
        },
        {
            name: "Litten",
            type: ["fire"],
            hp: 45, stamina: 70, might: 65, resistance: 40, speed: 70, pokedexNr: "0725"
        },
        {
            name: "Mimikyu",
            type: ["ghost", "fairy"],
            hp: 55, stamina: 100, might: 90, resistance: 105, speed: 96, pokedexNr: "0778"
        },
        {
            name: "Thievul",
            type: ["dark"],
            hp: 70, stamina: 90, might: 58, resistance: 58, speed: 90, pokedexNr: "0828"
        },
        {
            name: "Corviknight",
            type: ["flying", "steel"],
            hp: 98, stamina: 140, might: 87, resistance: 105, speed: 67, pokedexNr: "0823"
        },
        {
            name: "Dragapult",
            type: ["dragon", "ghost"],
            hp: 88, stamina: 130, might: 120, resistance: 75, speed: 142, pokedexNr: "0887"
        },
        {
            name: "Zamazenta",
            type: ["fighting"],
            hp: 92, stamina: 160, might: 120, resistance: 130, speed: 138, pokedexNr: "0889"
        },
        {
            name: "Flamigo",
            type: ["flying", "fighting"],
            hp: 82, stamina: 120, might: 115, resistance: 74, speed: 90, pokedexNr: "0973"
        }
    ]
};