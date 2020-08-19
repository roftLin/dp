#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

function isDeploying() {
  const goalPath = path.resolve(__dirname, '../package.json')
  let data = JSON.parse(fs.readFileSync(goalPath))
  data.isDeploying = !data.isDeploying ?? true
  fs.writeFileSync(goalPath, JSON.stringify(data, null, 2))
}

isDeploying()