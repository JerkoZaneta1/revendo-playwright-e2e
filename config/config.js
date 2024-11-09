// set config for staging
const stageConfig = {
  globalUrl: "http://sw.revendo.dev/en-at",
  globalUrlCh: "https://sw.revendo.dev/en-ch/",
  globalUrlEu: "https://sw.revendo.dev/en",
};

// set config for production
const prodConfig = {
  globalUrl: "https://revendo.com/en-at",
  globalUrlCh: "https://revendo.com/en-ch/",
  globalUrlEu: "https://revendo.com/en",
};

// get the environment type from command line. If none, set it to dev
const environment = process.env.TEST_ENV || "stage";

if (environment === "stage") {
  console.log("**********************RUNNING ON STAGING*********************");
} else {
  console.log(
    "**********************RUNNING ON PRODUCTION*********************"
  );
}

// config object with default configuration and environment specific configuration
const config = {
  ...(environment === "production" ? prodConfig : stageConfig),
};

module.exports = {
  config,
};
