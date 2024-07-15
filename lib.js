class Position {
    #x;
    #y;
    #direction;
    #magnitude;

    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
        this.#direction = normalise(x, y);
        this.#magnitude = Math.hypot(x, y);
    }

    update(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
        this.#direction = normalise(x, y);
        this.#magnitude = Math.hypot(x, y);
    }

    getVector() {
        return {
            x: this.#x,
            y: this.#y,
            direction: this.#direction,
            magnitude: this.#magnitude
        }
    }

    addVelocity(velocity) {
        this.#x += velocity.x;
        this.#y += velocity.y;
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
        this.#direction = normalise(x, y);
        this.#magnitude = Math.hypot(x, y);
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
        this.#direction = normalise(x, y);
        this.#magnitude = Math.hypot(x, y);
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
    normalise: normalise,
    getAngleBetweenVectors: getAngleBetweenVectors,
    getPolarComponents: getPolarComponents,
    getCartesianComponents: getCartesianComponents
}
