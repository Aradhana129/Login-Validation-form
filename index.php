<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login form</title>
    <link rel="stylesheet" href="style .css">
</head>

    <body>
        <div class="container">
      <form id="form">
        <div class="title">Signup Form Validation</div>
        <!-- User Name input -->

        <div>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name should be atleast 4 chars and less than 20 chars"
          />
          <div id="nameError" class="error"></div>
        </div>
        <!-- Email input -->

        <div>
          <label for="email">Email Id</label>

          <input
            type="text"
            name="email"
            id="email"
            placeholder="abc@mail.com"
          />
          <div id="emailError" class="error"></div>
        </div>
        <!--   Password input -->

        <div>
          <label for="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password should be atleast 6 chars and less than 30 chars"
          />
          <div id="passwordError" class="error"></div>
        </div>
        <!--   Checkbox input -->

        <div>
          <div>
            <input type="checkbox" name="consent" id="consent" />
            <label for="consent">Consent</label>
          </div>
          <div id="error"></div>
        </div>
        <!-- other codes are here -->

        <button id="btn" type="submit">Signup</button>
      </form>
    </div>

    <script src="script.js"></script>
    </body>
</html>
