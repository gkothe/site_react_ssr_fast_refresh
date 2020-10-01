
const stateINIT = { ...getInitialState }

export function getInitialState() {
  if (typeof window !== 'undefined' && window.__APP_STATE) {
    return window.__APP_STATE;
  }
  return { user: {}, empresa: {}, teste: {} };
}

const Reducer = (state = stateINIT, action = {}) => {
  // console.log("~~~~~~~~~~~~~~~~~~~~~~", state, action);
  switch (action.type) {
    case "LOGOUT":
      return { ...state, ... { user: {} } };

    case "INIT":
      return { ...state, ...action };

    case "LOGIN":
      return { ...state, user: action.user };
    case "SET_EMPRESA":
      return { ...state, empresa: action.empresa };
    case "SET_CATEGORIA":
      return { ...state, categoria: action.data, random_categoria: new Date().getTime() };
    case "SET_OPENPRODUTO":
      return { ...state, produto: action.data };
    case "SET_CARRINHO":
      return { ...state, carrinho: action.data };
    case "SET_PESQUISA":
      return { ...state, pesquisa: action.data, random_pesquisa: new Date().getTime() };
    case "SET_LOAD_PESQUISA":
      return { ...state, loadpesquisa: action.data };
    default:
      return state;
  }
}

export default Reducer;