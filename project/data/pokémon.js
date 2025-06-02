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
            name: "Zapdos",
            type: ["electric", "flying"],
            hp: 90, stamina: 150, might: 90, resistance: 85, speed: 100, pokedexNr: "0145"
        },
        {
            name: "Moltres",
            type: ["fire", "flying"],
            hp: 90, stamina: 150, might: 100, resistance: 90, speed: 90, pokedexNr: "0146"
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
            name: "Mew",
            type: ["psychic"],
            hp: 100, stamina: 100, might: 100, resistance: 100, speed: 100, pokedexNr: "0151"
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
            name: "Noctowl",
            type: ["normal", "flying"],
            hp: 100, stamina: 120, might: 50, resistance: 50, speed: 70, pokedexNr: "0164"
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
            name: "Raikou",
            type: ["electric"],
            hp: 90, stamina: 120, might: 115, resistance: 100, speed: 115, pokedexNr: "0243"
        },
        {
            name: "Entei",
            type: ["fire"],
            hp: 115, stamina: 120, might: 115, resistance: 85, speed: 100, pokedexNr: "0244"
        },
        {
            name: "Suicune",
            type: ["water"],
            hp: 100, stamina: 120, might: 90, resistance: 115, speed: 85, pokedexNr: "0245"
        },
        {
            name: "Lugia",
            type: ["psychic", "flying"],
            hp: 106, stamina: 150, might: 90, resistance: 154, speed: 110, pokedexNr: "0249"
        },
        {
            name: "Ho-Oh",
            type: ["fire", "flying"],
            hp: 106, stamina: 150, might: 130, resistance: 90, speed: 90, pokedexNr: "0250"
        },
        {
            name: "Celebi",
            type: ["psychic", "grass"],
            hp: 100, stamina: 100, might: 100, resistance: 100, speed: 100, pokedexNr: "0251"
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
            name: "Kyogre",
            type: ["water"],
            hp: 100, stamina: 150, might: 150, resistance: 90, speed: 90, pokedexNr: "0382"
        },
        {
            name: "Groudon",
            type: ["ground"],
            hp: 100, stamina: 150, might: 150, resistance: 90, speed: 90, pokedexNr: "0383"
        },
        {
            name: "Rayquaza",
            type: ["dragon", "flying"],
            hp: 105, stamina: 150, might: 150, resistance: 90, speed: 95, pokedexNr: "0384"
        },
        {
            name: "Turtwig",
            type: ["grass"],
            hp: 55, stamina: 80, might: 68, resistance: 64, speed: 31, pokedexNr: "0387"
        },
        {
            name: "Grotle",
            type: ["grass"],
            hp: 75, stamina: 100, might: 89, resistance: 85, speed: 36, pokedexNr: "0388"
        },
        {
            name: "Torterra",
            type: ["grass", "ground"],
            hp: 95, stamina: 120, might: 109, resistance: 105, speed: 56, pokedexNr: "0389"
        },
        {
            name: "Chimchar",
            type: ["fire"],
            hp: 44, stamina: 70, might: 58, resistance: 44, speed: 61, pokedexNr: "0390"
        },
        {
            name: "Monferno",
            type: ["fire", "fighting"],
            hp: 64, stamina: 90, might: 78, resistance: 52, speed: 81, pokedexNr: "0391"
        },
        {
            name: "Infernape",
            type: ["fire", "fighting"],
            hp: 76, stamina: 120, might: 104, resistance: 71, speed: 108, pokedexNr: "0392"
        },
        {
            name: "Piplup",
            type: ["water"],
            hp: 53, stamina: 80, might: 51, resistance: 53, speed: 40, pokedexNr: "0393"
        },
        {
            name: "Prinplup",
            type: ["water"],
            hp: 64, stamina: 100, might: 66, resistance: 68, speed: 50, pokedexNr: "0394"
        },
        {
            name: "Empoleon",
            type: ["water", "steel"],
            hp: 84, stamina: 120, might: 86, resistance: 88, speed: 60, pokedexNr: "0395"
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
        name: "Dialga",
        type: ["steel", "dragon"],
        hp: 100, stamina: 150, might: 150, resistance: 120, speed: 90, pokedexNr: "0483"
    },
    {
        name: "Palkia",
        type: ["water", "dragon"],
        hp: 90, stamina: 140, might: 150, resistance: 100, speed: 100, pokedexNr: "0484"
    },
    {
        name: "Giratina",
        type: ["ghost", "dragon"],
        hp: 150, stamina: 150, might: 100, resistance: 120, speed: 90, pokedexNr: "0487"
    },
        {
            name: "Darkrai",
            type: ["dark"],
            hp: 70, stamina: 120, might: 135, resistance: 90, speed: 125, pokedexNr: "0491"
        },
            {
        name: "Arceus",
        type: ["normal"],
        hp: 120, stamina: 120, might: 120, resistance: 120, speed: 120, pokedexNr: "0493"
    },
        {
            name: "Snivy",
            type: ["grass"],
            hp: 45, stamina: 70, might: 45, resistance: 55, speed: 63, pokedexNr: "0495"
        },
        {
            name: "Servine",
            type: ["grass"],
            hp: 60, stamina: 85, might: 60, resistance: 75, speed: 83, pokedexNr: "0496"
        },
        {
            name: "Serperior",
            type: ["grass"],
            hp: 75, stamina: 100, might: 75, resistance: 95, speed: 113, pokedexNr: "0497"
        },
        {
            name: "Tepig",
            type: ["fire"],
            hp: 65, stamina: 80, might: 63, resistance: 45, speed: 45, pokedexNr: "0498"
        },
        {
            name: "Pignite",
            type: ["fire", "fighting"],
            hp: 90, stamina: 100, might: 93, resistance: 55, speed: 55, pokedexNr: "0499"
        },
        {
            name: "Emboar",
            type: ["fire", "fighting"],
            hp: 110, stamina: 120, might: 123, resistance: 65, speed: 65, pokedexNr: "0500"
        },
        {
            name: "Oshawott",
            type: ["water"],
            hp: 55, stamina: 80, might: 63, resistance: 45, speed: 45, pokedexNr: "0501"
        },
        {
            name: "Dewott",
            type: ["water"],
            hp: 75, stamina: 100, might: 83, resistance: 60, speed: 60, pokedexNr: "0502"
        },
        {
            name: "Samurott",
            type: ["water"],
            hp: 95, stamina: 120, might: 108, resistance: 85, speed: 70, pokedexNr: "0503"
        },
        {
            name: "Scolipede",
            type: ["bug", "poison"],
            hp: 60, stamina: 90, might: 100, resistance: 89, speed: 112, pokedexNr: "0545"
        },
        {
        name: "Reshiram",
        type: ["dragon", "fire"],
        hp: 100, stamina: 150, might: 120, resistance: 100, speed: 90, pokedexNr: "0643"
    },
    {
        name: "Zekrom",
        type: ["dragon", "electric"],
        hp: 100, stamina: 150, might: 120, resistance: 100, speed: 90, pokedexNr: "0644"
    },
    {
        name: "Kyurem",
        type: ["dragon", "ice"],
        hp: 125, stamina: 150, might: 130, resistance: 90, speed: 95, pokedexNr: "0646"
    },
    {
        name: "Victini",
        type: ["psychic", "fire"],
        hp: 100, stamina: 100, might: 100, resistance: 100, speed: 100, pokedexNr: "0494"
    },
        {
            name: "Chespin",
            type: ["grass"],
            hp: 56, stamina: 80, might: 61, resistance: 65, speed: 38, pokedexNr: "0650"
        },
        {
            name: "Quilladin",
            type: ["grass"],
            hp: 61, stamina: 100, might: 78, resistance: 86, speed: 57, pokedexNr: "0651"
        },
        {
            name: "Chesnaught",
            type: ["grass", "fighting"],
            hp: 88, stamina: 120, might: 107, resistance: 122, speed: 64, pokedexNr: "0652"
        },
        {
            name: "Fennekin",
            type: ["fire"],
            hp: 40, stamina: 70, might: 45, resistance: 40, speed: 60, pokedexNr: "0653"
        },
        {
            name: "Braixen",
            type: ["fire"],
            hp: 59, stamina: 90, might: 59, resistance: 58, speed: 73, pokedexNr: "0654"
        },
        {
            name: "Delphox",
            type: ["fire", "psychic"],
            hp: 75, stamina: 120, might: 69, resistance: 72, speed: 104, pokedexNr: "0655"
        },
        {
            name: "Froakie",
            type: ["water"],
            hp: 41, stamina: 70, might: 56, resistance: 40, speed: 71, pokedexNr: "0656"
        },
        {
            name: "Frogadier",
            type: ["water"],
            hp: 54, stamina: 90, might: 63, resistance: 52, speed: 97, pokedexNr: "0657"
        },
        {
            name: "Greninja",
            type: ["water", "dark"],
            hp: 72, stamina: 120, might: 95, resistance: 67, speed: 122, pokedexNr: "0658"
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
        name: "Xerneas",
        type: ["fairy"],
        hp: 126, stamina: 140, might: 131, resistance: 98, speed: 99, pokedexNr: "0716"
    },
    {
        name: "Yveltal",
        type: ["dark", "flying"],
        hp: 126, stamina: 140, might: 131, resistance: 95, speed: 99, pokedexNr: "0717"
    },
    {
        name: "Zygarde",
        type: ["dragon", "ground"],
        hp: 108, stamina: 121, might: 100, resistance: 121, speed: 95, pokedexNr: "0718"
    },
        {
            name: "Rowlet",
            type: ["grass", "flying"],
            hp: 68, stamina: 90, might: 55, resistance: 55, speed: 42, pokedexNr: "0722"
        },
        {
            name: "Dartrix",
            type: ["grass", "flying"],
            hp: 78, stamina: 100, might: 75, resistance: 70, speed: 52, pokedexNr: "0723"
        },
        {
            name: "Decidueye",
            type: ["grass", "ghost"],
            hp: 78, stamina: 120, might: 107, resistance: 75, speed: 70, pokedexNr: "0724"
        },
        {
            name: "Litten",
            type: ["fire"],
            hp: 45, stamina: 70, might: 65, resistance: 40, speed: 70, pokedexNr: "0725"
        },
        {
            name: "Torracat",
            type: ["fire"],
            hp: 65, stamina: 90, might: 85, resistance: 50, speed: 90, pokedexNr: "0726"
        },
        {
            name: "Incineroar",
            type: ["fire", "dark"],
            hp: 95, stamina: 120, might: 115, resistance: 90, speed: 60, pokedexNr: "0727"
        },
        {
            name: "Popplio",
            type: ["water"],
            hp: 50, stamina: 80, might: 54, resistance: 54, speed: 40, pokedexNr: "0728"
        },
        {
            name: "Brionne",
            type: ["water"],
            hp: 60, stamina: 100, might: 69, resistance: 69, speed: 50, pokedexNr: "0729"
        },
        {
            name: "Primarina",
            type: ["water", "fairy"],
            hp: 80, stamina: 120, might: 126, resistance: 116, speed: 60, pokedexNr: "0730"
        },
        {
            name: "Mimikyu",
            type: ["ghost", "fairy"],
            hp: 55, stamina: 100, might: 90, resistance: 105, speed: 96, pokedexNr: "0778"
        },
        {
        name: "Solgaleo",
        type: ["psychic", "steel"],
        hp: 137, stamina: 140, might: 137, resistance: 107, speed: 97, pokedexNr: "0791"
    },
    {
        name: "Lunala",
        type: ["psychic", "ghost"],
        hp: 137, stamina: 140, might: 137, resistance: 107, speed: 97, pokedexNr: "0792"
    },
    {
        name: "Necrozma",
        type: ["psychic"],
        hp: 97, stamina: 120, might: 127, resistance: 89, speed: 79, pokedexNr: "0800"
    },
    {
        name: "Zeraora",
        type: ["electric"],
        hp: 88, stamina: 100, might: 112, resistance: 75, speed: 143, pokedexNr: "0807"
    },
        {
            name: "Grookey",
            type: ["grass"],
            hp: 50, stamina: 80, might: 65, resistance: 50, speed: 65, pokedexNr: "0810"
        },
        {
            name: "Thwackey",
            type: ["grass"],
            hp: 70, stamina: 100, might: 85, resistance: 70, speed: 80, pokedexNr: "0811"
        },
        {
            name: "Rillaboom",
            type: ["grass"],
            hp: 100, stamina: 120, might: 125, resistance: 90, speed: 85, pokedexNr: "0812"
        },
        {
            name: "Scorbunny",
            type: ["fire"],
            hp: 50, stamina: 80, might: 71, resistance: 40, speed: 69, pokedexNr: "0813"
        },
        {
            name: "Raboot",
            type: ["fire"],
            hp: 65, stamina: 100, might: 86, resistance: 60, speed: 94, pokedexNr: "0814"
        },
        {
            name: "Cinderace",
            type: ["fire"],
            hp: 80, stamina: 120, might: 116, resistance: 75, speed: 119, pokedexNr: "0815"
        },
        {
            name: "Sobble",
            type: ["water"],
            hp: 50, stamina: 80, might: 40, resistance: 40, speed: 70, pokedexNr: "0816"
        },
        {
            name: "Drizzile",
            type: ["water"],
            hp: 65, stamina: 100, might: 60, resistance: 55, speed: 90, pokedexNr: "0817"
        },
        {
            name: "Inteleon",
            type: ["water"],
            hp: 70, stamina: 120, might: 85, resistance: 65, speed: 120, pokedexNr: "0818"
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
        name: "Zacian",
        type: ["fairy", "steel"],
        hp: 92, stamina: 160, might: 120, resistance: 115, speed: 148, pokedexNr: "0888"
    },
    {
        name: "Zamazenta",
        type: ["fighting", "steel"],
        hp: 92, stamina: 160, might: 120, resistance: 130, speed: 138, pokedexNr: "0889"
    },
    {
        name: "Eternatus",
        type: ["poison", "dragon"],
        hp: 140, stamina: 150, might: 145, resistance: 95, speed: 130, pokedexNr: "0890"
    },
        {
            name: "Sprigatito",
            type: ["grass"],
            hp: 40, stamina: 70, might: 61, resistance: 54, speed: 65, pokedexNr: "0906"
        },
        {
            name: "Floragato",
            type: ["grass"],
            hp: 61, stamina: 90, might: 80, resistance: 63, speed: 83, pokedexNr: "0907"
        },
        {
            name: "Meowscarada",
            type: ["grass", "dark"],
            hp: 76, stamina: 120, might: 110, resistance: 70, speed: 123, pokedexNr: "0908"
        },
        {
            name: "Fuecoco",
            type: ["fire"],
            hp: 67, stamina: 80, might: 45, resistance: 59, speed: 36, pokedexNr: "0909"
        },
        {
            name: "Crocalor",
            type: ["fire"],
            hp: 81, stamina: 100, might: 60, resistance: 78, speed: 49, pokedexNr: "0910"
        },
        {
            name: "Skeledirge",
            type: ["fire", "ghost"],
            hp: 104, stamina: 120, might: 75, resistance: 100, speed: 66, pokedexNr: "0911"
        },
        {
            name: "Quaxly",
            type: ["water"],
            hp: 55, stamina: 80, might: 65, resistance: 45, speed: 50, pokedexNr: "0912"
        },
        {
            name: "Quaxwell",
            type: ["water"],
            hp: 70, stamina: 100, might: 85, resistance: 65, speed: 65, pokedexNr: "0913"
        },
        {
            name: "Quaquaval",
            type: ["water", "fighting"],
            hp: 85, stamina: 120, might: 120, resistance: 80, speed: 85, pokedexNr: "0914"
        },
        {
            name: "Flamigo",
            type: ["flying", "fighting"],
            hp: 82, stamina: 120, might: 115, resistance: 74, speed: 90, pokedexNr: "0973"
        },
            {
        name: "Koraidon",
        type: ["fighting", "dragon"],
        hp: 100, stamina: 135, might: 135, resistance: 115, speed: 135, pokedexNr: "1007"
    },
    {
        name: "Miraidon",
        type: ["electric", "dragon"],
        hp: 100, stamina: 135, might: 135, resistance: 115, speed: 135, pokedexNr: "1008"
    }
    ]
};