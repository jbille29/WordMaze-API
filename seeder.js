require('dotenv').config()
const connectDB = require('./config/dbConn')
const Game1 = require('./models/Game1')
const moment = require('moment')

const generateGrid = require('./utils/GameOne/wordGridGenerator')

connectDB()

const importData = async () => {
  try {
    await Game1.deleteMany()

    for (let i = 0; i < 5; i++) {
        const date = moment().add(i, 'days').startOf('day').toDate();
        const newCategory = new Game1(
            {...generateGrid(), date})
    
        // save the new category
        const savedCategory = await newCategory.save();
    }

    console.log('Data Imported!')
    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Game1.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}