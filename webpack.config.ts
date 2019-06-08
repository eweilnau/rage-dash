import path from  'path';
import webpack from 'webpack';

const typescript: webpack.Rule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
}

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/game.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'game.bundle.js'
    },
    module: {
        rules: [ typescript ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};

export default config;