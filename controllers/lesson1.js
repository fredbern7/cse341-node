const homeRoute = (req, res) => {
    res.send('Home Page!')
  };

const janaRoute = (req, res) => {
res.send('Jana Page!')
};


module.exports = {
    homeRoute,
    janaRoute,
};