function errorIfSecondArgZero(a, b) {
  if (b === 0) {
    throw new Error("Второй параметр равен 0");
  }
}

try {
  errorIfSecondArgZero(1, 2);
  console.log("try");
  errorIfSecondArgZero(2, 0);
  console.log("second try");
} catch (err) {
  console.log(err.message);
} finally {
  console.log("finally");
}
