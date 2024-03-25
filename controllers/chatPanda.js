var db = require('../models/index');
var dashboard_chatpandasbd = db.dashboard_chatpandasbd
const data = async (req,res) =>{
    const result = await dashboard_chatpandasbd.findAll();
    res.render('chat',{result})
}
module.exports = {
    data
}


// var db = require('../models/index');
// var chat_panda_pd = db.chat_panda_pd
// const data = async (req,res) =>{
//     const result = await chat_panda_pd.findAll();
//     res.render('chat',{result})
// }
// module.exports = {
//     data
// }
