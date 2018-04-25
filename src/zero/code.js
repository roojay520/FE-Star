// 给定两个长度相同的整数数组，将其中的数字分别一一配对，对每一对数字计算乘积，然后求和，计算出总和最小的配对方式，并打印出总和。

const getRandom = len => Number(Math.random().toString().slice(-len));

const minSum = (arr1, arr2) => {
  const arrAsc = arr1.sort((a, b) => a - b);
  const arrDesc = arr2.sort((a, b) => b - a);
  const sum = arrAsc.map((x, index) => x * arrDesc[index]).reduce((x, y) => x + y, 0);
  return sum;
};

const test = (fuc, result) => {
  try {
    if (fuc !== +result) throw new Error();

    console.log(`
        预期: ${result}
        结果: ${fuc}
        测试通过!`);
  } catch (e) {
    console.log(`
        预期: ${result}
        结果: ${fuc}
        测试失败!`);
  }
};

test(minSum([1, 2, 3], [3, 2, 1]), 10);
test(minSum([3, 5, 7], [2, 3, 5]), 44);
test(minSum([0, 1, 2], [1, 99, 1]), 3);
