import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // 🔹 Crear tipos de usuario con id correlativos
    await prisma.tipoUsuario.createMany({
      data: [
        { id: 1, tipo: 'Administrador' },
        { id: 2, tipo: 'Voluntario Fundador' },
        { id: 3, tipo: 'Director Honorario' },
        { id: 4, tipo: 'Voluntario Insigne' },
        { id: 5, tipo: 'Voluntario Honorario' },
        { id: 6, tipo: 'Vicesuperintendente' },
        { id: 7, tipo: 'Tesorero General' },
        { id: 8, tipo: 'Inspector Comandancia' },
        { id: 9, tipo: 'Tercer Comandante' },
        { id: 10, tipo: 'Voluntaria Honoraria' },
        { id: 11, tipo: 'Director' },
        { id: 12, tipo: 'Voluntario Activo' },
        { id: 13, tipo: 'Suspendido' },
        { id: 14, tipo: 'Ayudante de Comandancia' },
        { id: 15, tipo: 'Teniente 1°' },
        { id: 16, tipo: 'Renunciado' },
        { id: 17, tipo: 'Capitán' },
        { id: 18, tipo: 'Maquinista' },
        { id: 19, tipo: 'Teniente 2°' },
        { id: 20, tipo: 'Secretaria' },
        { id: 21, tipo: 'Tesorero' },
        { id: 22, tipo: 'Ayudante' },
        { id: 23, tipo: 'Teniente 3°' },
        { id: 24, tipo: 'Expulsado' }
      ]
    });

    // 🔹 Crear compañías con id correlativos
    await prisma.compania.createMany({
      data: [
        { id: 1, compania: 'Comandancia', ruta_logo: '/images/companias/c.png' },
        { id: 2, compania: 'Primera Compañía', ruta_logo: '/images/companias/1.png' },
        { id: 3, compania: 'Segunda Compañía', ruta_logo: '/images/companias/2.png' },
        { id: 4, compania: 'Tercera Compañía', ruta_logo: '/images/companias/3.png' },
        { id: 5, compania: 'Cuarta Compañía', ruta_logo: '/images/companias/4.png' },
        { id: 6, compania: 'Quinta Compañía', ruta_logo: '/images/companias/5.png' },
        { id: 7, compania: 'Sexta Compañía', ruta_logo: '/images/companias/6.png' },
        { id: 8, compania: 'Séptima Compañía', ruta_logo: '/images/companias/7.png' }
      ]
    });

    // 🔹 Crear vehículos con id correlativos
    await prisma.vehiculoCompania.createMany({
      data: [
        // Comandancia (1)
        { id: 1, vehiculo: 'K-1', compania_id: 1 },
        { id: 2, vehiculo: 'K-2', compania_id: 1 },
        { id: 3, vehiculo: 'K-3', compania_id: 1 },
        { id: 4, vehiculo: 'J-1', compania_id: 1 },

        // Primera (2)
        { id: 5, vehiculo: 'B-1', compania_id: 2 },
        { id: 6, vehiculo: 'BF-1', compania_id: 2 },
        { id: 7, vehiculo: 'RX-1', compania_id: 2 },

        // Segunda (3)
        { id: 8, vehiculo: 'RX-2', compania_id: 3 },
        { id: 9, vehiculo: 'Q-2', compania_id: 3 },
        { id: 10, vehiculo: 'M-2', compania_id: 3 },

        // Tercera (4)
        { id: 11, vehiculo: 'B-3', compania_id: 4 },
        { id: 12, vehiculo: 'BF-3', compania_id: 4 },
        { id: 13, vehiculo: 'H-3', compania_id: 4 },
        { id: 14, vehiculo: 'UT-3', compania_id: 4 },

        // Cuarta (5)
        { id: 15, vehiculo: 'B-4', compania_id: 5 },
        { id: 16, vehiculo: 'BX-4', compania_id: 5 },
        { id: 17, vehiculo: 'BT-4', compania_id: 5 },

        // Quinta (6)
        { id: 18, vehiculo: 'B-5', compania_id: 6 },
        { id: 19, vehiculo: 'BF-5', compania_id: 6 },
        { id: 20, vehiculo: 'R-5', compania_id: 6 },

        // Sexta (7)
        { id: 21, vehiculo: 'B-6', compania_id: 7 },
        { id: 22, vehiculo: 'BF-6', compania_id: 7 },
        { id: 23, vehiculo: 'Z-6', compania_id: 7 },

        // Séptima (8)
        { id: 24, vehiculo: 'B-7', compania_id: 8 },
        { id: 25, vehiculo: 'BF-7', compania_id: 8 },
        { id: 26, vehiculo: 'BR-0', compania_id: 8 }
      ]
    });

    // 🔹 Crear usuarios con id correlativos
    await prisma.usuario.createMany({
      data: [
        {
          id: 1,
          nombre: 'Admin',
          apellido_pat: 'Admin',
          apellido_mat: 'Admin',
          usuario: 'admin',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW', // password
          tipo_id: 1, // Administrador
          compania_id: 1
        },
        {
          id: 2,
          nombre: 'Juan',
          apellido_pat: 'Pérez',
          apellido_mat: 'López',
          usuario: 'jlperez',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 12, // Voluntario Activo
          compania_id: 2
        },
        {
          id: 3,
          nombre: 'María',
          apellido_pat: 'Gómez',
          apellido_mat: 'Salas',
          usuario: 'mgomez',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 11, // Director
          compania_id: 3
        },
        {
          id: 4,
          nombre: 'Pedro',
          apellido_pat: 'Ruiz',
          apellido_mat: 'Castro',
          usuario: 'pruiz',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 17, // Capitán
          compania_id: 4
        },
        {
          id: 5,
          nombre: 'Lucía',
          apellido_pat: 'Fernández',
          apellido_mat: 'Vargas',
          usuario: 'lfernandez',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 5, // Voluntario Honorario
          compania_id: 5
        },
        {
          id: 6,
          nombre: 'Carlos',
          apellido_pat: 'Soto',
          apellido_mat: 'Méndez',
          usuario: 'csoto',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 18, // Maquinista
          compania_id: 6
        },
        {
          id: 7,
          nombre: 'Ana',
          apellido_pat: 'Morales',
          apellido_mat: 'Ruiz',
          usuario: 'amorales',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 20, // Secretaria
          compania_id: 7
        },
        {
          id: 8,
          nombre: 'Diego',
          apellido_pat: 'Álvarez',
          apellido_mat: 'Núñez',
          usuario: 'dalvarez',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 2, // Voluntario Fundador
          compania_id: 8
        },
        {
          id: 9,
          nombre: 'Sofía',
          apellido_pat: 'Castillo',
          apellido_mat: 'Ortiz',
          usuario: 'scastillo',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 10, // Voluntaria Honoraria
          compania_id: 3
        },
        {
          id: 10,
          nombre: 'Roberto',
          apellido_pat: 'Herrera',
          apellido_mat: 'Sánchez',
          usuario: 'rherrera',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 21, // Tesorero
          compania_id: 4
        },
        {
          id: 11,
          nombre: 'Elena',
          apellido_pat: 'Ríos',
          apellido_mat: 'Medina',
          usuario: 'erios',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 14, // Ayudante de Comandancia
          compania_id: 2
        },
        {
          id: 12,
          nombre: 'Miguel',
          apellido_pat: 'Torres',
          apellido_mat: 'Vega',
          usuario: 'mtorres',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 15, // Teniente 1°
          compania_id: 5
        },
        {
          id: 13,
          nombre: 'Paula',
          apellido_pat: 'Navarro',
          apellido_mat: 'Reyes',
          usuario: 'pnavarro',
          claveHash: '$2a$10$7EqJtq98hPqEX7fNZaFWoOaYbN6DIdr5Z0cH8hWj7ozk3K1FqMRyW',
          tipo_id: 24, // Expulsado
          compania_id: 6
        }
      ]
    });

    // 🔹 Crear tipos de emergencia con id correlativos
    await prisma.tipoEmergencia.createMany({
      data: [
        { id: 1, tipo: '10-1', descripcion: 'Incendio Estructural' },
        { id: 2, tipo: '10-2', descripcion: 'Incendio Pastizal' },
      ]});

    // 🔹 Crear tipos de accidentes con id correlativos
    await prisma.tipoAccidente.createMany({
      data: [
        { id: 1, tipo: 'Accidente de Tránsito' },
        { id: 2, tipo: 'Choque' },
      ]});
    
    // 🔹 Crear Magnitudes con id correlativos
    await prisma.magnitud.createMany({
      data: [
        { id: 1, magnitud: 'Leve' },
        { id: 2, magnitud: 'Moderada' },
        { id: 3, magnitud: 'Grave' },
      ]});

    // 🔹 Crear EstadoClimatico con id correlativos
    await prisma.estadoClimatico.createMany({
      data: [
        { id: 1, estado: 'Soleado' },
        { id: 2, estado: 'Nublado' },
        { id: 3, estado: 'Lluvioso' },
      ]});

    // 🔹 Crear TipoIluminacion con id correlativos
    await prisma.tipoIluminacion.createMany({
      data: [
        { id: 1, tipo: 'Día' },
        { id: 2, tipo: 'Noche' },
      ]});

    // 🔹 Crear emergencias con id correlativos
    await prisma.emergencia.createMany({
        data: [
            {
                id: 1,
                direccion: 'Av. Libertad 234, Casa A',
                hora_despacho: new Date('2024-05-10T14:20:00Z'),
                hora_6_3: new Date('2024-05-10T14:45:00Z'),
                obac_id: 1,
                toma_datos_id: 2,
                tipo_id: 1,
                tipo_accidente_id: 1,
                magnitud_id: 2,
                clima_id: 1,
                iluminacion_id: 1,
                resumen: 'Incendio estructural en vivienda, activo en cocina y primer piso.',
                peligros: 'Humo denso, riesgo de propagación a viviendas contiguas.'
            },
            {
                id: 2,
                direccion: 'Ruta 5 km 12, Sector El Molino',
                hora_despacho: new Date('2024-06-02T09:05:00Z'),
                hora_6_3: new Date('2024-06-02T09:28:00Z'),
                obac_id: 3,
                toma_datos_id: 4,
                tipo_id: 2,
                tipo_accidente_id: 2,
                magnitud_id: 3,
                clima_id: 3,
                iluminacion_id: 1,
                resumen: 'Choque múltiple en carretera, varios vehículos involucrados.',
                peligros: 'Combustible derramado, riesgo de incendio y obstrucción total de la vía.'
            },
            {
                id: 3,
                direccion: 'Calle Las Rosas 45, Bodega Industrial',
                hora_despacho: new Date('2024-04-18T22:15:00Z'),
                hora_6_3: new Date('2024-04-18T22:40:00Z'),
                obac_id: 5,
                toma_datos_id: 6,
                tipo_id: 1,
                tipo_accidente_id: 1,
                magnitud_id: 3,
                clima_id: 2,
                iluminacion_id: 2,
                resumen: 'Incendio en nave industrial con materiales combustibles.',
                peligros: 'Colapso de estructura, sustancias peligrosas y altas llamas.'
            },
            {
                id: 4,
                direccion: 'Plaza Central, Esquina Alameda',
                hora_despacho: new Date('2024-07-01T18:50:00Z'),
                hora_6_3: new Date('2024-07-01T19:12:00Z'),
                obac_id: 7,
                toma_datos_id: 8,
                tipo_id: 2,
                tipo_accidente_id: 1,
                magnitud_id: 1,
                clima_id: 1,
                iluminacion_id: 2,
                resumen: 'Pequeño conato de incendio en comercio local, controlado en zona frontal.',
                peligros: 'Humo y pánico entre transeúntes; riesgos menores de propagación.'
            },
            {
                id: 5,
                direccion: 'Pasaje Los Pinos 7',
                hora_despacho: new Date('2024-03-12T03:10:00Z'),
                hora_6_3: new Date('2024-03-12T03:35:00Z'),
                obac_id: 9,
                toma_datos_id: 11,
                tipo_id: 1,
                tipo_accidente_id: 2,
                magnitud_id: 2,
                clima_id: 3,
                iluminacion_id: 2,
                resumen: 'Fuego en jardín trasero de vivienda, propagación a cobertizo.',
                peligros: 'Materiales inflamables en cobertizo, acceso dificultado por calle estrecha.'
            },
            {
                id: 6,
                direccion: 'Camino Real km 3, Sector La Vega',
                hora_despacho: new Date('2024-08-20T11:40:00Z'),
                hora_6_3: new Date('2024-08-20T12:05:00Z'),
                obac_id: 10,
                toma_datos_id: 12,
                tipo_id: 2,
                tipo_accidente_id: 1,
                magnitud_id: 2,
                clima_id: 2,
                iluminacion_id: 1,
                resumen: 'Accidente tránsito: colisión frontal entre camión y vehículo menor.',
                peligros: 'Posible derrame de carga, riesgo de incendio y víctimas atrapadas.'
            },
            {
                id: 7,
                direccion: 'Sector Mirador, Sendero 4',
                hora_despacho: new Date('2024-09-05T16:00:00Z'),
                hora_6_3: new Date('2024-09-05T16:30:00Z'),
                obac_id: 4,
                toma_datos_id: 13,
                tipo_id: 1,
                tipo_accidente_id: 2,
                magnitud_id: 1,
                clima_id: 1,
                iluminacion_id: 1,
                resumen: 'Pequeño incendio en pastizal cercano a sendero recreativo.',
                peligros: 'Propagación rápida por vientos moderados, riesgo para excursionistas.'
            },
            {
                id: 8,
                direccion: 'Av. Principal 1000, Edificio Torre Norte',
                hora_despacho: new Date('2024-10-11T07:25:00Z'),
                hora_6_3: new Date('2024-10-11T07:50:00Z'),
                obac_id: 2,
                toma_datos_id: 5,
                tipo_id: 1,
                tipo_accidente_id: 1,
                magnitud_id: 3,
                clima_id: 2,
                iluminacion_id: 1,
                resumen: 'Incendio de ascensor y sala de máquinas en edificio de oficinas.',
                peligros: 'Humo ascendente por ductos, riesgo de atrapamiento en ascensores.'
            },
            {
                id: 9,
                direccion: 'Camino Antiguo s/n, Puente Viejo',
                hora_despacho: new Date('2024-11-22T20:10:00Z'),
                hora_6_3: new Date('2024-11-22T20:33:00Z'),
                obac_id: 6,
                toma_datos_id: 3,
                tipo_id: 2,
                tipo_accidente_id: 2,
                magnitud_id: 2,
                clima_id: 3,
                iluminacion_id: 2,
                resumen: 'Accidente nocturno en puente con vuelco de vehículo ligero.',
                peligros: 'Vehículo parcialmente en calzada, riesgo de choque secundario y derrame de combustible.'
            }
        ]});
  console.log("✅ Seed ejecutado correctamente dentro de una transacción");
}

main()
  .catch((e) => {
    console.error("❌ Error en el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
