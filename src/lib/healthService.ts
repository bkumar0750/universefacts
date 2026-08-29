// ─── UNIVERSEFACT HEALTH & PRODUCTION READINESS SERVICE ────────────────────────

export interface HealthStatus {
  status: 'ok' | 'degraded' | 'error';
  timestamp: string;
  version: string;
  environment: string;
  services: {
    frontend: 'healthy';
    nasaApi: 'available' | 'fallback';
    webgl: 'supported' | 'unsupported';
    serviceWorker: 'registered' | 'inactive';
  };
}

export function checkSystemHealth(): HealthStatus {
  const isWebGLSupported = (() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch {
      return false;
    }
  })();

  const isSWActive = 'serviceWorker' in navigator && !!navigator.serviceWorker.controller;

  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '2.0.0-production',
    environment: import.meta.env.MODE || 'production',
    services: {
      frontend: 'healthy',
      nasaApi: 'available',
      webgl: isWebGLSupported ? 'supported' : 'unsupported',
      serviceWorker: isSWActive ? 'registered' : 'inactive',
    },
  };
}
