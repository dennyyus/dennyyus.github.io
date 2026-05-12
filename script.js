const garchompFrames = ['∧(>w<)∧', '/(>w<)/', '∨(>w<)∨', '\\(>w<)\\'];
const footerEl = document.getElementById('footer-time');
let frame = 0;

function updateFooter() {
  const timeStr = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toLowerCase();

  footerEl.innerHTML = `${timeStr} in Jakarta <span class="footer-garchomp" title="Garchomp">${garchompFrames[frame++ % garchompFrames.length]}</span>`;
}

updateFooter();
setInterval(updateFooter, 500);
