import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      res.json(alunos);
    } catch (err) {
      console.log('erro no model de alunos', err);
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      const novoAluno = await aluno.update(req.body);
      const {
        nome, sobrenome, email, idade, peso,
      } = novoAluno;

      return res.json({
        nome, sobrenome, email, idade, peso,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        Errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new AlunoController();
