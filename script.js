const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');
const searchInput = document.getElementById('searchInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${age}</td>
    <td>
      <button onclick="deleteStudent(this)">
        Delete
      </button>
    </td>
  `;

  studentList.appendChild(row);

  form.reset();
});

function deleteStudent(btn) {
  btn.parentElement.parentElement.remove();
}

searchInput.addEventListener('keyup', function () {
  const filter = searchInput.value.toLowerCase();

  const rows = document.querySelectorAll('#studentList tr');

  rows.forEach((row) => {
    const name = row.children[0].textContent.toLowerCase();

    if (name.includes(filter)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});
