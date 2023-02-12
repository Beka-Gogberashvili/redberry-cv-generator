import { defineRule } from "vee-validate";
import { required, email, min, image } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("image", image);

defineRule("redberry_email", (value) => {
  if (value.split("@")[1] !== "redberry.ge") {
    return "იმეილი უნდა აკმაყოფილებდეს რედბერის ფორმატის";
  }
  return true;
});

defineRule("geo_phone", (value) => {
  if (
    !value.startsWith("+995") ||
    value.length !== 13 ||
    !/^\d+$/.test(value.substring(1))
  ) {
    value.substring(value.indexOf("+"));
    return "მობილური არ აკმაყოფილებს ფორმატის";
  }
  return true;
});

defineRule("geo_language", (value) => {
  if (
    /[A-Za-z0-9]/.test(value) ||
    !/[\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u2D00-\u2D25\u2D27\u2D2D]/.test(
      value
    )
  ) {
    return "არ აკმაყოფილებს ფორმატს";
  }
  return true;
});
// /[^\w\u10A0-\u10FF]/g

// const pattern = /test.*regular/;
// const str = "I want to test this string against a regular expression";
// if (pattern.test(str)) {
//   console.log("Matched");
// } else {
//   console.log("Not Matched");
// }
