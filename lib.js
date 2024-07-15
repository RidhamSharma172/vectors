class Position {
    #x;
    #y;
    #direction;
    #magnitude;

    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
        this.#direction = getPolarComponents(x, y).direction;
        this.#magnitude = getPolarComponents(x, y).magnitude;
    }

    update(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
        this.#direction = getPolarComponents(x, y).direction;
        this.#magnitude = getPolarComponents(x, y).magnitude;
    }

    getVector() {
        return {
            x: this.#x,
            y: this.#y,
            direction: this.#direction,
            magnitude: this.#magnitude
        }
    }

    add(x = 0, y = 0) {
        if (typeof x == "object") {
            this.#x += x.x;
            this.#y += x.y;
            return this;
        }
        this.#x += x;
        this.#y += y;
        return this;
    }
}

class Velocity {
    #x;
    #y;
    #direction;
    #magnitude;

    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
        this.#direction = getPolarComponents(x, y).direction;
        this.#magnitude = getPolarComponents(x, y).magnitude;
    }

    getVector() {
        return {
            x: this.#x,
            y: this.#y,
            direction: this.#direction,
            magnitude: this.#magnitude
        }
    }

    update(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
        this.#direction = getPolarComponents(x, y).direction;
        this.#magnitude = getPolarComponents(x, y).magnitude;
    }

    add(x = 0, y = 0) {
        if (typeof x == "object") {
            this.#x += x.x;
            this.#y += x.y;
            return this;
        }
        this.#x += x;
        this.#y += y;
        return this;
    }
}

class Unit {
    #x;
    #y;
    #direction;
    #magnitude;
    constructor(x, y) {
        if (x > 1 || x < -1 || y > 1 || y < -1) throw "Invalid Values for a unit Vector, Values must lie in between 1 and -1";
        this.#x = x;
        this.#y = y;
        this.#direction = getPolarComponents(x, y).direction;
        this.#magnitude = getPolarComponents(x, y).magnitude;
    }

    getVector() {
        return {
            x: this.#x,
            y: this.#y,
            direction: this.#direction,
            magnitude: this.#magnitude
        }
    }

    update(x = 0, y = 0) {
        if (x > 1 || x < -1 || y > 1 || y < -1) throw "Invalid Values for a unit Vector, Values must lie in between 1 and -1";
        this.#x = x;
        this.#y = y;
        this.#direction = getPolarComponents(x, y).direction;
        this.#magnitude = getPolarComponents(x, y).magnitude;
    }
}

function normalise(x, y) {
    const magnitude = Math.hypot(x, y);
    const newX = x / magnitude;
    const newY = y / magnitude;
    return { x: newX, y: newY};
}

function getAngleBetweenVectors(vector1, vector2) {
    const _vector1 = getPolarComponents(vector1.x, vector1.y);
    const _vector2 = getPolarComponents(vector2.x, vector2.y);
    return Math.abs(_vector1.direction - _vector2.direction);
}

function getPolarComponents(x, y) {
    const magnitude = Math.hypot(x, y);
    const direction = Math.atan2(x, y);

    return {magnitude: magnitude, direction: direction};
}

function getCartesianComponents(magnitude, direction) {
    const x = Math.cos(direction) * magnitude;
    const y = Math.sin(direction) * magnitude;

    return {x: x, y: y}
}

module.exports = {
    Position: Position,
    Velocity: Velocity,
    Unit: Unit,
    normalise: normalise,
    getAngleBetweenVectors: getAngleBetweenVectors,
    getPolarComponents: getPolarComponents,
    getCartesianComponents: getCartesianComponents
}

