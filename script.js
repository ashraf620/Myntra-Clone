let bagitems=[];
displayitemsonhomepage();

function addtobag(item){
bagitems.push(item);
displayBagicon();

}

function displayBagicon()
{
  let bagitemcount=document.querySelector('.bag-item-count');
  bagitemcount.innerText=bagitems.length;
}

function displayitemsonhomepage(){
  let itemsContainerElement=document.querySelector('.items-container');

  let innerHTML='';
  
  items.forEach(item => {
    
    innerHTML+=`<div class="item-container">
    <img class="item-img" src="${item.image}" alt="item image">
    <div class="rating">
      ${item.rating.stars}
      ⭐|  ${item.rating. count}
    </div>
    <div class="comapny-name">
         ${item.company}
    </div>
    <div class="item-name">
    ${item.item_name}
    </div>
    <div class="price">
      <span class="current-price">Rs${item.current_price} </span>
      <span class="original-price">Rs${item.original_price} </span>
      <span class="discount">%OFF${item.discount_price}</span>
  </div>
  <button class="btn-add-bag" onclick="addtobag(${item.id})">Add to Bag</button>
  </div>`;
  });
  
  
  
  itemsContainerElement.innerHTML=innerHTML;
  
}
