const projects = [
  ['Law Firm Website','Local SEO + multilingual pages','Premium','Live'],
  ['Real Estate Platform','Listings UI + dashboards','Product','In Build'],
  ['AI SaaS Landing Page','Pricing + risk review interface','SaaS','Ready'],
  ['Service Business Website','Lead generation + mobile-first UX','Growth','Ready']
];
document.querySelector('#rows').innerHTML = projects.map(p=>`<div class="row"><strong>${p[0]}</strong><span>${p[1]}</span><span>${p[2]}</span><span class="badge">${p[3]}</span></div>`).join('');
document.querySelector('#projects').innerHTML = projects.slice(0,4).map(p=>`<div class="card"><span class="badge">Case Study</span><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join('');
const packages=[ ['Starter Site','5 pages','$900+'], ['Growth Website','SEO + portfolio','$1,800+'], ['Premium Platform','Dashboards + flows','$3,500+'] ];
document.querySelector('#packages').innerHTML = packages.map(p=>`<div class="card"><h3>${p[0]}</h3><p>${p[1]}</p><strong style="font-size:2rem">${p[2]}</strong></div>`).join('');
