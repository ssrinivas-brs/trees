

// constraints
// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

// Algorithm
let isBalanced = function (root) {

  //handle case when root itself is null
  if (root === null) return true;

  //turns to false if unbalanced tree encountered
  let flag = true;

  //recursive function - it recursively returns the height of the tree
  function helper(root) {
    //base case of recursion - tree with no nodes return height 0
    if (root.left === null && root.right === null) {
      return 0;
    }

    let leftHeight = 0,
      rightHeight = 0;
    if (root.left !== null) {
      //height of left subtree is one plus the height of child sub tree
      leftHeight = 1 + helper(root.left);
    }

    if (root.right !== null) {
      //height of right subtree is one plus the height of child sub tree
      rightHeight = 1 + helper(root.right);
    }

    //height of tree is max between height of left and right subtree
    let actualHeight = Math.max(leftHeight, rightHeight);

    //if abs diff between left height and right height greater than one; turn flag to false
    if (Math.abs(leftHeight - rightHeight) > 1) flag = false;
    return actualHeight;
  }
  helper(root);
  return flag;
};

// To create tree node
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Example 1 - Balanced tree
//          3
//        /   \
//       9     20
//            /   \
//           15     7
//
const root1 = new TreeNode(3);

root1.left = new TreeNode(9);
root1.right = new TreeNode(20);

root1.left.left = new TreeNode(15);
root1.left.right = new TreeNode(7);

// Example 2 - unbalanced tree
//              1
//            /   \
//          2       2
//        /   \
//      3       2
//    /   \
//   4      4

const root2 = new TreeNode(1);

root2.left = new TreeNode(2);
root2.right = new TreeNode(2);

root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(3);

root2.left.left.left = new TreeNode(4);
root2.left.left.right = new TreeNode(4);

// Implementation
const balancedTree = isBalanced(root1);
const balancedTree2 = isBalanced(root2);


// Log the results
if(balancedTree){
  console.log(`The given root-1 tree is a balanced tree`);
}else{
  console.log(`The given root-1 tree is not a balanced tree`);
}

if(balancedTree2){
  console.log(`The given root-2 tree is a balanced tree`);
}else{
  console.log(`The given root-2 tree is not a balanced tree`);
}

// Height balanced tree : (should be less than one or equal to one)
//    height of left subtree - height of right subtree 

//Height of a tree : height of its root node 

// Balanced tree or height-balanced binary tree
// difference between the left and the right subtree for any node is not more than one
// the left subtree is balanced
// the right subtree is balanced

//  BIG O Notation
// Time complexity - O(n) - where 'n' is number of nodes
// Space complexity - O(log n)
