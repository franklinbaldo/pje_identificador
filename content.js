const stringToHash = (s) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = s.charCodeAt(i) + ((h << 5) - h);
  }
  return h;
};
const intToHex = (i) =>
  "#" +
  (
    ((i >> 24) & 0xff).toString(16) +
    ((i >> 16) & 0xff).toString(16) +
    ((i >> 8) & 0xff).toString(16) +
    (i & 0xff).toString(16)
  ).slice(0, 6);
const createBar = () => {
  const d = window.location.hostname,
    h = stringToHash(d),
    c = intToHex(h),
    b = document.createElement("div");
  b.id = "pje-bar";
  b.style.backgroundColor = c;
  b.style.height = "20px";
  b.style.width = "100%";
  b.style.position = "fixed";
  b.style.top = "0";
  b.style.left = "0";
  b.style.zIndex = "9999";
  const t = document.createElement("span");
  t.style.color = "white";
  t.style.fontFamily = "Arial, sans-serif";
  t.style.fontSize = "14px";
  t.style.fontWeight = "bold";
  t.style.textAlign = "center";
  t.style.display = "block";
  t.style.lineHeight = "20px";
  t.textContent = d;
  b.appendChild(t);
  document.body.style.paddingTop = "20px";
  document.body.appendChild(b);
};
const adjustFixedNavbar = () => {
  const n = document.getElementsByClassName("navbar-fixed-top");
  for (let i = 0; i < n.length; i++) {
    let s = window.getComputedStyle(n[i]);
    if (s.position === "fixed" && s.top === "0px") {
      n[i].style.top = "20px";
    }
  }
};
createBar();
adjustFixedNavbar();
