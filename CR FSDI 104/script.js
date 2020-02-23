class Character{
  constructor(image,name,energy,hp,id){
    this.name=name;
    this.energy=energy;
    this.hp=hp;
    this.id=id;
    this.image=image;
  }
  display = function() {
    document.getElementById("img"+this.id).innerHTML=`<img class="character" src="${this.image} " alt ="rick">`
    document.getElementById(this.id).innerHTML=`Name: ${this.name}<br> Energy ${this.energy} <br> HP ${this.hp}` ;
  }

  attack = function(opponent,item){
    var newEnergy = opponent.energy - item.imagic;
    opponent.energy= newEnergy;
    opponent.display();
    document.getElementById('console').innerHTML=`Item <img src="${item.img}">`

    if(newEnergy<=0){
      document.getElementById('console').innerHTML=`GAME OVER --- ${this.name} WON!!!`;
      }
      else{
      document.getElementById('console').innerHTML=`${this.name} is attacking with a <br> <img class="character2" src="${item.img}">`;    
      }

    //display game over message
    //dispaly yoshi is attacking toad with a name of item 
  }
}



const c1 = new Character("img/rick2.png","Rick", 100, 0,"c1");
const c2 = new Character("img/morty2.png","Morty", 100, 0,"c2");

c1.display();
c2.display();


class Item{
  constructor(iname,imagic,img){
    this.iname=iname;
    this.imagic=imagic;
    this.img=img;
  }
}

const item1 = new Item("Portal Gun", 20, "img/portalgun.jpg");
const item2 = new Item("mr PB", 10,"img/mr PB.png");
const item3 = new Item("pickle rick", 10,"img/portal.png")

var items = [item1, item2, item3];

function select(){
  let selection= Math.floor(Math.random()*3);
  return items[selection];
}

