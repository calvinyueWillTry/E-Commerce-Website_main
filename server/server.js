const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
var bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require('fs')

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


//importing schema
require("./config/imageDetails");
const Images = mongoose.model("ImageDetails");



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(bodyParser.json())
  app.use(cors());


  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));


  app.get("/", async (req, res) => {
    res.send("Success!!!!!!");
  });





const multer = require("multer");

// Set up storage configuration for multer

const storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    cb(null, '../client/public/images/'); // Folder to save uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`); // Name the file with timestamp
  },
});
// Create the multer instance
const upload = multer({ storage });
// Create the uploads directory if it doesn't exist
const directory = '../client/public/images'
if (!fs.existsSync(directory)){
    fs.mkdirSync(directory, {recursive: true});
}
// Endpoint to handle image upload
app.post('/upload-image', upload.single('image'), async (req, res) => {
  console.log("req.file is here", req.file)
  
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const imageName = req.file.filename;

  
   await Images.create({ image: imageName });

  res.status(200).send({
    message: 'File uploaded successfully',
    file: req.file,
  });
});

app.get("/get-image", async (req, res) => {
  console.log()
  try {
    Images.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});


  


  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
  startApolloServer();
