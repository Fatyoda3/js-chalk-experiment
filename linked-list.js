
import { red, green, blue, BGblue } from './Font-color.js'


import node from './node_obj.js';

const log = console.log;
class List {
    head;
    #tail;
    #size;
    constructor() {
        this.head = null;
        this.#tail = null;
        this.#size = 0;
    }
    /**
     * takes no arguments and returns an integer value 
     * @returns size of the list(@type int)
     */
    getSize() {
        return this.#size;
    }

    insertAtBeg(data) {

        if (this.head === null && this.#tail === null) {

            const t = new node(data);

            this.head = this.#tail = t;

        }


        else {
            const t = new node(data);
            t.next = this.head;
            this.head = t;
        }

        this.#size++;

    }


    insertAtEnd(data) {
        if (this.head === null && this.#tail === null) {

            this.insertAtBeg(data);

        }
        else {
            const t = new node(data);

            this.#tail.next = t;
            this.#tail = t;
            // this.#tail.next = new node(data);

            // this.#tail = this.#tail.next;//this works don't judge my code
        }
    }
    deleteAtBeg() {
        if (this.head === null) {
            log("empty list ");

        }

        else {
            if (this.head.next === null) {
                log('last node deleted');
                this.head = null;
            }
            else {
                // log(`node with this data ${this.head.data} deleted`)
                this.head = this.head.next;
                // log(`${this.head.data} is the new data at head`);
            }

        }
    }


    display() {
        let temp = this.head;

        if (temp === null) {
            log('list is empty ');

        }
        else {
            log(BGblue('____________________________________________________________________________________'));
            while (temp != null) {

                log(`data -> ${green(String(temp.data))} || next node-> ${blue(String(temp.next))}`);

                temp = temp.next;
            }

        }


    }

}

const tree = new List();
const tree2 = new List();

//tree 

tree.insertAtBeg(16);
tree.insertAtBeg(14);
tree.insertAtBeg(10);

///tree 2 

tree2.insertAtBeg(16);
tree2.insertAtBeg(14);
tree2.insertAtBeg(10);



// tree.display()


var mergeTwoLists = function (list1, list2) {
    let arr = [];

    let t = list1;

    while (t != null) {

        arr.push(t);
        t = t.next;
    }

    t = list2;

    while (t != null) {

        arr.push(t);
        t = t.next;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].data < arr[j].data) {

                let temp = arr[i];

                arr[i] = arr[j]

                arr[j] = temp;

            }
        }
    }

    for (let index = 0; index < arr.length; index++) {
        /*   console.log(arr[index].data) */
        if (index < arr.length - 1)
            arr[index].next = arr[index + 1]


    }

    arr[arr.length] = null;

    let k = arr[0];

    console.log(k)


    while (k) {
        console.log(k.data);
        k = k.next;
    }



};


// mergeTwoLists(tree.head, tree2.head);

var maxProfit = function (prices) {

    let smallest = prices[0];

    let day;

    for (let i = 0; i < prices.length; i++) {
        if (smallest >= prices[i]) {
            smallest = prices[i];
            day = i;
        }
        
    }
    let biggest = smallest;

    for (let i = day; i < prices.length; i++) {
        if (biggest < prices[i]) {
            biggest = prices[i];
        }

    }

    if (biggest - smallest > 0) {
        return biggest - smallest;
    }
    else
        return 0;
};
console.log(maxProfit([1,2]));