class HomeController {
  index(req, res) {
    res.json({
      ChegouNaHome: true,
    });
  }
}
export default new HomeController();
