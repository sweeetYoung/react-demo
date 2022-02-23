export function flatten(arr, child){// 多维menu数组 变成一维数组
  return [].concat(...arr.map(item =>{
      return item[child] //判断是否有子项，否则递归flatten报错
        ? [].concat(item, ...flatten(item[child]))
        : [].concat(item)
    }
  ))
}
