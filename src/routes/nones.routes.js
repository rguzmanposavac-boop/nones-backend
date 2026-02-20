const express = require('express');
const router = express.Router();

// Importamos la mini "base de datos" en memoria
const { findDeviceById, findStatsByDeviceId } = require('../db/fakeDb');

// Ruta de prueba inicial
router.get('/', (req, res) => {
  res.send('NONES backend OK');
});

// Ruta /status que devuelve JSON
router.get('/status', (req, res) => {
  res.json({
    app: 'NONES',
    status: 'ok'
  });
});

// Endpoint: validación de plan (similar a GET /check-premium/{device_id})
router.get('/check-premium', (req, res) => {
  const deviceId = req.query.deviceId || 'demo-free';

  const device = findDeviceById(deviceId);

  if (!device) {
    return res.status(404).json({
      error: 'device_not_found',
      message: `No se encontró el dispositivo ${deviceId}`
    });
  }

  res.json({
    deviceId: device.deviceId,
    plan: device.plan,
    expiresAt: device.expiresAt,
    limitRules: device.limitRules
  });
});

// Endpoint: estadísticas (similar a GET /stats/{device_id})
router.get('/stats', (req, res) => {
  const deviceId = req.query.deviceId || 'demo-free';

  const stats = findStatsByDeviceId(deviceId);

  if (!stats) {
    return res.status(404).json({
      error: 'stats_not_found',
      message: `No se encontraron estadísticas para el dispositivo ${deviceId}`
    });
  }

  res.json({
    deviceId: stats.deviceId,
    todayBlocked: stats.todayBlocked,
    monthBlocked: stats.monthBlocked,
    byRuleType: stats.byRuleType
  });
});

module.exports = router;
