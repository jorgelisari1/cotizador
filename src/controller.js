export const getInfo = async (name, placa) => {

    const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: name,
        body: placa,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error('error rest api getInfo', err));
  
    return (result);
  };