import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      res.json('bao demais?');
    } catch (err) {
      console.log('erro no model de alunos', err);
    }
  }
}
export default new AlunoController();
