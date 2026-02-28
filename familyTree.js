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
const tree = createFamilyTree();
console.log(tree)

function createPerson(tree, name, birthdate = null, details = {}) {
    // Step 1: Validate that the name is provided and is a string
    if (!tree || typeof tree != "object"){
      throw new Error("tree must be a valid object");
    }

    if (!tree.people || typeof tree.people != "object"){
      throw new Error("tree.people must exist and be an object");
    }

    if (typeof name !== "string" || name.trim()=== ""){
      throw new Error ("name must be a non-empty string");
    }

    // Step 2: Check if a person with this name already exists in the tree
    // Step 3: If exists, throw an error or return false
    const cleanName = name.trim(); //remove spaces 

    if (tree.people[cleanName]){
      throw new Error(`Person "${cleanName}" already exists`);
    }

    // Step 4: Create a person object with name, birthdate, details, and first/second/third set to null
    // Step 5: Add the person to the tree's storage

    tree.people [cleanName] = {
      name: cleanName,
      birthdate: birthdate,
      details: {...details},
      first: null,
      second: null,
      third: null
    }

    // Step 6: Return true on success

    return true;
}

createPerson(tree, "Christine Cai", "1999-05-12");
createPerson(tree, "Marge Simpson", "1956-10-01", { hair: "blue" });
createPerson(tree, "Homer Simpson");
console.log(tree);
console.log(tree.people["Marge Simpson"].details);

function addChild(tree, parentName, childName, birthdate = null, details = {}) {

    if (!tree || typeof tree !== "object" || !tree.people) {
        throw new Error("Invalid tree structure");
    }

    if (typeof parentName !== "string" || parentName.trim() === "") {
        throw new Error("parentName must be a non-empty string");
    }

    if (typeof childName !== "string" || childName.trim() === "") {
        throw new Error("childName must be a non-empty string");
    }

    // Step 1: Check if parent exists in the tree
    // Step 2: If parent doesn't exist, throw an error

    const cleanParentName = parentName.trim();
    const cleanChildName = childName.trim();

    if (!tree.people[cleanParentName]){
      throw new Error(`Parent "${cleanParentName}" does not exist`);
    }
  
    // Step 3: If child doesn't exist, call createPerson to create it with the provided birthdate and details

    if (!tree.people[cleanChildName]){
      createPerson(tree, cleanChildName, birthdate, details);
    }
    // Step 4: Get the parent and child objects from the tree

    const parent = tree.people[cleanParentName];
    const child = tree.people[cleanChildName];

    // Step 5: Find the first available slot (first, second, or third) on the parent and set it to the child
    // Step 6: Return true on success

    if (parent.first === null){
      parent.first = child;
      return true;
    }

     if (parent.second === null) {
        parent.second = child;
        return true;
    }

    if (parent.third === null) {
        parent.third = child;
        return true;
    }
}

addChild(tree, "Homer Simpson", "Bart Simpson");
addChild(tree, "Homer Simpson", "Lisa Simpson");
addChild(tree, "Homer Simpson", "Maggie Simpson");
console.log(tree);
console.log(tree.people["Homer Simpson"].first.name);   // "Bart Simpson"
console.log(tree.people["Homer Simpson"].second.name);  // "Lisa Simpson"
console.log(tree.people["Homer Simpson"].third.name);   // "Maggie Simpson"

function updatePerson(tree, name, updates) {
    // Step 1: Check if the person exists in the tree
    // Step 2: If not, throw an error

    const cleanName = name.trim();

    const person = tree.people[cleanName];    // Step 3: Get the person object
    if (!person){
       throw new Error(`Person "${cleanName}" not found`);
    }
    // Step 4: Update the fields provided in the updates object (e.g., birthdate, details)
    // Step 5: Ensure children array is not modified

    if ("birthdate" in updates){
      person.birthdate = updates.birthdate;
    }

    if ("details" in updates){
      const incomingDetails = updates.details;

      if (incomingDetails === null){
        person.details = {};//reset to empty object
      }else if (typeof incomingDetails === "object"){
        person.details = {
          ...person.details,
          ...incomingDetails
        };
      }else{
          throw new Error ("updates.details must be an object or null")
        }
      }

    // Step 6: Return true on success
    return true;
    }

updatePerson(tree, 'Homer Simpson', { birthdate: '1956-05-12' });
console.log(tree.people["Homer Simpson"].birthdate);


function getDescendantsIterative(tree, name) {//return a list of all descendants of the person named name

    const cleanName = name.trim();

    // Step 1: Check if the person exists in the tree
    // Step 2: If not, return an empty array
    // Step 3: Get the person object
    const startPerson = tree.people [cleanName];
    if (!startPerson){
      return [];
    }

    // Step 4: Initialize a results array to store descendants
    const results = [];

    // Step 5: Initialize a queue with the person's first, second, and third children (if they exist)
    const queue = []; //queue holds person objects (not names)

    if (startPerson.first) queue.push(startPerson.first);
    if (startPerson.second) queue.push(startPerson.second); 
    if (startPerson.third) queue.push(startPerson.third); 

    // Step 6: Write a while loop that continues while the queue has items
    // Inside the loop:
    //   - Take the first person from the queue (remove it from the queue)
    //   - Add its name to the results array
    //   - Add its first, second, and third children (if they exist) to the end of the queue

    while (queue.length > 0){
      //take the first person out of the queue (FIFO order)
      const current = queue.shift();  //Take the first person from the queue (remove it from the queue)
      results.push(current.name);//Add its name to the results array

      if (current.first) queue.push(current.first);
      if (current.second) queue.push(current.second); 
      if (current.third) queue.push(current.third);
    }

    // Step 7: Return the results array
    return results;
}

console.log(getDescendantsIterative(tree, "Homer Simpson"));

function getDescendantsRecursive(tree, name) {
    // Step 1: Check if the person exists in the tree
    // Step 2: If not, return an empty array

    const cleanName = name.trim();
    const startPerson = tree.people[cleanName];   // Step 3: Get the person object

    if (!startPerson){
      return [];
    }

    // Step 4: Initialize a results array
    const results = [];

    // Step 5: Define a helper function that takes a person object
    // Inside the helper:
    //   - If the person has a first child, add first's name to results, and recurse on first
    //   - If the person has a second child, add second's name to results, and recurse on second
    //   - If the person has a third child, add third's name to results, and recurse on third
    // Step 6: Call the helper on the person's first, second, and third children

    function helper(person){
      if (!person) return //base case: if the person is null, stop recursion

      if (person.first){
        results.push(person.first.name);
        helper(person.first); //recurse into first child's subtree
      }

      if (person.second) {
            results.push(person.second.name);
            helper(person.second);
      }

      if (person.third) {
            results.push(person.third.name);
            helper(person.third);
      }
    }

    helper(startPerson);

    // Step 7: Return the results array
   return results;
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