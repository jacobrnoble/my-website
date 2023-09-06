document.addEventListener('DOMContentLoaded', () => {
  const addSectionButton = document.getElementById('add-section');
  const additionalSections = document.getElementById('additional-sections');

  addSectionButton.addEventListener('click', () => {
    const newSection = document.createElement('section');
    newSection.innerHTML = `<h2 contenteditable="true">New Section</h2><p contenteditable="true">Your content here.</p><button class='delete-section'>Delete</button>`;
    newSection.style.margin = '20px 0';
    newSection.style.padding = '20px';
    newSection.style.border = '1px solid #ddd';
    additionalSections.appendChild(newSection);

    const deleteButton = newSection.querySelector('.delete-section');
    deleteButton.addEventListener('click', () => {
      additionalSections.removeChild(newSection);
    });
  });
});