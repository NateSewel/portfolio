// ############## FLOATING NAV ##############

const floatingNav = document.querySelectorAll(".floating__nav a");

const removeActiveClass = () => {
  floatingNav.forEach((nav) => {
    nav.classList.remove("active");
  });
};

floatingNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveClass();
    nav.classList.add("active");
  });
});

// ############## FLOATING NAV ##############

const resumeRight = document.querySelector(".resume__right");
const experienceContent = `
<h4>Experience</h4>
          <p>
            From designing and building dynamic websites to creating advanced chatbot, I excel in leveraging cutting-edge technologies to achieve outstanding results.
          </p>
          <ul>
           <li>
              <h6>Dec 2023 - Present</h6>
              <h5>Full-Stack Developer</h5>
              <p>Lofai Inc</p>
            </li>

            <li>
              <h6>July 2024 - November 2024</h6>
              <h5>AI Chatbot Developer <br/> (Freelance)</h5>
              <p>Helpnonymous</p>
            </li>

            <li>
              <h6>Jan 2023 - October 2023</h6>
              <h5>Full-Stack Developer (Intern)</h5>
              <p>LemNet Technology</p>
            </li>
          </ul>
`;

// Experience
const experienceBtn = document.querySelector(".experience__btn");

experienceBtn.addEventListener("click", () => {
  resumeRight.innerHTML = experienceContent;
  resumeRight.className = "resume__right";
  experienceBtn.classList.add("primary");
  // Remove classes from other buttons
  removePrimaryClassFromButtons(experienceBtn);
});
// Set Experience content as the default content for resume right when page loads
resumeRight.innerHTML = experienceContent;

// Education
const educationBtn = document.querySelector(".education__btn");
const educationContent = `
<h4>Education</h4>
    <p> Fullstack Web Development Certification, AI and Chatbot Certification, and various online courses in advanced programming, AI, and web technologies.</p>
    <ul>
      <li>
        <h5>College Education</h5>
        <p>
          Management Technology
        </p>
      </li>
      <li>
        <h5>Software Development</h5>
        <p>
          ALT School (Certification)
        </p>
      </li>
      <li>
        <h5>Full-Stack Development</h5>
        <p>
          App Brewery Academy
        </p>
      </li>
      <li>
        <h5>Web and Mobile Development</h5>
        <p>
          Black Innovation Africa
        </p>
      </li>
    </ul>`;

educationBtn.addEventListener("click", () => {
  resumeRight.innerHTML = educationContent;
  resumeRight.className = "resume__right education"; // Add education class
  educationBtn.classList.add("primary");
  // Remove classes from other buttons
  removePrimaryClassFromButtons(educationBtn);
});

// Skills
const skillsContent = `<h4>Skills</h4>
    <p>
      Proficient in frontend and backend technologies including HTML, CSS, JavaScript, React, Node.js, MongoDB, MySQL, RESTful API, AI Chatbot frameworks and more.
    </p>
    <ul>
      <li><img src="./assets/react.webp" alt="ReactJS Logo" /></li>
      <li><img src="./assets/next.png" alt="NextJS Logo" /></li>
      <li><img src="./assets/html.svg" alt="NodeJS Logo" /></li>
      <li><img src="./assets/tailwind.png" alt="Tailwind Logo" /></li>
      <li><img src="./assets/prisma.png" alt="Prisma Logo" /></li>
      <li><img src="./assets/mongo.jpg" alt="MongoDB Logo" /></li>
      <li><img src="./assets/jwt.png" alt="JWT Logo" /></li>
      <li><img src="./assets/node.png" alt="NodeJS Logo" /></li>
      <li><img src="./assets/bootstrap.png" alt="Bootstrap Logo" /></li>
      <li><img src="./assets/python.png" alt="Python Logo" /></li>
      <li><img src="./assets/chatbot.svg" alt="Heroku Logo" /></li>
      <li><img src="./assets/figma.png" alt="Figma Logo" /></li>
      <li><img src="./assets/shopify.svg" alt="Shopify Logo" /></li>
      <li><img src="./assets/wordpress.svg" alt="Wordpress Logo" /></li>
      <li><img src="./assets/firebase.png" alt="Firebase Logo" /></li>
      <li><img src="./assets/git.png" alt="Git Logo" /></li>
      <li><img src="./assets/heroku.png" alt="Heroku Logo" /></li>
      
    </ul>`;

const skillsBtn = document.querySelector(".skills__btn");
skillsBtn.addEventListener("click", () => {
  resumeRight.innerHTML = skillsContent;
  resumeRight.className = "resume__right skills"; // Add skills class
  skillsBtn.classList.add("primary");

  // Remove classes from other buttons
  removePrimaryClassFromButtons(skillsBtn);
});
// About me
const aboutContent = `<h4>About me</h4>
                <p>Fullstack Developer with extensive experience in building dynamic websites and intelligent chatbots. Skilled in frontend and backend technologies, database management, and API integration. Dedicated to enhancing user experiences and streamlining customer interactions.</p>
                <ul>
                    <li>
                        <h6>Name:</h6>
                        <h5>Nathaniel Isewede</h5>
                    </li>
                    <li>
                        <h6>Email:</h6>
                        <h5>nathanielisewede@gmail.com</h5>
                    </li>
                    <li>
                        <h6>Nationality:</h6>
                        <h5>Nigerian</h5>
                    </li>
                    <li>
                        <h6>Freelance & collaborations:</h6>
                        <h5>Available</h5>
                    </li>
                    <li>
                        <h6>Language:</h6>
                        <h5>English</h5>
                    </li>
                    <li>
                        <h6>Phone:</h6>
                        <h5>+2348060043487</h5>
                    </li>
                    <li>
                        <h6>LinkedIn:</h6>
                        <h5>@nathanielisewede</h5>
                    </li>
                </ul>`;

aboutBtn = document.querySelector(".about__btn");
aboutBtn.addEventListener("click", () => {
  resumeRight.innerHTML = aboutContent;
  resumeRight.className = "resume__right about"; // Add about class
  aboutBtn.classList.add("primary");

  // Remove classes from other buttons
  removePrimaryClassFromButtons(aboutBtn);
});

// Function to remove primary class from buttons
function removePrimaryClassFromButtons(activeBtn) {
  const buttons = [experienceBtn, educationBtn, skillsBtn, aboutBtn];
  buttons.forEach((btn) => {
    if (btn !== activeBtn) {
      btn.classList.remove("primary");
    }
  });
}

// ############## MIXITUP (Project Section) ##############

const containerEl = document.querySelector(".projects__container");
let mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

mixer.filter("*");

// ############## SWIPER JS ##############

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// ############## FAQS ##############

const faqs = document.querySelectorAll(".faqs__item");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const p = faq.querySelector("p");
    const icon = faq.querySelector(".faq__icon");
    if (p.classList.contains("show")) {
      p.classList.remove("show");
      icon.innerHTML = `<i class="uil uil-angle-down"></i>`;
    } else {
      p.classList.add("show");
      icon.innerHTML = `<i class="uil uil-arrow-up"></i>`;
    }
  });
});

// ############## DARK THEME TOGGLE ##############

const themeToggler = document.querySelector(".nav__theme-btn");
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  // Toggle Icon from Sun to Moon in Dark theme mode
  if (document.body.classList == "") {
    themeToggler.innerHTML = `<i class="uil uil-moon"></i>`;
    window.localStorage.setItem("portfolio-theme", "");
  } else {
    themeToggler.innerHTML = `<i class="uil uil-sun"></i>`;
    window.localStorage.setItem("portfolio-theme", "dark-theme-variables");
  }
});

// ############## USE THEME FROM LOCAL STORAGE ON PAGE LOAD ##############
const bodyClass = window.localStorage.getItem("portfolio-theme");
document.body.className = bodyClass;
