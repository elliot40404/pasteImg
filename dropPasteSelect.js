document.getElementById('filePicker').onclick = () => document.getElementById('fileInput').click()
const showImage = (src) => {
    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('preview').src = e.target.result;
        document.getElementById('preview').style.display = 'block';
    };
    reader.readAsDataURL(src);
}
document.getElementById('fileInput').onchange = (e) => showImage(e.target.files[0]);
document.getElementById('dropZone').addEventListener('paste', (e) => showImage(e.clipboardData.files[0]));
const drop = (e) => {
    e.preventDefault();
    showImage(e.dataTransfer.files[0]);
};
const dragOver = (e) => e.preventDefault()

// Language: javascript
// Path: dropPasteSelect.js
// required html
// <div ondrop="drop(e)" ondragover="dragOver(e)" class="paste" id="dropZone">
//  <h1>PASTE IMAGE</h1>
//  <h4>or</h4>
//  <input hidden type="file" id="fileInput">
//  <button id="filePicker">Browse</button>
//  <img src="" id="preview" />
//</div>
// required css
// #dropZone {
// background: rgb(29, 29, 29);
// height: 50vh;
// width: 40vw;
// border - radius: 20px;
// padding: 20px;
// color: rgb(51, 51, 51);
// text - align: center;
// display: grid;
// place - content: center;
// gap: 30px;
//  }
// #filePicker {
// padding: 10px 20px;
// background: rgb(60, 80, 255);
// border - radius: 5px;
// border: none;
// outline: none;
// cursor: pointer;
// }
// #preview {
// width: 100px;
// height: 100px;
// object - fit: contain;
// border - radius: 50 %;
// display: none;
// }