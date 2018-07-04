var uniqueInOrder=function(iterable){
  let uniques = [];
  for(i = 0; i < iterable.length; i++){
    let curr = iterable[i]
    let next = iterable[i + 1]
    if(curr !== next){
      uniques.push(curr)
    }
  }
  return uniques
}

uniqueInOrder('HHHDJSKjsss')
