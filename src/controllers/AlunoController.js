import Aluno from '../models/Aluno';

class AlunoController {
  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.status(200).json({
        message: `O Aluno ${aluno.nome} foi cadastrado com sucesso`,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      res.json(alunos);
    } catch (err) {
      console.log('erro no model de alunos', err);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return req.status(400).json({
          errors: ['Informe o ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return req.status(400).json({
          errors: ['Aluno não cadastrado.'],
        });
      }

      const {
        nome, sobrenome, email, idade, peso, altura,
      } = aluno;

      return res.json({
        nome, sobrenome, email, idade, peso, altura,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return req.status(400).json({
          errors: ['Informe o ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return req.status(400).json({
          errors: ['Aluno não cadastrado.'],
        });
      }

      const novoAluno = await aluno.update(req.body);

      const {
        nome, sobrenome, email, idade, peso, altura,
      } = novoAluno;

      return res.json({
        nome, sobrenome, email, idade, peso, altura,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return req.status(400).json({
          errors: ['Informe o ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return req.status(400).json({
          errors: ['Aluno não cadastrado.'],
        });
      }

      await aluno.destroy();

      return res.json({
        ok: true,
        message: 'Deletado com sucesso',
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new AlunoController();
