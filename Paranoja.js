// Given array
var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru", // Нам такі не підходять
  },
  {
    userName: "Dmitro1",
    lastName: "Porohov1",
    email: "dmitro1.porohov1@yahoo.com",
  },
  {
    userName: "Andrii123",
    lastName: "",
    email: "andrii@mail123.ru", // Нам такі не підходять
  },
];

// Output the given array
document.getElementById("arrayOutput").textContent = JSON.stringify(
  arr,
  null,
  2
);
//Function for filtering emals
function getFilteredEmails() {
  const filteredEmails = arr.filter((obj) =>
    //This regular expression /@(gmail\.com|yahoo\.com)$/ ensures that only email addresses ending with @gmail.com or @yahoo.com are matched.
    /@(gmail\.com|yahoo\.com)$/.test(obj.email)
  );
  //Output found trusted emails
  const filteredEmailsDiv = document.getElementById("filteredEmails");
  filteredEmailsDiv.innerHTML = ""; // Clear previous content
  filteredEmails.forEach((obj) => {
    const emailDiv = document.createElement("div");
    emailDiv.textContent = obj.email;
    filteredEmailsDiv.appendChild(emailDiv);
  });
}
