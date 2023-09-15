const contentDiv=document.getElementById("content");
function defaultLayout(){
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
      }
    const restaurantHeader = document.createElement('h1');
    const restaurantImage = document.createElement('img');
    const restaurantCaption = document.createElement('h2');
    const restaurantText = document.createElement('p');
    const menuButton=document.createElement("input");
    menuButton.type="button";
    menuButton.value="Menu";

    menuButton.addEventListener("click",function(){
        menuLayout();

    })
    restaurantHeader.innerHTML="A very nice and contemporary restaurant";
    restaurantImage.src="images/51951042270_78ea1e8590_h.7.jpg";
    restaurantCaption.innerHTML="lorem ipsum dolor";
    restaurantText.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, velit sequi amet recusandae explicabo ea voluptatem suscipit corrupti facere placeat nostrum adipisci, fugiat doloremque quas consectetur aperiam quam consequuntur ratione.";
        
    contentDiv.appendChild(restaurantHeader);
    contentDiv.appendChild(restaurantImage);
    contentDiv.appendChild(restaurantCaption);
    contentDiv.appendChild(restaurantText);
    contentDiv.appendChild(menuButton);
}


function menuLayout(){
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
      }
      const defaultButton=document.createElement("input");
      defaultButton.type="button";
      defaultButton.value="Back";

      defaultButton.addEventListener("click",function(){
          defaultLayout();
  
      })
    const menuHeader = document.createElement('h1');
    const menuItem1=document.createElement('p');
    menuItem1.innerHTML="we don't serve food.";
    menuHeader.innerHTML = "Menu";
    contentDiv.appendChild(menuHeader);
    contentDiv.appendChild(menuItem1);
    contentDiv.appendChild(defaultButton);
    
}

defaultLayout();