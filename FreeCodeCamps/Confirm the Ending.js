function confirmEnding(str, target) {
  // return str.endsWith(target);

  // return str.slice(-target.length) === target;

  return str.substr(-target.length) == target;
}

confirmEnding("Bastian", "n");