let mevalar = ['olma', 'anor', 'behi','kiwi','shafitoli',''];

mevalar.forEach((meva) => {
  let countI = (meva.match(/i/g) || []).length; // "i" harfini necha marta hisoblash
  if (countI === 2) {
    console.log(meva);
  }
});