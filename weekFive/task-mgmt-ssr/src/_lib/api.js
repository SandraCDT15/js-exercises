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
    "https://bapi.suajam.com/arteukimil/api/v1/auth/login/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}

export async function getProducts() {
  const response = await fetch(
    " https://bapi.suajam.com/arteukimil/api/v1/catalog/product?page=1&items=5",
    {
      cache: "force-cache",
      next: { revalidate: 30 },
    }
  );
  console.log(new Date().toLocaleTimeString());

  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const products = await response.json();
  return products.data;
}

export async function createProvider({ bussinesName, bussinesType }) {
  const response = await fetch(
    "https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bussinesName,
        bussinesType,
        email: "sandragullit@gmail.com",
      }),
    }
  );

  if (!response.ok) {
    throw new Error("There was a problem adding the provider");
  }

  return response.json();
}
