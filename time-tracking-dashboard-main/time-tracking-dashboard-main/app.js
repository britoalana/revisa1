const contentBox = document.querySelector(".content");

window.addEventListener("DOMContentLoaded", () => {
  showContent();
});

function showContent() {
  fetch("data.json")
    .then((data) => {
      return data.json();
    })
    .then((item) => {
      let displayContent = item.map((info) => {
        return `<div class="caixas">
             <section class="content " >
            <div class="icon  ${info.header}">
              <img src=${info.img} alt="" width="40px">
            </div>
    
            <div class="content-conteudo">
              <article class="conteudo-title"><p class="title">${info.title}  </p>
                <img src="./images/three_dots_icon_159804.svg" alt="" /></article>
              <article class="atividade"><p class="current">${info.current}</p>
                <p class="previous">Last Week - ${info.previous}</p></article>
            </div>
          </section>
          </div>`;
      });

      displayContent = displayContent.join("");
      contentBox.innerHTML = displayContent;
    })

    .catch((error) => console.log("Error: " + error));
}
