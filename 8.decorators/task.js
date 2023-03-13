function cachingDecoratorNew(func) {
  let cache = [];
 
  function wrapper(...args) {
    const hash = args.join(',');
    let index = cache.findIndex((item) => item.hash == hash);
    if (index !== -1) {
      console.log("Из кэша: " + cache[index].value);
      return "Из кэша: " + cache[index].value;
    }
 
    let result = func(...args);
    cache.push({
      'hash': hash,
      'value': result
    });
    
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

 
 
console.log("---------------2---------------");


function debounceDecoratorNew(func, delay) {
  let timeout = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {   
    wrapper.allCount++;
    
    if(timeout === null) {
      func(...args);
      wrapper.count++;      
    }
      clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
    }   
    return wrapper;
}