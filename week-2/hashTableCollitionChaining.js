class Table {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
        this.occurence = {}
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }

        if (this.occurence[key]) {
            this.occurence[key]++
        } else {
            this.occurence[key] = 1
        }

        const existingValue = this.table[index].find(item => item[0] === key)
        if (existingValue) {
            existingValue[1] = value
        } else {
            this.table[index].push([key, value])
        }
    }

// ------------------------------- find the duplicate in the hash table -----------------------------------

    duplicate() {
        console.log('duplicate key are');
        for (const key in this.occurence) {
            if (this.occurence[key] > 1) {
                console.log(`duplicate key is : ${key} Occurence is :${this.occurence[key]}`);
                this.remove(key)
                console.log(`removed key is : ${key}`);

            }
        }
    }

    get(key){
        const index=this.hash(key)
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0]===key) {
                    console.log(this.table[index][i][0]);
                    return this.table[index][i][0]
                }
            }
        }
        console.log('key is not found');
        return null
    }


    remove(key){
        const index=this.hash(key)
        if (this.table[index]) {
            this.table[index]=this.table[index].filter(item=>item[0]!==key)
            if (this.table[index].length===0) {
                this.table[index]=undefined
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    console.log(`key : ${this.table[i][j][0]}  value : ${this.table[i][j][1]}`);
                }
            }

        }
    }
}


const hashTable = new Table(5)

hashTable.set('age','20')
hashTable.set('place','chelavoor')
hashTable.set('name','amal')
hashTable.set('name','amal')
hashTable.set('age','20')

hashTable.display()

console.log('++++++++++++++++++++++++++++++++++++++++');

hashTable.get('age')

console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');

hashTable.duplicate()

console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');

console.log('after the remove the key');

hashTable.remove('name')

hashTable.display()





