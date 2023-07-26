import { default as DataAPI001 } from './datas/API001';
import { default as DataAPI002 } from './datas/API002';

export default {
  API001: (req, res) => {
    res.json(DataAPI001);
  },
  API002: (req, res) => {
    res.json(DataAPI002);
  },
};
