import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCars() {
  console.log('the cars are drawing...');
  let template = ''
  AppState.cars.forEach(c => {
    template += c.CarCard
  })
  setHTML('app', template)
}

function _drawButton() {
  if (AppState.account) {
    setHTML('the-place-to-put-the-button', '<button class="btn btn-dark square" data-bs-toggle="modal" data-bs-target="#the-target-id" >List a Car</button>')
  }
}

export class CarsController {
  constructor(data) {
    // console.log('hello from cars controller');
    setHTML('app', '<h1>🚗🚙🏎️ vroom vroom </h1>')
    setHTML('modal-guts', Car.CarForm())

    this.getCars()
    _drawButton()

    AppState.on('cars', _drawCars)
    AppState.on('account', _drawCars)
    AppState.on('account', _drawButton)
  }

  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      Pop.error(error)
    }
  }

  async createCar() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      console.log('[This is my form data]', formData);
      await carsService.createCar(formData)
      form.reset()
      bootstrap.Modal.getOrCreateInstance('#the-target-id').hide()
    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteCar(carId) {
    try {
      const yes = await Pop.confirm('Are you sure you want to delete remove this listing?')

      if (!yes) {
        return
      }
      await carsService.deleteCar(carId)
    } catch (error) {
      Pop.error(error)
    }
  }
}