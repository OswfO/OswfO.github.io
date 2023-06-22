const cards = document.querySelectorAll('.card');
const dropZones = document.querySelectorAll('.drop-zone');

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

dropZones.forEach(dropZone => {
  dropZone.addEventListener('dragenter', dragEnter);
  dropZone.addEventListener('dragover', dragOver);
  dropZone.addEventListener('dragleave', dragLeave);
  dropZone.addEventListener('drop', drop);
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

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

function drop(e) {
  e.preventDefault();
  e.target.classList.remove('drag-over');
  const cardId = e.dataTransfer.getData('text/plain');
  const card = document.getElementById(cardId);
  if (card && card !== draggedCard) {
    const dropZone = e.target;
    // Detach the card from its current parent
    card.parentNode.removeChild(card);
    // Append the card to the new drop zone
    dropZone.appendChild(card);
  }
}

}
