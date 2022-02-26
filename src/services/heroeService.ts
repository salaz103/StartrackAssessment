import http from "../api/http-common";
import Heroes from "../HeroesData/Heroes";
const getAll = () => {
  return http.get<Array<Heroes>>("/all.json");
};

const HeroeService = {
  getAll
};
export default HeroeService;
