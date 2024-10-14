class Node {
    constructor() {
        this.children = {}
        this.isEndWord = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    //----------------------------- Insert Word----------------------------


    insert(word) {
        let curr = this.root
        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new Node()
            }
            curr = curr.children[char]
        }
        curr.isEndWord = true
    }

    //----------------------------- Search Word----------------------------


    search(word) {
        let curr = this.root
        for (const char of word) {
            if (!curr.children[char]) {
                return false
            }
            curr = curr.children[char]
        }
        return curr.isEndWord
    }

    //----------------------------- Start With Prifix----------------------------


    startWithPrifix(word) {
        let curr = this.root
        for (const char of word) {
            if (!curr.children[char]) {
                return false
            }
            curr = curr.children[char]
        }
        return true
    }

    //----------------------------- Auto completion----------------------------


    findCombination(node, word, array) {
        if (node.isEndWord) {
            array.push(word)
        }
        for (const char in node.children) {
            this.findCombination(node.children[char], word + char, array)
        }
    }

    autoComplete(word) {
        let curr = this.root
        let result = []
        for (const char of word) {
            if (!curr.children[char]) {
                return []
            }
            curr = curr.children[char]
        }
        this.findCombination(curr, word, result)
        return result
    }

    //----------------------------- Longest Commen Prifix----------------------------


    longestCommonPrifix() {
        let prifix = ''
        let curr = this.root
        while (curr && !curr.isEndWord && Object.keys(curr.children).length === 1) {
            let keys = Object.keys(curr.children)
            let nextChar = keys[0]
            prifix += nextChar
            curr = curr.children[nextChar]
        }
        return prifix
    }

    //----------------------------- delete----------------------------


    delete(word) {
        const deleteRecursively = (node, word, index = 0) => {
            if (index === word.length) {
                if (node.isEndWord) {
                    node.isEndWord = false
                }
                node.isEndWord = false
                return Object.keys(node.children).length === 0
            }
            let char = word[index]
            let nextChar = node.children[char]

            if (!nextChar) {
                return false
            }

            let shouldDeleteChild = deleteRecursively(nextChar, word, index + 1)
            if (shouldDeleteChild) {
                delete node.children[char]

                return Object.keys(node.children).length === 0 && !node.isEndWord
            }
            return false
        }
        deleteRecursively(this.root, word)
        return true
    }

    //----------------------------- display----------------------------

    printAll() {
        let word = []
        function traverse(node, prifix) {
            if (node.isEndWord) {
                word.push(prifix)
            }

            for (const char in node.children) {
                traverse(node.children[char], prifix + char)
            }
        }
        traverse(this.root, '')
        return word
    }
}


const trie = new Trie()

const words = ["flower", "flow", "flight", "flop"];

for (const element of words) {
    trie.insert(element)
}

console.log('print the all elements :', trie.printAll());

console.log('Search for word "flower" :', trie.search('flower'));
console.log('Search for word "flower" :', trie.search('flo'));

console.log('Starts with "fl"', trie.startWithPrifix('fl'));
console.log('Starts with "ff"', trie.startWithPrifix('ff'));

console.log('Auto-complete for "fl":', trie.autoComplete('fl'));
console.log('Auto-complete for "flo":', trie.autoComplete('flo'));
console.log('Auto-complete for "fla":', trie.autoComplete('fla'));

console.log('The longest common prefix:', trie.longestCommonPrifix());

trie.delete('flower')
console.log('after delete :', trie.printAll());



