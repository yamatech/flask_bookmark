function toggleAdd() {
  const panel = document.getElementById('addPanel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) {
    panel.querySelector('input[name="title"]').focus();
  }
}
