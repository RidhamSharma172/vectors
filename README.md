# Vectors
vectors is a simple vector library made for simplicity and basic functions related to vectors.

# Installation
**Step 1**: Open the terminal
**Step 2**: type `npm install @ridhamsharma172/vectors` or `yarn add @ridhamsharma172/vectors` if you use yarn and hit enter.

# Creating Vectors

## Creating Velocity Vectors
To create a velocity vector you can use `Velocity` class.

Code Example:
```
const vectors = require("@ridhamsharma172/vectors"); // getting the module

// Creating a vector
const positionVector = new vectors.Velocity(10, 0);
```

`vectors.Velocity(x, y)` requires two arguments (If not entered then it will get a value of 0 as default) x and y which are their cartesian components of the velocity vector.

### Methods of Position Class
Position class provides methods like, `getPosition()` which returns the current position of the vector and also `addVelocity(velocityVector)` which returns the final position of the position vector after moving in the direction of the provided velocity.

Example use case:
```
const vectors = require("@ridhamsharma172/vectors");

// Just for  the sake code readability
const Position = vectors.Position;
const Velocity = vectors.Velocity;

// Creating a particle position vector
const particle = new Position(100, 100);

// Particle velocity
const velocity = new Velocity(10, 0);

// particle moves 10units +x axis
particle.addVelocity(velocity);
```

## Creating Position Vectors
To create a position vector you can use `Position` class.

Code Example:
```
const vectors = require("@ridhamsharma172/vectors"); // getting the module

// Creating a vector
const positionVector = new vectors.Position(23, 32);
```

`vectors.Position(x, y)` requires two arguments (If not entered then it will get a value of 0 as default) x and y which are their cartesian coordinates.

### Methods of Velocity Class
Position class provides methods like, `getPosition()` which returns the current position of the vector and also `addVelocity(velocityVector)` which returns the final position of the position vector after moving in the direction of the provided velocity.

Example use case:
```
const vectors = require("@ridhamsharma172/vectors");

// Just for  the sake code readability
const Velocity = vectors.Velocity;

const vector1 = new Velocity(10, 0);
const vector2 = new Velocity(23, 11);

// Adding vector2 to vector1
vector1.addVelocity(vector2);

// Or you can also add vector like this
vector1.addVelocity(17, 89); // Where 17 is x component of the cartesian components and 89 is y

// Or you can just pass an object containing the x and y cartesian components
vector1.addVelocity({x: 12, y: -32});
```

# Normalising a vector
A function `normalise(vector)` is given to normalise vectors.

You have to pass the vector to get normalised and then it will return a normalised vector of the given vector.

Code Example:
```
const vectors = require("@ridhamsharma172/vectors");

// Just for  the sake code readability
const Velocity = vectors.Velocity;
const normalise = vectors.normalise;

// Assigning a vector
const vector = new Velocity(10, 0);

// Normalising the vector
const normalisedVector = normalise(vector);
```
