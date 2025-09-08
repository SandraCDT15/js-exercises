"use strict";
// Write a JavaScript program that dynamically imports a module and uses an async function from that module.

async function loadAndExecute() {
  const module = await import("./14_exportFunction");

  const result = await module.fetchData();
  console.log(result);
}

loadAndExecute();
