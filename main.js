function line_change() {
    let line = document.getElementById("colorChanging");
    line.setAttribute("stroke", "red");
  }

  function mouseOver() {
    var circle = document.getElementById("hovering");
    circle.setAttribute("fill", "orange");
  }
  function mouseOut() {
    var circle = document.getElementById("hovering");
    circle.setAttribute("fill", "lightblue");
  }


  document.getElementById("button")
    .addEventListener("click",line_change);

    document.getElementById("hovering")
    .addEventListener("mouseover",mouseOver);
    document.getElementById("hovering")
    .addEventListener("mouseout",mouseOut);