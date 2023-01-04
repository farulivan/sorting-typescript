import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sort Array of Number
const numbers = [1, -2, 9, 4];
const numbersCollection = new NumbersCollection(numbers);
const numSorter = new Sorter(numbersCollection);
numSorter.sort();

// Sort Array of String
const characters = ['k', 'd', 'F', 'n', 'd', 'T'];
const charactersCollection = new CharactersCollection(characters);
const charSorter = new Sorter(charactersCollection);
charSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);

// Sort Linked List
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(78);
linkedList.add(-1);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort()
linkedList.print()