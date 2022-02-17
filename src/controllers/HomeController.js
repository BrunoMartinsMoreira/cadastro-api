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
      const {
        nome, sobrenome, email, idade, peso, altura,
      } = novoALuno;
      res.json({
        nome, sobrenome, email, idade, peso, altura,
      });
    } catch (err) {
      console.log('erro no model de alunos', err);
    }
  }
}
export default new HomeController();
