function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function showLogin() {
  const login = document.querySelector(".login-box");
  const signup = document.querySelector(".signup-box");
  const para1 = document.querySelector(".para-1");
  const para2 = document.querySelector(".para-2");
  login.style.display = "block";
  signup.style.display = "none";
  para1.style.display = "none";
  para2.style.display = "block";
}

function showSignUp() {
  const signup = document.querySelector(".signup-box");
  const login = document.querySelector(".login-box");
  const para2 = document.querySelector(".para-2");
  const para1 = document.querySelector(".para-1");
  login.style.display = "none";
  signup.style.display = "block";
  para1.style.display = "block";
  para2.style.display = "none";
}

// slider books
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cardWrapper = document.querySelector('.card-wrapper');

const scroll = (direction) => {
  let scrollDistance = 280;
  if (direction === 'prev') {
    cardWrapper.scrollLeft -= scrollDistance;
  } else if (direction === 'next') {
    cardWrapper.scrollLeft += scrollDistance;
  }
};

prevBtn.addEventListener('click', () => scroll('prev'));
nextBtn.addEventListener('click', () => scroll('next'));



