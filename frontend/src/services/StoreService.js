import axios from 'axios'
import Cookies from 'universal-cookie'

const omdbapiMovieIds = [
  'tt4154756',
  'tt0417741',
  'tt5164184',
  'tt1219827',
  'tt0238380',
  'tt4547194',
  'tt4975722',
  'tt0443272',
  'tt2527336',
  'tt0081505',
  'tt1798709',
  'tt1431045',
  'tt0848228',
  'tt0241527',
  'tt0068646',
  'tt0119654',
  'tt1677720',
  'tt0120737'
]

const API_URL = 'http://127.0.0.1:8000'
const DEFAULT_USERNAME = 'admin'
const DEFAULT_PASSWORD = 'password123'
const API_OMDB_URL = 'http://www.omdbapi.com'
const API_OMDB_KEY = 'f38702dc'


const cookies = new Cookies()

/**
 * Create a request API auth-token with axios
 */
function createAuthRequest(baseURL) {
  const api = axios.create({ baseURL })

  api.interceptors.request.use((config) => {
    const token = cookies.get('token') || null
    if (token) {
      config.headers.Authorization = `JWT ${token}` // eslint-disable-line
    }

    return config
  }, error => (Promise.reject(error)))

  return api
}

class OmdbService {
  static async find(options) {
    if (!('keyword' in (options || {})) || options.keyword === '') {
      return OmdbService.findByIds(omdbapiMovieIds)
    }

    const { keyword } = options

    const url = `${API_OMDB_URL}/?s=${keyword}&apikey=${API_OMDB_KEY}`

    const { Search } = (await (await fetch(url)).json())


    return Search
  }

  static async findById(id) {
    const url = `${API_OMDB_URL}/?i=${id}&apikey=${API_OMDB_KEY}`

    return (await fetch(url)).json()
  }

  static async findByIds(ids = []) {
    return Promise.all(ids.map(id => OmdbService.findById(id)))
  }
}

class StoreService {
  static async login(username, password) {
    const api = createAuthRequest(API_URL)
    const { data } = await api.post('/login/', { username, password })
    const { token } = data
    cookies.set('token', token, { path: '/' })
    cookies.set('username', username, { path: '/' })
  }

  static async findProducts() {
    await StoreService.login(DEFAULT_USERNAME, DEFAULT_PASSWORD)
    const api = createAuthRequest(API_URL)
    const response = await api.get('/product/')
    return response.data
  }

  static async loadProducts() {
    const currentProducts = await StoreService.findProducts()

    if (currentProducts.length === 0) {
      const products = await OmdbService.find()
      const api = createAuthRequest(API_URL)
      products.forEach(async ({ Title, Year, Poster }) => {
        const data = { name: Title, current_price: Year, image_url: Poster }
        await api.post('/product/', data)
      })
    }
  }

  static async pay(order) {
    await StoreService.login(DEFAULT_USERNAME, DEFAULT_PASSWORD)
    const api = createAuthRequest(API_URL)
    try {
      const response = await api.post('/order/', order)
      return response.data
    } catch (error) {
      throw error.response
    }
  }
}

export default StoreService
