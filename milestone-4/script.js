"use strict";
// Get form and preview elements
const form = document.getElementById("resumeForm");
const resumePage = document.getElementById("resumePage");
const resumePhoto = document.getElementById("resumePhoto");
const resumeName = document.getElementById("resumeName");
const resumeEmail = document.getElementById("resumeEmail");
const resumePhone = document.getElementById("resumePhone");
const resumeEducation = document.getElementById("resumeEducation");
const resumeWorkExperience = document.getElementById("resumeWorkExperience");
const resumeSkills = document.getElementById("resumeSkills");
// Handle form submission
form.addEventListener("submit", (event) => {
    var _a;
    event.preventDefault();
    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const education = document.getElementById("education").value;
    const workExperience = document.getElementById("workExperience").value;
    const skills = document.getElementById("skills").value;
    const photoInput = document.getElementById("photo");
    // Handle photo
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    const photoURL = photoFile ? URL.createObjectURL(photoFile) : '';
    // Populate the resume preview
    resumePhoto.src = photoURL;
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEducation.textContent = `${degree} from ${education}`;
    resumeWorkExperience.textContent = workExperience;
    resumeSkills.textContent = skills;
    // Hide form and show resume page
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    resumePage.classList.remove("hidden");
});
// Edit Button
const editButton = document.getElementById("editButton");
// Handle Edit button click
editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener("click", () => {
    var _a, _b, _c, _d, _e;
    // Populate form fields with the existing resume data
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("email").value = ((_a = resumeEmail.textContent) === null || _a === void 0 ? void 0 : _a.replace('Email: ', '')) || '';
    document.getElementById("phone").value = ((_b = resumePhone.textContent) === null || _b === void 0 ? void 0 : _b.replace('Phone: ', '')) || '';
    document.getElementById("degree").value = ((_c = resumeEducation.textContent) === null || _c === void 0 ? void 0 : _c.split(' from ')[0]) || '';
    document.getElementById("education").value = ((_d = resumeEducation.textContent) === null || _d === void 0 ? void 0 : _d.split(' from ')[1]) || '';
    document.getElementById("workExperience").value = resumeWorkExperience.textContent || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
    // Show the form and hide the resume preview
    (_e = document.querySelector(".container")) === null || _e === void 0 ? void 0 : _e.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
