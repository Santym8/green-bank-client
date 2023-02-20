import axios from "axios";

const baseUrl = "https://green-bank-api.onrender.com";

export const fetchFamilia = (setValue) => {
  axios.get(baseUrl + "/api/taxonomia/familia").then((response) => {
    setValue(response.data.data);
  });
};

export const fetchGenero = (setValue, familiaId) => {
  const url = baseUrl + "/api/taxonomia/genero";
  const params = {};
  if (familiaId) {
    params.familiaId = familiaId;
  }
  axios.get(url, { params: params }).then((response) => {
    setValue(response.data.data);
  });
};

export const fetchEspecie = (setValue, familiaId, generoId) => {
  const url = baseUrl + "/api/taxonomia/especie";
  const params = {};
  if (familiaId) {
    params.familiaId = familiaId;
  }
  if (generoId) {
    params.generoId = generoId;
  }
  axios.get(url, { params: params }).then((response) => {
    setValue(response.data.data);
  });
};

export const fetchSubespecie = (setValue, familiaId, generoId, especieId) => {
  const url = baseUrl + "/api/taxonomia/subespecie";
  const params = {};
  if (familiaId) {
    params.familiaId = familiaId;
  }
  if (generoId) {
    params.generoId = generoId;
  }
  if (especieId) {
    params.especieId = especieId;
  }
  axios.get(url, { params: params }).then((response) => {
    setValue(response.data.data);
  });
};

export const fetchNombreLocal = (
  setValue,
  familiaId,
  generoId,
  especieId,
  subespecieId
) => {
  const url = baseUrl + "/api/taxonomia/nombre-local";
  const params = {};
  if (familiaId) {
    params.familiaId = familiaId;
  }
  if (generoId) {
    params.generoId = generoId;
  }
  if (especieId) {
    params.especieId = especieId;
  }
  if (subespecieId) {
    params.subespecieId = subespecieId;
  }
  axios.get(url, { params: params }).then((response) => {
    setValue(response.data.data);
  });
};

// ----------------------Formulario Recoleccion----------------
export const fetchInstitutoColector = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/institutos-colectores")
    .then((response) => {
      setValue(response.data.data);
    });
};

// ----------------------Formulario Suelo----------------
export const fetchDrenajeSuelo = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/drenaje-suelo")
    .then((response) => {
      setValue(response.data.data);
    });
};

export const fetchColorjeSuelo = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/color-suelo")
    .then((response) => {
      setValue(response.data.data);
    });
};

export const fetchPedregosidad = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/pedregosidad")
    .then((response) => {
      setValue(response.data.data);
    });
};

export const fetchTexturaSuelo = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/textura-suelo")
    .then((response) => {
      setValue(response.data.data);
    });
};

export const fetchErosionSuelo = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/erosion-suelo")
    .then((response) => {
      setValue(response.data.data);
    });
};

// ----------------------Formulario Clima----------------
export const fetchLuz = (setValue) => {
  axios.get(baseUrl + "/api/accesiones/formulario/luz").then((response) => {
    setValue(response.data.data);
  });
};

// ----------------------Formulario Terreno----------------
export const fetchTopografia = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/topografia")
    .then((response) => {
      setValue(response.data.data);
    });
};

export const fetchFisiografia = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/fisiografia")
    .then((response) => {
      setValue(response.data.data);
    });
};

export const fetchVegetacionAlrededor = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/vegetacion-alrededor")
    .then((response) => {
      setValue(response.data.data);
    });
};

export const fetchFormaGeografica = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/forma-geografica")
    .then((response) => {
      setValue(response.data.data);
    });
};

export const fetchFormaPendiente = (setValue) => {
  axios
    .get(baseUrl + "/api/accesiones/formulario/forma-pendiente")
    .then((response) => {
      setValue(response.data.data);
    });
};
