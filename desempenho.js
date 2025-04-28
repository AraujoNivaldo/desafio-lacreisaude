import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 },  // sobe para 10 usuários
    { duration: '3m', target: 10 },  // mantém 10 usuários
    { duration: '1m', target: 0 },   // finaliza
  ],
};

export default function () {
  const res = http.get('https://paciente-staging.lacreisaude.com.br/');

  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
