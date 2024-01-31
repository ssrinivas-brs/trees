

// Algorithm
let sortedArrayToBST = function (nums) {
  if (!nums.length) return null; //return if array is empty

  const mid = Math.floor(nums.length / 2);  //calculate middle element
  const root = new TreeNode(nums[mid]); //root node

  // construct left and right subtrees recursively. subtrees are BSTs as well 
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};

// To create tree node
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Implementation
const convertedBST = sortedArrayToBST([1,2,3,5,10,12,15]); //sorted array in ascending order
console.log("The sorted array to BST for the given sorted array is");
console.log(convertedBST);


// BIG O Notation
// Time complexity - O(n) - where 'n' is the length of the array
// Space complexity - O(h) - where 'h' is height of the tree


//             5

//      2              12

//  1       3      10      15  
//                             


// Height of a tree - longest path from root node to leaf nodes

// Height balanced tree
//  -a height-balanced tree is a binary tree in which the height of the left and right subtrees of 
//   every node differ by at most 1
//  - satisfies binary search tree property