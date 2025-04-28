const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const URL = 'https://paciente-staging.lacreisaude.com.br/';
const OUTPUT_FOLDER = 'lighthouse-reports';
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const reportName = `acessibilidade_${timestamp}.html`;

if (!fs.existsSync(OUTPUT_FOLDER)) {
  fs.mkdirSync(OUTPUT_FOLDER);
}

const command = `lighthouse ${URL} \
  --only-categories=accessibility \
  --quiet \
  --chrome-flags="--headless" \
  --output=html \
  --output-path=${path.join(OUTPUT_FOLDER, reportName)}`;

console.log('🔎 Executando Lighthouse para:', URL);

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Erro: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Aviso: ${stderr}`);
  }
  console.log(`✅ Relatório de acessibilidade gerado em: ${path.join(OUTPUT_FOLDER, reportName)}`);
});
