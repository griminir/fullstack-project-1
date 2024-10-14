import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:8080/api' });

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(id?: number, extendedEndpoint?: string) {
    return axiosInstance
      .get<T[]>(
        `${this.endpoint}/${id ? id : ''}${
          extendedEndpoint ? extendedEndpoint : ''
        }`
      )
      .then((res) => res.data);
  }

  get(id: number) {
    return axiosInstance
      .get<T[]>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  }

  post(data: T | T[], extendedEndpoint?: string) {
    return axiosInstance
      .post<T[]>(
        `${this.endpoint}/${extendedEndpoint ? extendedEndpoint : ''}`,
        data
      )
      .then((res) => res.data);
  }

  delete(id: number, extendedEndpoint?: string) {
    return axiosInstance.delete(
      `${this.endpoint}/${extendedEndpoint ? extendedEndpoint : ''}/${id}`
    );
  }
}

export default APIClient;
