    const API_URL = "http://localhost:3002/api/v1/users"; // 👈 ajusta al puerto de tu backend
    const output = document.getElementById("output");

    // 🔹 GET: traer todos los usuarios
    document.getElementById("btn-get").addEventListener("click", async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        output.textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        output.textContent = "Error: " + err;
      }
    });

    // 🔹 POST: crear un usuario
    document.getElementById("btn-agregar").addEventListener("click", async () => {
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      try {
        const body = { email, password }

        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        const data = await res.json();
        output.textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        output.textContent = "Error: " + err;
      }
    });
