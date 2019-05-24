// hex string to ascii code
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2) {
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
  }
  
// hex string to Uint8Array(Byte Stream)
function hexStringToByte(str) {
    if (!str) {
      return new Uint8Array();
    }
  
    var a = [];
    for (var i = 0, len = str.length; i < len; i += 2) {
      a.push(parseInt(str.substr(i, 2), 16));
    }
  
    return new Uint8Array(a);
  }
  
// ascii to hex string
function asciiToHexa(str) {
    var arr1 = [];
    for (let n = 0, l = str.length; n < l; n++) {
      let hex = Number(str.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }
    return arr1.join('');
  }

function asciiToHexString (str) {
    var string = "";
    for(let i = 0; i < str.length; i++) {
      if(string === "") {
        string = str.charCodeAt(i).toString(16);
      } else {
        string += str.charCodeAt(i).toString(16);
      }
    }
    string += '0d0a';
    return string;
  }

// ArrayBuffer转16进度字符串示例
function ab2hex (buffer) {
    var hexArr = Array.prototype.map.call(
      new Uint8Array(buffer),
      function (bit) {
        return ('00' + bit.toString(16)).slice(-2)
      }
    )
    return hexArr.join('');
  }

function int2hex16 (value) {
    var hexString = value.toString(16);

    for (var i = hexString.length; i < 4; i++) {
      hexString = '0' + hexString;
    }
    return hexString.toUpperCase();
  }

function int2hex8 (value) {
    var hexString = value.toString(16);

    for (var i = hexString.length; i < 2; i++) {
      hexString = '0' + hexString;
    }
    return hexString.toUpperCase();
  }

// 有符号hex转int 
function hex16ToInt (hex16) {
    var int = parseInt(hex16, 16);

    if ((int & 0x8000) > 0) {
      return (int - 0x10000);
    } else {
      return int;
    }
  }