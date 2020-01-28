function log(element, level) {
  console.log(`${"-".repeat(level)} ${element.tagName.toLowerCase()}#${element.id}.${element.className}`)
}

function getElementById(element, id, level = 0) {
  log(element, level)
  // base case, we found the element!
  if (element.id === id) return element

  // iterate over element's children
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i]
    // recursive loop
    const foundNode = getElementById(child, id, level + 1)
    // check if the recursive fn call returns what we're looking for
    if (foundNode) return foundNode
  }

  return null
}