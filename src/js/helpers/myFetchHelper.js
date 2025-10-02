
export async function myPost(url, init) {
  let response = await fetch(url, init);
  if (response.ok === false) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else  {
    const resp = await response.json();
    return Promise.resolve(resp);
  }

};

export async function myGet(url) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.json();
    return Promise.resolve(resp);
  }
};

export async function myDelete(url) {
  let response = await fetch(url,{methode: "DELETE"});
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.json();
    return Promise.resolve(resp);
  }
};

