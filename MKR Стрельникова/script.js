document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://anapioficeandfire.com/api/characters/583";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(character => {
        document.getElementById("name").textContent = character.name || "Unknown";
        document.getElementById("gender").textContent = character.gender || "";
        document.getElementById("culture").textContent = character.culture || "";
        document.getElementById("born").textContent = character.born || "";
        document.getElementById("died").textContent = character.died || "";
        document.getElementById("titles").textContent = character.titles.join(", ") || "";
        document.getElementById("aliases").textContent = character.aliases.join(", ") || "";
        document.getElementById("father").textContent = character.father || "";
        document.getElementById("mother").textContent = character.mother || "";
        document.getElementById("spouse").textContent = character.spouse || "";
        document.getElementById("books").textContent = character.books.map(b => b.split("/").pop()).join(", ") || "";
        document.getElementById("povBooks").textContent = character.povBooks.map(b => b.split("/").pop()).join(", ") || "";
        document.getElementById("playedBy").textContent = character.playedBy.join(", ") || "";
      })
      .catch(error => console.error("Error fetching data:", error));
  });
  