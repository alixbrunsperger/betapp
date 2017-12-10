import { fetchGet } from '../libs/function';
import * as constClass from '../../constants';

class MatchDataManagement{
    static async getMatches(parameters){
        const data = await fetchGet(constClass.API_URL_MATCHES);
        if(data.matches){

            return data.matches.map((match, key)=>{
                return {
                    ...match,
                    "homeTeam": {
                        "name": match.homeTeam,
                        "flag": '/static/img/flag' + (2+key*2-1) +'.png',
                        "id":(key*2-1)
                    },
                    "awayTeam": {
                        "name": match.awayTeam,
                        "flag": '/static/img/flag' + (2+key*2) + '.png',
                        "id":(key*2)
                    },
                    "live": ( key === 0 ? true : false)
                };
            })
        }
    }
}

export default MatchDataManagement;