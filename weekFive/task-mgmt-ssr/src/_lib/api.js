export async function registerUser(formData) {
  const response = await fetch(
    "https://bapi.suajam.com/arteukimil/api/v1/auth/registration/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to register user", response);
  }

  return response.json();
}

export async function loginUser({ email, password }) {
  const response = await fetch(
    "https://bapi.suajam.com/arteukimil/api/v1/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      bosy: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}
