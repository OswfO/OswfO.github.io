const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

let draggedCard = null;

function dragStart(e) {
  draggedCard = e.target;
  e.dataTransfer.setData('text/plain', e.target.id);
  e.target.classList.add('dragging');
}

function dragEnd(e) {
  draggedCard = null;
  e.target.classList.remove('dragging');
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const cardId = e.dataTransfer.getData('text/plain');
  const card = document.getElementById(cardId);
  if (card && card !== draggedCard) {
    const targetColumn = e
