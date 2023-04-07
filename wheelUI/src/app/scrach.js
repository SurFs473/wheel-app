var color    = ['#ca7','#7ac','#77c','#aac','#a7c','#ac7', "#caa"];
var label    = ['Amazon gift voucher', '200','50','100','5','500',"0"];
var stopAngel = []; // stop angels starting from label index 1(0...label.length)
var slices = color.length;
var sliceDeg = 360/slices;
var deg = 260;
var speed = 5;
var slowDownRand = 0;
var ctx = document.getElementById('canvas').getContext('2d');
var width = document.getElementById('canvas').width; // size
var center = width/2;      // center
// var center = 150;
var isStopped = false;
var lock = false;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function oddEven(num) {
  return num % 2 ?  true : false;
}

function deg2rad(deg){ return deg * Math.PI/180; }

function drawSlice(index, deg, color){
   var sAngel;
  var current =  (index <= 0) ? deg : stopAngel[index - 1];
  if (oddEven(index)) {
    if (current <= 0) {
      sAngel = Math.abs(Math.floor(260 + sliceDeg + 10 ));      
    } else {
      sAngel = Math.abs(Math.floor(current - sliceDeg + 10));
    }
    current = sAngel;
    stopAngel.push(current);
  } else {
    if (current <= 0) {
      sAngel = Math.abs(Math.floor(260 + sliceDeg - 10));      
    } else {
      sAngel = Math.abs(Math.floor(current - sliceDeg - 10));
    }
    current = sAngel;
    stopAngel.push(current);
  }
  stopAngel.push
  ctx.beginPath();
  console.log(ctx);
  ctx.fillStyle = color;
  ctx.moveTo(center, center);
  ctx.arc(center, center, center, deg2rad(deg), deg2rad(deg+sliceDeg), false);
  ctx.lineTo(center, center);
  ctx.fill();
}


// function drawSliceOut(index, deg, color){
//   // alert("call")
//   ctx.beginPath();
//   console.log(ctx);
//   ctx.fillStyle = '#6e4d4b';
//   ctx.moveTo(160, 160);
//   ctx.arc(150, 150, 150, 0, 360,false);
//   ctx.lineTo(150, 150);
//   ctx.fill();
// }

function drawText(deg, text) {
  ctx.save();
  ctx.translate(center, center);
  ctx.rotate(deg2rad(deg));
  ctx.textAlign = "right";
  ctx.fillStyle = "#fff";
  ctx.font = '14px';
  ctx.fillText(text, 130, 10);
  ctx.restore();
}

function drawImg() {
  ctx.clearRect(0, 0, width, width);
  // drawSliceOut();
  for(let i=0; i<slices; i++){
    drawSlice(i, deg, color[i]);
    drawText(deg+sliceDeg/2, label[i]);
    deg += sliceDeg;
  }
  console.log("Stop Angel " + stopAngel);
}

  // ctx.rotate(360);

function anim() {
   isStopped = true;
  deg += speed;
  deg %= 360;

  // Increment speed
  if(!isStopped && speed<3){
    speed = speed+1 * 0.1;
  }
  // Decrement Speed
  if(isStopped){
    if(!lock){
      lock = true;
      slowDownRand = rand(0.994, 0.998);
    } 
    speed = speed>0.2 ? speed*=slowDownRand : 0;
  }
  // Stopped!
  if(lock && !speed){
    // console.log("deg " + deg);
    //     console.log("slicedeg " + sliceDeg);
    // console.log("calc " + Math.floor(((360 - 208 - 90) % 360) / sliceDeg))
    // var ai = Math.floor(((360 - deg - 90) % 360) / sliceDeg); // deg 2 Array Index
    // console.log(slices)
    // ai = (slices+ai)%slices; // Fix negative index
    // return alert("You got:\n"+ label[ai] ); // Get Array Item from end Degree
    // ctx.arc(150,150,150,8.85131263511415, 9.748910536139757);
    //   ctx.fill();
    deg = 208;
      // drawImg();
  }

  drawImg();
  window.requestAnimationFrame(anim);
}

function start() {
  // anim();
  var ele = document.getElementById("canvas");
  ele.classList.add("spin-wheel");
  setTimeout(function() {
    ele.classList.remove("spin-wheel");
    deg= stopAngel[5];
    drawImg();
  }, 3000);

}

drawImg();
  




// <div class="wheel">
//      <canvas class="" id="canvas" width="320" height="320"></canvas>
// </div>
   
//    <button onClick="start()">Start</button>




// .wheel{
//      display:inline-block;
//      position:relative;
//      overflow:hidden;
//    }
//    .wheel:after{
//      content:"";
//      background:red;
//      border:2px solid white;
//      position:absolute;
//      top:-7px;
//      left:50%;
//      width:10px;
//      height:10px;
//      margin-left:-7px;
//      transform: rotate(45deg)
//    }
//    .spin-wheel {
//      margin: 0 auto;
//      -webkit-animation: rotate 0.5s linear infinite;
//      animation: rotate 0.5s linear infinite;
//    }
   
//    @keyframes rotate {
//      0% {
//           transform: rotate(0deg);
//      }
   
//      100% {
//           transform: rotate(360deg);
//      }
// }