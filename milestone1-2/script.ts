// Get all sections and buttons
const contactSection = document.getElementById("contact-info")!;
const educationSection = document.getElementById("education-info")!;
const skillsSection = document.getElementById("skills-info")!;
const languagesSection = document.getElementById("languages-info")!;
const experienceSection = document.getElementById("experience-info")!;
const referencesSection = document.getElementById("references-info")!;

const contactBtn = document.getElementById("toggle-contact")!;
const educationBtn = document.getElementById("toggle-education")!;
const skillsBtn = document.getElementById("toggle-skills")!;
const languagesBtn = document.getElementById("toggle-languages")!;
const experienceBtn = document.getElementById("toggle-experience")!;
const referencesBtn = document.getElementById("toggle-references")!;
const printBtn = document.getElementById("print-resume")!;

// Toggle visibility function
function toggleVisibility(section: HTMLElement): void {
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

// Event listeners for toggle buttons
contactBtn.addEventListener("click", () => toggleVisibility(contactSection));
educationBtn.addEventListener("click", () => toggleVisibility(educationSection));
skillsBtn.addEventListener("click", () => toggleVisibility(skillsSection));
languagesBtn.addEventListener("click", () => toggleVisibility(languagesSection));
experienceBtn.addEventListener("click", () => toggleVisibility(experienceSection));
referencesBtn.addEventListener("click", () => toggleVisibility(referencesSection));

// Print functionality
printBtn.addEventListener("click", () => window.print());
