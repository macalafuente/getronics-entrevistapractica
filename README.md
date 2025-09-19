# Getronics - Entrevista Practica

Este repositorio contiene pruebas automatizadas para la tienda online de Movistar Argentina, utilizando **Cypress**.

## Estructura del Proyecto
```
cypress
├── e2e
│ ├── 1-getting-started
│ ├── 2-advanced-examples
│ ├── cp001.spec.js
│ ├── cp002.spec.js
│ ├── cp003.spec.js
│ └── cp004.spec.js
├── fixtures
├── pages
│ ├── Homepage.js
│ ├── ProductPage.js
│ └── Filtros.js
└── support
```

## Casos de Prueba Implementados

- **CP001**: Validar que un producto pueda ser pagado en 3 cuotas sin interés  
- **CP002**: Aplicar filtros de producto por almacenamiento y rango de precio  
- **CP003**: Verificar medios de pago disponibles y selección de banco  
- **CP004**: Navegar a "Ofertas", ordenar por precio y seleccionar el producto de menor precio  


## Instalación

```bash
1. Clonar el repositorio:

git clone https://github.com/macalafuente/getronics-entrevistapractica.git
cd getronics-entrevistapractica
npm install

Abrir el Test Runner de Cypress:
npx cypress open

Ejecutar todas las pruebas:
npx cypress run

```
Proyecto creado con fines de practica y entrevista. 
