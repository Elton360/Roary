"use: strict";
const head = document.querySelector("head");
const navbar = document.querySelector(".navbar");
const footer = document.querySelector("footer");
const commands = document.querySelector(".commands-container");
const commandTitles = document.getElementsByClassName("command-title");

const utilityControl = function (type) {
  commands.innerHTML = "";
  for (const [i, obj] of type.entries()) {
    commands.innerHTML += `<h2 class="commands-desc"><span>${obj.name}</span>${obj.message}</h2>`;
  }
};

if (window.location.href.includes("commands.html")) {
  for (const [i, title] of commandTitles.entries()) {
    title.addEventListener("click", function () {
      if (title.classList.value.includes("utility")) {
        utilityControl(utilityCommands);
      } else if (title.classList.value.includes("chat")) {
        utilityControl(chatCommands);
      } else if (title.classList.value.includes("other")) {
        utilityControl(otherCommands);
      } else if (title.classList.value.includes("help")) {
        utilityControl(supportCommands);
      }
    });
  }
}

let utilityCommands = [
  (food = {
    name: "!Food: ",
    message:
      "seeing what food places are open currently, along with how busy they are",
  }),
  (gym = {
    name: "!Gym: ",
    message: "see how busy the gym is",
  }),
  (library = {
    name: "!Library: ",
    message: "see how busy the gym is",
  }),
  (parking = {
    name: "!Parking: ",
    message:
      "see the current amount of parking spots open in the garages, percentage estimate",
  }),
];

// let chatCommands = [
//   (verify = {
//     name: "!Verify: ",
//     message: "verify my status as an FIU student and receive a role.",
//   }),
//   (chat = {
//     name: "!Verify: ",
//     message:
//       "used to verify FIU students and allows access to all channels or message boards",
//   }),
//   (food = {
//     name: "Food: ",
//     message:
//       "seeing what food places are open currently, along with how busy they are",
//   }),
// ];

let otherCommands = [
  (faq = {
    name: "!FAQ: ",
    message: "shows frequently asked questions",
  }),
  (events = {
    name: "!Events: ",
    message: "shows upcoming events on campus",
  }),
  (advisor = {
    name: "!Advisor: ",
    message:
      "checks the schedule of certain advisors, seeing when you can book an appointment",
  }),
  (verify = {
    name: "!Verify: ",
    message: "verify my status as an FIU student and receive a role.",
  }),
];

let supportCommands = [
  (support = {
    name: "!Support: ",
    message: "used to contact the dev team",
  }),
  (help = {
    name: "!Help: ",
    message: "lists available commands",
  }),
];

head.innerHTML = `<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${document.title}</title>
<link rel="stylesheet" href="css/Style.css" />
<link rel="stylesheet" href="commands.html" />
<script
  src="https://kit.fontawesome.com/e01dc9df2c.js"
  crossorigin="anonymous"
></script>
</head>`;

navbar.innerHTML = `<div class="navbar-container">
<a href="index.html"><img src="images/themes/pp.jpeg" alt="" /></a>
<div class="options navbar-options">
  <a href="about.html"><h2>About</h2></a>
  <a href="https://discord.com" target="_blank"><h2>Add</h2></a>
  <a href="commands.html"><h2>Commands</h2></a>
  <a href="support.html"><h2>Support</h2></a>
  <a href="faq.html"><h2>FAQ</h2></a>
</div>
</div>`;

footer.innerHTML = `<h6>Roary Bot © 2021, All Rights Reserved</h6>`;
