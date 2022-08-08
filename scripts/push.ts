import { execSync } from 'child_process'

execSync('npm run build', { stdio: 'inherit' })

execSync('git add .', { stdio: 'inherit' })
execSync('git commit -m "update"', { stdio: 'inherit' })
execSync('git push', { stdio: 'inherit' })
execSync('git push --tags', { stdio: 'inherit' })
