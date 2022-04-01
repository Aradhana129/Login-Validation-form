const form = document.getElementById('form'),
        nameErrorMsg = document.getElementById('nameError'),
        emailErrorMsg = document.getElementById('emailError'),
        passwordErrorMsg = document.getElementById('passwordError')

      const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

      function isEmailAddress(str) {
        return str.match(pattern)
      }

      const signUpFormValidation = (formData) => {
        nameErrorMsg.innerHTML = ''
        emailErrorMsg.innerHTML = ''
        passwordErrorMsg.innerHTML = ''
        const error = {}
        const fields = ['email', 'password', 'name']
        fields.forEach((field) => {
          if (!formData[`${field}`]) {
            error[field] = `${field} not present`
          }
        })
        if (
          formData.name &&
          (formData.name.length < 3 || formData.name.length > 20)
        ) {
          error['name'] =
            'Name should be atleast 4 chars and less than 20 chars'
        }
        if (
          formData.password &&
          (formData.password.length < 6 || formData.password.length > 30)
        ) {
          error['password'] =
            'Password should be atleast 6 chars and less than 30 chars'
        }

        if (formData.email && isEmailAddress(formData.email) === null) {
          error['email'] = 'Not a valid email'
        }

        for (let message in error) {
          if ('name' == message) {
            nameErrorMsg.innerHTML = error[message]
          } else if ('email' == message) {
            emailErrorMsg.innerHTML = error[message]
          } else if ('password' == message) {
            passwordErrorMsg.innerHTML = error[message]
          }
        }
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault()
        const username = document.getElementById('name').value,
          useremail = document.getElementById('email').value,
          userpassword = document.getElementById('password').value

        const formFieldsData = {}
        formFieldsData.name = username
        formFieldsData.email = useremail
        formFieldsData.password = userpassword

        signUpFormValidation(formFieldsData)
      })