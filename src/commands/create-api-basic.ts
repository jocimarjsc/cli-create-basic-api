import { GluegunToolbox } from 'gluegun'

export default {
  name: 'create:api',
  alias: ['ca'],
  description: 'Created basic api!',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      print: { success, error },
      template: { generate }
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('API name must be specified!')
      return
    }

    await generate({
      template: 'api/package.json.ejs',
      target: 'app/package.json',
      props: { name }
    })

    success("Generate 'package.json'")

    await generate({
      template: 'api/.env.ejs',
      target: 'app/.env'
    })

    success("Generate '.env'")

    await generate({
      template: 'api/.gitignore.ejs',
      target: 'app/.gitignore'
    })

    success("Generate '.gitignore.json'")

    await generate({
      template: 'api/ormconfig.json.ejs',
      target: 'app/ormconfig.json'
    })

    success("Generate 'ormconfig.json'")

    await generate({
      template: 'api/tsconfig.json.ejs',
      target: 'app/tsconfig.json'
    })

    success("Generate 'tsconfig.json'")

    await generate({
      template: 'api/src/server.ts.ejs',
      target: `app/src/server.ts`
    })

    success("Generate 'src/server.ts'")

    await generate({
      template: 'api/src/app.ts.ejs',
      target: `app/src/app.ts`
    })

    success("Generate 'src/app.ts'")

    await generate({
      template: 'api/src/routes.ts.ejs',
      target: `app/src/routes.ts`
    })

    success("Generate 'src/server.ts'")

    await generate({
      template: 'api/src/error/captureError.ts.ejs',
      target: `app/src/error/captureError.ts`
    })

    success("Generate 'src/error/captureError.ts'")

    await generate({
      template: 'api/src/error/errorHandler.ts.ejs',
      target: `app/src/error/erroHandler.ts`
    })

    success("Generate 'src/error/captureError.ts'")

    await generate({
      template: 'api/src/database/connection.ts.ejs',
      target: `app/src/database/connection.ts`
    })

    success("Generate 'src/database/connection.ts'")

    await generate({
      template: 'api/src/controllers/DefaultController.ts.ejs',
      target: `app/src/controllers/DefaultController.ts`
    })

    success("Generate 'src/controller/DefaultController.ts'")
  }
}
