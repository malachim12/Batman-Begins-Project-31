constructor()
{
    var maxDrops = 100;

    for(var i=o; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }

    friction: 0.1
    
    if(this.rain.position.y > height){

        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }
}