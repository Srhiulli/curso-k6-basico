import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
const url = 'http://localhost:3333/signup'

const payload = JSON.stringify({
   email:'sasa@sasa.com',
   password:'teste@123'
})
const headers = {
   'headers' : {
      'Content-Type' : 'application/json'
   }
}
const res = http.post(url,payload, headers)

 check(res, {
    'status should be 200' : (r) => r.status === 200
 })
  sleep(1)
}
