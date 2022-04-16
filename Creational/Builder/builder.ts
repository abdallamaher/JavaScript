class House {
    doors: Number;
    windows: Number;
    garden: Boolean;
    roof: Boolean;
    constructor() {}
    buildHouse() {
      console.log("Building Started....");
      console.log("doors are", this.doors);
      console.log("windows are", this.windows);
      console.log("garden is", this.garden);
      console.log("roof is", this.roof);
      console.log("Building Finished....");
    }
  }
  
  interface Builder {
    house: House;
    build(): House;
    setDoors(doors: Number);
    setWindows(windows: Number);
    setGarden(garden: Boolean);
    setRoof(roof: Boolean);
    reset();
  }
  
  class HouseBuilderA implements Builder {
    house: House;
    constructor() {
      this.house = new House();
    }
    setDoors(doors) {
      this.house.doors = doors;
    }
    setWindows(windows) {
      this.house.windows = windows;
    }
    setGarden(garden) {
      this.house.garden = garden;
    }
    setRoof(roof) {
      this.house.roof = roof;
    }
    build(): House {
      const houseTemp = this.house;
      this.reset();
      return houseTemp;
    }
    reset() {
      this.house = new House();
    }
  }
  
  
  class Director {
    builder: Builder;
    setBuilder(builder: Builder) {
      this.builder = builder;
    }
    builderNormalHouse() {
      this.builder.setDoors(1);
      this.builder.setWindows(1);
      this.builder.setGarden(false);
      this.builder.setRoof(false);
    }
    buildLuxuryHouse() {
      this.builder.setDoors(100);
      this.builder.setWindows(100);
      this.builder.setGarden(true);
      this.builder.setRoof(true);
    }
  }
  function main() {
    const houseBuilder = new HouseBuilderA();
    const director = new Director();
    director.setBuilder(houseBuilder);
    director.buildLuxuryHouse();
  
    const luxuryHouse = houseBuilder.build();
  
    director.builderNormalHouse();
  
    const normalHouse = houseBuilder.build();
  
    luxuryHouse.buildHouse();
    normalHouse.buildHouse();
  }
  
  main();