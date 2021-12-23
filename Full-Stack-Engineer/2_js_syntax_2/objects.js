// Creating Object Literals

let spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
};

// Accessing Properties

let spaceship1 = {
    homePlanet: 'Earth',
    color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

// Bracket Notation

let spaceship2 = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

console.log(spaceship2["Active Duty"])

// Eigenschaftszuweisung

const spaceship3 = {type: 'shuttle'};
// spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

const spaceship4 = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    mission: 'Explore the universe'
};

delete spaceship.mission;  // Removes the mission property

// Methods

const alienShip5 = {
    invade: function () {
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};
alienShip5.invade() // print 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

// Mit der in ES6 eingeführten neuen Methodensyntax können wir den Doppelpunkt und das functionSchlüsselwort weglassen .
const alienShip6 = {
invade () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

// Nested Objects

const spaceship7 = {
    telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') }
        }
    },
    engine: {
        model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: 'HD'
        },
        'back-up': {
            battery: 'Lithium',
            terabytes: 50
        }
    }
};

spaceship7.nanoelectronics['back-up'].battery; // Returns 'Lithium'

let spaceship8 = {
    homePlanet : 'Earth',
    color : 'red'
};
let tryReassignment = obj => {
    obj = {
        identified : false,
        'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(spaceship8) // The attempt at reassignment does not work.
spaceship8 // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship8 = {
    identified : false,
    'transport type': 'flying'
}; // Regular reassignment still works.



// Pass By Reference


let spaceship10 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = (obj) => {
    obj['Fuel Type'] = 'avocado oil'
}

let remotelyDisable = obj => {
    obj.disabled = true;
}
greenEnergy(spaceship10)
console.log(spaceship10)
remotelyDisable(spaceship10)
console.log(spaceship10)

// Looping Through Objects

let spaceship11 = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// for...in
for (let crewMember in spaceship11.crew) {
    console.log(`${crewMember}: ${spaceship11.crew[crewMember].name}`);
}