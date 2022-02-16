function validateCity(nazwa = null) {
  if (nazwa == null) return false;
  if (nazwa == "") return false;
  if (/^\d+$/.test(nazwa)) return false;
  if (!/^[a-zA-Z0-9. -_?]*$/.test(nazwa)) return false;
  if (nazwa.startsWith(" ")) return false;
  return true;
}

module.exports = validateCity;
