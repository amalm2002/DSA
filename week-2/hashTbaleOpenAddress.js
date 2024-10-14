class Table {
    constructor(size) {
        this.table = new Array(size)
        this.keys = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        } return total % this.size
    }

    linearProb(index) {
        let newIndex = index
        while (this.table[newIndex] !== undefined && this.keys[newIndex] !== null) {
            newIndex = (newIndex + 1) % this.size
        } return newIndex
    }

    set(key, value) {
        let index = this.hash(key)
        while (this.table[index] !== undefined && this.keys[index] != null) {
            index = this.linearProb(index)
        }
        this.table[index] = value
        this.keys[index] = key
    }

    get(key) {
        let index = this.hash(key)
        while (this.table[index] !== undefined) {
            if (this.keys[index] === key) {
                console.log(this.table[index]);
                return this.table[index]
            }
            index = (index + 1) % this.size
        }
        console.log('the key is not get');
        return undefined
    }

    remove(key) {
        let index = this.hash(key)
        while (this.table[index] !== undefined) {
            if (this.keys[index] === key) {
                this.table[index] = undefined
                this.keys[index] = null
            }
            index = (index + 1) % this.size
        }
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i] !== undefined && this.keys[i] !== null) {
                console.log(`the keys is : ${this.keys[i]} === value is : ${this.table[i]}`);

            }

        }
    }
}



const hashTable = new Table(8)
hashTable.set('name', 'amal')
hashTable.set('age', '20')
hashTable.set('place', 'chelavoor')
hashTable.set('place', 'chelavoor')
hashTable.display()

console.log('========================================');
hashTable.get('age')
console.log('========================================');

console.log('------------------------------------------');
hashTable.remove('age')
hashTable.display()
