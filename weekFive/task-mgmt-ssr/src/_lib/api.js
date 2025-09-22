"use server";

import { cookies } from "next/headers";

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

  const jsonResponse = await response.json();

  const cookie = await cookies();
  cookie.set("token", jsonResponse.token);

  return jsonResponse;
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

export async function getProvider(id) {
  const cookie = await cookies();
  const token = cookie.get("token").value;

  const response = await fetch(
    `https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
  );
  if (!response.ok) {
    console.log(response);
    throw new Error("Can´t get provider");
  }

  return response.json();
}

export async function createProvider({ business_name, business_type }) {
  const cookie = await cookies();
  const token = cookie.get("token").value;

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
  const cookie = await cookies();
  const token = cookie.get("token").value;

  const response = await fetch(
    `https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({ id }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("There was a problem updating the provider");
  }

  return response.json();
}

// try {
//   const result = await updateProvider();
//   console.log("Provider updated", result);
// } catch (err) {
//   console.error(err.message);
// }

//Provider cant be deleted, has to be unavailable

export async function deleteProvider(id) {
  const cookie = await cookies();
  const token = cookie.get("token").value;

  const response = await fetch(
    `https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({ id, is_archived: true }),
    }
  );

  if (!response.ok) {
    throw new Error("Provider couldn't be deleted");
  }

  return response.json();
}

// try {
//   const result = await deleteProvider();
//   console.log("Provider updated", result);
// } catch (err) {
//   console.error(err.message);
// }

export async function getProduct(id) {
  const response = await fetch(
    `https://bapi.suajam.com/arteukimil/api/v1/catalog/product/${id}`
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Can´t get product");
  }

  return response.json();
}

export async function createProduct(name, category) {
  const cookie = await cookies();
  const token = cookie.get("token").value;

  const response = await fetch(
    "https://bapi.suajam.com/arteukimil/api/v1/catalog/product",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({ name, category }),
    }
  );

  if (!response.ok) {
    throw new Error("There was a problem creating the product.");
  }

  return response.json();
}

export async function updateProduct(id, name) {
  const cookie = await cookies();
  const token = cookie.get("token").value;

  const response = await fetch(
    `https://bapi.suajam.com/arteukimil/api/v1/catalog/product/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({ id, name }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("There was a problem updating the product");
  }

  return response.json();
}

export async function deleteProduct(id) {
  const cookie = await cookies();
  const token = cookie.get("token").value;

  const response = await fetch(
    `https://bapi.suajam.com/arteukimil/api/v1/catalog/product/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({ id, is_archived: true }),
    }
  );

  if (!response.ok) {
    throw new Error("Product couldn't be deleted");
  }

  return response.json();
}

export async function refreshToken() {
  const cookie = await cookies();
  const token = cookie.get("token").value;

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
