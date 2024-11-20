const envs = {
    prod: "https://author-p34054-e123602.adobeaemcloud.com",
    stage: "https://author-p34054-e123553.adobeaemcloud.com",
    int: "https://author-p34054-e124157.adobeaemcloud.com",
    dev02: "https://author-p34054-e124155.adobeaemcloud.com"
};

const brand = "dove"
const locale = "us"
const language = "en"

const configPath = `${envs["int"]}/mnt/overlay/unilever/authoring/configurations/content/configuration/properties.html?item=%2Fconf%2F${brand}%2F${locale}%2F${language}%2Fsettings%2Fcloudconfigs%2F`

const configuration = `${configPath}configuration`
const renditions = `${configPath}imageoptimization`;
