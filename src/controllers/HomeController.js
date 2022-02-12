import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoALuno = await Aluno.create({
        nome: 'Ivete',
        sobrenome: 'Moreira',
        email: 'ivete@mail.com',
        idade: 28,
        peso: 88.2,
        altura: 1.75,
      });
      res.json(novoALuno);
    } catch (err) {
      console.log('erro no model de alunos', err);
    }
  }
}
export default new HomeController();
