const checkRoleInLayout = (req, res, next) => {

    res.locals.loggedUser = {
        user: req.session.currentUser,
        isUser: req.session.currentUser?.role === 'USER',
        isChef: req.session.currentUser?.role === 'CHEF',
        isAdmin: req.session.currentUser?.role === 'ADMIN'
    }
    next()
};


module.exports = { checkRoleInLayout }


