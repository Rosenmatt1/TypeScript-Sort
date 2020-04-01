class Sorter {
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }
  constructor(public collection: number[]) {
  }

  // What if collection is a string?  Strings are immutable?

  sort(): void {
    // const length = this.collection.length;
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j <= length - i - 1; j++) {

        //All of this only works if collection is nummber[]
        //Ifcollection is an array of nunbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0])
console.log("before", sorter.collection)
sorter.sort()
console.log("after", sorter.collection)


