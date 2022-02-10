import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Aluno from '../models/Aluno';

const connection = new Sequelize(dbConfig);
const models = [Aluno];

models.forEach((model) => model.init(connection));
