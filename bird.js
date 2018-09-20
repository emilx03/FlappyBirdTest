function bird(){

  this.x = 20;
  this.y = 300-15;
  this.lift = -12;
  this.gravity = 1;
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
