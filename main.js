/* 11 Feb 2023 YGangire */
/* routine to get photos on the file system and display them in the gallery*/

const galleryDiv = document.getElementById("galleryId")

for (let i=1; i< 10; i++){
    const imgDiv =  document.createElement("div");
    const imgElem = document.createElement("img");

    imgElem.src =  `img/${i}.jpg`;

    imgDiv.appendChild(imgElem);

    galleryDiv.appendChild(imgDiv);

    imgDiv.classList.add("image");
}
// console.log(imgDiv);
console.log(galleryDiv);