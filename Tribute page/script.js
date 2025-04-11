const learnMoreBtn = document.getElementById('learn-more-btn');
const hideInfoBtn = document.getElementById('hide-info-btn');
const moreInfoSection = document.getElementById('more-info')
learnMoreBtn.addEventListener('click', () => {
  moreInfoSection.style.display = 'block';
  learnMoreBtn.style.display = 'none'; 
});
hideInfoBtn.addEventListener('click', () => {
  moreInfoSection.style.display = 'none';
  learnMoreBtn.style.display = 'inline-block'; 
});
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.innerHTML = `Created as a tribute by Sruthi © ${currentYear}`;
