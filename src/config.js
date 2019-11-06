const dev = {
    STRIPE_KEY: "pk_test_WyqbkEV0HJZL4gpqaEegybuj",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-ze01t26veng2"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://rm6faidts1.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_gIKfRjYpZ",
        APP_CLIENT_ID: "1o546fcvbpdqm6hfn954l2a5ht",
        IDENTITY_POOL_ID: "us-east-1:06febea7-2e92-4ac4-96e7-a12d53277aba"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_WyqbkEV0HJZL4gpqaEegybuj",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-19ffm2aadm3w"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://psypewuf11.execute-api.us-east-1.amazonaws.com/prod/"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_MW4he1B63",
        APP_CLIENT_ID: "5pfggt2mpuqdet3scoqquk9cl4",
        IDENTITY_POOL_ID: "us-east-1:8472e2b2-d550-4d11-a180-9fea0774414c"
    }
}; 

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};