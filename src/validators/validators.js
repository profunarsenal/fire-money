import { helpers } from "@vuelidate/validators";

export const myPhone = helpers.regex(
  /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
);

export const myText = helpers.regex(
  /^[а-яё\s\-\.]+$/iu
);

