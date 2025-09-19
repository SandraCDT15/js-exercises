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

export async function createProvider({ business_name, business_type }) {
  const token = localStorage.getItem("token");
  console.log(token);
  const response = await fetch(
    "https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({
        business_name,
        business_type,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("There was a problem adding the provider");
  }

  return response.json();
}

export async function updateProvider(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({ id }),
    }
  );

  if (!response.ok) {
    throw new Error("There was a problem updating the provider");
  }

  return response.json();
}

export async function deleteProvider() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({ business_name: "Test2" }),
    }
  );

  if (!response.ok) {
    throw new Error("There was a problem updating the provider");
  }

  return response.json();
}

export async function getProduct(id) {
  const response = await fetch(
    `https://bapi.suajam.com/arteukimil/api/v1/catalog/product/${id}`
  );
  if (!response.ok) {
    throw new Error("Can´t get product");
  }

  return response.json();
}

export async function updateProduct(id, name) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://bapi.suajam.com/arteukimil/api/v1/catalog/product/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({ id, name }),
    }
  );

  if (!response.ok) {
    throw new Error("There was a problem updating the provider");
  }

  return response.json();
}

export async function refreshToken() {
  const token = localStorage.getItem("token");
  const response = await fetch(
    "https://bapi.suajam.com/arteukimil/api/v1/auth/refresh-token",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    }
  );

  if (!response.ok) {
    throw new Error("Token couldnt be refreshed");
  }

  return response.json();
}
