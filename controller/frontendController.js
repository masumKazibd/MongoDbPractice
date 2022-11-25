module.exports={
    index: (req, res, next) => {
        res.render('frontend/my-page', { title: 'frontend' });
      }
}