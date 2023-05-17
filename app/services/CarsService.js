import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js";

class CarsService {
  async getCars() {
    const res = await api.get('api')
    console.log('[GETTING CARS FROM THE API]', res.data);
    AppState.cars = res.data.map(c => new Car(c))
  }

  async createCar(formData) {
    const res = api.post('api/cars', newCar)
    console.log('[CREATING CAR]', res.data);
    const newCar = new Car(res.data)
    AppState.cars.push(newCar)
    AppState.emit('cars')
  }

  async deleteCar() {
    const res = await api.delete('api/cars/')
    console.log('[REMOVING CAR LISTING]', res.data);
    AppState.cars = AppState.cars.filter(c => c.id != carId)
  }
}

export const carsService = new CarsService();