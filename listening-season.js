/* ─────────────────────────────────────────────────────
   listening-season.js
   Shared seasonal background logic for all pages
   ───────────────────────────────────────────────────── */

const TERMS = [
  {start:[1,5],  end:[1,19],  color:'#C8CED8'},
  {start:[1,20], end:[2,3],   color:'#BCC4D0'},
  {start:[2,4],  end:[2,18],  color:'#EED8D4'},
  {start:[2,19], end:[3,4],   color:'#E8CEC8'},
  {start:[3,5],  end:[3,19],  color:'#E0C0B4'},
  {start:[3,20], end:[4,3],   color:'#D8B8AC'},
  {start:[4,4],  end:[4,19],  color:'#D0B0A4'},
  {start:[4,20], end:[5,4],   color:'#C8A89C'},
  {start:[5,5],  end:[5,20],  color:'#E8D4A8'},
  {start:[5,21], end:[6,5],   color:'#E0C890'},
  {start:[6,6],  end:[6,20],  color:'#D8BC78'},
  {start:[6,21], end:[7,6],   color:'#D0B060'},
  {start:[7,7],  end:[7,22],  color:'#C8A848'},
  {start:[7,23], end:[8,6],   color:'#C0A040'},
  {start:[8,7],  end:[8,22],  color:'#C8D8B8'},
  {start:[8,23], end:[9,7],   color:'#B8CCA8'},
  {start:[9,8],  end:[9,22],  color:'#A8C098'},
  {start:[9,23], end:[10,7],  color:'#98B488'},
  {start:[10,8], end:[10,22], color:'#88A878'},
  {start:[10,23],end:[11,6],  color:'#A8B4A0'},
  {start:[11,7], end:[11,21], color:'#A0ACB0'},
  {start:[11,22],end:[12,6],  color:'#A8B4BC'},
  {start:[12,7], end:[12,21], color:'#B0BCC8'},
  {start:[12,22],end:[1,4],   color:'#98A8B8'},
];

(function () {
  const now = new Date();
  const m = now.getMonth() + 1, d = now.getDate();
  let color = '#E0C0B4'; // fallback: 驚蟄
  for (let i = 0; i < TERMS.length; i++) {
    const t = TERMS[i], [sm, sd] = t.start, [em, ed] = t.end;
    if (sm > em) {
      if ((m === sm && d >= sd) || (m === em && d <= ed)) { color = t.color; break; }
    } else {
      if ((m === sm && d >= sd) || (m > sm && m < em) || (m === em && d <= ed)) { color = t.color; break; }
    }
  }
  document.body.style.background = color;
  document.body.style.transition = 'background 1.5s ease';
})();
