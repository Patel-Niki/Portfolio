// Resume click event
const resume = document.getElementById("resume");
resume.addEventListener("click", () => {
  const fileName = "./assets/NIKI-Resume.pdf";
  const link = document.createElement("a");
  link.href = fileName;
  link.download = "NIKI-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// GitHub Integration Project Open event
const github = document.getElementById("github-view-btn");
github.addEventListener("click", () => {
  window
    .open(
      "https://github.com/Patel-Niki/GitHub-API-Integration-App.git",
      "_blank"
    )
    .focus();
});

// Receipt Processor Project Open event
const receipt = document.getElementById("receipt-view-btn");

receipt.addEventListener("click", () => {
  window
    .open("https://github.com/Patel-Niki/Receipt-Processor.git", "_blank")
    .focus();
});
