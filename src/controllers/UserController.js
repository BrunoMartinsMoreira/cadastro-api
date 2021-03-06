import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (err) {
      return res.status(400).json({
        Errors: err.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        Errors: err.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, { attributes: ['nome', 'email'] });
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        Errors: err.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado.'],
        });
      }

      const updatedUser = await user.update(req.body);
      const { nome, email } = updatedUser;
      return res.json({ nome, email });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        Errors: err.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado.'],
        });
      }
      await user.destroy();
      return res.json({
        status: 'Deletado com sucesso',
      });
    } catch (err) {
      return res.status(400).json({
        Errors: err.errors.map((error) => error.message),
      });
    }
  }
}
export default new UserController();
