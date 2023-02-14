/* 11 Feb 2023 YGangire */
/* routine to get photos on the file system and display them in the gallery*/

/** this is the outer into which the div containing the gallert photos will be inserted */
const galleryDiv = document.getElementById("galleryId")


for (let i=1; i< 10; i++){
    const imgDiv =  document.createElement("div"); /* div to hold the images each image is soorounded by its own div*/
    const imgElem = document.createElement("img"); /* this is img element and all, properties of the images are set on this*/

    imgElem.src =  `img/${i}.jpg`;  /* URL of each individual element */

    imgDiv.appendChild(imgElem); /* add the image to the div */

    galleryDiv.appendChild(imgDiv); /* add the div with the image to the main div i.e. "galleryId" */

    imgDiv.classList.add("image"); /* add the image for styline the gallery image */
}
