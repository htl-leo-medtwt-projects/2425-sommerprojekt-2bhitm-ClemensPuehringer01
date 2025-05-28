let attacks={
    
    "moves": [
        {
            "name": "Ember",
            "type": "fire",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A small burst of flames that lightly scorches the foe.",
            double: [
                "grass",
                "ice",
                "bug",
                "steel"
            ],
            half:[
                "fire",
               "water",
                "rock",
              "dragon",

            ],
            zero:[

            ]
        },
        {
            "name": "Flame Burst",
            "type": "fire",
            "power": 70,
            "acc": 100,
            "stamina_cost": 17,
            "description": "A fiery explosion that spreads upon impact.",
            double: [
                "grass",
                "ice",
                "bug",
                "steel"
            ],
            half:[
                "fire",
               "water",
                "rock",
              "dragon",

            ],
            zero:[

            ]
        },
        {
            "name": "Inferno",
            "type": "fire",
            "power": 100,
            "acc": 85,
            "stamina_cost": 20,
            "description": "A raging fire engulfs the enemy in searing flames.",
            double: [
                "grass",
                "ice",
                "bug",
                "steel"
            ],
            half:[
                "fire",
               "water",
                "rock",
              "dragon",

            ],
            zero:[

            ]
        },
        {
            "name": "Aerial Slash",
            "type": "flying",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A sharp gust of wind slices through the enemy.",
            double: [
                "grass",
                "fighting",
                "bug"
            ],
            half:[
                "electric",
                "rock",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Hurricane",
            "type": "flying",
            "power": 90,
            "acc": 85,
            "stamina_cost": 19,
            "description": "A powerful storm hurls enemies into the air.",
            double: [
                "grass",
                "fighting",
                "bug"
            ],
            half:[
                "electric",
                "rock",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Sky Assault",
            "type": "flying",
            "power": 120,
            "acc": 75,
            "stamina_cost": 22,
            "description": "A devastating dive-bomb attack from above.",
            double: [
                "grass",
                "fighting",
                "bug"
            ],
            half:[
                "electric",
                "rock",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Iron Claw",
            "type": "steel",
            "power": 60,
            "acc": 100,
            "stamina_cost": 16,
            "description": "A razor-sharp metal claw slashes through defenses.",
            double: [
                "ice",
                "rock",
                "fairy"
            ],
            half:[
                "fire",
                "water",
                "electric",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Steel Crash",
            "type": "steel",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A full-force metallic slam.",
            double: [
                "ice",
                "rock",
                "fairy"
            ],
            half:[
                "fire",
                "water",
                "electric",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Titan Bash",
            "type": "steel",
            "power": 110,
            "acc": 85,
            "stamina_cost": 21,
            "description": "An unstoppable strike with the weight of a titan.",
            double: [
                "ice",
                "rock",
                "fairy"
            ],
            half:[
                "fire",
                "water",
                "electric",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Rock Throw",
            "type": "rock",
            "power": 50,
            "acc": 90,
            "stamina_cost": 15,
            "description": "Hurls small rocks at the foe.",
            double: [
                "fire",
                "ice",
                "flying",
                "bug"
            ],
            half:[
                "fighting",
                "ground",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Stone Edge",
            "type": "rock",
            "power": 100,
            "acc": 80,
            "stamina_cost": 20,
            "description": "Jagged stones cut through the enemy.",
            double: [
                "fire",
                "ice",
                "flying",
                "bug"
            ],
            half:[
                "fighting",
                "ground",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Boulder Crush",
            "type": "rock",
            "power": 120,
            "acc": 75,
            "stamina_cost": 22,
            "description": "A massive boulder is dropped on the target.",
            double: [
                "fire",
                "ice",
                "flying",
                "bug"
            ],
            half:[
                "fighting",
                "ground",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Aqua Jet",
            "type": "water",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A quick burst of water propels the attacker forward.",
            double: [
                "fire",
                "rock",
                "ground"
            ],
            half:[
                "water",
                "grass",
                "dragon"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Waterfall",
            "type": "water",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A fierce wave crashes into the opponent.",
            double: [
                "fire",
                "rock",
                "ground"
            ],
            half:[
                "water",
                "grass",
                "dragon"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Hydro Cannon",
            "type": "water",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "An ultra-powerful blast of water.",
            double: [
                "fire",
                "rock",
                "ground"
            ],
            half:[
                "water",
                "grass",
                "dragon"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Thunder Shock",
            "type": "electric",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A weak jolt of electricity zaps the opponent.",
            double: [
                "water",
                "flying"
            ],
            half:[
                "grass",
                "electric",
                "dragon"

            ],
            zero:[
                "ground"
            ]
        },
        {
            "name": "Thunderbolt",
            "type": "electric",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A strong electric bolt strikes the foe.",
            double: [
                "water",
                "flying"
            ],
            half:[
                "grass",
                "electric",
                "dragon"

            ],
            zero:[
                "ground"
            ]
        },
        {
            "name": "Volt Crash",
            "type": "electric",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "A shocking surge of electricity slams into the enemy.",
            double: [
                "water",
                "flying"
            ],
            half:[
                "grass",
                "electric",
                "dragon"

            ],
            zero:[
                "ground"
            ]
        },
        {
            "name": "Leaf Slash",
            "type": "grass",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A sharp leaf slices through the foe.",
            double: [
                "water",
                "ground",
                "rock"
            ],
            half:[
                "fire",
                "grass",
                "poison",
                "flying",
                "bug",
                "dragon",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Solar Beam",
            "type": "grass",
            "power": 120,
            "acc": 100,
            "stamina_cost": 22,
            "description": "A beam of sunlight is gathered and unleashed.",
            double: [
                "water",
                "ground",
                "rock"
            ],
            half:[
                "fire",
                "grass",
                "poison",
                "flying",
                "bug",
                "dragon",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Vine Whip",
            "type": "grass",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "Vines lash out at the opponent.",
            double: [
                "water",
                "ground",
                "rock"
            ],
            half:[
                "fire",
                "grass",
                "poison",
                "flying",
                "bug",
                "dragon",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Shadow Claw",
            "type": "ghost",
            "power": 70,
            "acc": 100,
            "stamina_cost": 17,
            "description": "A shadowy claw slashes at the enemy.",
            double: [
                "psychic",
                "ghost"
            ],
            half:[
                "dark"

            ],
            zero:[
                "normal"
            ]
        },
        {
            "name": "Phantom Strike",
            "type": "ghost",
            "power": 90,
            "acc": 85,
            "stamina_cost": 19,
            "description": "A spectral attack phases through defenses.",
            double: [
                "psychic",
                "ghost"
            ],
            half:[
                "dark"

            ],
            zero:[
                "normal"
            ]
        },
        {
            "name": "Spirit Crush",
            "type": "ghost",
            "power": 110,
            "acc": 80,
            "stamina_cost": 21,
            "description": "A powerful blow that saps the target’s will.",
            double: [
                "psychic",
                "ghost"
            ],
            half:[
                "dark"

            ],
            zero:[
                "normal"
            ]
        },
        {
            "name": "Tackle",
            "type": "normal",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A simple but effective full-body charge.",
            double: [
                
            ],
            half:[
                "rock",
                "steel"

            ],
            zero:[
                "ghost"
            ]
        },
        {
            "name": "Body Slam",
            "type": "normal",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A heavy slam crushes the opponent.",
            double: [
                
            ],
            half:[
                "rock",
                "steel"

            ],
            zero:[
                "ghost"
            ]
        },
        {
            "name": "Giga Impact",
            "type": "normal",
            "power": 120,
            "acc": 90,
            "stamina_cost": 22,
            "description": "A full-force charge that leaves the user exhausted.",
            double: [
                
            ],
            half:[
                "rock",
                "steel"

            ],
            zero:[
                "ghost"
            ]
        },
        {
            "name": "Brick Break",
            "type": "fighting",
            "power": 75,
            "acc": 100,
            "stamina_cost": 17,
            "description": "A powerful strike that shatters barriers.",
            double: [
                "normal",
                "ice",
                "rock",
                "dark",
                "steel"
            ],
            half:[
                "poison",
                "flying",
                "psychic",
                "bug",
                "fairy"

            ],
            zero:[
                "ghost"
            ]
        },
        {
            "name": "Mach Punch",
            "type": "fighting",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A quick punch delivered with blinding speed.",
            double: [
                "normal",
                "ice",
                "rock",
                "dark",
                "steel"
            ],
            half:[
                "poison",
                "flying",
                "psychic",
                "bug",
                "fairy"

            ],
            zero:[
                "ghost"
            ]
        },
        {
            "name": "Close Combat",
            "type": "fighting",
            "power": 120,
            "acc": 100,
            "stamina_cost": 22,
            "description": "A relentless flurry of attacks at close range.",
            double: [
                "normal",
                "ice",
                "rock",
                "dark",
                "steel"
            ],
            half:[
                "poison",
                "flying",
                "psychic",
                "bug",
                "fairy"

            ],
            zero:[
                "ghost"
            ]
        },
        {
            "name": "Poison Fang",
            "type": "poison",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A vicious bite laced with toxins.",
            double: [
                "grass",
                "fairy"
            ],
            half:[
                "poison",
                "rock",
                "ground",
                "ghost"

            ],
            zero:[
                "steel"
            ]
        },
        {
            "name": "Sludge Bomb",
            "type": "poison",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A blast of poisonous sludge is hurled at the foe.",
            double: [
                "grass",
                "fairy"
            ],
            half:[
                "poison",
                "rock",
                "ground",
                "ghost"

            ],
            zero:[
                "steel"
            ]
        },
        {
            "name": "Venom Strike",
            "type": "poison",
            "power": 110,
            "acc": 85,
            "stamina_cost": 21,
            "description": "A deadly lunge infused with toxic energy.",
            double: [
                "grass",
                "fairy"
            ],
            half:[
                "poison",
                "rock",
                "ground",
                "ghost"

            ],
            zero:[
                "steel"
            ]
        },
        {
            "name": "Earth Spike",
            "type": "ground",
            "power": 60,
            "acc": 100,
            "stamina_cost": 16,
            "description": "Jagged spikes of earth rise up to strike the enemy.",
            double: [
                "fire",
                "electric",
                "poison",
                "rock",
                "steel"
            ],
            half:[
                "grass",
                "bug"

            ],
            zero:[
                "flying"
            ]
        },
        {
            "name": "Bulldoze",
            "type": "ground",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "The ground shakes violently underfoot.",
            double: [
                "fire",
                "electric",
                "poison",
                "rock",
                "steel"
            ],
            half:[
                "grass",
                "bug"

            ],
            zero:[
                "flying"
            ]
        },
        {
            "name": "Quake Crash",
            "type": "ground",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "A devastating seismic attack that shakes everything.",
             double: [
                "fire",
                "electric",
                "poison",
                "rock",
                "steel"
            ],
            half:[
                "grass",
                "bug"

            ],
            zero:[
                "flying"
            ]
        },
        {
            "name": "Mind Shock",
            "type": "psychic",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A mental blast rattles the opponent’s brain.",
            double: [
                "fighting",
                "poison"
            ],
            half:[
                "psychic",
                "steel"

            ],
            zero:[
                "dark"
            ]
        },
        {
            "name": "Psybeam",
            "type": "psychic",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A focused psychic beam strikes the enemy.",
            double: [
                "fighting",
                "poison"
            ],
            half:[
                "psychic",
                "steel"

            ],
            zero:[
                "dark"
            ]
        },
        {
            "name": "Psionic Crush",
            "type": "psychic",
            "power": 110,
            "acc": 90,
            "stamina_cost": 21,
            "description": "A crushing force overwhelms the target’s mind.",
            double: [
                "fighting",
                "poison"
            ],
            half:[
                "psychic",
                "steel"

            ],
            zero:[
                "dark"
            ]
        },
        {
            "name": "Icicle Spear",
            "type": "ice",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "Sharp icicles pierce through the enemy.",
            double: [
                "grass",
                "ground",
                "flying",
                "dragon"
            ],
            half:[
                "fire",
                "water",
                "ice",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Blizzard",
            "type": "ice",
            "power": 100,
            "acc": 85,
            "stamina_cost": 20,
            "description": "A freezing storm engulfs everything in sight.",
            double: [
                "grass",
                "ground",
                "flying",
                "dragon"
            ],
            half:[
                "fire",
                "water",
                "ice",
                "steel"

            ],
            zero:[
                
            ]            
        },
        {
            "name": "Glacial Impact",
            "type": "ice",
            "power": 120,
            "acc": 80,
            "stamina_cost": 22,
            "description": "A massive chunk of ice crashes down on the opponent.",
            double: [
                "grass",
                "ground",
                "flying",
                "dragon"
            ],
            half:[
                "fire",
                "water",
                "ice",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Dark Claw",
            "type": "dark",
            "power": 70,
            "acc": 100,
            "stamina_cost": 17,
            "description": "A sharp, shadowy slash strikes from the darkness.",
            double: [
                "psychic",
                "ghost"
            ],
            half:[
                "fighting",
                "dark",
                "fairy"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Night Slash",
            "type": "dark",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A swift attack cloaked in darkness.",
            double: [
                "psychic",
                "ghost"
            ],
            half:[
                "fighting",
                "dark",
                "fairy"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Abyssal Strike",
            "type": "dark",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "A powerful attack born from the shadows.",
            double: [
                "psychic",
                "ghost"
            ],
            half:[
                "fighting",
                "dark",
                "fairy"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Fairy Spark",
            "type": "fairy",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A twinkling burst of magical energy.",
            double: [
                "fighting",
                "dragon",
                "dark"
            ],
            half:[
                "fire",
                "poison",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Moonblast",
            "type": "fairy",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A mystical beam of lunar energy.",
            double: [
                "fighting",
                "dragon",
                "dark"
            ],
            half:[
                "fire",
                "poison",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Enchanting Blow",
            "type": "fairy",
            "power": 110,
            "acc": 90,
            "stamina_cost": 21,
            "description": "A beautifully devastating attack imbued with charm.",
            double: [
                "fighting",
                "dragon",
                "dark"
            ],
            half:[
                "fire",
                "poison",
                "steel"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Bug Bite",
            "type": "bug",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A sharp bite drains the enemy’s energy.",
            double: [
                "grass",
                "psychic",
                "dark"
            ],
            half:[
                "fire",
                "fighting",
                "poison",
                "ground",
                "flying",
                "ghost",
                "steel",
                "fairy"

            ],
            zero:[
                
            ]
        },
        {
            "name": "X-Scissor",
            "type": "bug",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A precise double slash from sharp claws.",
            double: [
                "grass",
                "psychic",
                "dark"
            ],
            half:[
                "fire",
                "fighting",
                "poison",
                "ground",
                "flying",
                "ghost",
                "steel",
                "fairy"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Swarm Frenzy",
            "type": "bug",
            "power": 110,
            "acc": 85,
            "stamina_cost": 21,
            "description": "A frenzied assault from countless tiny strikes.",
            double: [
                "grass",
                "psychic",
                "dark"
            ],
            half:[
                "fire",
                "fighting",
                "poison",
                "ground",
                "flying",
                "ghost",
                "steel",
                "fairy"

            ],
            zero:[
                
            ]
        },
        {
            "name": "Dragon Fang",
            "type": "dragon",
            "power": 60,
            "acc": 100,
            "stamina_cost": 16,
            "description": "A powerful bite imbued with draconic energy.",
            double: [
                "dragon"
            ],
            half:[
                "steel"

            ],
            zero:[
                "fairy"
            ]
        },
        {
            "name": "Dragon Pulse",
            "type": "dragon",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A mystical wave of draconic power surges forward.",
            double: [
                "dragon"
            ],
            half:[
                "steel"

            ],
            zero:[
                "fairy"
            ]
        },
        {
            "name": "Eternal Roar",
            "type": "dragon",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "A devastating roar shatters everything in its path.",
            double: [
                "dragon"
            ],
            half:[
                "steel"

            ],
            zero:[
                "fairy"
            ]
        }
    ]
}