function f1(getUser) {
  console.log("f1 is called");
  getUser();
}
// getUser(); Invalid

f1(function () {
  console.log("callback");
});
