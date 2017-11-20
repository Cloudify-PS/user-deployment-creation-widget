function base10_to_base64(num) {
  var order = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
  var base = order.length;
  var str = '', r;
  while (num) {
      r = num % base
      num -= r;
      num /= base;
      str = order.charAt(r) + str;
  }
  return str;
}

export default base10_to_base64;