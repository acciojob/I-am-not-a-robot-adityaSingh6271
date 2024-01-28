//your code here
document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("image-container");
  const resetButton = document.getElementById("reset");
  const verifyButton = document.getElementById("verify");
  const para = document.getElementById("para");
  let selectedTiles = [];

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Function to render images
  function renderImages() {
    const imageClasses = ["img1", "img2", "img3", "img4", "img5", "img1"];
    shuffleArray(imageClasses);

    imageContainer.innerHTML = "";
    imageClasses.forEach((imgClass, index) => {
      const img = document.createElement("img");
      img.src = "";
      img.className = imgClass;
      img.addEventListener("click", () => handleImageClick(index));
      imageContainer.appendChild(img);
    });
  }

  // Function to handle image clicks
  function handleImageClick(index) {
    if (selectedTiles.length < 2) {
      const clickedImage = document.getElementsByClassName(`img${index + 1}`)[0];
      clickedImage.classList.add("selected");
      selectedTiles.push(index);
    }

    if (selectedTiles.length === 2) {
      resetButton.style.display = "block";
      verifyButton.style.display = "block";
    }
  }

  // Function to reset the state
  function resetState() {
    const selectedImages = document.getElementsByClassName("selected");
    Array.from(selectedImages).forEach((img) => img.classList.remove("selected"));

    selectedTiles = [];
    resetButton.style.display = "none";
    verifyButton.style.display = "none";
    para.style.display = "none";
  }

  // Function to verify the selected tiles
  function verifyTiles() {
    if (selectedTiles.length === 2) {
      const [index1, index2] = selectedTiles;
      const class1 = document.getElementsByClassName(`img${index1 + 1}`)[0].classList[0];
      const class2 = document.getElementsByClassName(`img${index2 + 1}`)[0].classList[0];

      if (class1 === class2) {
        para.innerText = "You are a human. Congratulations!";
      } else {
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
      }

      para.style.display = "block";
      verifyButton.style.display = "none";
      resetButton.style.display = "none";
    }
  }

  // Initial setup
  renderImages();
});
