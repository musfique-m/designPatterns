const retryOperation = async () => {
  let retryAttempt = 1;
  while (retryAttempt <= 10) {
    try {
      const reply = await externalService(retryAttempt);
      console.log(reply);
      break;
    } catch (error) {
      console.log(`❌ Attempt 🔨 #${retryAttempt} failed 💀:${error}`);
      if (retryAttempt === 10)
        console.log(`🛑🚧⛔🚫 Maximum retry attempt reached 🚨🙅`);
      retryAttempt++;
      await sleep(250);
    }
  }
};

const externalService = async (retryAttempt) => {
  return await sleep(100).then(() => {
    const magicalNumber = Math.round(Math.random() * 10);
    if (retryAttempt === magicalNumber) return "✔ great success! 💥🚀";
    throw magicalNumber;
  });
};

const sleep = async (milliSeconds) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliSeconds);
  });

retryOperation();
