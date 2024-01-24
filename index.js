document.addEventListener("DOMContentLoaded", function () {
  const circleContainer = document.getElementById("circleContainer");

  const years = [
    1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020 // Add more years as needed
  ];

  const startingSizes = [
    840, 740, 670, 650, 680, 580, 560, 540, 520, 460
  ];

  const colors = [
    "#ddebff", "#c5ddff", "#a9ccff", "#90bdff", "#6fa9ff",
    "#549aff", "#2e83ff", "#0c49a4", "#05295e", "#020d1e"
  ];

  const iceAreas = [7.7, 6.7, 6.1, 6.1, 6.2, 5.5, 4.9, 4.6, 4.0];


  years.forEach((year, index) => {
    const circleContainerDiv = document.createElement("div");
    circleContainerDiv.classList.add("circle__container");

    const circleDiv = document.createElement("div");
    circleDiv.classList.add("circle");
    circleDiv.style.animationDelay = `${0.1 * (index + 1)}s`; // Adjust delay as needed

    // Set circle width based on the predefined starting sizes array
    const initialSize = startingSizes[index] /3;
    circleDiv.style.width = `${initialSize}px`;
    circleDiv.style.height = `${initialSize}px`;

    // Set circle background color based on the predefined color array
    const color = colors[index];
    circleDiv.style.backgroundColor = color;

    const dateParagraph = document.createElement("p");
    dateParagraph.classList.add("date");
    dateParagraph.textContent = year;

    dateParagraph.appendChild(document.createElement("br")); // Add this line before creating iceAreaParagraph
    const iceAreaParagraph = document.createElement("span"); // Changed from <p> to <span>
    iceAreaParagraph.classList.add("ice-area");
    iceAreaParagraph.textContent = iceAreas[index] + " million km²";
    iceAreaParagraph.style.opacity = 0; // Initially hide the ice area


   circleContainerDiv.addEventListener("mouseover", function () {
      const yearTexts = document.querySelectorAll(".date");
      const iceAreaTexts = document.querySelectorAll(".ice-area");

      yearTexts[index].style.color = "#020d1e";
      iceAreaTexts[index].style.color = "#020d1e";
      iceAreaTexts[index].style.opacity = 1; // Show ice area
    });

    circleContainerDiv.addEventListener("mouseout", function () {
      const yearTexts = document.querySelectorAll(".date");
      const iceAreaTexts = document.querySelectorAll(".ice-area");

      yearTexts[index].style.color = ""; // Reset to default color
      iceAreaTexts[index].style.color = ""; // Reset to default color
      iceAreaTexts[index].style.opacity = 0; // Hide ice area
    });

    circleContainerDiv.appendChild(dateParagraph);
    dateParagraph.appendChild(iceAreaParagraph); // Append ice area to the date paragraph
        circleContainerDiv.appendChild(circleDiv);
    circleContainer.appendChild(circleContainerDiv);
  });
});
