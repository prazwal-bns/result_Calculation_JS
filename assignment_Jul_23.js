const myCV = {
  name: "Bipin Regmi",
  class: 12,
  education: {
    SEE: {
      school: "Prativa Secondary School",
      English: {
        marks: 84,
        grade_pts: 3.84,
        credit_hrs: 4,
      },
      Nepali: {
        marks: 74,
        grade_pts: 3.6,
        credit_hrs: 3.5,
      },
      College: {
        bachelor: "Informatics College Pokhara",
        semester: "5th sem",
      },
    },
  },
  workExperience: "Not Yet Working",
  address: {
    state: "Gandaki",
    city: "Pokhara",
    postalCode: 3306,
  },
  skills_Profiency: [
    {
      skill: "ReactJS",
      profiency: "Begineer",
    },
    {
      skill: "NodeJS",
      profiency: "Advance",
    },
    {
      skill: "JAVA",
      profiency: "Novice",
    },
  ],
  languages: ["English", "Nepali", "Hindi"],
};

console.log(`My name is ${myCV.name}`);
console.log("Class: ", myCV.class);
console.log("Marks in English: ", myCV.education.SEE.English.marks);
console.log("Marks in Nepali: ", myCV.education.SEE.Nepali.marks);

var total_marks =
  myCV.education.SEE.English.marks + myCV.education.SEE.Nepali.marks;
console.log(`The total marks obtained is: `, total_marks);

var percentage = (total_marks / 200) * 100;
console.log("Total percentage is: ", Math.floor(percentage) + "%");

var totalCreditHours =
  myCV.education.SEE.English.credit_hrs + myCV.education.SEE.Nepali.credit_hrs;

var totalGradePoints =
  myCV.education.SEE.English.grade_pts * myCV.education.SEE.English.credit_hrs +
  myCV.education.SEE.Nepali.grade_pts * myCV.education.SEE.Nepali.credit_hrs;

var gpa = totalGradePoints / totalCreditHours;

console.log("Your GPA is: ", gpa.toFixed(2));

// Output

// Bipin Regmi:
// Class: 12
// English: 71
// NEpali: 75

// ...Calculation
// Total Marks:
// Percentage:
// GPA:
// Grade:
