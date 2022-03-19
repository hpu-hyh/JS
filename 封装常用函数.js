// 封装一个函数，可以返回元素所有的子节点(兼容到IE6)，类似children的功能
function getChildren(node) {
  // 结果数组
  var children = [];
  // 遍历node这个jiedian所有的子节点，判断每一个子节点的nodeType属性值是不是1
  // 如果是1，就推入结果数组
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.children[i].nodeType == 1) {
      children.push[node.children[i]];
    }
  }
  return children;
}

// 封装一个函数，这个函数可以返回元素的前一个元素兄弟节点(兼容到IE6)，类似于previousElementSibling的功能
function getElementPrevSibling(node) {
  var o = node;
  // 使用while语句
  while (o.previousSibling != null) {
    if (o.previousSibling.nodeType == 1) {
      // 结束循环，找到了目标元素
      return o.previousSibling;
    }
    // 让o成为它的前一个节点
    o = o.previousSibling;
  }
  return null;
}

// 封装第三个函数，这个函数可以返回元素的所有兄弟节点
function getAllElementSibling(node) {
  // 前面的元素兄弟节点
  var prevs = [];
  // 后面的元素兄弟节点
  var nexts = [];
  while (o.previousSibling != null) {
    if (o.previousSibling.nodeType == 1) {
      prevs.unshift(o.previousSibling);
      // 使用push会使得得到的伪数组顺序和实际的相反
    }
    o = o.previousSibling;
  }
  o = node;
  while (o.nextSibling != null) {
    if (o.nextSibling.nodeType == 1) {
      nexts.push(o.nextSibling);
      // 使用unshift会使得得到的伪数组顺序和实际的相反
    }
    o = o.previousSibling;
  }
  // 将两个数组合并然后返回
  return prevs.concat(nexts);
}
