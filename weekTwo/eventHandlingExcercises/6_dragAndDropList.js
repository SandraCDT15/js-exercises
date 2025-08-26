"use strict";
// Write a JavaScript program to implement drag-and-drop functionality to allow users to reorder items in a list.

const dragList = document.getElementById("dragList");
let draggedItem = null;

dragList.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  e.dataTransfer.effectAllowed = "move";
  e.target.style.opacity = "0.5";
});

dragList.addEventListener("dragover", (e) => {
  e.preventDefault();
  const targetItem = e.target;

  if (
    targetItem !== draggedItem &&
    targetItem.classList.contains("drag-item")
  ) {
    const boundingRect = targetItem.getBoundingClientRect();
    const offset = boundingRect.y + boundingRect.height / 2;

    if (e.clientY > offset) {
      targetItem.style.borderBottom = "2px solid #000";
      targetItem.style.borderTop = "";
    } else {
      targetItem.style.borderTop = "2px solid #000";
      targetItem.style.borderBottom = "";
    }
  }
});

dragList.addEventListener("drop", (e) => {
  e.preventDefault();
  const targetItem = e.target;

  if (
    targetItem !== draggedItem &&
    targetItem.classList.contains("drag-item")
  ) {
    const boundingRect = targetItem.getBoundingClientRect();
    if (e.clientY > boundingRect.y + boundingRect.height / 2) {
      targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
    } else {
      targetItem.parentNode.insertBefore(draggedItem, targetItem);
    }
  }

  targetItem.style.borderTop = "";
  targetItem.style.borderBottom = "";
  draggedItem.style.opacity = "";
  draggedItem = null;
});
