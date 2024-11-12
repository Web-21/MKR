document.getElementById("loadData").addEventListener("click", function() {
    const apiUrl = "https://anapioficeandfire.com/api/characters/583";
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const character = JSON.parse(xhr.responseText);
  
        document.getElementById("name").textContent = character.name || "Невідомо";
        document.getElementById("gender").textContent = character.gender || "Невідомо";
        document.getElementById("culture").textContent = character.culture || "Невідомо";
        document.getElementById("born").textContent = character.born || "Невідомо";
        document.getElementById("died").textContent = character.died || "Невідомо";
        document.getElementById("titles").textContent = character.titles.join(", ") || "Немає";
        document.getElementById("aliases").textContent = character.aliases.join(", ") || "Немає";
        document.getElementById("tvSeries").textContent = character.tvSeries.join(", ") || "Немає даних";
        document.getElementById("playedBy").textContent = character.playedBy.join(", ") || "Невідомо";
      }
    };
  
    xhr.send();
  });
  