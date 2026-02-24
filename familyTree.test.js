// familyTree.test.js - Simple function calls for Family Tree functions

const {
    createFamilyTree,
    createPerson,
    addChild,
    updatePerson,
    getDescendantsIterative,
    getDescendantsRecursive,
    simpsonFamily
} = require('./familyTree');

const tree = simpsonFamily;
addChild(tree, 'Homer Simpson', 'New Child', '2000-01-01');
addChild(tree, 'Bart Simpson', 'Grandchild', '2020-01-01');
updatePerson(tree, 'Homer Simpson', { birthdate: '1956-05-12' });
getDescendantsIterative(tree, 'Homer Simpson');
getDescendantsRecursive(tree, 'Homer Simpson');
getDescendantsIterative(tree, 'Bart Simpson');
getDescendantsRecursive(tree, 'Bart Simpson');