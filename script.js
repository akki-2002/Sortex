let new_array = document.getElementById("new_array");
let input = document.getElementById("input");
let a1 = document.getElementById("a1");
let array = document.getElementById("array");
let submit = document.getElementById("submit");
let bs = document.getElementById("bs");
let ss = document.getElementById("ss");
let is = document.getElementById("is");
let qs = document.getElementById("qs");
let desc=document.getElementById("desc");
let dbs=document.getElementById("dbs");
let dss=document.getElementById("dss");
let dis=document.getElementById("dis");
var inputArray = [];
var k = 0;
let count=0;
var timeout = 1000;

new_array.addEventListener("click", () => {
  if(count==0)
  {
    input.style.opacity = "1";
    count++;
  }else{
    input.style.opacity = "0";
    count--;
  }
});

submit.addEventListener("click", () => {
    array.style.opacity = "1";
    let n = document.createElement("div");
    n.setAttribute("id", k++);
    n.classList.add("block1");
    n.textContent = a1.value;
    array.append(n);
    inputArray.push(n);
});

function bblSort(inputArray) {
    for(let i=0; i<inputArray.length; i++)
    {
        let n=document.getElementById(i);
        n.classList.add("block1");
        n.classList.remove("block5");
        n.classList.remove("block4");
    }
  for (let i = 0; i < inputArray.length - 1; i++) {
    for (let j = 0; j < inputArray.length - i - 1; j++) {
      setTimeout(() => {
        var a = document.getElementById(j);
        var b = document.getElementById(j + 1);
        a.classList.add("block2");
        b.classList.add("block2");
        a.classList.remove("block1");
        b.classList.remove("block1");
        if (parseInt(a.innerHTML) > parseInt(b.innerHTML)) {
          if (j > 0) {
            a.classList.remove("block2");
            b.classList.remove("block2");
            a.classList.add("block1");
            b.classList.add("block1");
          }
          a.classList.add("block2");
          b.classList.add("block2");
          a.classList.remove("block1");
          b.classList.remove("block1");
          setTimeout(() => {
            let temp = a.innerHTML;
            a.innerHTML = b.innerHTML;
            b.innerHTML = temp;
          }, 1000);

          setTimeout(() => {
            a.classList.remove("block2");
            b.classList.remove("block2");
            a.classList.add("block1");
            b.classList.add("block1");
          }, 1500);
          if (j === inputArray.length.i - 1) {
            setTimeout(() => {
              a.classList.remove("block2");
              b.classList.remove("block2");
              a.classList.add("block1");
              b.classList.add("block1");
            }, 2000);
          }
        }
        setTimeout(() => {
          a.classList.remove("block2");
          b.classList.remove("block2");
          a.classList.add("block1");
          b.classList.add("block1");
        }, 2500);
      }, timeout);
      timeout += 2600;
    }
  }
  setTimeout(() => {
    for (let i = 0; i < inputArray.length; i++) {
      var a = document.getElementById(i);
      a.classList.add("block5");
    }
  }, timeout);
  console.log(inputArray);
}

function selectionSort(inputArr) {
    for(let i=0; i<inputArray.length; i++)
    {
        let n=document.getElementById(i);
        n.classList.add("block1");
        n.classList.remove("block5");
        n.classList.remove("block4");
    }
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      let min = i;
      document.getElementById(i).classList.add("block2");
      document.getElementById(i).classList.remove("block1");
      for (let j = i + 1; j < n; j++) {
        setTimeout(() => {
          document.getElementById(j).classList.add("block3");
          document.getElementById(j).classList.remove("block1");
        }, 1000);
        setTimeout(() => {
          b = document.getElementById(j);
          if (
            parseInt(document.getElementById(j).innerHTML) <
            parseInt(document.getElementById(min).innerHTML)
          ) {
            min = j;
          }
          setTimeout(() => {
            document.getElementById(i).classList.add("block4");
            document.getElementById(i).classList.remove("block2");
          }, 2000);
        }, 1500);
        setTimeout(() => {
          document.getElementById(j).classList.add("block1");
          document.getElementById(j).classList.remove("block3");
        }, 2000);
      }
      setTimeout(() => {
        if (min != i) {
          var a = document.getElementById(i);
          var b = document.getElementById(min);
          let tmp = a.innerHTML;
          a.innerHTML = b.innerHTML;
          b.innerHTML = tmp;
        }
      }, 3500);
      setTimeout(() => {
        document.getElementById(i).classList.add("block1");
        document.getElementById(i).classList.remove("block2");
      }, 4000);
    }, timeout);
    timeout += 4000;
  }
  setTimeout(() => {
    for (let i = 0; i < inputArray.length; i++) {
      var a = document.getElementById(i);
      a.classList.add("block5");
    }
  }, timeout);
  console.log(inputArray);
}

function insertionSort(inputArr) { 
    for(let i=0; i<inputArray.length; i++)
    {
        let n=document.getElementById(i);
        n.classList.add("block1");
        n.classList.remove("block5");
        n.classList.remove("block4");
    }
  for (let i = 1; i < inputArr.length; i++) {
    setTimeout(() => {
      setTimeout(() => {
        document.getElementById(i).classList.add("block2");
        document.getElementById(i).classList.remove("block1");
      }, 1000);
      setTimeout(() => {
        var j = i - 1;
      let temp = document.getElementById(i).innerHTML;

      while (j >= 0 && parseInt(document.getElementById(j).innerHTML) > parseInt(temp)) {
        var a = document.getElementById(j + 1);
        var b = document.getElementById(j);
        a.innerHTML = b.innerHTML;
        j--;
      }
      document.getElementById(j + 1).innerHTML = temp;
      },2000);
    setTimeout(() => {
        document.getElementById(i).classList.add("block1");
        document.getElementById(i).classList.remove("block2");
      }, 3000);
    }, timeout);
    timeout +=3000;
  }
  setTimeout(() => {
    for (let i = 0; i < inputArray.length; i++) {
      var a = document.getElementById(i);
      a.classList.add("block5");
    }
  }, timeout);
  console.log(inputArray);
}


function partition(low, high) {

    // setTimeout(() => {
        let pivot = document.getElementById(high);
	// setTimeout(() => {
        pivot.classList.add("block2");
        pivot.classList.remove("block1");
    // }, 1000);
    // setTimeout(() => {
        pivot.classList.add("block1");
        pivot.classList.remove("block2");
    // }, 2000);
	let i = (low - 1);

	for (let j = low; j <= high - 1; j++) {
		if (parseInt(document.getElementById(j).innerHTML) < parseInt(pivot.innerHTML)) {
			i++;
			let a=document.getElementById(i);
            let b=document.getElementById(j);
            // setTimeout(() => {
                let temp = a.innerHTML;
                a.innerHTML = b.innerHTML;
                b.innerHTML = temp;
            // }, 3000);
		}
	}
	// setTimeout(() => {
        // swap(i + 1, high);
    // }, 3000);
        let a=document.getElementById(i+1);
        let b=document.getElementById(high);
        // setTimeout(() => {
            let temp = a.innerHTML;
            a.innerHTML = b.innerHTML;
            b.innerHTML = temp;
        // }, 4000);
	return (i + 1);
    // }, timeout);
    // timeout+=1000;
}

// let high=inputArray.length;
// let low=0;

function quickSort(low, high) {
	// setTimeout(() => {
        if (low < high) {
            let pi = partition(low, high);
            quickSort(low, pi - 1);
            quickSort(pi + 1, high);
        }
    // }, timeout);
    // timeout+=1000;
    // swap(low, high)
}
                     

bs.addEventListener("click", () => {
  bblSort(inputArray);
  dbs.classList.add("animation")
  dbs.style.opacity="1"
  dss.style.opacity="0"
  dis.style.opacity="0"
  dqs.style.opacity="0"
});

ss.addEventListener("click", () => {
  selectionSort(inputArray);
  dss.classList.add("animation")
  dss.style.opacity="1"
  dbs.style.opacity="0"
  dis.style.opacity="0"
  dqs.style.opacity="0"
});

is.addEventListener("click", () => {
  insertionSort(inputArray);
  dis.classList.add("animation")
  dis.style.opacity="1"
  dbs.style.opacity="0"
  dss.style.opacity="0"
  dqs.style.opacity="0"
});

qs.addEventListener("click", () => {
    quickSort(0, inputArray.length-1);
    dis.classList.add("animation")
    dis.style.opacity="0"
    dbs.style.opacity="0"
    dss.style.opacity="0"
    dqs.style.opacity="1"
  });