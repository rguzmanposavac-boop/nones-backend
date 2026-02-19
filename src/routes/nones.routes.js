const express = require('express');
const router = express.Router();

// Importamos la mini "base de datos" en memoria
const { findDeviceById } = require('../db/fakeDb');

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

// Endpoint estilo NONES: check-premium leyendo de "fake DB"
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

module.exports = router;
