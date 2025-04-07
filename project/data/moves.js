let attacks={
    
    "moves": [
        {
            "name": "Ember",
            "type": "fire",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A small burst of flames that lightly scorches the foe."
        },
        {
            "name": "Flame Burst",
            "type": "fire",
            "power": 70,
            "acc": 100,
            "stamina_cost": 17,
            "description": "A fiery explosion that spreads upon impact."
        },
        {
            "name": "Inferno",
            "type": "fire",
            "power": 100,
            "acc": 85,
            "stamina_cost": 20,
            "description": "A raging fire engulfs the enemy in searing flames."
        },
        {
            "name": "Aerial Slash",
            "type": "flying",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A sharp gust of wind slices through the enemy."
        },
        {
            "name": "Hurricane",
            "type": "flying",
            "power": 90,
            "acc": 85,
            "stamina_cost": 19,
            "description": "A powerful storm hurls enemies into the air."
        },
        {
            "name": "Sky Assault",
            "type": "flying",
            "power": 120,
            "acc": 75,
            "stamina_cost": 22,
            "description": "A devastating dive-bomb attack from above."
        },
        {
            "name": "Iron Claw",
            "type": "steel",
            "power": 60,
            "acc": 100,
            "stamina_cost": 16,
            "description": "A razor-sharp metal claw slashes through defenses."
        },
        {
            "name": "Steel Crash",
            "type": "steel",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A full-force metallic slam."
        },
        {
            "name": "Titan Bash",
            "type": "steel",
            "power": 110,
            "acc": 85,
            "stamina_cost": 21,
            "description": "An unstoppable strike with the weight of a titan."
        },
        {
            "name": "Rock Throw",
            "type": "rock",
            "power": 50,
            "acc": 90,
            "stamina_cost": 15,
            "description": "Hurls small rocks at the foe."
        },
        {
            "name": "Stone Edge",
            "type": "rock",
            "power": 100,
            "acc": 80,
            "stamina_cost": 20,
            "description": "Jagged stones cut through the enemy."
        },
        {
            "name": "Boulder Crush",
            "type": "rock",
            "power": 120,
            "acc": 75,
            "stamina_cost": 22,
            "description": "A massive boulder is dropped on the target."
        },
        {
            "name": "Aqua Jet",
            "type": "water",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A quick burst of water propels the attacker forward."
        },
        {
            "name": "Waterfall",
            "type": "water",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A fierce wave crashes into the opponent."
        },
        {
            "name": "Hydro Cannon",
            "type": "water",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "An ultra-powerful blast of water."
        },
        {
            "name": "Thunder Shock",
            "type": "electric",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A weak jolt of electricity zaps the opponent."
        },
        {
            "name": "Thunderbolt",
            "type": "electric",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A strong electric bolt strikes the foe."
        },
        {
            "name": "Volt Crash",
            "type": "electric",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "A shocking surge of electricity slams into the enemy."
        },
        {
            "name": "Leaf Slash",
            "type": "grass",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A sharp leaf slices through the foe."
        },
        {
            "name": "Solar Beam",
            "type": "grass",
            "power": 120,
            "acc": 100,
            "stamina_cost": 22,
            "description": "A beam of sunlight is gathered and unleashed."
        },
        {
            "name": "Vine Whip",
            "type": "grass",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "Vines lash out at the opponent."
        },
        {
            "name": "Shadow Claw",
            "type": "ghost",
            "power": 70,
            "acc": 100,
            "stamina_cost": 17,
            "description": "A shadowy claw slashes at the enemy."
        },
        {
            "name": "Phantom Strike",
            "type": "ghost",
            "power": 90,
            "acc": 85,
            "stamina_cost": 19,
            "description": "A spectral attack phases through defenses."
        },
        {
            "name": "Spirit Crush",
            "type": "ghost",
            "power": 110,
            "acc": 80,
            "stamina_cost": 21,
            "description": "A powerful blow that saps the target’s will."
        },
        {
            "name": "Tackle",
            "type": "normal",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A simple but effective full-body charge."
        },
        {
            "name": "Body Slam",
            "type": "normal",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A heavy slam crushes the opponent."
        },
        {
            "name": "Giga Impact",
            "type": "normal",
            "power": 120,
            "acc": 90,
            "stamina_cost": 22,
            "description": "A full-force charge that leaves the user exhausted."
        },
        {
            "name": "Brick Break",
            "type": "fighting",
            "power": 75,
            "acc": 100,
            "stamina_cost": 17,
            "description": "A powerful strike that shatters barriers."
        },
        {
            "name": "Mach Punch",
            "type": "fighting",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A quick punch delivered with blinding speed."
        },
        {
            "name": "Close Combat",
            "type": "fighting",
            "power": 120,
            "acc": 100,
            "stamina_cost": 22,
            "description": "A relentless flurry of attacks at close range."
        },
        {
            "name": "Poison Fang",
            "type": "poison",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A vicious bite laced with toxins."
        },
        {
            "name": "Sludge Bomb",
            "type": "poison",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A blast of poisonous sludge is hurled at the foe."
        },
        {
            "name": "Venom Strike",
            "type": "poison",
            "power": 110,
            "acc": 85,
            "stamina_cost": 21,
            "description": "A deadly lunge infused with toxic energy."
        },
        {
            "name": "Earth Spike",
            "type": "ground",
            "power": 60,
            "acc": 100,
            "stamina_cost": 16,
            "description": "Jagged spikes of earth rise up to strike the enemy."
        },
        {
            "name": "Bulldoze",
            "type": "ground",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "The ground shakes violently underfoot."
        },
        {
            "name": "Quake Crash",
            "type": "ground",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "A devastating seismic attack that shakes everything."
        },
        {
            "name": "Mind Shock",
            "type": "psychic",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A mental blast rattles the opponent’s brain."
        },
        {
            "name": "Psybeam",
            "type": "psychic",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A focused psychic beam strikes the enemy."
        },
        {
            "name": "Psionic Crush",
            "type": "psychic",
            "power": 110,
            "acc": 90,
            "stamina_cost": 21,
            "description": "A crushing force overwhelms the target’s mind."
        },
        {
            "name": "Icicle Spear",
            "type": "ice",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "Sharp icicles pierce through the enemy."
        },
        {
            "name": "Blizzard",
            "type": "ice",
            "power": 100,
            "acc": 85,
            "stamina_cost": 20,
            "description": "A freezing storm engulfs everything in sight."
        },
        {
            "name": "Glacial Impact",
            "type": "ice",
            "power": 120,
            "acc": 80,
            "stamina_cost": 22,
            "description": "A massive chunk of ice crashes down on the opponent."
        },
        {
            "name": "Dark Claw",
            "type": "dark",
            "power": 70,
            "acc": 100,
            "stamina_cost": 17,
            "description": "A sharp, shadowy slash strikes from the darkness."
        },
        {
            "name": "Night Slash",
            "type": "dark",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A swift attack cloaked in darkness."
        },
        {
            "name": "Abyssal Strike",
            "type": "dark",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "A powerful attack born from the shadows."
        },
        {
            "name": "Fairy Spark",
            "type": "fairy",
            "power": 50,
            "acc": 100,
            "stamina_cost": 15,
            "description": "A twinkling burst of magical energy."
        },
        {
            "name": "Moonblast",
            "type": "fairy",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A mystical beam of lunar energy."
        },
        {
            "name": "Enchanting Blow",
            "type": "fairy",
            "power": 110,
            "acc": 90,
            "stamina_cost": 21,
            "description": "A beautifully devastating attack imbued with charm."
        },
        {
            "name": "Bug Bite",
            "type": "bug",
            "power": 40,
            "acc": 100,
            "stamina_cost": 14,
            "description": "A sharp bite drains the enemy’s energy."
        },
        {
            "name": "X-Scissor",
            "type": "bug",
            "power": 80,
            "acc": 100,
            "stamina_cost": 18,
            "description": "A precise double slash from sharp claws."
        },
        {
            "name": "Swarm Frenzy",
            "type": "bug",
            "power": 110,
            "acc": 85,
            "stamina_cost": 21,
            "description": "A frenzied assault from countless tiny strikes."
        },
        {
            "name": "Dragon Fang",
            "type": "dragon",
            "power": 60,
            "acc": 100,
            "stamina_cost": 16,
            "description": "A powerful bite imbued with draconic energy."
        },
        {
            "name": "Dragon Pulse",
            "type": "dragon",
            "power": 90,
            "acc": 100,
            "stamina_cost": 19,
            "description": "A mystical wave of draconic power surges forward."
        },
        {
            "name": "Eternal Roar",
            "type": "dragon",
            "power": 120,
            "acc": 85,
            "stamina_cost": 22,
            "description": "A devastating roar shatters everything in its path."
        }
    ],
    "special_moves": [
        {
            "name": "Phantom Slash",
            "type": "ghost",
            "power": 100,
            "acc": 100,
            "stamina_cost": 30,
            "description": "Ignores enemy resistances when used",
            "exclusive_to": ["aegislash", "gengar", "haunter"]
        },
        {
            "name": "Molten Sky Strike",
            "type": "fire",
            "power": 110,
            "acc": 90,
            "stamina_cost": 31,
            "description": "If the user is flying-type, it deals additional burn damage",
            "exclusive_to": ["charizard", "blaziken"]
        },
        {
            "name": "Titanic Tremor",
            "type": "rock",
            "power": 120,
            "acc": 85,
            "stamina_cost": 32,
            "description": "Hits all opponents on the battlefield",
            "exclusive_to": ["geodude", "onix", "steelix", "rhyhorn"]
        },
        {
            "name": "Mystic Mirage",
            "type": "psychic",
            "power": 90,
            "acc": 100,
            "stamina_cost": 29,
            "description": "Speed increases by one stage after use",
            "exclusive_to": ["gardevoir", "mewtwo", "wobbuffet"]
        },
        {
            "name": "Toxic Barrage",
            "type": "poison",
            "power": 85,
            "acc": 100,
            "stamina_cost": 28,
            "description": "Always poisons the target",
            "exclusive_to": ["drapion", "skuntank", "haunter"]
        },
        {
            "name": "Glacial Spear",
            "type": "ice",
            "power": 100,
            "acc": 95,
            "stamina_cost": 30,
            "description": "Has a 30% chance to freeze",
            "exclusive_to": ["articuno", "glaceon"]
        },
        {
            "name": "Lightning Blitz",
            "type": "electric",
            "power": 90,
            "acc": 100,
            "stamina_cost": 29,
            "description": "If the user attacks first, the move deals 50% extra damage",
            "exclusive_to": ["pikachu", "electrike"]
        },
        {
            "name": "Sky Rupture",
            "type": "flying",
            "power": 120,
            "acc": 80,
            "stamina_cost": 32,
            "description": "Breaks through Protect and similar moves",
            "exclusive_to": ["rayquaza", "tornadus", "yveltal"]
        },
        {
            "name": "Royal Guard",
            "type": "steel",
            "power": 0,
            "acc": 100,
            "stamina_cost": 20,
            "description": "For one turn, the user takes half damage and cannot be critically hit",
            "exclusive_to": ["zamazenta", "metagross", "aegislash"]
        },
        {
            "name": "Adaptive Form",
            "type": "normal",
            "power": 80,
            "acc": 100,
            "stamina_cost": 28,
            "description": "Changes type based on the user's primary type",
            "exclusive_to": ["ditto", "eevee", "togetic"]
        },
        {
            "name": "Draconic Onslaught",
            "type": "dragon",
            "power": 130,
            "acc": 85,
            "stamina_cost": 33,
            "description": "User's speed decreases after use",
            "exclusive_to": ["dragonite", "dragapult", "rayquaza"]
        },
        {
            "name": "Feral Beatdown",
            "type": "fighting",
            "power": 100,
            "acc": 95,
            "stamina_cost": 30,
            "description": "Has a 50% chance to lower the opponent’s defense",
            "exclusive_to": ["machamp", "flamigo", "lucario"]
        }
    ]
}