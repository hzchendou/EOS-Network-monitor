/* eslint-disable camelcase,no-plusplus,max-len */
/* ###############################################################################
#
# EOS TestNet Monitor
#
# Created by http://CryptoLions.io
#
# Git Hub: https://github.com/CryptoLions/EOS-Testnet-monitor
#
###############################################################################  */
const { ProducerModelV2 } = require('../../db');
const { createLogger } = require('../../helpers');

const { info: logInfo, error: logError } = createLogger();

module.exports = async () => {
  try {
    await ProducerModelV2.updateMany({ }, { $set: { missedBlocksForDay: 0 } }).exec();
    logInfo('Missed blocks for day were set to zero');
  } catch (e) {
    logInfo('resetMissedBlocksForDay error');
    logError(e);
  }
};
