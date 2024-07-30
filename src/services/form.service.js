const db = require("../../database/local");



const SaveFormService = async (req) => {
  console.log(req.files, "images");
  const data = JSON.parse(req.body.data);
  console.log(data, "req received");
  try {
    data.forEach((record, i) => {
      const { title, description, price, qty, date } = record;
      console.log(record, "record");
      db.query(
        `insert into formdetail (title,description,price,qty,date,img) 
                  values (?,?,?,?,?,?)`,
        [title, description, price, qty, date, req.files[i].filename],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            throw new Error(err.message);
          } else {
            console.log("Inserted!");
          }
        }
      );
    });
    return "submitted";
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

const GetAllForms = async () => {
  try {
    return new Promise((resolve, rej) => {
      db.query(`select * from formdetail`, (err, results, fields) => {
        if (err) {
          console.log(err);
          rej(err)
          throw new Error(err.message);
        } else {
          console.log(results);
          resolve(results);
        }
      });
    });
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

module.exports = {SaveFormService,GetAllForms}
// module.exports = GetAllForms

