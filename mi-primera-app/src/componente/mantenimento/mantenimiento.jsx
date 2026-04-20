import React from 'react';
 import './mantenimento.css';

const Mantenimiento = ({ onLogout }) => {
  // Datos de ejemplo para que visualices la tabla de inmediato
  const vehiculos = [
    { id: 1, placa: 'ABC-123', modelo: 'Toyota Hilux', estado: 'Al día', proximo: '20/05/2026' },
    { id: 2, placa: 'XYZ-789', modelo: 'Chevrolet NHR', estado: 'Pendiente', proximo: '15/04/2026' },
    { id: 3, placa: 'GHI-456', modelo: 'Renault Kangoo', estado: 'Al día', proximo: '10/06/2026' },
    { id: 4, placa: 'JKL-012', modelo: 'Foton Turbo', estado: 'Urgente', proximo: '19/04/2026' },
  ];

  return (
    <div className="dashboard-container">
      {/* Barra Superior */}
      <header className="header" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem 2rem', 
        backgroundColor: '#fff', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#1877f2', width: '40px', height: '40px', borderRadius: '8px' }}></div>
          <h1 style={{ fontSize: '1.5rem', color: '#1c1e21', margin: 0 }}>Gestión de Flota</h1>
        </div>
        <button 
          onClick={onLogout}
          className="login-button" 
          style={{ width: 'auto', padding: '8px 20px', marginTop: 0, fontSize: '0.9rem' }}
        >
          Cerrar Sesión
        </button>
      </header>

      <main className="main-content" style={{ padding: '2rem' }}>
        {/* Tarjetas de Resumen */}
        <div className="grid-stats" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem', 
          marginBottom: '2rem' 
        }}>
          <div className="stat-card" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '5px solid #1877f2' }}>
            <h3 style={{ margin: 0, color: '#65676b', fontSize: '0.9rem' }}>Vehículos Totales</h3>
            <p style={{ margin: '0.5rem 0 0', fontSize: '1.8rem', fontWeight: 'bold' }}>24</p>
          </div>
          <div className="stat-card" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '5px solid #f57c00' }}>
            <h3 style={{ margin: 0, color: '#65676b', fontSize: '0.9rem' }}>Mantenimientos Pendientes</h3>
            <p style={{ margin: '0.5rem 0 0', fontSize: '1.8rem', fontWeight: 'bold' }}>5</p>
          </div>
          <div className="stat-card" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '5px solid #2e7d32' }}>
            <h3 style={{ margin: 0, color: '#65676b', fontSize: '0.9rem' }}>Operativos</h3>
            <p style={{ margin: '0.5rem 0 0', fontSize: '1.8rem', fontWeight: 'bold' }}>19</p>
          </div>
        </div>

        {/* Tabla de Vehículos */}
        <div className="table-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Estado de la Flota</h2>
            <button style={{ backgroundColor: '#1877f2', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>
              + Añadir Vehículo
            </button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f0f2f5', color: '#65676b' }}>
                <th style={{ padding: '12px' }}>Placa</th>
                <th style={{ padding: '12px' }}>Modelo</th>
                <th style={{ padding: '12px' }}>Estado</th>
                <th style={{ padding: '12px' }}>Próximo Servicio</th>
                <th style={{ padding: '12px' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {vehiculos.map((v) => (
                <tr key={v.id} style={{ borderBottom: '1px solid #f0f2f5' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{v.placa}</td>
                  <td style={{ padding: '12px' }}>{v.modelo}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '20px', 
                      fontSize: '0.85rem',
                      backgroundColor: v.estado === 'Al día' ? '#e8f5e9' : v.estado === 'Urgente' ? '#ffebee' : '#fff3e0',
                      color: v.estado === 'Al día' ? '#2e7d32' : v.estado === 'Urgente' ? '#c62828' : '#ef6c00'
                    }}>
                      {v.estado}
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>{v.proximo}</td>
                  <td style={{ padding: '12px' }}>
                    <button style={{ background: 'none', border: 'none', color: '#1877f2', cursor: 'pointer', fontWeight: '600' }}>
                      Gestionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Mantenimiento;