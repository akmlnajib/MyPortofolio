const navbar = document.getElementById('navbar');
const about = document.getElementById('about');
const resume = document.getElementById('resume');
const skills = document.getElementById('skills');
const contact = document.getElementById('contact');

fetch('../../sections/navbar.html')
  .then(res => res.text())
  .then(data => (navbar.innerHTML = data));

fetch('../../sections/about.html')
  .then(res => res.text())
  .then(data => (about.innerHTML = data));

fetch('../../sections/resume.html')
  .then(res => res.text())
  .then(data => (resume.innerHTML = data));

fetch('../../sections/skills.html')
  .then(res => res.text())
  .then(data => (skills.innerHTML = data));

fetch('../../sections/contact.html')
  .then(res => res.text())
  .then(data => (contact.innerHTML = data));

  