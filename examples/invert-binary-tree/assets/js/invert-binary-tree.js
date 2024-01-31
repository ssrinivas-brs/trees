

// Algorithm
let invertTree = function (root) {
  // Base case...
  if (root == null) {
    return root;
  }
  // Call the function recursively for the left subtree...
  invertTree(root.left);
  // Call the function recursively for the right subtree...
  invertTree(root.right);
  // swapping process...
  const curr = root.left;
  root.left = root.right;
  root.right = curr;
  return root; // Return the root...
};

// Create Tree Node
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Example 1 
const root = new TreeNode(1);

root.left = new TreeNode(3);
root.right = new TreeNode(2);

root.left.left = new TreeNode(5);

// Example 2 
const root2 = new TreeNode(1);
root2.left = new TreeNode(3); 
root2.right = new TreeNode(2);

root2.left.left = new TreeNode(5);
console.log(root2);


// Before inverting
//        1
//    2       3 
//                5


// After inverting
//           1
//      3           2
// 5


// Implementation
const invertedBT = invertTree(root)
console.log("The Inverted BT is");
console.log(invertedBT);

// BIG O Notation
// Time complexity - O(n) - 'n' is number of nodes in the BT
// Space complexity - O(h) - 'h' is height of the BT