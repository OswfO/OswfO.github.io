// Add event listeners for drag events
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

// Function to handle drag start event
function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.target.classList.add('dragging');
}

// Function to handle drag end event
function dragEnd(e) {
  e.target.classList.remove('dragging');
}
