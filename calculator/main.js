var inp = document.getElementById('inp');

function Hendler(elem) {
    elem.onclick = function(e) {
        var target = e.target;
      var action = target.getAttribute('data-action');
        var c = inp.value[inp.value.length-1];
        if ((c == "+" 
        || c == "-" || c == "*" || c == "/") && (action == "+" 
        || action == "-" || action == "*" || action == "/")) {
           var newValue = inp.value.slice(0, -1);
           inp.value = newValue; 
        }
        inp.value += action;
    };
  }
  var container = document.getElementById('num');
  new Hendler(container);

  function reset () {
    inp.value = '';
  }

  function result () {
    var c = inp.value[inp.value.length-1];
    if (c == "+" 
    || c == "-" || c == "*" || c == "/") {
       var newValue = inp.value.slice(0, -1);
       inp.value = newValue; 
    }
      var res = new Function ("", "return "+ inp.value);
      inp.value = res();
  }
