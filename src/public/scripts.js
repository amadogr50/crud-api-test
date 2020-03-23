

function onDeleteUser(element) {
  const id = element.getAttribute('data-id')
  const xhr = new XMLHttpRequest()
  xhr.open('DELETE', `/api/users/${id}`, true)
  xhr.send()
}

function onUpdateUser(element) {

}

function onUpdateModalOpen(element) {
  console.log(element)
  const nick = element.getAttribute('data-nick')
  const name = element.getAttribute('data-name')
  const lastName = element.getAttribute('data-lastName')
  const role = element.getAttribute('data-role')
  const email = element.getAttribute('data-email')

  const nickInput = document.getElementById('nickUpdateInput')
  nickInput.setAttribute('value', nick)
  const nameInput = document.getElementById('nameUpdateInput')
  nameInput.setAttribute('value', name)
  const lastNameInput = document.getElementById('lastNameUpdateNameInput')
  lastNameInput.setAttribute('value', lastName)
  const roleSelect = document.getElementById('roleUpdateSelect')
  roleSelect.selected = role
  const emailInput = document.getElementById('emailUpdateInput')
  emailInput.setAttribute('value', email)
}