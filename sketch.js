var player1;
var ground;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;
var obstacle1Group,obstacle2Group,obstacle3Group,obstacle4Group;
var coins1image,coins2image,coins3image,coins4image,coins5image,coins6image;
var trees1image,trees2image,trees3image,trees4image,trees5image,trees6image,trees7image,trees8image,trees9image,trees10image,trees11image;
var treasuresimage;
var rocksimage1;
var points1image,points2image,points3image,points4image,points5image,points6image,points7image,points8image,points9image,points10image,points11image,points12image,points13image,points14image,points15image,points16image,points17image,points18image,points19image,points20image,points21image,points22image,points23image,points24image,points25image,points26image;
var monkey1image,monkey2image,monkey3image,monkey4image,monkey5image,monkey6image,monkey7image,monkey8image,monkey9image,monkey10image,monkey11image,monkey12image,monkey13image,monkey14image;
var player1image,player2image,player3image; 
var forestimage;

function setup() 
{
  createCanvas(700,1200);
 
  //ground = createSprite(300,1100,900,20);

  bg = createSprite(350,632,50,50);
  bg.addImage("backgroundimage",forestimage);
  bg.scale = 1.3;

  player1 = createSprite(380, 1000, 50, 50);
  player1.addAnimation("player1image",player1image);

 
  obstacle1Group = new Group();
  obstacle2Group = new Group();
  obstacle3Group = new Group();
  obstacle4Group = new Group();

 
 
}

function preload()
{
  coins1image = loadImage("images/coins1.png");
  coins2image = loadImage("images/coins2.png");
  coins3image = loadImage("images/coins3.png");
  coins4image = loadImage("images/coins4.png");
  coins5image = loadImage("images/coins5.png");
  coins6image = loadImage("images/coins6.png");

  trees1image = loadImage("images/trees1.png");
  trees2image = loadImage("images/trees2.png");
  trees3image = loadImage("images/trees3.png");
  trees4image = loadImage("images/trees4.png");
  trees5image = loadImage("images/trees5.png");
  trees6image = loadImage("images/trees6.png");
  trees7image = loadImage("images/trees7.png");
  trees8image = loadImage("images/trees8.png");
  trees9image = loadImage("images/trees9.png");
  trees10image = loadImage("images/trees10.png");
  trees1i1mage = loadImage("images/trees11.png");

  treasuresimage = loadImage("images/treasures.png");

  points1image = loadImage("images/points1.png");
  points2image = loadImage("images/points2.png");
  points3image = loadImage("images/points3.png");
  points4image = loadImage("images/points4.png");
  points5image = loadImage("images/points5.png");
  points6image = loadImage("images/points6.png");
  points7image = loadImage("images/points7.png");
  points8image = loadImage("images/points8.png");
  points9image = loadImage("images/points9.png");
  points10image = loadImage("images/points10.png");
  points11image = loadImage("images/points11.png");
  points12image = loadImage("images/points12.png");
  points13image = loadImage("images/points13.png");
  points14image = loadImage("images/points14.png");
  points15image = loadImage("images/points15.png");
  points16image = loadImage("images/points16.png");
  points17image = loadImage("images/points17.png");
  points18image = loadImage("images/points18.png");
  points19image = loadImage("images/points19.png");
  points20image = loadImage("images/points20.png");
  points21image = loadImage("images/points21.png");
  points22image = loadImage("images/points22.png");
  points23image = loadImage("images/points23.png");
  points24image = loadImage("images/points24.png");
  points25image = loadImage("images/points25.png");
  points26image = loadImage("images/points26.png");

  monkey1image = loadImage("images/monkey1.png");
  monkey2image = loadImage("images/monkey2.png");
  monkey3image = loadImage("images/monkey3.png");
  monkey4image = loadImage("images/monkey4.png");
  monkey5image = loadImage("images/monkey5.png");
  monkey6image = loadImage("images/monkey6.png");
  monkey7image = loadImage("images/monkey7.png");
  monkey8image = loadImage("images/monkey8.png");
  monkey9image = loadImage("images/monkey9.png");
  monkey10image = loadImage("images/monkey10.png");
  monkey11image = loadImage("images/monkey11.png");
  monkey12image = loadImage("images/monkey12.png");
  monkey13image = loadImage("images/monkey13.png");
  monkey14image = loadImage("images/monkey14.png");

  rocksimage1 = loadImage("images/rocksimage.png");

  player1image = loadAnimation("images/player1.png","images/player2.png","images/player3.png");
  
  forestimage = loadImage("images/forest.jpg");


}

function draw() 
{
  background("black");;  

  /*if(keyDown("space"))
  {  
    player1.velocityY = -12;
  }
  */
  //player1.velocityY = player1.velocityY + 0.8;
  //player1.collide(ground);

  if(keyDown("UP_ARROW"))
  {
    player1.y = player1.y -10
  }
  if(keyDown("LEFT_ARROW"))
  {    
    player1.x = player1.x - 5 
  }
  if(keyDown("RIGHT_ARROW"))
  {   
    player1.x = player1.x + 5;
  }
  if(keyDown("DOWN_ARROW"))
  {   
    player1.y = player1.y + 5 
  }
  camera.x = player1.x;
  camera.y = player1.y-100;

  
  //ground.debug = true;
  player1.debug = true;
  console.log(player1.x);
  console.log(player1.y)

  /*player1.collide(obstacle1);  
  player1.collide(obstacle2);
  player1.collide(obstacle3); 
  player1.collide(obstacle4); 
  */ 


  console.log(frameCount);


  drawSprites();
  obstacle1();
  obstacle2();
  obstacle3();
  obstacle4();
}

function obstacle1() 
{
  if (frameCount % 100 === 0)
  {
    var obstacle1 = createSprite(120,550,150,30);
    obstacle1.y = Math.round(random(450,500));
    obstacle1.velocityX = 10;
    obstacle1.addImage("rocksimage",rocksimage1);
    
    
    obstacle1Group.add(obstacle1);
  }
  
}
function obstacle2() 
{
  if (frameCount% 100 === 0)
  {
    var obstacle2 = createSprite(570,450,130,20);
    obstacle2.y = Math.round(random(120,400));
    obstacle2.velocityX = -10;
    obstacle2.addImage("rocksimage2",rocksimage1);
    
    
    obstacle2Group.add(obstacle2);
  }
  
}
function obstacle3() 
{
  if (frameCount % 100 === 0)
  {
    var obstacle3 = createSprite(80,100,150,20);
    obstacle3.y = Math.round(random(120,500));
    obstacle3.velocityX = 10;
    obstacle3.addImage("rocksimage3",rocksimage1);
    
    
    obstacle3Group.add(obstacle3);
  }
  
}
function obstacle4() 
{
  if (frameCount % 100 === 0)
  {
    var obstacle4 = createSprite(580,200,150,20);
    obstacle4.y = Math.round(random(120,730));
    obstacle4.velocityX = -10;
    obstacle4.addImage("rocksimage4",rocksimage1);
    
    
    obstacle4Group.add(obstacle4);
  }
  
}