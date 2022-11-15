import init, { run_app } from "yew-app";

init().then(() => {
  console.log("wasm");
  run_app();
});
