const config = {
    baseUrl: "https://...",
    headers: {
      authorization: "",
      "Content-Type": "application/json",
    },
  };
  
  const handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  };

export const updateUser = (name, phone) => {
    return fetch(`${config.baseUrl}...`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        phone: phone,
      }),
    }).then(handleResponse);
  };