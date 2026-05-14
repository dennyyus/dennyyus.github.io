// Reveal page once fonts are loaded — hides FOUT and gives the fade-in
const reveal = () => document.body.classList.add('loaded');
if (document.fonts) {
  document.fonts.ready.then(reveal);
} else {
  reveal();
}

const garchompFrames = ['△(>ᗜ<)△', '▲(>ᗜ<)▲', '△(>∀<)△', '▲(>∀<)▲'];
const footerEl = document.getElementById('footer-time');
let frame = 0;

function updateFooter() {
  const timeStr = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toLowerCase();

  footerEl.innerHTML = `${timeStr} in Jakarta, here's Garchomp <span class="footer-garchomp">${garchompFrames[frame++ % garchompFrames.length]}</span>`;
}

updateFooter();
setInterval(updateFooter, 500);
