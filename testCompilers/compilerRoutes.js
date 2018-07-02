import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';



export default (fixture, options = {}) => {
  console.log(8, fixture);
  const routes = path.resolve(__dirname, '../src/routes/routes.json');
  const compiler = webpack({
      context: __dirname,
      entry: `${fixture}`,
      output: {
          path: path.resolve(__dirname),
          filename: 'bundleRoutes.js'
      },
      module: {
          rules: [
            {
                test: /\.json$/,
                exclude: routes, // exclude routes.json from being loaded by the usual json-loader
                loader: 'json-loader',
            },
            {
              test: /\.json$/,
              include: routes,
              use: {
                  loader: path.resolve(__dirname, '../src/utils/route-loader.js'),
               options: {
                   debug: true,
                   chunks: true
               }
              }
          }        
        ]
      }
  });
  //compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
          console.log(31, stats);
          if(err || stats.hasErrors()) reject(err);

          resolve(stats);
      })
  })
} 
