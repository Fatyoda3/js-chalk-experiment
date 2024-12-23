class stack {
    #array;
    #size;
    #top;

    constructor() {

        this.#array = [];
        this.#size = 0;
        this.#top = null;

    }

    #setTop() {
        this.#top = this.#array[this.#array.length - 1];
    }
    getSize() {
        return this.#size;
    }
    #isEmpty() {
        return !this.#size ? true : false;
    }
    checkEmpty() {
        this.#isEmpty() ? console.log('stack has no content') : console.log("stack is not empty")
    }
    push(data) {
        console.log(this.#array[this.#size++] = data);
        this.#setTop()

    }
    pop() {

        if (this.#isEmpty())
            console.log('stack is empty please add some content first.');
        else {
            console.log("stack content popped --> " + this.#array.pop());
            this.#setTop();
            this.#size--;
        }
    }

    peek() {
        if (!this.#isEmpty()) {
            console.log('value at top --> ' + this.#size + ' ' + this.#top);
            return this.#top;
        }
        else
            console.log('stack is empty');
        return null;

    }


}
let myRoll = new stack()


myRoll.push(5);
myRoll.push(4);

myRoll.pop()

myRoll.push(3);

myRoll.push(1);

myRoll.pop()

myRoll.pop()

myRoll.peek()

// console.log(myRoll.getSize())
myRoll.pop()
// myRoll.checkEmpty()
// console.log(myRoll.getSize())
