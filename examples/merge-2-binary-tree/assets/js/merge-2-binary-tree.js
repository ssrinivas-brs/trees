

// Algorithm
let mergeTrees = function (t1, t2) {
  if (!t1 && !t2) return null; //base case

  const root = new TreeNode((t1?.val || 0) + (t2?.val || 0)); //merged node
  
  root.left = mergeTrees(t1?.left, t2?.left); //recursively merge left subtrees
  root.right = mergeTrees(t1?.right, t2?.right); //recursively merge right subtrees
  return root;
};

// Create Tree Node
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Root 1
const root1 = new TreeNode(1);

root1.left = new TreeNode(3);
root1.right = new TreeNode(2);

root1.left.left = new TreeNode(5);

// Root 2
const root2 = new TreeNode(2);

root2.left = new TreeNode(1);
root2.right = new TreeNode(3);

root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);


//        1                 2                 3
//      /   \             /   \             /   \
//     3      2          1      3          4      5
//    /                   \              /   \
//   5                      4           5      4
//                         /                  /
//                        7                  7

// Implementation
const mergedBT = mergeTrees(root1, root2);
console.log("The meged BT for the given root-1 and root-2 is");
console.log(mergedBT);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(n)