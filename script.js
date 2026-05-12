// ===== Hover fade effect =====
const hoverTargets = document.querySelectorAll('.writing-list li, .exp-list li');

hoverTargets.forEach(item => {
  item.addEventListener('mouseenter', () => {
    document.body.classList.add('hovered');
  });
  item.addEventListener('mouseleave', () => {
    document.body.classList.remove('hovered');
  });
});

// ===== Footer: live time in Jakarta + animated bunny =====
const bunnyFrames = [
  '(\\ (\\',
  '( >.>)',
  'c(">)',
  '(\\ (\\',
  '( =.=)',
  'c(">)',
];

let bunnyFrame = 0;

function updateFooter() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toLowerCase();

  const bunny = bunnyFrames[bunnyFrame % bunnyFrames.length];
  bunnyFrame++;

  const el = document.getElementById('footer-time');
  if (el) {
    el.innerHTML = `${timeStr} in Jakarta, Indonesia <span class="footer-bunny">${bunny}</span>`;
  }
}

updateFooter();
setInterval(updateFooter, 600);
