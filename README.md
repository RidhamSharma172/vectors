# Vectors
vectors is a simple 2d vector library made for simplicity and basic functions related to vectors.

# Installation
**Step 1**: Open the terminal
**Step 2**: type `npm install @ridhamsharma172/vectors` or `yarn add @ridhamsharma172/vectors` if you use yarn and hit enter.

# Creating Vectors

## Creating Velocity Vectors
To create a velocity vector you can use `Velocity` class.

Code Example:
```
const vectors = require("@ridhamsharma172/vectors");

// Creating a vector
const positionVector = new vectors.Velocity(10, 0);
```

`vectors.Velocity(x, y)` requires two arguments (If not entered then it will get a value of 0 as default) x and y which are their cartesian components of the velocity vector.

### Methods of Velocity Class

**`update(x, y)`**: **Used To update or change the value of vector**. It has two arguments x and y which are the cartesian component of the vector.

Example:
```
const {Velocity} = require("@ridhamsharma172/vectors");

const velocityVector = new Velocity(2, 3); // A vector
velocityVector.update(4, 5); // vector value gets changed and now it is (4, 5) and not (2, 3);
```

**`add(x, y)`**: **Used To add another vector to the current one**. It has two arguments x and y which are the cartesian component of the vector which is going to be added into the current one.

Example:
```
const {Velocity} = require("@ridhamsharma172/vectors");

const velocityVector = new Velocity(2, 3); // A vector
velocityVector.add(3, 5); // vector value gets changed and now it is (5, 8) and not (2, 3);
```

**`getVector()`**: **Returns the properties of the vector(cartesian components and polar components)**.

Example:
```
const {Velocity} = require("@ridhamsharma172/vectors");

const velocityVector = new Velocity(2, 3); // A vector
velocityVector.getVector(); // getting all the vector properties
```

## Creating Position Vectors
To create a position vector you can use `Position` class.

Code Example:
```
const {Position} = require("@ridhamsharma172/vectors"); // getting the module

// Creating a vector
const Position = new Position(23, 32);
```

`Position(x, y)` requires two arguments (If not entered then it will get a value of 0 as default) x and y which are their cartesian coordinates.

### Methods of Velocity Class

**`update(x, y)`**: **Used To update or change the value of vector**. It has two arguments x and y which are the cartesian component of the vector.

Example:
```
const {Position} = require("@ridhamsharma172/vectors");

const vector = new Position(2, 3); // A vector
vector.update(4, 5); // vector value gets changed and now it is (4, 5) and not (2, 3);
```

**`add(x, y)`**: **Used To add another vector to the current position(could be used to simulate movement, change in position etc)**. It has two arguments x and y which are the cartesian component of the vector which is going to be added into the current one.

Example:
```
const {Position, Velocity} = require("@ridhamsharma172/vectors");

const positionVector = new Position(2, 3); // A vector
velocityVector.add(3, 5); // vector value gets changed and now it is (5, 8) and not (2, 3);
```

**`getVector()`**: **Returns the properties of the vector(cartesian components and polar components - x, y, magnitude and direction)**.

Example:
```
const {Position} = require("@ridhamsharma172/vectors");

const positionVector = new Position(2, 3); // A vector
positionVector.getVector(); // getting all the vector properties
```

# Normalising a vector
A function `normalise(vector)` is given to normalise vectors.

You have to pass the vector to get normalised and then it will return a normalised vector of the given vector.

Code Example:
```
const {normalise, Velocity} = require("@ridhamsharma172/vectors");

// Assigning a vector
const vector = new Velocity(10, 0);

// Normalising the vector
const normalisedVector = normalise(vector.getVector().x, velocity.getVector.y);
```


# Getting angle between vectors
A function `getAngleBetweenVectors(vector1, vector2)` is given to get the angle between any two vectors

Code Example:
```
const {Velocity, getAngleBetweenVectors} = require("@ridhamsharma172/vectors");

const vector = new Velocity(10, 3);
const vector2 = new Velocity(23, 72);


const angle = getAngleBetweenVectors(vector.getVector(), vector2.getVector());
```

# Getting polar components from the cartesian components

**NOTE: When you use `getVector()` in the return object polar components are also returned (magnitude, direction) so you can get them using `getVector()` easily if they're made using the vector classes**

If you want the polar components from cartesian components of vector you can use `getPolarComponents(x, y)`. It has two arguments (x, y) which are cartesian components of vectors.


Code Example:
```
const {getPolarComponents, Velocity} = require("@ridhamsharma172/vectors");

console.log(getPolarComponents(1, 1));

// Or you can do this
const newVector = new Velocity(1, 1);
console.log({x: newVector.getVector().x, y: newVector.getVector().y}); // You can also do this
```


# Getting Cartesian components from the polar components

**NOTE: When you use `getVector()` in the return object Cartesian components are also returned (x, y) so you can get them using `getVector()` easily if they're made using the vector classes**
If you want the cartesian components from polar components of vector you can use `getCartesianComponents(magnitude, direction)`. It has two arguments (magnitude, direciton) which are polar components of vectors.


Code Example:
```
const {getCartesianComponents, Velocity} = require("@ridhamsharma172/vectors");

console.log(getCartesianComponents(1, 1));

// Or you can do this
const newVector = new Velocity(1, 1);
console.log({magnitude: newVector.getVector().magnitude, direction: newVector.getVector().direction}); // You can also do this
```
