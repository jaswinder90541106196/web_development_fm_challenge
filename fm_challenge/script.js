function calculateAge() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  if (!day || !month || !year) {
      alert("Please enter a valid date.");
      return;
  }

  let birthDate = new Date(`${year}-${month}-${day}`);
  let today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
      ageMonths--;
      ageDays += 30; // approximate days in a month
  }

  if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
  }

  document.getElementById("years").textContent = ageYears + " years";
  document.getElementById("months").textContent = ageMonths + " months";
  document.getElementById("days").textContent = ageDays + " days";
}
