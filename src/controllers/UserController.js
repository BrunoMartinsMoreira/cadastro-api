import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (err) {
      return res.status(400).json({
        Errors: err.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();

      const response = [{
        credentials: {
          user_id: req.userId,
          user_email: req.userEmail,
        },
      }, { users }];

      return res.json(response);
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
      const user = await User.findByPk(id);
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
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Usuário inválido.'],
        });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado.'],
        });
      }

      const updatedUser = await user.update(req.body);
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        Errors: err.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido.'],
        });
      }

      const user = await User.findByPk(id);
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
