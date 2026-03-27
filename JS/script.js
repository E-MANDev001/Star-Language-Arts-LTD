  const hamburger = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  function openMenu(){
    sidebar.classList.add('open');
    overlay.classList.add('show');
    sidebar.setAttribute('aria-hidden','false');
    hamburger.setAttribute('aria-expanded','true');
    hamburger.setAttribute('aria-label','Close menu');
    hamburger.classList.add('active');
    // focus first link after menu animation
    setTimeout(() => {
      const firstLink = sidebar.querySelector('.sidebar-nav a');
      if(firstLink) firstLink.focus();
    }, 260);
  }

  function closeMenu(){
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    sidebar.setAttribute('aria-hidden','true');
    hamburger.setAttribute('aria-expanded','false');
    hamburger.setAttribute('aria-label','Open menu');
    hamburger.classList.remove('active');
    // return focus to hamburger so keyboard users are not lost
    setTimeout(() => hamburger.focus(), 160);
  }

  hamburger.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('open');
    if(isOpen) closeMenu(); else openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && sidebar.classList.contains('open')) closeMenu();
  });

  // ensure links inside sidebar close menu when clicked (good for single-page anchors)
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

// function toggleServices() {
//   const menu = document.getElementById("sidebarServices");
//   const icon = document.querySelector(".sidebar-trigger i");

//   if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
//     menu.style.maxHeight = "0px";   // collapse
//     icon.style.transform = "rotate(0deg)";
//   } else {
//     menu.style.maxHeight = menu.scrollHeight + "px";  // expand
//     icon.style.transform = "rotate(180deg)";
//   }
// }

function toggleDropdown(menuId, button) {
  const menu = document.getElementById(menuId);
  const icon = button.querySelector("i");

  if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
    menu.style.maxHeight = "0px";
    icon.style.transform = "rotate(0deg)";
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";
  }
}

// Sevices
const services = [
{
title:"IELTS Preparation",
text:"Our IELTS preparation programme is designed to help candidates achieve their target band score with confidence and clarity. We offer focused training across the four skills Listening, Reading, Writing, and Speaking using proven strategies, real exam practice, and personalised feedback. Whether you are sitting for Academic or General Training IELTS, we help you understand the test, avoid common pitfalls, and maximise your score efficiently."
},
{
title:"TOEFL Preparation",
text:"The TOEFL programme at Star Language Arts prepares candidates for success in the internet-based test (IBT). We focus on academic English proficiency, test strategies, time management, and integrated skills practice. Our sessions are structured to improve comprehension, fluency, and confidence while aligning closely with TOEFL scoring criteria."
},
{
title:"PTE Preparation",
text:"Our PTE preparation is practical, strategy-driven, and results-oriented. Candidates are trained to understand the computer-based test format, master scoring algorithms, and perform confidently under timed conditions. We emphasise pronunciation, fluency, structured responses, and test-specific techniques that significantly improve scores."
},
{
title:"SAT Preparation",
text:"The SAT programme supports students preparing for university admissions by strengthening critical reading, writing, and mathematical reasoning skills. We help students understand question patterns, manage time effectively, and apply smart test strategies. Our goal is not just higher scores, but stronger academic confidence."
},
{
title:"Registrations",
text:`Allow Star Language Arts to manage your English proficiency exam registration with professionalism and care.
From helping you choose the most suitable exam based on your goals, to completing and submitting your registration with accurate, error-free details, we handle the entire process on your behalf. This allows you to focus fully on preparation, knowing your registration is in safe and experienced hands`
},
{
title:"Editing & Proofreading Services",
text:"We offer professional editing and proofreading services for academic, professional, and creative documents. This includes theses, dissertations, journal articles, statements of purpose, essays, reports, and manuscripts. Our service focuses on clarity, coherence, grammar, structure, tone, and consistency while preserving the writer’s original voice."
},
{
title:"Language Acquisition",
text:"Our language acquisition programme supports learners at different proficiency levels who want to build strong, functional Language skills. We focus on grammar, vocabulary, pronunciation, fluency, and real-life communication. This service is ideal for students, professionals, and non-native speakers seeking long-term language growth rather than test-only preparation."
},
{
title:"Other Services & General Enquiry",
text:`Additional Services Include,
• Accent softening and pronunciation coaching
• Spoken English and public speaking training
• Academic writing coaching
• Corporate communication training
• One-on-one language coaching
• Group classes and intensive bootcamps`
},
];

function openModal(index){
  document.getElementById("modalTitle").innerText = services[index].title;
  document.getElementById("modalText").innerText = services[index].text;
  document.getElementById("modal").classList.add("active");
}

function closeModal(){
  document.getElementById("modal").classList.remove("active");
}

// Slide

//Slide show effect code
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

/* Show slide */
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

/* Next slide */
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

/* Previous slide */
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

/* Button events */
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

/* Reset auto-slide when user clicks */
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}
