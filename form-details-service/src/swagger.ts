import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Form Details Service API',
      version: '1.0.0',
      description: 'API for managing creator form details'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ]
  },
  apis: ['./src/routes/*.ts']
};

export const swaggerSpec = swaggerJSDoc(options);