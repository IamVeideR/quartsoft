import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entitiesList: ['films','planets', 'people', 'starships'],
    films: [],
    film: null,
    people: null,
    planet: null,
    starship: null,
    filmsList: [],
    charactersList: [],
    starshipsList: [],
    planetsList: [],
    entities: []
  },
  mutations: {
    changeFilms (state, value) {
      state.films = value
    },
    setFilm (state, value) {
      state.film = value
    },
    setPeople (state, value) {
      state.people = value
    },
    setPlanet (state, value) {
      state.planet = value
    },
    setStarship (state, value) {
      state.starship = value
    },
    resetEntities (state) {
        state.filmsList = []
        state.charactersList = []
        state.starshipsList = []
        state.planetsList = []
    },
    addFilms (state, value) {
      state.filmsList.push(value)
    },
    addCharacters (state, value) {
      state.charactersList.push(value)
    },
    addStarships (state, value) {
      state.starshipsList.push(value)
    },
    addPlanets (state, value) {
      state.planetsList.push(value)
    },
    clearEntities (state) {
      state.entities = []
    },
    addEntities (state, {value, entity}) {
        for (let elementValue in value) {
            value[elementValue].entity = entity
            state.entities.push(value[elementValue])
        }
    },
  },
  actions: {
    async getFilmsList ({commit}) {
      const response = await axios.get(
          `https://swapi.dev/api/films`,
          {
            params: {
            }
          }
      )
      if (response.status == 200) {
        commit('changeFilms',response.data.results)
        return response.data.results
      }
    },
      async getFilm ({commit, dispatch}, payload) {
      commit('resetEntities')
      const response = await axios.get(
          `https://swapi.dev/api/films/${payload}`
      )
      if (response.status == 200) {
          commit('setFilm',response.data)
          for (let character in response.data.characters) {
              dispatch('getCharacters',response.data.characters[character])
          }
          for (let starship in response.data.starships) {
              dispatch('getStarships',response.data.starships[starship])
          }
          for (let planet in response.data.planets) {
              dispatch('getPlanets',response.data.planets[planet])
          }
      }
      },
      async getPeople ({commit, dispatch}, payload) {
          commit('resetEntities')
          const response = await axios.get(
              `https://swapi.dev/api/people/${payload}`
          )
          if (response.status == 200) {
              commit('setPeople',response.data)
              for (let starship in response.data.starships) {
                  dispatch('getStarships',response.data.starships[starship])
              }
              for (let film in response.data.films) {
                  dispatch('getFilms',response.data.films[film])
              }
              dispatch('getPlanets',response.data.homeworld)
          }
      },
      async getPlanet ({commit, dispatch}, payload) {
          commit('resetEntities')
          const response = await axios.get(
              `https://swapi.dev/api/planets/${payload}`
          )
          if (response.status == 200) {
              commit('setPlanet',response.data)
              for (let resident in response.data.residents) {
                  dispatch('getCharacters',response.data.residents[resident])
              }
              for (let film in response.data.films) {
                  dispatch('getFilms',response.data.films[film])
              }
          }
      },
      async getStarship ({commit, dispatch}, payload) {
          commit('resetEntities')
          const response = await axios.get(
              `https://swapi.dev/api/starships/${payload}`
          )
          if (response.status == 200) {
              commit('setStarship',response.data)
              for (let pilot in response.data.pilots) {
                  dispatch('getCharacters',response.data.pilots[pilot])
              }
              for (let film in response.data.films) {
                  dispatch('getFilms',response.data.films[film])
              }
          }
      },
      async getFilms ({commit}, payload) {
          const response = await axios.get(
              payload
          )
          if (response.status == 200) {
              commit('addFilms',response.data)
          }
      },
      async getCharacters ({commit}, payload) {
          const response = await axios.get(
              payload
          )
          if (response.status == 200) {
              commit('addCharacters',response.data)
          }
      },
      async getStarships ({commit}, payload) {
          const response = await axios.get(
              payload
          )
          if (response.status == 200) {
              commit('addStarships',response.data)
          }
      },
      async getPlanets ({commit}, payload) {
          const response = await axios.get(
              payload
          )
          if (response.status == 200) {
              commit('addPlanets',response.data)
          }
      },
     async getEntities ({state,commit}, payload) {
         commit('clearEntities')
      for (let entity of state.entitiesList) {
        const response = await axios.get(
            `https://swapi.dev/api/${entity}`,
            {
              params: {
                search: payload,
              }
            }
        )
        if (response.status == 200) {
            let value = response.data.results
            commit('addEntities',{value, entity})
        }
      }
    },
  },
  modules: {
  }
})
