'use client';

export default function Home() {
  const handleLogin = () => {
    const username = (document.getElementById("username") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)?.value;
    const messageEl = document.getElementById("message");

    if (!username || !password) {
      if (messageEl) {
        messageEl.innerText = "Please fill all fields";
        messageEl.style.color = "red";
      }
    } else if (username === "admin" && password === "12345") {
      if (messageEl) {
        messageEl.innerText = "Login Successful!";
        messageEl.style.color = "green";
      }
    } else {
      if (messageEl) {
        messageEl.innerText = "Invalid Username or Password";
        messageEl.style.color = "red";
      }
    }
  };

  const handleReset = () => {
    (document.getElementById("username") as HTMLInputElement).value = "";
    (document.getElementById("password") as HTMLInputElement).value = "";
    const messageEl = document.getElementById("message");
    if (messageEl) messageEl.innerText = "";
  };

  return (
    <html>
      <head>
        <style>{`
          body {
            font-family: Arial;
            text-align: center;
            margin-top: 100px;
          }

          input {
            display: block;
            margin: 10px auto;
            padding: 10px;
            width: 200px;
          }

          button {
            padding: 10px 20px;
            margin: 5px;
          }

          #message {
            margin-top: 20px;
            font-weight: bold;
          }
        `}</style>
      </head>
      <body>
        <h2>Login System</h2>

        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password" />

        <button onClick={handleLogin}>Login</button>
        <button onClick={handleReset}>Reset</button>

        <p id="message"></p>
      </body>
    </html>
  );
}
