import AsyncStorage from '@react-native-community/async-storage';

export function logarUser(user) {
  setTimeout(() => {
    saveRedux(user);
  }, 10);
  user.random_user = new Date().getTime();
  return {
    type: "LOGIN",
    user,
  };
}
export function setCategoria(dados) {
  return {
    type: "SET_CATEGORIA",
    data: { ...dados }
  }
}
export function setCarrinho(dados) {
  return {
    type: "SET_CARRINHO",
    data: dados
  }
}

export function setPesquisa(dados) {
  return {
    type: "SET_PESQUISA",
    data: dados
  }
}

export function setEmpresa(dados) {
  return {
    type: "SET_EMPRESA",
    empresa: dados
  }
}

export function setLoadPesquisa(dados) {
  return {
    type: "SET_LOAD_PESQUISA",
    data: dados
  }
}

export function logout(callback) {
  saveRedux(null);
  if (callback) return callback({
    type: "LOGOUT",
    user: null,
  }, null);
}


export function setProduto(prod) {
  return {
    type: "SET_OPENPRODUTO",
    data: prod
  }
}
export function loadRedux(callback) {
  AsyncStorage.getItem("user", (err, result) => {
    if (result)
      try {
        var state = JSON.parse(result);
        if (!state) return;
        state.user = state.user ? state.user : null;
        if (callback) return callback({ user: state.user }, null);
      } catch (e) {
        console.log(e);
      }
  });
}

export function saveRedux(user) {
  try {
    AsyncStorage.setItem("user", JSON.stringify({ user }));
  } catch (e) { }
}
