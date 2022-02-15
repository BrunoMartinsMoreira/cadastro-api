import User from '../models/Aluno';

class TokenController {
  async store(req, res) {
    return res.json('aoba');
  }
}
export default new TokenController();
