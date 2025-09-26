import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear tipos de usuario
  await prisma.tipoUsuario.createMany({
    data: [
      { tipo: 'Administrador' },
      { tipo: 'Voluntario Fundador' },
      { tipo: 'Director Honorario' },
      { tipo: 'Voluntario Insigne' },
      { tipo: 'Voluntario Honorario' },
      { tipo: 'Vicesuperintendente' },
      { tipo: 'Tesorero General' },
      { tipo: 'Inspector Comandancia' },
      { tipo: 'Tercer Comandante' },
      { tipo: 'Voluntaria Honoraria' },
      { tipo: 'Director' },
      { tipo: 'Voluntario Activo' },
      { tipo: 'Suspendido' },
      { tipo: 'Ayudante de Comandancia' },
      { tipo: 'Teniente 1°' },
      { tipo: 'Renunciado' },
      { tipo: 'Capitán' },
      { tipo: 'Maquinista' },
      { tipo: 'Teniente 2°' },
      { tipo: 'Secretaria' },
      { tipo: 'Tesorero' },
      { tipo: 'Ayudante' },
      { tipo: 'Teniente 3°' },
      { tipo: 'Expulsado' }
    ]
  });

  // Crear compañías
  await prisma.compania.createMany({
    data: [
      { compania: 'Comandancia', ruta_logo: '/images/companias/c.png' },
      { compania: 'Primera Compañía', ruta_logo: '/images/companias/1.png' },
      { compania: 'Segunda Compañía', ruta_logo: '/images/companias/2.png' },
      { compania: 'Tercera Compañía', ruta_logo: '/images/companias/3.png' },
      { compania: 'Cuarta Compañía', ruta_logo: '/images/companias/4.png' },
      { compania: 'Quinta Compañía', ruta_logo: '/images/companias/5.png' },
      { compania: 'Sexta Compañía', ruta_logo: '/images/companias/6.png' },
      { compania: 'Séptima Compañía', ruta_logo: '/images/companias/7.png' }
    ]
  });

  // Crear vehículos
  await prisma.vehiculoCompania.createMany({
    data: [
      // Comandancia (1)
      { vehiculo: 'K-1', compania_id: 1 },
      { vehiculo: 'K-2', compania_id: 1 },
      { vehiculo: 'K-3', compania_id: 1 },
      { vehiculo: 'J-1', compania_id: 1 },

      // Primera (2)
      { vehiculo: 'B-1', compania_id: 2 },
      { vehiculo: 'BF-1', compania_id: 2 },
      { vehiculo: 'RX-1', compania_id: 2 },

      // Segunda (3)
      { vehiculo: 'RX-2', compania_id: 3 },
      { vehiculo: 'Q-2', compania_id: 3 },
      { vehiculo: 'M-2', compania_id: 3 },

      // Tercera (4)
      { vehiculo: 'B-3', compania_id: 4 },
      { vehiculo: 'BF-3', compania_id: 4 },
      { vehiculo: 'H-3', compania_id: 4 },
      { vehiculo: 'UT-3', compania_id: 4 },

      // Cuarta (5)
      { vehiculo: 'B-4', compania_id: 5 },
      { vehiculo: 'BX-4', compania_id: 5 },
      { vehiculo: 'BT-4', compania_id: 5 },

      // Quinta (6)
      { vehiculo: 'B-5', compania_id: 6 },
      { vehiculo: 'BF-5', compania_id: 6 },
      { vehiculo: 'R-5', compania_id: 6 },

      // Sexta (7)
      { vehiculo: 'B-6', compania_id: 7 },
      { vehiculo: 'BF-6', compania_id: 7 },
      { vehiculo: 'Z-6', compania_id: 7 },

      // Séptima (8)
      { vehiculo: 'B-7', compania_id: 8 },
      { vehiculo: 'BF-7', compania_id: 8 },
      { vehiculo: 'BR-0', compania_id: 8 }
    ]
  });

  // Crear usuarios
  await prisma.usuario.createMany({
    data: [
      {
        nombre: 'Admin',
        apellido_pat: 'Admin',
        apellido_mat: 'Admin',
        usuario: 'admin',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56', // password
        tipo_id: 1, // Administrador
        compania_id: 1
      },
      {
        nombre: 'Juan',
        apellido_pat: 'Pérez',
        apellido_mat: 'López',
        usuario: 'jlperez',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 12, // Voluntario Activo
        compania_id: 2
      },
      {
        nombre: 'María',
        apellido_pat: 'Gómez',
        apellido_mat: 'Salas',
        usuario: 'mgomez',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 11, // Director
        compania_id: 3
      },
      {
        nombre: 'Pedro',
        apellido_pat: 'Ruiz',
        apellido_mat: 'Castro',
        usuario: 'pruiz',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 17, // Capitán
        compania_id: 4
      },
      {
        nombre: 'Lucía',
        apellido_pat: 'Fernández',
        apellido_mat: 'Vargas',
        usuario: 'lfernandez',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 5, // Voluntario Honorario
        compania_id: 5
      },
      {
        nombre: 'Carlos',
        apellido_pat: 'Soto',
        apellido_mat: 'Méndez',
        usuario: 'csoto',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 18, // Maquinista
        compania_id: 6
      },
      {
        nombre: 'Ana',
        apellido_pat: 'Morales',
        apellido_mat: 'Ruiz',
        usuario: 'amorales',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 20, // Secretaria
        compania_id: 7
      },
      {
        nombre: 'Diego',
        apellido_pat: 'Álvarez',
        apellido_mat: 'Núñez',
        usuario: 'dalvarez',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 2, // Voluntario Fundador
        compania_id: 8
      },
      {
        nombre: 'Sofía',
        apellido_pat: 'Castillo',
        apellido_mat: 'Ortiz',
        usuario: 'scastillo',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 10, // Voluntaria Honoraria
        compania_id: 3
      },
      {
        nombre: 'Roberto',
        apellido_pat: 'Herrera',
        apellido_mat: 'Sánchez',
        usuario: 'rherrera',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 21, // Tesorero
        compania_id: 4
      },
      {
        nombre: 'Elena',
        apellido_pat: 'Ríos',
        apellido_mat: 'Medina',
        usuario: 'erios',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 14, // Ayudante de Comandancia
        compania_id: 2
      },
      {
        nombre: 'Miguel',
        apellido_pat: 'Torres',
        apellido_mat: 'Vega',
        usuario: 'mtorres',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 15, // Teniente 1°
        compania_id: 5
      },
      {
        nombre: 'Paula',
        apellido_pat: 'Navarro',
        apellido_mat: 'Reyes',
        usuario: 'pnavarro',
        claveHash: '$2b$10$QAnZl/HAMoK1ltWiPjUvh.zDWJDB86Zs3wuGeToelCmUngqwYea56',
        tipo_id: 24, // Expulsado
        compania_id: 6
      }
    ]
  });

  // Crear tipos de emergencia
  await prisma.tipoEmergencia.createMany({
    data: [
      { tipo: '10-0', descripcion: 'Llamado Estructural' },
      { tipo: '10-0-1', descripcion: 'Estructura de menos de 2 pisos' },
      { tipo: '10-0-2', descripcion: 'Estructura de sobre 3 pisos' },
      { tipo: '10-0-3', descripcion: 'Estructura con alta afluencia de personas' },
      { tipo: '10-0-4', descripcion: 'Estructura de material ligero' },
      { tipo: '10-0-5', descripcion: 'Estructura almacenamiento Materiales Peligrosos' },

      { tipo: '10-1', descripcion: 'Llamado de vehículos' },
      { tipo: '10-1-1', descripcion: 'Vehículos menores (autos, camionetas, motos)' },
      { tipo: '10-1-2', descripcion: 'Vehículos mayores (camiones, buses, microbuses, maquinaria agrícola)' },

      { tipo: '10-2', descripcion: 'Llamado de pastizales y/o basura' },
      { tipo: '10-2-1', descripcion: 'Fuego en pastizales o árboles de pequeña o mediana magnitud' },
      { tipo: '10-2-2', descripcion: 'Llamado Forestal (interfase)' },
      { tipo: '10-2-3', descripcion: 'Llamado Forestal (no interfase)' },
      { tipo: '10-2-4', descripcion: 'Llamado Forestal (PAP, PAS, Prevención PM)' },
      { tipo: '10-2-5', descripcion: '' },
      { tipo: '10-2-6', descripcion: '' },
      { tipo: '10-2-7', descripcion: '' },

      { tipo: '10-3', descripcion: 'Llamado por fuego en vertederos, basurales o grandes contenedores' },
      { tipo: '10-3-1', descripcion: 'Caídas (a nivel, de altura u otros traumatismos)' },
      { tipo: '10-3-2', descripcion: 'Atropellos' },
      { tipo: '10-3-3', descripcion: 'Atrapamiento de extremidades o empalamiento' },
      { tipo: '10-3-4', descripcion: 'Personas encerradas (ascensores, domicilios, etc.)' },
      { tipo: '10-3-5', descripcion: 'Personas atrapadas en estructuras colapsadas' },
      { tipo: '10-3-6', descripcion: 'Rescate en lecho de río, canales, zanjas, alturas' },
      { tipo: '10-3-7', descripcion: 'Rescate por posible PCR' },
      { tipo: '10-3-8', descripcion: 'Rescate en espacios confinados' },
      { tipo: '10-3-9', descripcion: 'Rescate en áreas agrestes' },
      { tipo: '10-3-10', descripcion: 'Rescate de animales atrapados' },
      { tipo: '10-3-11', descripcion: 'Recuperación de fallecido posterior a accidente' },

      { tipo: '10-4', descripcion: 'Llamado a Rescate Vehicular' },
      { tipo: '10-4-1', descripcion: 'Colisión hasta 3 lesionados o un atrapado' },
      { tipo: '10-4-2', descripcion: 'Colisión desde 4 lesionados o más de dos atrapados' },
      { tipo: '10-4-3', descripcion: 'Colisión de vehículos pesados con lesionados y/o atrapados' },
      { tipo: '10-4-4', descripcion: 'Colisión con materiales peligrosos' },
      { tipo: '10-4-5', descripcion: 'Desbarrancamiento de vehículo' },
      { tipo: '10-4-6', descripcion: 'Colisión de tren con vehículo SIN materiales peligrosos' },
      { tipo: '10-4-7', descripcion: 'Colisión de tren con vehículo CON materiales peligrosos' },

      { tipo: '10-5', descripcion: 'Llamado HAZ-MAT' },
      { tipo: '10-5-1', descripcion: 'Derrame menor a 200 litros o 25 kilos' },
      { tipo: '10-5-2', descripcion: 'Derrame mayor a 200 litros o más de 25 kilos' },
      { tipo: '10-5-3', descripcion: 'Emergencia HAZ-MAT en estructuras' },
      { tipo: '10-5-4', descripcion: 'Emergencia con cianuro, desechos biológicos, radioactivos o virus peligrosos' },
      { tipo: '10-5-5', descripcion: 'Descarrilamiento de tren con fuga química' },

      { tipo: '10-6', descripcion: 'Llamado a Emanación de Gases' },
      { tipo: '10-6-1', descripcion: 'Emanación en estructuras' },
      { tipo: '10-6-2', descripcion: 'Emanación en vía pública' },
      { tipo: '10-6-3', descripcion: 'Explosión de cilindros o contenedores de gases' },

      { tipo: '10-7', descripcion: 'Llamado Eléctrico' },
      { tipo: '10-8', descripcion: 'Llamado no Clasificado' },
      { tipo: '10-9', descripcion: 'Llamado a otros Servicios' },

      { tipo: '10-10', descripcion: 'Llamado a Escombros' },
      { tipo: '10-10-1', descripcion: 'Remoción de escombros o rebrote estructural' },
      { tipo: '10-10-2', descripcion: 'Remoción de escombros o rebrote forestal' },

      { tipo: '10-11', descripcion: 'Llamado a Servicio Aéreo' },
      { tipo: '10-11-1', descripcion: 'Abastecimiento de aeronaves por incendio forestal' },
      { tipo: '10-11-2', descripcion: 'Guardia preventiva en aeródromo' },

      { tipo: '10-12', descripcion: 'Llamado de Apoyo a otros Cuerpos' },
      { tipo: '10-13', descripcion: 'Llamado a Atentados Terroristas' },
      { tipo: '10-14', descripcion: 'Llamado a Accidentes Aéreos y/o Emergencia aeronáutica' },
      { tipo: '10-15', descripcion: 'Llamado a Simulacro' },
      { tipo: '10-16', descripcion: 'Llamado a Emergencias por desastres naturales' }
    ]

  });

  // Crear tipos de accidentes
  await prisma.tipoAccidente.createMany({
    data: [
      { tipo: 'Atrapamiento de extremidad' },
      { tipo: 'Atropello' },
      { tipo: 'Caída' },
      { tipo: 'Choque' },
      { tipo: 'Colisión' },
      { tipo: 'P.C.R' },
      { tipo: 'Volcamiento' },
      { tipo: 'Otros' },

    ]
  });

  // 🔹 Crear Magnitudes
  await prisma.magnitud.createMany({
    data: [
      { magnitud: 'P/BE', descripcion: 'Pequeña extensión o magnitud (hasta 2 hectáreas)/Baja energía o emergencia simple(daños superficiales, SIN deformación del habitaculo ni daños que impidan la circulación normal del vehículo.)' },
      { magnitud: 'G/AE', descripcion: 'Gran extensión o magnitud (desde 2 hectáreas) / Alta energía o emergencia compleja (daños estructurales, CON deformación del habitaculo y/o daños que impidan la circulación normal del vehículo.)' },
      { magnitud: 'Otros Servicios', descripcion: 'Sólo usar para clave 10-9' },
      { magnitud: 'No se Trabaja', descripcion: null },
      { magnitud: 'Falsa Alarma', descripcion: null },
    ]
  });

  // Crear EstadoClimatico
  await prisma.estadoClimatico.createMany({
    data: [
      { estado: 'Cálido' },
      { estado: 'Calmado' },
      { estado: 'Caluroso' },
      { estado: 'Con Llovizna' },
      { estado: 'Despejado' },
      { estado: 'Fresco' },
      { estado: 'Frío' },
      { estado: 'Huracanado' },
      { estado: 'Lluvioso' },
      { estado: 'Nevoso' },
      { estado: 'Nublado' },
      { estado: 'Parcialmente Despejado' },
      { estado: 'Parcialmente Nublado' },
      { estado: 'Seco' },
      { estado: 'Tormentoso' },
      { estado: 'Ventoso' },
    ]
  });

  // Crear TipoIluminacion
  await prisma.tipoIluminacion.createMany({
    data: [
      { tipo: 'Natural' },
      { tipo: 'Artificial' },
      { tipo: 'Ambas' },
    ]
  });



  // Crear TipoEstructura
  await prisma.tipoEstructura.createMany({
    data: [
      { tipo: 'Casa' },
      { tipo: 'Bodega' },
      { tipo: 'Departamento' },
      { tipo: 'Local Comercial' },
      { tipo: 'Pabellón' },
    ]
  });

  // Crear TipoConstruccion
  await prisma.tipoConstruccion.createMany({
    data: [
      { tipo: 'Albañilería' },
      { tipo: 'Hormigón' },
      { tipo: 'Madera' },
      { tipo: 'Otros' },
    ]
  });

  // Crear TipoCombustibles
  await prisma.tipoCombustible.createMany({
    data: [
      { tipo: 'Pastizal' },
      { tipo: 'Matorral' },
      { tipo: 'Arbolado' },
      { tipo: 'Basura' },
      { tipo: 'Escombros' },
      { tipo: 'Otros' },
    ]
  });

  // Crear TipoApoyo
  await prisma.tipoApoyo.createMany({
    data: [
      { codigo: '1-0', descripcion: 'Carabineros' },
      { codigo: '1-1', descripcion: 'Apoyo Aéreo' },
      { codigo: '1-2', descripcion: 'Ambulancia del SAMU u otra que se indica' },
      { codigo: '1-3', descripcion: 'Personal de Emergencia Comunal' },
      { codigo: '1-4', descripcion: 'Personal de Empresa que se indica' },
      { codigo: '1-5', descripcion: 'CONAF' },
      { codigo: '1-6', descripcion: 'Comandante de Guardia' },
      { codigo: '1-7', descripcion: 'Capitán de Guardia' },
      { codigo: '1-8', descripcion: 'Personal del Depto. Investigación de Incendios' },
      { codigo: '1-9', descripcion: 'Grupo de Fuerza de Tarea de Rescate Urbano' },
      { codigo: '1-10', descripcion: 'Departamento HAZ-MAT' },
      { codigo: '1-11', descripcion: 'Grupo Canino' },
      { codigo: '1-12', descripcion: 'Externo que se indica' },
      { codigo: '1-13', descripcion: 'Aljibes Municipales y/o Gobernación' },
      { codigo: '1-14', descripcion: 'Persona que se comunicó con la Central que se acerque a la maquina' },
      { codigo: '1-15', descripcion: 'Tiempo estimado de llegada de ... (EJ SGE, SAMU, etc.)' },
    ]
  });

  // Crear Regiones
  await prisma.region.createMany({
    data: [
      { region: 'Arica y Parinacota' },
      { region: 'Tarapacá' },
      { region: 'Antofagasta' },
      { region: 'Atacama' },
      { region: 'Coquimbo' },
      { region: 'Valparaíso' },
      { region: 'Metropolitana' },
      { region: 'O’Higgins' },
      { region: 'Maule' },
      { region: 'Biobío' },
      { region: 'La Araucanía' },
      { region: 'Los Ríos' },
      { region: 'Los Lagos' },
      { region: 'Aysén' },
      { region: 'Magallanes' },
    ]
  });

  // Crear Comunas
  await prisma.comuna.createMany({
    data: [
      { comuna: 'Arica', region_id: 1 },
      { comuna: 'Camarones', region_id: 1 },
      { comuna: 'Putre', region_id: 1 },
      { comuna: 'General Lagos', region_id: 1 },
      { comuna: 'Iquique', region_id: 2 },
      { comuna: 'Alto Hospicio', region_id: 2 },
      { comuna: 'Pozo Almonte', region_id: 2 },
      { comuna: 'Camiña', region_id: 2 },
      { comuna: 'Colchane', region_id: 2 },
      { comuna: 'Huara', region_id: 2 },
      { comuna: 'Antofagasta', region_id: 3 },
      { comuna: 'Mejillones', region_id: 3 },
      { comuna: 'Sierra Gorda', region_id: 3 },
      { comuna: 'Taltal', region_id: 3 },
      { comuna: 'Calama', region_id: 3 },
      { comuna: 'Ollagüe', region_id: 3 },
      { comuna: 'San Pedro de Atacama', region_id: 3 },
      { comuna: 'Copiapó', region_id: 4 },
      { comuna: 'Caldera', region_id: 4 },
      { comuna: 'Tierra Amarilla', region_id: 4 },
      { comuna: 'Chañaral', region_id: 4 },
      { comuna: 'Diego de Almagro', region_id: 4 },
      { comuna: 'Vallenar', region_id: 4 },
      { comuna: 'Alto del Carmen', region_id: 4 },
      { comuna: 'Freirina', region_id: 4 },
      { comuna: 'Huasco', region_id: 4 },
      { comuna: 'La Serena', region_id: 5 },
      { comuna: 'Coquimbo', region_id: 5 },
      { comuna: 'Andacollo', region_id: 5 },
      { comuna: 'La Higuera', region_id: 5 },
      { comuna: 'Paiguano', region_id: 5 },
      { comuna: 'Vicuña', region_id: 5 },
      { comuna: 'Illapel', region_id: 5 },
      { comuna: 'Canela', region_id: 5 },
      { comuna: 'Los Vilos', region_id: 5 },
      { comuna: 'Salamanca', region_id: 5 },
      { comuna: 'Ovalle', region_id: 5 },
      { comuna: 'Combarbalá', region_id: 5 },
      { comuna: 'Monte Patria', region_id: 5 },
      { comuna: 'Punitaqui', region_id: 5 },
      { comuna: 'Río Hurtado', region_id: 5 },
      { comuna: 'Valparaíso', region_id: 6 },
      { comuna: 'Casablanca', region_id: 6 },
      { comuna: 'Concón', region_id: 6 },
      { comuna: 'Juan Fernández', region_id: 6 },
      { comuna: 'Puchuncaví', region_id: 6 },
      { comuna: 'Quintero', region_id: 6 },
      { comuna: 'Viña del Mar', region_id: 6 },
      { comuna: 'Isla de Pascua', region_id: 6 },
      { comuna: 'Los Andes', region_id: 6 },
      { comuna: 'Calle Larga', region_id: 6 },
      { comuna: 'Rinconada', region_id: 6 },
      { comuna: 'San Esteban', region_id: 6 },
      { comuna: 'San Felipe', region_id: 6 },
      { comuna: 'Catemu', region_id: 6 },
      { comuna: 'Llaillay', region_id: 6 },
      { comuna: 'Panquehue', region_id: 6 },
      { comuna: 'Putaendo', region_id: 6 },
      { comuna: 'Santa María', region_id: 6 },
      { comuna: 'Quillota', region_id: 6 },
      { comuna: 'Calera', region_id: 6 },
      { comuna: 'Hijuelas', region_id: 6 },
      { comuna: 'La Cruz', region_id: 6 },
      { comuna: 'Nogales', region_id: 6 },
      { comuna: 'San Antonio', region_id: 6 },
      { comuna: 'Algarrobo', region_id: 6 },
      { comuna: 'Cartagena', region_id: 6 },
      { comuna: 'El Quisco', region_id: 6 },
      { comuna: 'El Tabo', region_id: 6 },
      { comuna: 'Santo Domingo', region_id: 6 },
      { comuna: 'Melipilla', region_id: 6 },
      { comuna: 'Alhué', region_id: 6 },
      { comuna: 'Curacaví', region_id: 6 },
      { comuna: 'María Pinto', region_id: 6 },
      { comuna: 'San Pedro', region_id: 6 },
      { comuna: 'Cerrillos', region_id: 7 },
      { comuna: 'Cerro Navia', region_id: 7 },
      { comuna: 'Conchalí', region_id: 7 },
      { comuna: 'El Bosque', region_id: 7 },
      { comuna: 'Estación Central', region_id: 7 },
      { comuna: 'Huechuraba', region_id: 7 },
      { comuna: 'Independencia', region_id: 7 },
      { comuna: 'La Cisterna', region_id: 7 },
      { comuna: 'La Florida', region_id: 7 },
      { comuna: 'La Granja', region_id: 7 },
      { comuna: 'La Pintana', region_id: 7 },
      { comuna: 'La Reina', region_id: 7 },
      { comuna: 'Las Condes', region_id: 7 },
      { comuna: 'Lo Barnechea', region_id: 7 },
      { comuna: 'Lo Espejo', region_id: 7 },
      { comuna: 'Lo Prado', region_id: 7 },
      { comuna: 'Macul', region_id: 7 },
      { comuna: 'Maipú', region_id: 7 },
      { comuna: 'Ñuñoa', region_id: 7 },
      { comuna: 'Pedro Aguirre Cerda', region_id: 7 },
      { comuna: 'Peñalolén', region_id: 7 },
      { comuna: 'Providencia', region_id: 7 },
      { comuna: 'Pudahuel', region_id: 7 },
      { comuna: 'Quilicura', region_id: 7 },
      { comuna: 'Quinta Normal', region_id: 7 },
      { comuna: 'Recoleta', region_id: 7 },
      { comuna: 'Renca', region_id: 7 },
      { comuna: 'San Joaquín', region_id: 7 },
      { comuna: 'San Miguel', region_id: 7 },
      { comuna: 'San Ramón', region_id: 7 },
      { comuna: 'Santiago', region_id: 7 },
      { comuna: 'Vitacura', region_id: 7 },
      { comuna: 'Puente Alto', region_id: 7 },
      { comuna: 'Pirque', region_id: 7 },
      { comuna: 'San José de Maipo', region_id: 7 },
      { comuna: 'Colina', region_id: 7 },
      { comuna: 'Lampa', region_id: 7 },
      { comuna: 'Tiltil', region_id: 7 },
      { comuna: 'San Bernardo', region_id: 7 },
      { comuna: 'Buin', region_id: 7 },
      { comuna: 'Calera de Tango', region_id: 7 },
      { comuna: 'Paine', region_id: 7 },
      { comuna: 'Melipilla', region_id: 7 },
      { comuna: 'Alhué', region_id: 7 },
      { comuna: 'Curacaví', region_id: 7 },
      { comuna: 'María Pinto', region_id: 7 },
      { comuna: 'San Pedro', region_id: 7 },
      { comuna: 'Rancagua', region_id: 8 },
      { comuna: 'Codegua', region_id: 8 },
      { comuna: 'Coinco', region_id: 8 },
      { comuna: 'Coltauco', region_id: 8 },
      { comuna: 'Doñihue', region_id: 8 },
      { comuna: 'Graneros', region_id: 8 },
      { comuna: 'Las Cabras', region_id: 8 },
      { comuna: 'Machalí', region_id: 8 },
      { comuna: 'Malloa', region_id: 8 },
      { comuna: 'Mostazal', region_id: 8 },
      { comuna: 'Olivar', region_id: 8 },
      { comuna: 'Peumo', region_id: 8 },
      { comuna: 'Pichidegua', region_id: 8 },
      { comuna: 'Quinta de Tilcoco', region_id: 8 },
      { comuna: 'Rengo', region_id: 8 },
      { comuna: 'Requínoa', region_id: 8 },
      { comuna: 'San Vicente', region_id: 8 },
      { comuna: 'Pichilemu', region_id: 8 },
      { comuna: 'La Estrella', region_id: 8 },
      { comuna: 'Litueche', region_id: 8 },
      { comuna: 'Marchihue', region_id: 8 },
      { comuna: 'Navidad', region_id: 8 },
      { comuna: 'San Fernando', region_id: 8 },
      { comuna: 'Chépica', region_id: 8 },
      { comuna: 'Chimbarongo', region_id: 8 },
      { comuna: 'Lolol', region_id: 8 },
      { comuna: 'Nancagua', region_id: 8 },
      { comuna: 'Palmilla', region_id: 8 },
      { comuna: 'Peralillo', region_id: 8 },
      { comuna: 'Placilla', region_id: 8 },
      { comuna: 'Pumanque', region_id: 8 },
      { comuna: 'Santa Cruz', region_id: 8 },
      { comuna: 'Talca', region_id: 9 },
      { comuna: 'Constitución', region_id: 9 },
      { comuna: 'Curepto', region_id: 9 },
      { comuna: 'Empedrado', region_id: 9 },
      { comuna: 'Maule', region_id: 9 },
      { comuna: 'Pelarco', region_id: 9 },
      { comuna: 'Pencahue', region_id: 9 },
      { comuna: 'Río Claro', region_id: 9 },
      { comuna: 'San Clemente', region_id: 9 },
      { comuna: 'San Rafael', region_id: 9 },
      { comuna: 'Cauquenes', region_id: 9 },
      { comuna: 'Chanco', region_id: 9 },
      { comuna: 'Pelluhue', region_id: 9 },
      { comuna: 'Curicó', region_id: 9 },
      { comuna: 'Hualañé', region_id: 9 },
      { comuna: 'Licantén', region_id: 9 },
      { comuna: 'Molina', region_id: 9 },
      { comuna: 'Rauco', region_id: 9 },
      { comuna: 'Romeral', region_id: 9 },
      { comuna: 'Sagrada Familia', region_id: 9 },
      { comuna: 'Teno', region_id: 9 },
      { comuna: 'Vichuquén', region_id: 9 },
      { comuna: 'Linares', region_id: 9 },
      { comuna: 'Colbún', region_id: 9 },
      { comuna: 'Longaví', region_id: 9 },
      { comuna: 'Parral', region_id: 9 },
      { comuna: 'Retiro', region_id: 9 },
      { comuna: 'San Javier', region_id: 9 },
      { comuna: 'Villa Alegre', region_id: 9 },
      { comuna: 'Yerbas Buenas', region_id: 9 },
      { comuna: 'Concepción', region_id: 10 },
      { comuna: 'Coronel', region_id: 10 },
      { comuna: 'Chiguayante', region_id: 10 },
      { comuna: 'Florida', region_id: 10 },
      { comuna: 'Hualpén', region_id: 10 },
      { comuna: 'Hualqui', region_id: 10 },
      { comuna: 'Lota', region_id: 10 },
      { comuna: 'Penco', region_id: 10 },
      { comuna: 'San Pedro de la Paz', region_id: 10 },
      { comuna: 'Santa Juana', region_id: 10 },
      { comuna: 'Talcahuano', region_id: 10 },
      { comuna: 'Tomé', region_id: 10 },
      { comuna: 'Lebu', region_id: 10 },
      { comuna: 'Arauco', region_id: 10 },
      { comuna: 'Cañete', region_id: 10 },
      { comuna: 'Contulmo', region_id: 10 },
      { comuna: 'Curanilahue', region_id: 10 },
      { comuna: 'Los Álamos', region_id: 10 },
      { comuna: 'Tirúa', region_id: 10 },
      { comuna: 'Chillán', region_id: 10 },
      { comuna: 'Bulnes', region_id: 10 },
      { comuna: 'Cobquecura', region_id: 10 },
      { comuna: 'Coelemu', region_id: 10 },
      { comuna: 'Coihueco', region_id: 10 },
      { comuna: 'El Carmen', region_id: 10 },
      { comuna: 'Ninhue', region_id: 10 },
      { comuna: 'Ñiquén', region_id: 10 },
      { comuna: 'Pemuco', region_id: 10 },
      { comuna: 'Pinto', region_id: 10 },
      { comuna: 'Portezuelo', region_id: 10 },
      { comuna: 'Quillón', region_id: 10 },
      { comuna: 'Quirihue', region_id: 10 },
      { comuna: 'Ránquil', region_id: 10 },
      { comuna: 'San Carlos', region_id: 10 },
      { comuna: 'San Fabián', region_id: 10 },
      { comuna: 'San Ignacio', region_id: 10 },
      { comuna: 'San Nicolás', region_id: 10 },
      { comuna: 'Treguaco', region_id: 10 },
      { comuna: 'Yungay', region_id: 10 },
      { comuna: 'Temuco', region_id: 11 },
      { comuna: 'Carahue', region_id: 11 },
      { comuna: 'Cunco', region_id: 11 },
      { comuna: 'Curarrehue', region_id: 11 },
      { comuna: 'Freire', region_id: 11 },
      { comuna: 'Galvarino', region_id: 11 },
      { comuna: 'Gorbea', region_id: 11 },
      { comuna: 'Lautaro', region_id: 11 },
      { comuna: 'Loncoche', region_id: 11 },
      { comuna: 'Melipeuco', region_id: 11 },
      { comuna: 'Nueva Imperial', region_id: 11 },
      { comuna: 'Padre Las Casas', region_id: 11 },
      { comuna: 'Perquenco', region_id: 11 },
      { comuna: 'Pitrufquén', region_id: 11 },
      { comuna: 'Pucón', region_id: 11 },
      { comuna: 'Saavedra', region_id: 11 },
      { comuna: 'Teodoro Schmidt', region_id: 11 },
      { comuna: 'Toltén', region_id: 11 },
      { comuna: 'Vilcún', region_id: 11 },
      { comuna: 'Villarrica', region_id: 11 },
      { comuna: 'Angol', region_id: 11 },
      { comuna: 'Collipulli', region_id: 11 },
      { comuna: 'Curacautín', region_id: 11 },
      { comuna: 'Ercilla', region_id: 11 },
      { comuna: 'Lonquimay', region_id: 11 },
      { comuna: 'Los Sauces', region_id: 11 },
      { comuna: 'Lumaco', region_id: 11 },
      { comuna: 'Purén', region_id: 11 },
      { comuna: 'Renaico', region_id: 11 },
      { comuna: 'Traiguén', region_id: 11 },
      { comuna: 'Victoria', region_id: 11 },
      { comuna: 'Valdivia', region_id: 12 },
      { comuna: 'Corral', region_id: 12 },
      { comuna: 'Lanco', region_id: 12 },
      { comuna: 'Los Lagos', region_id: 12 },
      { comuna: 'Máfil', region_id: 12 },
      { comuna: 'Mariquina', region_id: 12 },
      { comuna: 'Paillaco', region_id: 12 },
      { comuna: 'Panguipulli', region_id: 12 },
      { comuna: 'La Unión', region_id: 12 },
      { comuna: 'Futrono', region_id: 12 },
      { comuna: 'Lago Ranco', region_id: 12 },
      { comuna: 'Río Bueno', region_id: 12 },
      { comuna: 'Osorno', region_id: 13 },
      { comuna: 'Puerto Octay', region_id: 13 },
      { comuna: 'Purranque', region_id: 13 },
      { comuna: 'Puyehue', region_id: 13 },
      { comuna: 'Río Negro', region_id: 13 },
    ]
  })

  // Crear emergencias
  await prisma.emergencia.createMany({
    data: [
      {
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
        comuna_id: 1,
        resumen: 'Incendio estructural en vivienda, activo en cocina y primer piso.',
        peligros: 'Humo denso, riesgo de propagación a viviendas contiguas.'
      },
      {
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
        comuna_id: 1,
        resumen: 'Choque múltiple en carretera, varios vehículos involucrados.',
        peligros: 'Combustible derramado, riesgo de incendio y obstrucción total de la vía.'
      },
      {
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
        comuna_id: 1,
        resumen: 'Incendio en nave industrial con materiales combustibles.',
        peligros: 'Colapso de estructura, sustancias peligrosas y altas llamas.'
      },
      {
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
        comuna_id: 1,
        resumen: 'Pequeño conato de incendio en comercio local, controlado en zona frontal.',
        peligros: 'Humo y pánico entre transeúntes; riesgos menores de propagación.'
      },
      {
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
        comuna_id: 1,
        resumen: 'Fuego en jardín trasero de vivienda, propagación a cobertizo.',
        peligros: 'Materiales inflamables en cobertizo, acceso dificultado por calle estrecha.'
      },
      {
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
        comuna_id: 1,
        resumen: 'Accidente tránsito: colisión frontal entre camión y vehículo menor.',
        peligros: 'Posible derrame de carga, riesgo de incendio y víctimas atrapadas.'
      },
      {
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
        comuna_id: 1,
        resumen: 'Pequeño incendio en pastizal cercano a sendero recreativo.',
        peligros: 'Propagación rápida por vientos moderados, riesgo para excursionistas.'
      },
      {
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
        comuna_id: 1,
        resumen: 'Incendio de ascensor y sala de máquinas en edificio de oficinas.',
        peligros: 'Humo ascendente por ductos, riesgo de atrapamiento en ascensores.'
      },
      {
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
        comuna_id: 1,
        resumen: 'Accidente nocturno en puente con vuelco de vehículo ligero.',
        peligros: 'Vehículo parcialmente en calzada, riesgo de choque secundario y derrame de combustible.'
      }
    ]
  });

  // Crear Vehiculos para emergencia
  await prisma.vehiculoEmergencia.createMany({
    data: [
      { emergencia_id: 1, vehiculo_id: 1 },
      { emergencia_id: 1, vehiculo_id: 2 },
      { emergencia_id: 2, vehiculo_id: 3 },
      { emergencia_id: 2, vehiculo_id: 4 },
      { emergencia_id: 3, vehiculo_id: 5 },
      { emergencia_id: 3, vehiculo_id: 6 },
      { emergencia_id: 4, vehiculo_id: 7 },
      { emergencia_id: 4, vehiculo_id: 8 },
      { emergencia_id: 5, vehiculo_id: 9 },
      { emergencia_id: 5, vehiculo_id: 10 },
      { emergencia_id: 6, vehiculo_id: 11 },
      { emergencia_id: 6, vehiculo_id: 12 },
      { emergencia_id: 7, vehiculo_id: 13 },
      { emergencia_id: 7, vehiculo_id: 14 },
      { emergencia_id: 8, vehiculo_id: 15 },
      { emergencia_id: 8, vehiculo_id: 16 },
      { emergencia_id: 9, vehiculo_id: 1 },
      { emergencia_id: 9, vehiculo_id: 3 },
    ]
  });

  // Crear Apoyos para emergencia
  await prisma.apoyoEmergencia.createMany({
    data: [
      { emergencia_id: 1, tipo_apoyo_id: 1, hora_solicitud: new Date('2024-05-10T14:25:00Z') },
      { emergencia_id: 1, tipo_apoyo_id: 2, hora_solicitud: new Date('2024-05-10T14:30:00Z') },
      { emergencia_id: 2, tipo_apoyo_id: 3, hora_solicitud: new Date('2024-05-10T14:35:00Z') },
      { emergencia_id: 2, tipo_apoyo_id: 4, hora_solicitud: new Date('2024-05-10T14:40:00Z') },
      { emergencia_id: 3, tipo_apoyo_id: 5, hora_solicitud: new Date('2024-05-10T14:45:00Z') },
      { emergencia_id: 3, tipo_apoyo_id: 6, hora_solicitud: new Date('2024-05-10T14:50:00Z') },
      { emergencia_id: 4, tipo_apoyo_id: 7, hora_solicitud: new Date('2024-05-10T14:55:00Z') },
      { emergencia_id: 4, tipo_apoyo_id: 8, hora_solicitud: new Date('2024-05-10T15:00:00Z') },
      { emergencia_id: 5, tipo_apoyo_id: 9, hora_solicitud: new Date('2024-05-10T15:05:00Z') },
      { emergencia_id: 5, tipo_apoyo_id: 10, hora_solicitud: new Date('2024-05-10T15:10:00Z') },
      { emergencia_id: 6, tipo_apoyo_id: 11, hora_solicitud: new Date('2024-05-10T15:15:00Z') },
      { emergencia_id: 6, tipo_apoyo_id: 12, hora_solicitud: new Date('2024-05-10T15:20:00Z') },
      { emergencia_id: 7, tipo_apoyo_id: 13, hora_solicitud: new Date('2024-05-10T15:25:00Z') },
      { emergencia_id: 7, tipo_apoyo_id: 14, hora_solicitud: new Date('2024-05-10T15:30:00Z') },
      { emergencia_id: 8, tipo_apoyo_id: 15, hora_solicitud: new Date('2024-05-10T15:35:00Z') },
      { emergencia_id: 8, tipo_apoyo_id: 16, hora_solicitud: new Date('2024-05-10T15:40:00Z') },
      { emergencia_id: 9, tipo_apoyo_id: 1, hora_solicitud: new Date('2024-05-10T15:45:00Z') },
      { emergencia_id: 9, tipo_apoyo_id: 3, hora_solicitud: new Date('2024-05-10T15:50:00Z') },
    ]
  });

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
