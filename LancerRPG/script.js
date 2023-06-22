const cards = document.querySelectorAll('.card');
const columns = document.querySelectorAll('.column');

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

columns.forEach(column => {
  column.addEventListener('dragover', dragOver);
  column.addEventListener('dragenter', dragEnter);
  column.addEventListener('dragleave', dragLeave);
  column.addEventListener('drop', drop);
});

let draggedCard = null;

function dragStart(e) {
  draggedCard = e.target;
  e.dataTransfer.setData('text/plain', '');
  e.target.classList.add('dragging');
}

function dragEnd(e) {
  draggedCard = null;
  e.target.classList.remove('dragging');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  if (e.target.classList.contains('column')) {
    e.target.classList.add('drag-over');
  }
}

function dragLeave(e) {
  if (e.target.classList.contains('column')) {
    e.target.classList.remove('drag-over');
  }
}

function drop(e) {
  e.preventDefault();
  e.target.classList.remove('drag-over');
  const dropZone = e.target.querySelector('.column');
  if (draggedCard && dropZone && draggedCard !== dropZone) {
    dropZone.appendChild(draggedCard);
  }
}
