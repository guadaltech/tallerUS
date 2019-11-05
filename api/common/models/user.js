'use strict';

module.exports = function(User)
{

    User.beforeRemote('login', function (ctx, _, next)
    {
      ctx.args.include = ['user'];
      next();
    });

};
