/**
 * Modify this array when adding new featured OSes.
 */
const availableFeaturedOS = [
  {
    name: "Windows 7",
    desc: "Windows 7 was released in 2009 and is one of Microsoft's most popular operating systems. It introduced features like the Aero interface, improved taskbar, and better performance compared to its predecessor, Windows Vista.",
    codename: "Blackcomb/Vienna",
    releaseDate: new Date(2009, 9, 22),
    build: 7600,
  },
  {
    name: "Windows XP",
    desc: "Windows XP was released in 2001, and is one of Microsoft's most well known Operating Systems. It introduced the Luna theme along with many User Interface changes to rectify the usability, especially for first-timers.",
    codename: "Microsoft Whistler",
    releaseDate: new Date(2001, 10, 25),
    build: 2600,
  },

  {
    name: "Windows 10 build 9780",
    desc: "This build brings back the start menu in a Windows 8/8.1 Metro UI style.",
    codename: "Threshold",
    releaseDate: new Date(2014, 06, 22),
    build: 9780
  }
];

const chosenOS = availableFeaturedOS[Math.floor(Math.random() * availableFeaturedOS.length)];

document.querySelector(".featuredName").innerText = chosenOS.name;
document.querySelector(".featuredDesc").innerText = chosenOS.desc;
document.querySelector(
  ".featuredReleaseDate"
).innerText = `Released: ${chosenOS.releaseDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}`;
document.querySelector(".featuredBuild").innerText = `Build: ${chosenOS.build}`;
document.querySelector(".featuredCodename").innerText = `Codename: ${chosenOS.codename}`;
