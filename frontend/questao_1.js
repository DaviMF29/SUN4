function q1RemoverDuplicados(nums) {
  
  return [...new Set(nums)]; //Set remove automaticamente os duplicados
}

console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));
