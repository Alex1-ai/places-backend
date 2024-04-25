# Express Server for Managing Places

This Places Express server provides CRUD (Create, Read, Update, Delete) endpoints for managing places. It allows users to upload images for each place and stores the place details in a database.

## Prerequisites

Before starting the server, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB ATLAS

## Installation

1. Clone the repository:
code`git clone https://github.com/Alex1-ai/places-backend`

2. Navigate to the project directory:
code`cd places-backend`

3. Install dependencies:
code` npm install`

4. Set up environment variables:
   Modify the `config/config.env` file in the root directory and edit the following environment variables:
   PORT=5000
   MONGO_URI=Enter your mongodb url or mongodb atlas uri
   NODE_ENV=development

   NOTE: Modify the `MONGO_URI` according to your MongoDB configuration.

## Running the Server

To start the server, run the following command:
code` npm start`


The server will start running at `http://localhost:5000`.

## API DOCUMENTATION
->click here `https://documenter.getpostman.com/view/19877044/2sA3Bt1UTS#981cb830-8ff2-47d9-a534-9ac292b0c0b7`

## API Endpoints

- **GET /api/v1/places**: Get all places
- **GET /api/v1/places/:id**: Get a specific place by ID
- **POST /api/v1/places**: Create a new place
- **PUT /api/v1/places/:id**: Update a place by ID
- **DELETE /api/v1/places/:id**: Delete a place by ID
- **PUT /api/v1/places/:id/photo**: Upload a photo by ID

## File Uploads

For file uploads, the server expects requests to be sent as `multipart/form-data`. When creating a new place, make sure to include a field named `image` in your form data.

## Error Handling

The server includes error handling middleware to handle any runtime errors and return appropriate error responses.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open a pull request.










