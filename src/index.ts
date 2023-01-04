import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sort Array of Number
const numbers = [1, -2, 9, 4];
const numbersCollection = new NumbersCollection(numbers);
numbersCollection.sort();
console.log(numbersCollection.data);

// // Sort Array of String
const characters = ['k', 'd', 'F', 'n', 'd', 'T'];
const charactersCollection = new CharactersCollection(characters);
charactersCollection.sort();
console.log(charactersCollection.data);

// // Sort Linked List
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(78);
linkedList.add(-1);

linkedList.sort()
linkedList.print()
