const config=require('../config/index')
module.exports = {
    index: (req, res, next) => {
        res.render('frontend/index', {
            NAME: config.NAME,
            PORt: config.PORT,
            title: 'Express' 
        });
      }
}