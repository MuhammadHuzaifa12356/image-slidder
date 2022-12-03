var pic = document.getElementsByTagName("img");

console.log(pic);

var num = 0;
function next() {
  if (num == 0) {
    document.getElementById(0).src =
    "https://cdn.pixabay.com/photo/2018/05/02/09/29/auto-3368094__340.jpg"
    num = num + 1;
  } else if (num == 1) {
    document.getElementById(0).src =
       "https://media.istockphoto.com/id/588605048/photo/old-station-wagon.jpg?s=612x612&w=0&k=20&c=0XQ5jcWhEG7vczyGWWrEFUW6dP6JM9ayWYFi_psJG2o="
    num = num + 1;
  } else if (num == 2) {
    document.getElementById(0).src =
    "https://i.pinimg.com/originals/84/32/e7/8432e716a47fd535859ec404d9b6be33.jpg"

    num = num - 2;
  }
}

function prev() {
  if (num == 2) {
    document.getElementById(0).src =
    "https://cdn.pixabay.com/photo/2018/05/02/09/29/auto-3368094__340.jpg"
     
    num = num - 1;
  } else if (num == 1) {
    document.getElementById(0).src =
    "https://media.istockphoto.com/id/588605048/photo/old-station-wagon.jpg?s=612x612&w=0&k=20&c=0XQ5jcWhEG7vczyGWWrEFUW6dP6JM9ayWYFi_psJG2o="
     
    num = num - 1;
  } else if (num == 0) {
    document.getElementById(0).src =
    "https://i.pinimg.com/originals/84/32/e7/8432e716a47fd535859ec404d9b6be33.jpg"
      
    num = num + 2;
  }
}
