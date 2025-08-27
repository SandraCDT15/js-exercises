"use strict";
// Write a JavaScript program that sends a desktop notification to the user after getting permission.

if ("Notification" in window) {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      const notification = new Notification("Hello", {
        body: "This is your desktop notification.",
        icon: "https://via.placeholder.com/48",
      });

      notification.onclick = () => {
        alert("Notification clicked!");
      };
    } else {
      alert("Notification permission denied.");
    }
  });
} else {
  console.e("Notifications are not supported  in this browser.");
}
