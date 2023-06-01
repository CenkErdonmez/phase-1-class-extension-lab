// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) {
      return false;
    }

    const [a, b, c] = this.sides;
    return a + b > c && b + c > a && c + a > b;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) {
      return false;
    }

    const side = this.sides[0];
    return this.sides.every(s => s === side);
  }

  get area() {
    if (!this.isValid) {
      return 'Invalid square';
    }

    const side = this.sides[0];
    return side * side;
  }
}