// load variables

const chips$ = document.querySelector('.chips');
const chipDelBtn$ = document.querySelectorAll('.delete-chip');
const chipInput$ = document.getElementById('chip-input');
const result = document.getElementById('result');
result.textContent = JSON.stringify(getChipValues() || []);

// Event Listeners

chips$.addEventListener('click', e => deleteChip(e.target));
chipInput$.addEventListener('keyup', e => addChip(e.key));
// Functions

function deleteChip(target) {
  if (target.classList.contains('delete-chip')) {
    target.parentElement.remove();
    result.innerText = JSON.stringify(getChipValues());
  }
}

function addChip(e) {
  if (chipInput$.value !== '' && e == 'Enter') {
    // Create new chip
    const newChip = document.createElement('div');
    newChip.classList.add('added-chip');
    newChip.innerHTML = `<span>${chipInput$.value}</span>
                      <button class="delete-chip">x</button>`;
    chips$.insertBefore(newChip, chipInput$);
    // Reset input
    chipInput$.value = '';
    result.innerText = JSON.stringify(getChipValues());
  }
}

function getChipValues() {
  const chipValues$ = document.querySelectorAll('.added-chip span');
  let totalChips = [];
  chipValues$.forEach(chip => totalChips.push(chip.textContent));
  return totalChips;
}
