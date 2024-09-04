import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  // TODO: save city to search history
  const cityName = req.body.cityName;
    WeatherService.getWeatherForCity(cityName)
      .then((data:any) => {
       HistoryService.addCity(data[0].city);
       res.json(data)
      }) .catch ((error) => {
    res.status(500).json(error);
  });
});

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).json({ message: 'City ID is required' });
  }
  HistoryService.removeCity(req.params.id).then(() => {
});

export default router;
