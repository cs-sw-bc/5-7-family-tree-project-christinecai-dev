# Lesson 7 — Family Tree

**Duration:** 150 Minutes
**Topic:** Tree Data Structures, Traversal, Loops & Recursion

---

# Overview

In this lab, you will build a **Family Tree system** using plain JavaScript.

You will implement the logic inside a provided starter file.
All test cases are already written for you.

Your job is simple:

> Implement the required functions so that all tests pass.

**Note:** Before starting implementation, remove the `throw new Error` statements from each function in `familyTree.js`.

You are not responsible for writing test cases.

---

# Learning Objectives

By the end of this lab, you should be able to:

• Design a tree-based data structure
• Store hierarchical relationships (parent → child)
• Traverse a tree using loops
• Traverse a tree using recursion
• Debug using automated test feedback

---

# Concept Review — What Is a Family Tree?

A family tree is a **hierarchical structure**.

Each person:

* Has personal information
* May have multiple children
* Children may also have children

This naturally forms a **Tree Data Structure**.

Example structure:

Grandparent (object)
├── first: Parent A (object)
│   ├── first: Child 1 (object)
│   └── second: Child 2 (object)
├── second: Parent B (object)
└── third: Child 3 (object)

Note: Each person has first, second, third properties pointing to child objects (similar to left/right in binary trees).

If we ask for descendants of "Grandparent", we should get:

Parent A
Parent B
Child 1
Child 2
Child 3

---

# Project Files Provided

You are given:

• familyTree.js
• familyTree.test.js
• runTests.js

Do not modify the test file.

All implementation must be done inside the provided function placeholders.

---

# Part 1 — Core Data Structure

The tree structure contains:

• A collection of people
• Each person has:

* name
* birthdate
* details (optional object)
* first, second, third (child references, can be null)

The structure should allow fast lookup by name.

---

# Part 2 — Functions You Must Implement

You will implement the following functions:

1. createFamilyTree
2. createPerson
3. addChild
4. updatePerson
5. getDescendantsIterative
6. getDescendantsRecursive

Do not change function names or parameters.

---

# Part 3 — Creating People

Requirements:

• Validate the name
• Prevent duplicates
• Initialize an empty children array
• Store the person correctly in the tree

The tests will verify:

• Person is stored correctly
• Duplicate insertion is prevented

---

# Part 4 — Creating Relationships

You must create a parent → child relationship.

Requirements:

• The parent must exist
• The child will be created if it doesn't exist (with default values)
• Add child to parent's children list
• Prevent duplicate relationships

The tests will verify:

• Proper linkage
• No duplicate children
• Errors handled correctly

---

---

# Part 5 — Updating a Person

You must allow updating of fields such as:

• birthdate
• details

Requirements:

• Person must exist
• Updating must not remove children

Tests will verify:

• Fields update correctly
• Children remain intact

---

# Part 6 — Descendants Traversal (Main Algorithm Section)

This is the core learning objective.

You will implement two versions of the same feature.

## Version 1 — Iterative (Loops)

Use a loop-based traversal.

Suggested approach:

• Start with the person's direct children
• Use a list of names to visit
• While the list is not empty:

* Remove one
* Add it to results
* Add its children to the visit list

You must avoid duplicates.

This demonstrates tree traversal using loops.

## Version 2 — Recursive

Use recursion to collect descendants.

Conceptually:

Descendants(person) =

• Direct children
• Plus descendants of each child

You must include a base case to stop recursion.

This demonstrates recursive tree traversal.

---

# Part 6 — Running the Tests

From the project folder, run:

node runTests.js

If a function is not implemented correctly:

• The test will fail
• An error message will display

Fix your logic until:

ALL TESTS PASS

---

# Part 7 — Debugging Strategy

If a test fails:

1. Read the error carefully
2. Identify which function is failing
3. Log intermediate values
4. Verify your tree structure

Do not randomly rewrite everything.

Debug systematically.

---

# Suggested Time Breakdown (150 Minutes)

0–20 min  → Understand structure
20–50 min → createPerson + addChild
50–70 min → updatePerson
70–100 min → Iterative traversal
100–120 min → Recursive traversal
120–140 min → Debugging

---

# Stretch Goals (Optional)

If finished early:

• Add removePerson
• Add getAncestors
• Add generationDepth
• Add parents tracking (two-way relationship)

---

# Success Criteria

You are done when:

✔ All tests pass
✔ No function throws "not implemented" errors
✔ Descendants work correctly for multi-generation trees
✔ README is complete

---

Focus on clean logic.
Keep functions small.
Think carefully about traversal.

This is your first full tree-based system.

---

# Example — Simple 2-Level Family Tree

Below is a simple 2-level nested tree example using characters from the tv show **"The Simpsons"**.

```js
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
```

Structure:

Level 1
Homer Simpson

Level 2
├── first: Bart Simpson
├── second: Lisa Simpson
└── third: Maggie Simpson

This example shows:

• One root (Homer)
• Multiple children
• No grandchildren (yet)
• Proper tree nesting

When you implement traversal, your algorithm should be able to:

• Return Bart, Lisa, and Maggie when asking for Homer’s descendants
• Return an empty list when asking for Bart’s descendants

Use this mental model when designing your logic.
