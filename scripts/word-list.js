const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    {
    word: "whale",
        hint: "A large marine mammal known for its impressive size and intelligence."
    },
    {
        word: "harmony",
        hint: "A pleasing arrangement of parts or a state of agreement and balance."
    },
    {
        word: "library",
        hint: "A place where books and other informational materials are kept for use but not for sale."
    },
    {
        word: "photograph",
        hint: "An image captured by a camera."
    },
    {
        word: "garden",
        hint: "A plot of ground where plants, flowers, and vegetables are grown."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "treasure",
        hint: "Valuable items such as gold, jewels, or other precious objects."
    },
    {
        word: "giraffe",
        hint: "A tall African mammal with a very long neck and legs."
    },
    {
        word: "laughter",
        hint: "The act or sound of laughing."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "rain",
        hint: "Precipitation in the form of liquid water droplets."
    },
    {
        word: "eclipse",
        hint: "An event where one celestial body moves into the shadow of another celestial body."
    },
    {
        word: "night",
        hint: "The period of darkness in each twenty-four hours when the sun is below the horizon."
    },
    {
        word: "horizon",
        hint: "The line where the earth's surface and the sky appear to meet."
    },
    {
        word: "journey",
        hint: "The act of traveling from one place to another."
    },
    {
        word: "chess",
        hint: "A strategic board game for two players."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "quicksand",
        hint: "A loose, waterlogged area of sand that yields easily to pressure."
    },
    {
        word: "orchid",
        hint: "A diverse and widespread family of flowering plants with blooms that are often colorful and fragrant."
    },
    {
        word: "melody",
        hint: "A sequence of musical notes that are perceived as a single entity."
    },
    {
        word: "snowflake",
        hint: "A single ice crystal that has achieved a sufficient size and may have amalgamated with others, then falls through the Earth's atmosphere as snow."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "pyramid",
        hint: "A monumental structure with a square or triangular base and sloping sides that meet in a point at the top, often used as a tomb."
    },
    {
        word: "sapphire",
        hint: "A precious gemstone typically blue, but occurring in various colors, composed of corundum."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "lantern",
        hint: "A portable source of light, often enclosed to protect the flame or bulb."
    },
    {
        word: "echo",
        hint: "A sound that is reflected off a surface and heard again."
    },
    {
        word: "maple",
        hint: "A type of tree known for its distinctive leaf shape and syrup."
    },
    {
        word: "comet",
        hint: "A celestial object consisting of a nucleus of ice and dust that, when near the sun, has a visible coma and sometimes a tail."
    },
    {
        word: "crystal",
        hint: "A solid material whose atoms are arranged in a highly ordered, repeating pattern."
    },
    {
        word: "meadow",
        hint: "A field habitat vegetated by grass and other non-woody plants."
    },
    {
        word: "echo",
        hint: "A sound that is reflected off a surface and heard again."
    },
    {
        word: "falcon",
        hint: "A bird of prey known for its speed and agility."
    },
    {
        word: "paradise",
        hint: "A place or state of bliss, felicity, or delight."
    },
    {
        word: "labyrinth",
        hint: "A complicated irregular network of passages or paths in which it is difficult to find one's way; a maze."
    },
    {
        word: "quicksilver",
        hint: "Another name for the element mercury, known for its liquid state at room temperature."
    },
    {
        word: "tsunami",
        hint: "A series of large ocean waves typically caused by an underwater earthquake or volcanic eruption."
    },
    {
        word: "harvest",
        hint: "The process or period of gathering in crops."
    },
    {
        word: "nebula",
        hint: "A cloud of gas and dust in space, often a region where new stars are formed."
    },
    {
        word: "zenith",
        hint: "The highest point or peak."
    },
    {
        word: "mirage",
        hint: "An optical illusion caused by atmospheric conditions."
    },
    {
        word: "allegory",
        hint: "A story, poem, or picture that can be interpreted to reveal a hidden meaning, typically a moral or political one."
    },
    {
        word: "phantom",
        hint: "A ghost or an apparition."
    },
    {
        word: "miracle",
        hint: "An extraordinary event that is beyond human power and is ascribed to a supernatural cause."
    },
    {
        word: "radiance",
        hint: "Light or heat as emitted or reflected by something."
    },
    {
        word: "solstice",
        hint: "The time or date at which the sun reaches its maximum or minimum declination, marked by the longest and shortest days."
    },
    {
        word: "serendipity",
        hint: "The occurrence of events by chance in a happy or beneficial way."
    },
    {
        word: "elegance",
        hint: "The quality of being graceful and stylish in appearance or manner."
    },
    {
        word: "luminescence",
        hint: "The emission of light by a substance not resulting from heat."
    }
];