let image = document.getElementById('images_list');
let getPersonajes=document.getElementById('getPersonajes');
let imagesList =document.getElementById('images_list')
let info = document.querySelectorAll('.information');
/*let text=document.getElementById('images_text');*/
var pag = 96;


function llenar_personajes() {
  fetch('https://randomuser.me/api/?results=' + pag)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((respuesta) => {
      console.log(respuesta);
      var list_images = respuesta.results.length;
      for (var i = 0; i < list_images; i++) {

        const items =
          `<div class="item" data-id=${i}>
    <img src="${respuesta.results[i].picture.large}" class="img-thumbnail thumb m-r" width="100" height="100">
    <p>
    <span> ${respuesta.results[i].name.first} ${respuesta.results[i].name.last}   </span><br>  
    <div class="information"> 
    <p>Cellphone:   ${respuesta.results[i].cell}</p>
    <p> Age:  ${respuesta.results[i].dob.age}</p>
    <p> Date-borth:  ${respuesta.results[i].dob.date}</p>
    <p> Gender:  ${respuesta.results[i].gender}</p>
    <p> Location:  ${respuesta.results[i].location.city}</p>
    <p> Email:  ${respuesta.results[i].email}</p>
    </div>
    </div>`

        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = items;
        image.append(html.body.children[0]);

        let info = document.querySelectorAll('.information');
        let items_d = document.querySelectorAll('.item');
        items_d.forEach(function (button, index) {

          button.addEventListener("click", function () {
          image.classList.add("select-image");
          items_d[index].classList.add("image-selected");
          items_d[index].classList.remove("item");
          info[index].style.display="block";
       
            console.log("hola");

 
          });
        });

      }
    })
}

(function main() {

  llenar_personajes();
})()

getPersonajes.addEventListener('click',function(e){
  imagesList.classList.remove("select-image");
  let deleteImages=document.querySelectorAll('.image-selected');
  let deleteInfo=document.querySelectorAll('.image-selected .information');
 
  console.log(deleteInfo);
  for (var i=0; deleteImages.length; i++){
    for(var i=0; deleteInfo.length;i++){

     deleteImages[i].classList.remove('image-selected');
     deleteImages[i].classList.add('item');
     deleteInfo[i].style.display="none";
     
    }
  }
});

