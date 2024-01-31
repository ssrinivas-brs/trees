## Merge 2 Binary Tree

The mergeTrees function takes two binary trees t1 and t2 represented by their root nodes and merges them into a new binary tree. If both trees are empty (null), it returns null. Otherwise, it creates a new node with the value equal to the sum of the values of the corresponding nodes in t1 and t2.

Then, it recursively calls mergeTrees for the left and right subtrees of both trees and sets the left and right children of the current node to the merged results. The function continues until all nodes are processed and returns the root of the merged binary tree. The time complexity is O(n), where n is the total number of nodes in the merged tree, as each node is visited once. The space complexity is O(h), where h is the height of the merged tree, due to recursion.