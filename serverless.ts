import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'welcome-serverless.ts',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: {
    'land-query': {
      handler: 'src/handler/land-query-handler.execute',
      events: [{
        http: {
            method: 'post',
            path: 'land',
        }
      }],
      description: '歴史的な出来事検索API'
    },
    'sample-sns-handler': {
      handler: 'src/handler/sample-sns-handler.execute',
      events: [{
        http: {
            method: 'post',
            path: 'sns',
        }
      }],
      description: 'ハンズオン用サンプル実装アプリケーション'
    }
  },
};

module.exports = serverlessConfiguration;
