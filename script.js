const words = [];

function arrangeWords(){
    document.getElementById("afterArrange").innerHTML = "";

    const word = document.getElementById("wordsInput").value.trim();
    if (word === "") {
        alert("Please enter some words.");
        return;
    } else {
        words.push(word);
        document.getElementById("wordsInput").value = "";
    }

    document.getElementById("beforeArrange").innerHTML = words.join(", ");

    const arrangedWords = words.sort((a, b) => a.localeCompare(b, "my"));

    for (let i = 0; i < arrangedWords.length; i++) {
        const newElement = document.createElement("li");
        newElement.textContent = arrangedWords[i];
        document.getElementById("afterArrange").appendChild(newElement);
    }

};
