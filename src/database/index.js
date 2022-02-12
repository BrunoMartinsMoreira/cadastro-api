import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const connection = new Sequelize(dbConfig);
const models = [Aluno, User];

models.forEach((model) => model.init(connection));
