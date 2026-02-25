import { awsClientConfig, env } from "./env";

export const awsConfig = {
  region: env.awsRegion,
  bucketName: env.s3BucketName,
  accessKeyId: env.awsAccessKeyId,
  secretAccessKey: env.awsSecretAccessKey,
};

export const s3ClientConfig = awsClientConfig;
