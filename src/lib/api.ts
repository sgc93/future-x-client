const url = "http://localhost:9000/api";

export const handleAuth = async (paload: object, ep: string) => {
  const res = await fetch(`${url}/auth/${ep}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(paload)
  });

  const data = await res.json();

  if (res.status >= 400) {
    throw new Error(data.message);
  }

  return data;
};

export const getUserData = async (token: string) => {
  const res = await fetch(`${url}/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    credentials: "include"
  });

  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};

export const getVideos = async (token: string) => {
  const res = await fetch(`${url}/videos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    credentials: "include"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch videos, refresh page!");
  }

  return await res.json();
};

export const getUsers = async () => {
  const res = await fetch(`${url}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users, refresh page!");
  }

  return await res.json();
};
