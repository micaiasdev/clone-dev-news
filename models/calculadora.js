function somar(number1, number2) {
  if (typeof number1 == "string" || typeof number2 == "string") return "ERRO";
  if (!number1 || !number2) return "ERRO";
  return number1 + number2;
}
exports.somar = somar;
