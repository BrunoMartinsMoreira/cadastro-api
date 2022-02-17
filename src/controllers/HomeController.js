class HomeController {
  async index(req, res) {
    return res.json('Index da home');
  }
}
export default new HomeController();
