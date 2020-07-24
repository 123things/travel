import axios from 'axios'
// axios.defaults.headers.ContentType = 'application/x-www-form-urlencoded'
const headers=  {
	'Content-Type': 'application/x-www-form-urlencoded',
	'Access-Control-Allow-Origin' : '*',
	"Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE"
}
export default{
    changeCity(state, city){
		state.city = city.name
		try{ localStorage.city = city.name} catch(e){}
	},
	$axios(state,params){
		axios.get(params.url,{},{headers})
			.then(params.callback)
			.catch((e)=>{ console.info(e)})
	}
}