Bugs List

Car Model
1. Changed name="price' to name="mileage" on the form so you can check the network tab and see that it is a required path
2. In the Car Card I took out the string interpolation for make on model and put Honda Civic.
3. In constructor in the Car Model I changed data.price || 0 to 500 that way every car is changed to 500 after it is created. When it gets pushed into the model

Car Controller
1. On appState.on in the constructor I changed 'cars' to 'cart' in drawCars that way listener doesn't match the name in the appState and to show off what that means.
2. Took off the word async in front of the createCar function
3. Took off the await in Pop confirm in the deleteCar function so it fires immediately.

Car Service
1. Took off the cars on the endpoint that is getting all my cars so it is immediately throws a 404
2. Took off the await on the createCar function when calling to the api
3. In create a car I also changed the body name in the parameters compared to one that I am using to send up to the api
4. In deleteCar I took out the id in the parameters and also when I send it up to the api

Router
1. Lowercase the c in CarsController path to show off that the controller name needs to match the actual name of the controller itself in order to find that controller.
2. There is a button to go to ‘Houses’ that is not hooked up in the router. If you have fixed all of the car bugs and have time, have them walk you through creating the housesController and linking it to the router
