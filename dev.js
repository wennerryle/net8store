const concurrently = require("concurrently");

concurrently(
  [
    { command: 'dotnet watch', name: 'dotnet', prefixColor: 'green' },
    { command: 'swc ./js/**/*.ts -d ./wwwroot/ --config-file ./js/.swcrc -w', name: 'swc', prefixColor: 'blue' }
  ]
)