// ===== Hover fade effect =====
const hoverTargets = document.querySelectorAll('.writing-list li, .exp-list li, .proj-list li');

hoverTargets.forEach(item => {
  item.addEventListener('mouseenter', () => {
    document.body.classList.add('hovered');
  });
  item.addEventListener('mouseleave', () => {
    document.body.classList.remove('hovered');
  });
});

// ===== Footer: live Jakarta time + Garchomp =====
// Garchomp flying animation - shark dragon swooping
const garchompFrames = [
  '∧(>w<)∧',
  '/(>w<)/',
  '∨(>w<)∨',
  '\\(>w<)\\',
];

let frame = 0;

function updateFooter() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toLowerCase();

  const chomp = garchompFrames[frame % garchompFrames.length];
  frame++;

  const el = document.getElementById('footer-time');
  if (el) {
    el.innerHTML = `${timeStr} in Jakarta <span class="footer-garchomp" title="Garchomp">${chomp}</span>`;
  }
}

updateFooter();
setInterval(updateFooter, 500);
