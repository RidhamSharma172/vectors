class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }

    addVelocity(velocity) {
        this.x += velocity.x;
        this.y += velocity.y;
        return this;
    }
}

class Velocity {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    addVelocity(x = 0, y = 0) {
        if (typeof x == "object") {
            this.x += x.x;
            this.y += x.y;
            return this;
        }
        this.x += x;
        this.y += y;
        return this;
    }
}

function normalise(vector) {
    const magnitude = Math.hypot(vector.x, vector.y);
    const newVector = {...vector};
    newVector.x = newVector.x / magnitude;
    newVector.y = newVector.y / magnitude;
    return newVector;
}

module.exports = {
    Position: Position,
    Velocity: Velocity,
    normalise: normalise
}
