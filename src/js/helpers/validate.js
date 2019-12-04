const regExDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/ // min 4 symbols
};

/**
 * Function validate. Check input on RegExp provided in regExDic by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Return true if input valid or el doesn`t have data-required attr
 */

export function validate(el) {
  const regExName = el.dataset.required; // get input name for validation

  if (!regExDic[regExName]) return true; // this input doesn`t need validation

  return regExDic[regExName].test(el.value); // validation of input by regEx
}
