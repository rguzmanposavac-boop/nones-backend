// Simulamos una "base de datos" en memoria

// Dispositivos y planes
const devices = [
  {
    deviceId: 'demo-free',
    plan: 'free',
    expiresAt: null,
    limitRules: 5
  },
  {
    deviceId: 'demo-premium',
    plan: 'premium',
    expiresAt: '2026-12-31',
    limitRules: 999
  }
];

// Estadísticas por dispositivo
const statsByDevice = [
  {
    deviceId: 'demo-free',
    todayBlocked: 3,
    monthBlocked: 15,
    byRuleType: {
      prefix: 10,
      exactNumber: 5
    }
  },
  {
    deviceId: 'demo-premium',
    todayBlocked: 8,
    monthBlocked: 120,
    byRuleType: {
      prefix: 90,
      exactNumber: 30
    }
  }
];

// Función para buscar un dispositivo por deviceId
function findDeviceById(deviceId) {
  return devices.find((d) => d.deviceId === deviceId) || null;
}

// Función para buscar estadísticas por deviceId
function findStatsByDeviceId(deviceId) {
  return statsByDevice.find((s) => s.deviceId === deviceId) || null;
}

module.exports = {
  findDeviceById,
  findStatsByDeviceId
};
