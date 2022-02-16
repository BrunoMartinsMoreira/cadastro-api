import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  /*
  enviado nos headers da requisição ex
  authorizarion:{
    bearer, token
  }
  */

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido, faça login novamente'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['token inválido ou expirado.'],
    });
  }
};
