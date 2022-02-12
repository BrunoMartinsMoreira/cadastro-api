import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: 'Terezinha',
        email: 'terezinha@ronquifussa.com',
        password: '*pimba56789minhabenga',
      });
      res.json(novoUser);
    } catch (err) {
      console.log('erro no model de users', err);
    }
  }
}
export default new UserController();
