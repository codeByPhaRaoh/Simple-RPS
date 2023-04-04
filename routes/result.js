// const ejs = require("ejs");

// function renderResult(result, res) {
//     ejs.renderFile("views/result.ejs", { result }, {}, (err, html) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send("Internal Server Error");
//         } else {
//             res.send(html);
//         }
//     });
// }

// export { router };

import express from 'express';

export const router = express.Router();

router.get('/:result', (req, res) => {
    const result = req.params.result;
    res.render('result', { result });
});
