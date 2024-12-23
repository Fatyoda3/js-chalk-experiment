
import { red, green, blue, BGblue } from './Font-color.js'


class tNode {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {

    #size;
    constructor() {
        this.root = null;
        this.#size = 0;
    }

    getSize() { return this.#size }


    insert(data) {
        const n = new tNode(data);

        if (this.root == null)

            this.root = n;

        else

            this.#insertNode(n, this.root);

        this.#size++;
    }

    #insertNode(node, root) {
        if (root.data > node.data) {
            if (root.left === null)
                root.left = node;
            else /* if (root.left != null) */
                this.#insertNode(node, root.left);


        }
        else {

            if (root.right === null)
                root.right = node;
            else
                this.#insertNode(node, root.right);
        }

    }


    search(key) {
        if (this.#size == 0) {
            console.log(blue("tree is empty "));
        }
        else {
            let root = this.root;
            let depth = 0;
            while (root != null) {

                depth++;

                if (root.data === key) {
                    console.log("value found --> " + green(String(root.data)) + " at depth " + blue(String(depth)));
                    return true;
                }

                else {
                    if (root.data > key) {
                        root = root.left;
                    }
                    else {

                        root = root.right;
                    }
                }



            }




        }

    }

    searchRec(key, root) {//23 to search
        if (!root) {
            console.log("node not found ");
            return;
        };
        if (key === root.data && root) {//
            console.log("found node")
            // return true;
            return;
        }
        else {
            if (root.data > key) {
                this.searchRec(key, root.left);
            }
            else {

                this.searchRec(key, root.right);
            }
        }



    }


}

const tree = new Tree();
// tree.insert(5);
tree.insert(5);
tree.insert(25);
tree.insert(23);
tree.insert(19);
// tree.insert(81);
// tree.search(5)
/* tree.search(25)
tree.search(23)
tree.search(19) */
// [2, 3, 11, 45, 555].forEach(e => tree.insert(e));
// console.log(tree.root);
for (let index = 0; index < 5; index++) {

    // tree.insert(Math.random() * index + 1);
}


tree.searchRec(213, tree.root)

