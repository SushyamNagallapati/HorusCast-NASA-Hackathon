import app from '../mapbox-app/backend/server.js';

export default (req, res) => {
  // Strip /api prefix so Express routes (/token, /hikes, etc.) match correctly
  req.url = req.url.replace(/^\/api/, '') || '/';
  app(req, res);
};
