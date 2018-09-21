var bird;
var t;
var eingabe;
var stop = false;

window.onload = function(){

  /*wenn Leertaste eingedrückt ist*/
  window.addEventListener('keydown', function(event){
    /*sorgt dafür, dass im Zusammenhand mit keyup die Prozedur
    "bird.up()" (welche den Bird zum Fliegen bringt), nur einmal
    aufgerufen wird, wenn die Leertaste gedrückt wurde*/
    if(stop == false){
      //event.which gibt den Ascii der gedrpckten Taste aus
      //32 ist also die Leertaste
      if(event.which == 32){
        stop = true;
        bird.up();
      }
    }
  });

  /*wenn Leertaste wieder losgelassen wird*/
  window.addEventListener('keyup', function(event){
    //event.which gibt den Ascii der gedrpckten Taste aus
    //32 ist also die Leertaste
    if(event.which == 32){
      stop = false;
    }
  });

  bird = new bird; //Bird erstellen
  /*eigentlich nur ein extra, damit der Bird sofort bei Aufruf
  der Seite in der Startposition ist*/
  bird.show();
  /*alle 10 millisekunden: +Funktion "update()"
  aufgerufen, welche sich um die Grvitation durch die
  Funktion "bird.update()" kümmert" +if-Abfragen werden
  aufgerufen, welche dafür sorgen dass der Bird das
  Spielfeld nicht verlässt +bird.coords wird auch immer
  wieder aufgerufen, und sorgt in diesemFall dafür, dass
  wenn der Bird das Spielfeld verlässt, er auf die
  richtige Position gesetzt wird.*/
  t = setInterval(function update(){
    /*bird.update()-->
    bie jedem Aufruf verändern sich die Koordinaten
    vom bird. Darf also nicht ans ende dieser Funktion,
    da, wenn er das Spielfeld verlassen würde, nochmal
    an Höhe verlieren würde*/
    bird.update();
    /*solange die yKoordinate vom bird größer als der Wert
    der Spielfläche ist, wird der bird immer auf den
    unteren Bildrand des Spielfelds gesetzt*/
    if(bird.y >= 570){
      bird.velocity = 0;
      bird.y = 570;
      /*der bird kann nicht höher als die Spielfläche fliegen.
      Berührt er also die "decke" fällt er von dort wieder
      herunter*/
    }else if(bird.y <= 0){
      bird.velocity = 0;
      bird.y = 0;
    }
    /*am Ende wird nochmal bird.coords aufgerufen, da wenn
    der Bird das Spielfeld verlässt, der Bird nicht erst im
    nächsten Interval auf die maximalen und minimalen
    Werte positioniert wird.*/
    bird.coords();
  }, 5);

}

function bird(){

  this.x = 20;
  this.y = 300-15;
  this.lift = -4;
  this.gravity = 0.15;
  this.velocity = 0;

  var bird = document.getElementById('bird');

  this.show = function(){
    this.coords();
  }

  this.update = function(){

    this.velocity += this.gravity;
    this.y += this.velocity;
    this.coords();

  }

  this.coords = function(){
    bird.style.top = this.y + 'px';
    bird.style.left = this.x + 'px';
  }

  this.up = function(){
    this.velocity += this.lift-this.velocity/1.5;
    this.y += this.velocity;
    this.coords();
  }
}
