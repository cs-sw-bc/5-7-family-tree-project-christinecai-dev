// familyTree.test.js - Manual test runner for Family Tree functions

const {
  createFamilyTree,
  createPerson,
  addChild,
  updatePerson,
  getDescendantsIterative,
  getDescendantsRecursive,
  simpsonFamily
} = require("./familyTree");

function printSection(title) {
  console.log(`\n=== ${title} ===`);
}

// 1) createFamilyTree
printSection("createFamilyTree");
const tree = createFamilyTree();
console.log("New tree:", tree);

// 2) createPerson
printSection("createPerson");
console.log("Create Homer:", createPerson(tree, "Homer Simpson", "1956-05-12"));
console.log("Create Marge:", createPerson(tree, "Marge Simpson", "1956-10-01"));
console.log("Create Bart:", createPerson(tree, "Bart Simpson", "1980-04-01"));
console.log("Create Lisa:", createPerson(tree, "Lisa Simpson", "1982-05-09"));
console.log("Create Maggie:", createPerson(tree, "Maggie Simpson", "1988-01-12"));
console.log("People keys:", Object.keys(tree.people));

// 3) addChild
printSection("addChild");
console.log("Homer -> Bart:", addChild(tree, "Homer Simpson", "Bart Simpson"));
console.log("Homer -> Lisa:", addChild(tree, "Homer Simpson", "Lisa Simpson"));
console.log("Homer -> Maggie:", addChild(tree, "Homer Simpson", "Maggie Simpson"));
console.log("Bart -> Grandchild:", addChild(tree, "Bart Simpson", "Grandchild", "2020-01-01"));
console.log("Homer children:", {
  first: tree.people["Homer Simpson"].first?.name ?? null,
  second: tree.people["Homer Simpson"].second?.name ?? null,
  third: tree.people["Homer Simpson"].third?.name ?? null
});

// 4) updatePerson
printSection("updatePerson");
console.log(
  "Update Homer:",
  updatePerson(tree, "Homer Simpson", {
    birthdate: "1956-05-12",
    details: { occupation: "Nuclear Safety Inspector" }
  })
);
console.log("Homer after update:", tree.people["Homer Simpson"]);

// 5) getDescendantsIterative
printSection("getDescendantsIterative");
console.log("Homer descendants:", getDescendantsIterative(tree, "Homer Simpson"));
console.log("Bart descendants:", getDescendantsIterative(tree, "Bart Simpson"));
console.log("Unknown descendants:", getDescendantsIterative(tree, "Unknown Person"));

// 6) getDescendantsRecursive
printSection("getDescendantsRecursive");
console.log("Homer descendants:", getDescendantsRecursive(tree, "Homer Simpson"));
console.log("Bart descendants:", getDescendantsRecursive(tree, "Bart Simpson"));
console.log("Unknown descendants:", getDescendantsRecursive(tree, "Unknown Person"));

// 7) simpsonFamily export
printSection("simpsonFamily export");
console.log("simpsonFamily root:", simpsonFamily.name);
