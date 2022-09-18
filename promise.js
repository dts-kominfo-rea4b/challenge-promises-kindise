const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  try {
    const reactionsOnIXX = await promiseTheaterIXX();
    const reactionsOnVGC = await promiseTheaterVGC();
    const reactionsAfterWatchingBothTheaters = [
      ...reactionsOnIXX,
      ...reactionsOnVGC
    ];
    return reactionsAfterWatchingBothTheaters.filter(
      (result) => result.hasil === emotion
    ).length;
  } catch (error) {
    return "Err: " + error.message;
  }
}

module.exports = {
  promiseOutput,
};
