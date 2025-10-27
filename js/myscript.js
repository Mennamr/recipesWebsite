const tooltips=document.querySelectorAll('.mytooltip')
tooltips.forEach(t => {
    new bootstrap.Tooltip(t)
})