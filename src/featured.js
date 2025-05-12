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
    releaseDate: new Date(2014, 6, 22),
    build: 9780,
  },

  {
    name: "Windows Whistler build 2428",
    desc: "This build is the first build to have the new Windows flag on the boot screen, this build also modified the OOBE, and setup wizzards.",
    codename: "Whistler",
    releaseDate: new Date(2001, 1, 29),
    build: 2428,
  },

  {
    name: "Ubuntu 4.10",
    desc: "The first version of Ubuntu, starting a new open-source linux distro enjoyed by millions today.",
    codename: "Warty Warthog",
    releaseDate: new Date(2004,10,20),
    build: "4.10",
  },

  {
    name: "Windows 10 build 9906",
    desc: "This is a build of Windows 10 that has some minor changes such as new Photos app UI, and the camera was taken out of a beta.",
    codename: "Threshold",
    releaseDate: new Date(2014,12,9),
    build: 9906,
  },

  {
    name: "Windows 10 build 9860",
    desc: "This build of Windows 10 introduced a new XAML start menu, and hidden apps.",
    codename: "Threshold",
    releaseDate: new Date(2014,10,8),
    build: 9860,
  },
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
