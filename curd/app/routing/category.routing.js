module.exports = (app)=>{
    const category = require('../controllers/category.controller.js');
    app.post('/category',category.create);
    app.get('/category',category.findAll);
    app.get('/category/',category.findOne);
    app.put('/category/',category.update);
    app.delete('/category/',category.delete)
}