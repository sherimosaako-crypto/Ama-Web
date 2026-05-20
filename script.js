const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const closeBtn = document.getElementById('close-btn');
const backdrop = document.getElementById('backdrop');

// Open sidebar
sidebarToggle.addEventListener('click', () => {
  sidebar.style.left = '0';
  backdrop.style.display = 'block';
});

// Close sidebar
function closeSidebar() {
  sidebar.style.left = '-300px';
  backdrop.style.display = 'none';
}

closeBtn.addEventListener('click', closeSidebar);
backdrop.addEventListener('click', closeSidebar);
