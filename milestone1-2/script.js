// Get all sections and buttons
var contactSection = document.getElementById("contact-info");
var educationSection = document.getElementById("education-info");
var skillsSection = document.getElementById("skills-info");
var languagesSection = document.getElementById("languages-info");
var experienceSection = document.getElementById("experience-info");
var referencesSection = document.getElementById("references-info");
var contactBtn = document.getElementById("toggle-contact");
var educationBtn = document.getElementById("toggle-education");
var skillsBtn = document.getElementById("toggle-skills");
var languagesBtn = document.getElementById("toggle-languages");
var experienceBtn = document.getElementById("toggle-experience");
var referencesBtn = document.getElementById("toggle-references");
var printBtn = document.getElementById("print-resume");
// Toggle visibility function
function toggleVisibility(section) {
    if (section.style.display === "none") {
        section.style.display = "block";
    }
    else {
        section.style.display = "none";
    }
}
// Event listeners for toggle buttons
contactBtn.addEventListener("click", function () { return toggleVisibility(contactSection); });
educationBtn.addEventListener("click", function () { return toggleVisibility(educationSection); });
skillsBtn.addEventListener("click", function () { return toggleVisibility(skillsSection); });
languagesBtn.addEventListener("click", function () { return toggleVisibility(languagesSection); });
experienceBtn.addEventListener("click", function () { return toggleVisibility(experienceSection); });
referencesBtn.addEventListener("click", function () { return toggleVisibility(referencesSection); });
// Print functionality
printBtn.addEventListener("click", function () { return window.print(); });
