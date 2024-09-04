// TODO: Define a City class with name and id properties
class City {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {
  
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    return await FileSystem.readFile('db/searchHistory.json', 'utf8')
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    if (!city) {
      throw new Error('City name is required');
    }
    const newCity: City = {name: city, id: uuidv4()};
    return await this.getCities().then((cities) => {
      if (cities.find (index => index.name === city)) {
        return cities;
      }
      return [...cities, newCity];
  })
  .then(updatedCities => this.write(updatedCities))
  .then(() => newCity);
}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    return await this.getCities().then(cities => {
      const updatedCities = cities.filter(city => city.id !== id);
      return this.write(updatedCities);
  });
}
}

export default new HistoryService();
