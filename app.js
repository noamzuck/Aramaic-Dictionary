var enWord = toUTF16('האיך')

$.get('https://www.responsa.co.il/dev/NetisUtils/dictionaries.aspx?dictionary=AramaicDict&key=' + enWord, function(data){
  console.log(data)
});

/////////////
//functions//
/////////////
function toUTF16(str) {
  let utf16 = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    utf16 += '%u' + charCode.toString(16).padStart(4, '0');
  }
  return utf16;
}