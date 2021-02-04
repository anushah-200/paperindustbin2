class Box {
    constructor(x, y, width, height) {
      var options = {
       isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.body1 = Bodies.rectangle(x+65, y-55, height, width, options);
      this.body2 = Bodies.rectangle(x-65, y-55, height, width, options);
      this.width = width;
      this.height = height;

      
      World.add(world, this.body);
       
      World.add(world, this.body1); 
      World.add(world, this.body2);

      this.image=loadImage("dustbin.png")
    }
    display(){
      var pos =this.body.position;
      var pos1 =this.body1.position;
      var pos2 =this.body2.position;
      imageMode(CENTER);
      push ()
      fill("white");
      //rect(pos1.x, pos1.y, this.height, this.width);
      //rect(pos2.x, pos2.y, this.height, this.width);
      //rect(pos.x, pos.y, this.width, this.height);
      image(this.image,pos.x,pos1.y-30,150,170)
      pop();
    }
  };