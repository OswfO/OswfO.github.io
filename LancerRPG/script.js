window.onload = function() {
  let el = document.getElementById('columns');
  Sortable.create(el, {
    group: 'shared', 
    animation: 150, 
    ghostClass: 'blue-background-class'
  });
}

