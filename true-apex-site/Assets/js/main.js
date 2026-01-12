document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Handle form submission -> open WhatsApp with pre-filled message
  var form = document.getElementById("enquiryForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value.trim();
      var company = document.getElementById("company").value.trim();
      var email = document.getElementById("email").value.trim();
      var market = document.getElementById("market").value;
      var requirement = document.getElementById("requirement").value.trim();

      var lines = [
        "New export / bio fertilizer enquiry from True Apex Ventures website:",
        "",
        "Name: " + name,
        "Company / Organization: " + company,
        "Work email: " + email,
        "Target market: " + market,
        "Requirement overview:",
        requirement
      ];

      var message = lines.join("\n");
      var phone = "919481805942"; // without +
      var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

      window.open(url, "_blank");
    });
  }
});
