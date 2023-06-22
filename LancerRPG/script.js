const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousedown', dragStart);
  card.addEventListener('touchstart', dragStart);
  card.addEventListener('mouseup', dragEnd);
  card.addEventListener('touchend', dragEnd);
});

let draggedCard = null;

function dragStart(e) {
  draggedCard = e.target;
  e.target.classList.add('dragging');
}

function dragEnd(e) {
  draggedCard = null;
  e.target.classList.remove('dragging');
}
