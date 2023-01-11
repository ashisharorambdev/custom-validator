export const REGEX = {
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*^?&\.])[A-Za-z\d@#$!%*^?&\.]{8,15}$/,
  CONTACT: /^[\s()+-]*([0-9][\s()+-]*){10,15}$/,
  NAME: /^(?!\s)(?![\s\S]*\s$)[A-Za-z ]+$/,
  USERNAME: /^[a-zA-Z '.-]*$/,
  ONLY_TEN_DIGIT: /^[0-9]{10}$/,
  NOT_BLANK_SPACE: /^(?!\s)(?![\s\S]*\s$)/,
  ALL_SPACE: /\s+/,
  ONLY_NO: /^\d+$/,
  ONLY_DOT_AND_NO: /[^0-9\.]/g,
  ONLY_CHAR: /^[0-9a-zA-Z\_-]$/,
  PINCODE: /^(\d{6}|\d{8})$/,
  URL: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  ALPHA_NUMERIC: /^([a-zA-Z0-9@&.,_ -]+)$/,
  SPECIAL_CHAR: /^[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/,
  RESTRICT_TO_TWO_DECIMAL: /^(\d*\.{0,1}\d{0,2}$)/,
  RESTRICT_TO_SIX_DIGIT_TWO_DECIMAL: /^\d*\.{0,6}(\.\d{1,2})?$/,
};
