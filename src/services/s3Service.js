const path = require("path");
const dotenv = require("dotenv");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const getObjectSignedUrl = async ({
  region,
  bucket,
  key,
  accessKeyId,
  secretAccessKey,
  expiresIn = 900,
}) => {
  const s3 = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  });

  return getSignedUrl(s3, command, { expiresIn });
};

module.exports = { getObjectSignedUrl };

if (require.main === module) {
  const keyArgIndex = process.argv.indexOf("--key");
  const key =
    (keyArgIndex !== -1 && process.argv[keyArgIndex + 1]) ||
    process.env.S3_OBJECT_KEY ||
    process.env.REACT_APP_S3_OBJECT_KEY;

  if (!key) {
    console.error(
      "Missing object key. Pass --key <path/to/file.png> or set S3_OBJECT_KEY in .env"
    );
    process.exit(1);
  }

  getObjectSignedUrl({
    region: process.env.AWS_REGION || process.env.REACT_APP_AWS_REGION,
    bucket: process.env.S3_BUCKET_NAME || process.env.REACT_APP_S3_BUCKET_NAME,
    key,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY || process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    expiresIn: Number(process.env.S3_SIGNED_URL_EXPIRES || 900),
  })
    .then((url) => {
      console.log(url);
    })
    .catch((error) => {
      console.error("Failed to generate signed URL.");
      console.error(error.message || error);
      process.exit(1);
    });
}
