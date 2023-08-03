

const task2Model = require('../models/task2Model')
const fs = require('fs');

const isValid = function (value) {
    if (typeof (value) === 'undefined' || value === null) return false
    if (typeof (value) === 'string' && value.trim().length == 0) return false
    return true
}

const isValidRequestBody = function (reqBody) {
    return Object.keys(reqBody).length > 0
}

//================================================//

const sumOfArray = async function (req, res) {
    try {

        const queryParams = req.query
        const requestBody = req.body

        if (isValidRequestBody(queryParams)) {
            return res
                .status(400)
                .send({ status: false, message: "invalid request" })
        }

        if (!isValidRequestBody(requestBody)) {
            return res
                .status(400)
                .send({ status: false, message: "please provide data" })
        }

        const { element } = requestBody


        if (!isValid(element)) {
            return res
                .status(400)
                .send({ status: false, message: "element is required" })
        } else {

            if (!Array.isArray(element)) {
                throw new Error('Input must be an array');
            }

            let sum = 0;
            for (let i = 0; i < element.length; i++) {
                if (typeof element[i] !== 'number') {
                    throw new Error('Array must contain only integers');
                }
                sum += element[i];
            }

        const newDataEntry = await task2Model.create(requestBody)

        res
            .status(201)
            .send({ status: true, message: "sum of array", data: element, sumOfArray: sum })
        }

    } catch (error) {

        res
            .status(500)
            .send({ error: error.message })

    }
}


const countwords = async function (req, res){
    
function countWordsInFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const wordArray = data.trim().split(/\s+/);
    const wordCount = wordArray.length;
    console.log(`Total word count: ${wordCount}`);
  });
}

const filename = 'data.txt';
countWordsInFile(filename);
}

module.exports.sumOfArray = sumOfArray