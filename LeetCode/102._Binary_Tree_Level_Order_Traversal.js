/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

    if(!root) return [];
    
    let levels = [];
    let q = [[root, 0]];
    
    while(q.length) {
        let [currNode, level] = q.shift();
        
        if(levels[level] === undefined)
            levels[level] = [];
        levels[level].push(currNode.val);
        
        if( currNode.left ) q.push([currNode.left, level + 1]);
        if( currNode.right ) q.push([currNode.right, level + 1]) ;
    }
    return levels;
};
