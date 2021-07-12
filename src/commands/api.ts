import { GluegunCommand, GluegunToolbox } from 'gluegun'

const command: GluegunCommand = {
  name: 'api',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  }
}

export default command
