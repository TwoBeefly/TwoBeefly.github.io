import path from 'path'
import fs from 'fs-extra'
import type { DefaultTheme } from 'vitepress'

const src_path = path.resolve(__dirname, '../pages')

export function getMds(root_path = '/'): DefaultTheme.SidebarItem[] {
  const dir_path = path.join(src_path, root_path)
  const dirs = fs.readdirSync(dir_path)

  return dirs.map((file) => {
    const fullPath = path.join(dir_path, file)
    const content = fs.readFileSync(fullPath, 'utf-8')
    const stats = fs.statSync(fullPath)

    if (!stats.isDirectory()) {
      return {
        text: (content).match(/#\s+(.*)$/m)?.[1],
        link: `/pages${root_path}${file}`,
      }
    }
    else {
      return {}
    }
  }) as DefaultTheme.SidebarItem[]
}
// console.log(getMds('/'))
