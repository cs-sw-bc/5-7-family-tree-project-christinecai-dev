// TODO: Remove the 'throw new Error' statements and implement the functions according to the hints below.

// Family Tree (Simpsons example from README)
// This shows the tree structure similar to binary trees but with up to 3 children. You can
// add more children to the tree if you like that.
const simpsonFamily = {
  name: "Homer Simpson",
  birthdate: "1956-05-12",
  first: {
    name: "Bart Simpson",
    birthdate: "1980-04-01",
    first: null,
    second: null,
    third: null
  },
  second: {
    name: "Lisa Simpson",
    birthdate: "1982-05-09",
    first: null,
    second: null,
    third: null
  },
  third: {
    name: "Maggie Simpson",
    birthdate: "1988-01-12",
    first: null,
    second: null,
    third: null
  }
};

// Note: Each person has first, second, third properties (like left/right in binary trees)
// Students will implement functions to create and manipulate similar structures

function createFamilyTree() {
    // Step 1: Initialize an empty object to represent the family tree
    // Step 2: The tree should have a 'people' object to store people by name
    // Step 3: Return the initialized tree structure
    return { people: {} };
}

function createPerson(tree, name, birthdate = null, details = {}) {
    // Step 1: Validate that the name is provided and is a string
    // Step 2: Check if a person with this name already exists in the tree
    // Step 3: If exists, throw an error or return false
    // Step 4: Create a person object with name, birthdate, details, and first/second/third set to null
    // Step 5: Add the person to the tree's storage
    // Step 6: Return true on success
    throw new Error('createPerson not implemented');
}

function addChild(tree, parentName, childName, birthdate = null, details = {}) {
    // Step 1: Check if parent exists in the tree
    // Step 2: If parent doesn't exist, throw an error
    // Step 3: If child doesn't exist, call createPerson to create it with the provided birthdate and details
    // Step 4: Get the parent and child objects from the tree
    // Step 5: Find the first available slot (first, second, or third) on the parent and set it to the child
    // Step 6: Return true on success
    throw new Error('addChild not implemented');
}

function updatePerson(tree, name, updates) {
    // Step 1: Check if the person exists in the tree
    // Step 2: If not, throw an error
    // Step 3: Get the person object
    // Step 4: Update the fields provided in the updates object (e.g., birthdate, details)
    // Step 5: Ensure children array is not modified
    // Step 6: Return true on success
    throw new Error('updatePerson not implemented');
}

function getDescendantsIterative(tree, name) {
    // Step 1: Check if the person exists in the tree
    // Step 2: If not, return an empty array
    // Step 3: Get the person object
    // Step 4: Initialize a results array to store descendants
    // Step 5: Initialize a queue with the person's first, second, and third children (if they exist)
    // Step 6: Write a while loop that continues while the queue has items
    // Inside the loop:
    //   - Take the first person from the queue (remove it from the queue)
    //   - Add its name to the results array
    //   - Add its first, second, and third children (if they exist) to the end of the queue
    // Step 7: Return the results array
    throw new Error('getDescendantsIterative not implemented');
}

function getDescendantsRecursive(tree, name) {
    // Step 1: Check if the person exists in the tree
    // Step 2: If not, return an empty array
    // Step 3: Get the person object
    // Step 4: Initialize a results array
    // Step 5: Define a helper function that takes a person object
    // Inside the helper:
    //   - If the person has a first child, add first's name to results, and recurse on first
    //   - If the person has a second child, add second's name to results, and recurse on second
    //   - If the person has a third child, add third's name to results, and recurse on third
    // Step 6: Call the helper on the person's first, second, and third children
    // Step 7: Return the results array
    throw new Error('getDescendantsRecursive not implemented');
}

module.exports = {
    createFamilyTree,
    createPerson,
    addChild,
    updatePerson,
    getDescendantsIterative,
    getDescendantsRecursive,
    simpsonFamily
};