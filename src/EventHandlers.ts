/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Trading,
  Trading_Callback,
  Trading_CancelOpen,
  Trading_Close,
  Trading_ExecRequestClose,
  Trading_ExecRequestOpen,
  Trading_Initialized,
  Trading_Open,
  Trading_OwnershipTransferStarted,
  Trading_OwnershipTransferred,
  Trading_RequestClose,
  Trading_RequestOpen,
  Trading_SetContract,
  Trading_SetNativeFeeForKeeper,
  Trading_SetParams,
  Trading_SetReserve,
  Trading_TradeClosed,
  Trading_UpdateMargin,
  Trading_UpdateOpenRequest,
  Trading_UpdateTPAndSL,
  Dice,
  Dice_Dice_Outcome_Event,
  Dice_Dice_Play_Event,
  Dice_Dice_Refund_Event,
  CoinFlip_CoinFlip_Outcome_Event,
  CoinFlip_CoinFlip_Play_Event,
  CoinFlip_CoinFlip_Refund_Event,
  BankrollAndStaking,
  BankrollAndStaking_BankRoll_Fee_Info,
  BankrollAndStaking_BankRoll_Game_State_Changed,
  BankrollAndStaking_BankRoll_Max_Payout_Changed,
  BankrollAndStaking_BankRoll_Stake,
  BankrollAndStaking_BankRoll_Withdraw,
  BankrollAndStaking_Bankroll_Token_State_Changed,
  BankrollAndStaking_Initialized,
  BankrollAndStaking_OwnershipTransferred,
  TinderTrading,
  TinderTrading_Callback,
  TinderTrading_Close,
  TinderTrading_Initialized,
  TinderTrading_Open,
  TinderTrading_OwnershipTransferStarted,
  TinderTrading_OwnershipTransferred,
  TinderTrading_Paused,
  TinderTrading_SetFeeHelper,
  TinderTrading_SetOracle,
  TinderTrading_SetPairInfo,
  TinderTrading_SetParams,
  TinderTrading_SetReserve,
  TinderTrading_SetStandardToken,
  TinderTrading_SetVault,
  TinderTrading_Unpaused,
  TinderTrading_UpdateKeeper,
  RockPaperScissors,
  RockPaperScissors_RockPaperScissors_Outcome_Event,
  RockPaperScissors_RockPaperScissors_Refund_Event,
  Slots,
  Slots_Slots_Outcome_Event,
  Slots_Slots_Play_Event,
  Slots_Slots_Refund_Event,
  Mines,
  Mines_Mines_Fee_Event,
  Mines_Mines_Play_Event,
  Mines_Mines_Refund_Event,
  Plinko,
  Plinko_Plinko_Outcome_Event,
  Plinko_Plinko_Play_Event,
  Plinko_Plinko_Refund_Event,
  CoinFlip,
} from "generated";

Trading.Callback.handler(async ({ event, context }) => {
  const entity: Trading_Callback = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    target: event.params.target,
    resut: event.params.resut,
  };

  context.Trading_Callback.set(entity);
});

Trading.CancelOpen.handler(async ({ event, context }) => {
  const entity: Trading_CancelOpen = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
  };

  context.Trading_CancelOpen.set(entity);
});

Trading.Close.handler(async ({ event, context }) => {
  const entity: Trading_Close = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    closePrice: event.params.closePrice,
    _closeMargin: event.params._closeMargin,
    fundingFee: event.params.fundingFee,
    rolloverFee: event.params.rolloverFee,
    closeFee: event.params.closeFee,
    afterFee: event.params.afterFee,
    s: event.params.s,
  };

  context.Trading_Close.set(entity);
});

Trading.ExecRequestClose.handler(async ({ event, context }) => {
  const entity: Trading_ExecRequestClose = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    index: event.params.index,
    status: event.params.status,
  };

  context.Trading_ExecRequestClose.set(entity);
});

Trading.ExecRequestOpen.handler(async ({ event, context }) => {
  const entity: Trading_ExecRequestOpen = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    status: event.params.status,
  };

  context.Trading_ExecRequestOpen.set(entity);
});

Trading.Initialized.handler(async ({ event, context }) => {
  const entity: Trading_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Trading_Initialized.set(entity);
});

Trading.Open.handler(async ({ event, context }) => {
  const entity: Trading_Open = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    t_0_0: event.params.t
        [0]
        [0]
    ,
    t_0_1: event.params.t
        [0]
        [1]
    ,
    t_0_2: event.params.t
        [0]
        [2]
    ,
    t_0_3: event.params.t
        [0]
        [3]
    ,
    t_0_4: event.params.t
        [0]
        [4]
    ,
    t_0_5: event.params.t
        [0]
        [5]
    ,
    t_0_6: event.params.t
        [0]
        [6]
    ,
    t_1: event.params.t
        [1]
    ,
    t_2: event.params.t
        [2]
    ,
    fee: event.params.fee,
  };

  context.Trading_Open.set(entity);
});

Trading.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: Trading_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Trading_OwnershipTransferStarted.set(entity);
});

Trading.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Trading_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Trading_OwnershipTransferred.set(entity);
});

Trading.RequestClose.handler(async ({ event, context }) => {
  const entity: Trading_RequestClose = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    index: event.params.index,
    _closeMargin: event.params._closeMargin,
    requstTime: event.params.requstTime,
  };

  context.Trading_RequestClose.set(entity);
});

Trading.RequestOpen.handler(async ({ event, context }) => {
  const entity: Trading_RequestOpen = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    _request_0: event.params._request
        [0]
    ,
    _request_1_0: event.params._request
        [1]
        [0]
    ,
    _request_1_1: event.params._request
        [1]
        [1]
    ,
    _request_1_2: event.params._request
        [1]
        [2]
    ,
    _request_1_3: event.params._request
        [1]
        [3]
    ,
    _request_1_4: event.params._request
        [1]
        [4]
    ,
    _request_1_5: event.params._request
        [1]
        [5]
    ,
    _request_1_6: event.params._request
        [1]
        [6]
    ,
    _request_2: event.params._request
        [2]
    ,
    _request_3: event.params._request
        [3]
    ,
    _request_4: event.params._request
        [4]
    ,
    _request_5: event.params._request
        [5]
    ,
  };

  context.Trading_RequestOpen.set(entity);
});

Trading.SetContract.handler(async ({ event, context }) => {
  const entity: Trading_SetContract = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _tradingStorage: event.params._tradingStorage,
    _usdt: event.params._usdt,
  };

  context.Trading_SetContract.set(entity);
});

Trading.SetNativeFeeForKeeper.handler(async ({ event, context }) => {
  const entity: Trading_SetNativeFeeForKeeper = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _forOpen: event.params._forOpen,
    _forClose: event.params._forClose,
    _forCallback: event.params._forCallback,
    _gasLimit: event.params._gasLimit,
  };

  context.Trading_SetNativeFeeForKeeper.set(entity);
});

Trading.SetParams.handler(async ({ event, context }) => {
  const entity: Trading_SetParams = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _liquidationP: event.params._liquidationP,
    _spreadReductionP: event.params._spreadReductionP,
    _maxMarketTradeOpenTime: event.params._maxMarketTradeOpenTime,
    _tradeSwitch: event.params._tradeSwitch,
  };

  context.Trading_SetParams.set(entity);
});

Trading.SetReserve.handler(async ({ event, context }) => {
  const entity: Trading_SetReserve = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _receiver: event.params._receiver,
    _rate: event.params._rate,
  };

  context.Trading_SetReserve.set(entity);
});

Trading.TradeClosed.handler(async ({ event, context }) => {
  const entity: Trading_TradeClosed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
  };

  context.Trading_TradeClosed.set(entity);
});

Trading.UpdateMargin.handler(async ({ event, context }) => {
  const entity: Trading_UpdateMargin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    amount: event.params.amount,
    isAdd: event.params.isAdd,
    margin: event.params.margin,
    leverage: event.params.leverage,
  };

  context.Trading_UpdateMargin.set(entity);
});

Trading.UpdateOpenRequest.handler(async ({ event, context }) => {
  const entity: Trading_UpdateOpenRequest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    limitPrice: event.params.limitPrice,
    tp: event.params.tp,
    sl: event.params.sl,
  };

  context.Trading_UpdateOpenRequest.set(entity);
});

Trading.UpdateTPAndSL.handler(async ({ event, context }) => {
  const entity: Trading_UpdateTPAndSL = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    tp: event.params.tp,
    sl: event.params.sl,
  };

  context.Trading_UpdateTPAndSL.set(entity);
});

Dice.Dice_Outcome_Event.handler(async ({ event, context }) => {
  const entity: Dice_Dice_Outcome_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    payout: event.params.payout,
    tokenAddress: event.params.tokenAddress,
    multiplier: event.params.multiplier,
    isOver: event.params.isOver,
    diceOutcomes: event.params.diceOutcomes,
    payouts: event.params.payouts,
    numGames: event.params.numGames,
    sequenceNumber: event.params.sequenceNumber,
  };

  context.Dice_Dice_Outcome_Event.set(entity);
});

Dice.Dice_Play_Event.handler(async ({ event, context }) => {
  const entity: Dice_Dice_Play_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    multiplier: event.params.multiplier,
    tokenAddress: event.params.tokenAddress,
    isOver: event.params.isOver,
    numBets: event.params.numBets,
    stopGain: event.params.stopGain,
    stopLoss: event.params.stopLoss,
    vRFFee: event.params.VRFFee,
  };

  context.Dice_Dice_Play_Event.set(entity);
});

Dice.Dice_Refund_Event.handler(async ({ event, context }) => {
  const entity: Dice_Dice_Refund_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
  };

  context.Dice_Dice_Refund_Event.set(entity);
});

CoinFlip.CoinFlip_Outcome_Event.handler(async ({ event, context }) => {
  const entity: CoinFlip_CoinFlip_Outcome_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    payout: event.params.payout,
    tokenAddress: event.params.tokenAddress,
    coinOutcomes: event.params.coinOutcomes,
    payouts: event.params.payouts,
    numGames: event.params.numGames,
    sequenceNumber: event.params.sequenceNumber,
  };

  context.CoinFlip_CoinFlip_Outcome_Event.set(entity);
});

CoinFlip.CoinFlip_Play_Event.handler(async ({ event, context }) => {
  const entity: CoinFlip_CoinFlip_Play_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
    isHeads: event.params.isHeads,
    numBets: event.params.numBets,
    stopGain: event.params.stopGain,
    stopLoss: event.params.stopLoss,
    vRFFee: event.params.VRFFee,
  };

  context.CoinFlip_CoinFlip_Play_Event.set(entity);
});

CoinFlip.CoinFlip_Refund_Event.handler(async ({ event, context }) => {
  const entity: CoinFlip_CoinFlip_Refund_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
  };

  context.CoinFlip_CoinFlip_Refund_Event.set(entity);
});

BankrollAndStaking.BankRoll_Fee_Info.handler(async ({ event, context }) => {
  const entity: BankrollAndStaking_BankRoll_Fee_Info = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    receiver: event.params.receiver,
    rate: event.params.rate,
  };

  context.BankrollAndStaking_BankRoll_Fee_Info.set(entity);
});

BankrollAndStaking.BankRoll_Game_State_Changed.handler(async ({ event, context }) => {
  const entity: BankrollAndStaking_BankRoll_Game_State_Changed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameAddress: event.params.gameAddress,
    isValid: event.params.isValid,
  };

  context.BankrollAndStaking_BankRoll_Game_State_Changed.set(entity);
});

BankrollAndStaking.BankRoll_Max_Payout_Changed.handler(async ({ event, context }) => {
  const entity: BankrollAndStaking_BankRoll_Max_Payout_Changed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    payout: event.params.payout,
  };

  context.BankrollAndStaking_BankRoll_Max_Payout_Changed.set(entity);
});

BankrollAndStaking.BankRoll_Stake.handler(async ({ event, context }) => {
  const entity: BankrollAndStaking_BankRoll_Stake = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    token: event.params.token,
    amount: event.params.amount,
    shares: event.params.shares,
    userTotalSheres: event.params.userTotalSheres,
    tokenShareTotal: event.params.tokenShareTotal,
    totalPool: event.params.totalPool,
  };

  context.BankrollAndStaking_BankRoll_Stake.set(entity);
});

BankrollAndStaking.BankRoll_Withdraw.handler(async ({ event, context }) => {
  const entity: BankrollAndStaking_BankRoll_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    token: event.params.token,
    amount: event.params.amount,
    userAmount: event.params.userAmount,
    userTotalSheres: event.params.userTotalSheres,
    tokenShareTotal: event.params.tokenShareTotal,
    totalPool: event.params.totalPool,
  };

  context.BankrollAndStaking_BankRoll_Withdraw.set(entity);
});

BankrollAndStaking.Bankroll_Token_State_Changed.handler(async ({ event, context }) => {
  const entity: BankrollAndStaking_Bankroll_Token_State_Changed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenAddress: event.params.tokenAddress,
    isValid: event.params.isValid,
  };

  context.BankrollAndStaking_Bankroll_Token_State_Changed.set(entity);
});

BankrollAndStaking.Initialized.handler(async ({ event, context }) => {
  const entity: BankrollAndStaking_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.BankrollAndStaking_Initialized.set(entity);
});

BankrollAndStaking.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: BankrollAndStaking_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.BankrollAndStaking_OwnershipTransferred.set(entity);
});

TinderTrading.Callback.handler(async ({ event, context }) => {
  const entity: TinderTrading_Callback = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    target: event.params.target,
    resut: event.params.resut,
  };

  context.TinderTrading_Callback.set(entity);
});

TinderTrading.Close.handler(async ({ event, context }) => {
  const entity: TinderTrading_Close = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    closePrice: event.params.closePrice,
    _closeMargin: event.params._closeMargin,
    fundingFee: event.params.fundingFee,
    rolloverFee: event.params.rolloverFee,
    closeFee: event.params.closeFee,
    afterFee: event.params.afterFee,
    s: event.params.s,
  };

  context.TinderTrading_Close.set(entity);
});

TinderTrading.Initialized.handler(async ({ event, context }) => {
  const entity: TinderTrading_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.TinderTrading_Initialized.set(entity);
});

TinderTrading.Open.handler(async ({ event, context }) => {
  const entity: TinderTrading_Open = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    t_0_0: event.params.t
        [0]
        [0]
    ,
    t_0_1: event.params.t
        [0]
        [1]
    ,
    t_0_2: event.params.t
        [0]
        [2]
    ,
    t_0_3: event.params.t
        [0]
        [3]
    ,
    t_0_4: event.params.t
        [0]
        [4]
    ,
    t_0_5: event.params.t
        [0]
        [5]
    ,
    t_0_6: event.params.t
        [0]
        [6]
    ,
    t_1: event.params.t
        [1]
    ,
    t_2: event.params.t
        [2]
    ,
    fee: event.params.fee,
  };

  context.TinderTrading_Open.set(entity);
});

TinderTrading.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: TinderTrading_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.TinderTrading_OwnershipTransferStarted.set(entity);
});

TinderTrading.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: TinderTrading_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.TinderTrading_OwnershipTransferred.set(entity);
});

TinderTrading.Paused.handler(async ({ event, context }) => {
  const entity: TinderTrading_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.TinderTrading_Paused.set(entity);
});

TinderTrading.SetFeeHelper.handler(async ({ event, context }) => {
  const entity: TinderTrading_SetFeeHelper = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _feeHelper: event.params._feeHelper,
  };

  context.TinderTrading_SetFeeHelper.set(entity);
});

TinderTrading.SetOracle.handler(async ({ event, context }) => {
  const entity: TinderTrading_SetOracle = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _oracle: event.params._oracle,
  };

  context.TinderTrading_SetOracle.set(entity);
});

TinderTrading.SetPairInfo.handler(async ({ event, context }) => {
  const entity: TinderTrading_SetPairInfo = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _pairInfo: event.params._pairInfo,
  };

  context.TinderTrading_SetPairInfo.set(entity);
});

TinderTrading.SetParams.handler(async ({ event, context }) => {
  const entity: TinderTrading_SetParams = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _liquidationP: event.params._liquidationP,
    _spreadReductionP: event.params._spreadReductionP,
    _callbackGasLimit: event.params._callbackGasLimit,
  };

  context.TinderTrading_SetParams.set(entity);
});

TinderTrading.SetReserve.handler(async ({ event, context }) => {
  const entity: TinderTrading_SetReserve = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _receiver: event.params._receiver,
    _rate: event.params._rate,
  };

  context.TinderTrading_SetReserve.set(entity);
});

TinderTrading.SetStandardToken.handler(async ({ event, context }) => {
  const entity: TinderTrading_SetStandardToken = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _standardToken: event.params._standardToken,
  };

  context.TinderTrading_SetStandardToken.set(entity);
});

TinderTrading.SetVault.handler(async ({ event, context }) => {
  const entity: TinderTrading_SetVault = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _vault: event.params._vault,
  };

  context.TinderTrading_SetVault.set(entity);
});

TinderTrading.Unpaused.handler(async ({ event, context }) => {
  const entity: TinderTrading_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.TinderTrading_Unpaused.set(entity);
});

TinderTrading.UpdateKeeper.handler(async ({ event, context }) => {
  const entity: TinderTrading_UpdateKeeper = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _keeper: event.params._keeper,
    _flag: event.params._flag,
  };

  context.TinderTrading_UpdateKeeper.set(entity);
});

RockPaperScissors.RockPaperScissors_Outcome_Event.handler(async ({ event, context }) => {
  const entity: RockPaperScissors_RockPaperScissors_Outcome_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    payout: event.params.payout,
    tokenAddress: event.params.tokenAddress,
    outcomes: event.params.outcomes,
    randomActions: event.params.randomActions,
    payouts: event.params.payouts,
    numGames: event.params.numGames,
    sequenceNumber: event.params.sequenceNumber,
  };

  context.RockPaperScissors_RockPaperScissors_Outcome_Event.set(entity);
});

// RockPaperScissors.RockPaperScissors_Play_Event.handler(async ({ event, context }) => {
//   const entity: RockPaperScissors_RockPaperScissors_Play_Event = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     playerAddress: event.params.playerAddress,
//     wager: event.params.wager,
//     tokenAddress: event.params.tokenAddress,
//     action: event.params.action,
//     numBets: event.params.numBets,
//     stopGain: event.params.stopGain,
//     stopLoss: event.params.stopLoss,
//     vRFFee: event.params.vRFFee,
//   };

//   context.RockPaperScissors_RockPaperScissors_Play_Event.set(entity);
// });

RockPaperScissors.RockPaperScissors_Refund_Event.handler(async ({ event, context }) => {
  const entity: RockPaperScissors_RockPaperScissors_Refund_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
  };

  context.RockPaperScissors_RockPaperScissors_Refund_Event.set(entity);
});

Slots.Slots_Outcome_Event.handler(async ({ event, context }) => {
  const entity: Slots_Slots_Outcome_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    payout: event.params.payout,
    tokenAddress: event.params.tokenAddress,
    slotIDs: event.params.slotIDs,
    multipliers: event.params.multipliers,
    payouts: event.params.payouts,
    numGames: event.params.numGames,
    sequenceNumber: event.params.sequenceNumber,
  };

  context.Slots_Slots_Outcome_Event.set(entity);
});

Slots.Slots_Play_Event.handler(async ({ event, context }) => {
  const entity: Slots_Slots_Play_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
    numBets: event.params.numBets,
    stopGain: event.params.stopGain,
    stopLoss: event.params.stopLoss,
    vRFFee: event.params.VRFFee,
  };

  context.Slots_Slots_Play_Event.set(entity);
});

Slots.Slots_Refund_Event.handler(async ({ event, context }) => {
  const entity: Slots_Slots_Refund_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
  };

  context.Slots_Slots_Refund_Event.set(entity);
});



Mines.Mines_Fee_Event.handler(async ({ event, context }) => {
  const entity: Mines_Mines_Fee_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    vRFFee: event.params.VRFFee,
  };

  context.Mines_Mines_Fee_Event.set(entity);
});

Mines.Mines_Play_Event.handler(async ({ event, context }) => {
  const entity: Mines_Mines_Play_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
    numMines: event.params.numMines,
    isCashout: event.params.isCashout,
    vRFFee: event.params.VRFFee,
  };

  context.Mines_Mines_Play_Event.set(entity);
});

Mines.Mines_Refund_Event.handler(async ({ event, context }) => {
  const entity: Mines_Mines_Refund_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
  };

  context.Mines_Mines_Refund_Event.set(entity);
});


Plinko.Plinko_Outcome_Event.handler(async ({ event, context }) => {
  const entity: Plinko_Plinko_Outcome_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    payout: event.params.payout,
    tokenAddress: event.params.tokenAddress,
    paths: event.params.paths,
    numRows: event.params.numRows,
    risk: event.params.risk,
    payouts: event.params.payouts,
    numGames: event.params.numGames,
    sequenceNumber: event.params.sequenceNumber,
  };

  context.Plinko_Plinko_Outcome_Event.set(entity);
});

Plinko.Plinko_Play_Event.handler(async ({ event, context }) => {
  const entity: Plinko_Plinko_Play_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    playerAddress: event.params.playerAddress,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
    numRows: event.params.numRows,
    risk: event.params.risk,
    numBets: event.params.numBets,
    stopGain: event.params.stopGain,
    stopLoss: event.params.stopLoss,
    vRFFee: event.params.VRFFee,
  };

  context.Plinko_Plinko_Play_Event.set(entity);
});

Plinko.Plinko_Refund_Event.handler(async ({ event, context }) => {
  const entity: Plinko_Plinko_Refund_Event = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    wager: event.params.wager,
    tokenAddress: event.params.tokenAddress,
  };

  context.Plinko_Plinko_Refund_Event.set(entity);
});

