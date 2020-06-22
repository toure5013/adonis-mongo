'use strict'
const User = use('App/Models/User');
const Logger = use('Logger');
class UserController {
    /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, auth,  response, view }) {
    try {
      const isauth = await auth.check()
      console.log(auth.check());

      if(isauth){
        const users = await User.all();
        response.json({
          message : "all users returned",
          users: users
        });
      }else{
        response.status(401).json( {
          error: true,
          message : 'Missing or invalid jwt token'
        });
      }

    } catch (error) {
      response.status(401).json( {
        error: true,
        message : 'Missing or invalid jwt token'
      });
    }


  }



  /**
   * Create/save a new payement.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const {username, email, password} = request.post();
    try {
      const user = await User.create({ username : username, email: email , password: password});
      Logger.info('Saved one user' + new Date());
      response.status(200).json({
        message : "User created",
        id : user.id,
        user: user
      });
    } catch (error) {
      response.status(error.status).json({
        message : "An error occured",
      });
    }


  }

  /**
   * Display a single payement.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, auth,  response, view }) {
    try {
      await auth.check()
      const user =  User.all();
      response.json({
        message : "all users returned",
        users: user
      });
    } catch (error) {
      response.send('Missing or invalid jwt token')
    }
  }


  /**
   * Update payement details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, auth, response }) {
  }

  /**
   * Delete a payement with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, auth, response }) {
  }
}

module.exports = UserController
