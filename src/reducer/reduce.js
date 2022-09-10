function reduce(state, { type, payload }) {
  switch (type) {
    case "GET": {
      return {
        ...state,
        posts: payload,
      };
    }
    case "Search": {
      console.log(payload.length);
      if (!payload || payload.length < 3) {
        fetch(`http://www.omdbapi.com/?apikey=60c186c3&s=man`)
          .then((data) => data.json())
          .then((data) => {
            state.setState(data.Search);
          });
      } else {
        fetch(`http://www.omdbapi.com/?apikey=60c186c3&s=${payload}`)
          .then((data) => data.json())
          .then((data) => {
            if (data.Response) {
              state.setState(data.Search);
            } else {
              alert("Ushbu nom ostidagi mahsulot topilmadi");
            }
          });
      }

      return {
        ...state,
        search: payload,
        isCarusel:!state.isCarusel
      };
    }

    case "Type": {
      fetch(
        `http://www.omdbapi.com/?apikey=60c186c3&s=${state.search}&type=${state.type}`
      )
        .then((data) => data.json())
        .then((data) => {
          if (data.Response) {
            state.setState(data.Search);
          } else {
            alert("Ushbu nom ostidagi mahsulot topilmadi");
          }
        });
      return {
        ...state,
        type: payload,
      };
    }
    case "BgNavbar2": {
      return {
        ...state,
        bg: payload,
      };
    }
    case "BgUl2": {
      return {
        ...state,
        bgUl2: payload,
      };
    }
    case "BgContent": {
      return {
        ...state,
        bgContent: payload,
      };
    }
    case "BgFooter": {
      return {
        ...state,
        bgFooter: payload,
      };
    }
    case "BgCard": {
      return {
        ...state,
        bgCard: payload,
      };
    }
    case "Click": {
      return {
        ...state,
        isClick: !state.isClick,
      };
    }
    case "MenuBar": {
      return {
        ...state,
        menuBar: "menu_open",
      };
    }
    case "MenuClose": {
      return {
        ...state,
        menuBar: "menu_close2",
      };
    }
    default:
      return state;
  }
}
export default reduce;
