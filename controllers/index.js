const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;

// const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);
// router.use('/', homeRoutes);

// module.exports = router;