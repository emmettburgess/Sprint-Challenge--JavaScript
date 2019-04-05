// this won't work unless the prototype code is commented out

class CuboidMaker2 {
    constructor(stats) {
    this.length = stats.length;
    this.width = stats.width;
    this.height = stats.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  
  };
  
  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid2.volume()); // 100
 console.log(cuboid2.surfaceArea()); // 130



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(stats) {
        super(stats)
    }
    volume() {
        return this.height * this.height * this.height;
    }
    surfaceArea() {
        return 6 * (this.height * this.height);
    }
}

const cube = new CubeMaker({
    height: 2,
});

console.log(cube.surfaceArea()); //24
console.log(cube.volume()); //8