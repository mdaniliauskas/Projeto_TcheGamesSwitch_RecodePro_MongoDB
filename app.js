const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('./src/db/connect')


app.listen(3003)