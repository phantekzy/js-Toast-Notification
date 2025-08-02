// Get elements
const btnBox = document.getElementById('buttons')
const btns = document.querySelectorAll('.not-btn')
const toastBox = document.getElementById('toastBox')

// Icons for each toast type
const icons = {
  success: '<i class="fa-solid fa-circle-check"></i>',
  error: '<i class="fa-solid fa-circle-xmark"></i>',
  invalid: '<i class="fa-solid fa-triangle-exclamation"></i>'
}

// Show toast notification
function showToast(msg, type) {
  const toast = document.createElement('div')

  // Add base and type-specific classes
  toast.classList.add('toast', type)

  // Insert icon + message
  toast.innerHTML = `${icons[type] || ''}<span> ${msg}</span>`

  // Add toast to container
  toastBox.appendChild(toast)

  // Remove after 3 seconds
  setTimeout(() => {
    toast.remove()
  }, 3000)
}

// Add event listeners to buttons
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const message = btn.getAttribute('data-message')
    const type = btn.getAttribute('data-type')
    showToast(message, type)
  })
})

