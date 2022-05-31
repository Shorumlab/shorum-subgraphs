import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')

export const BIG_DECIMAL_1E12 = BigDecimal.fromString('1e12')

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')

export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')

export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)

export const BIG_INT_TWO = BigInt.fromI32(2)

export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100)

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)

export const BIG_INT_ZERO = BigInt.fromI32(0)

export const BACKER_FEE_FOLLOW_MODULE_ADDRESS = Address.fromString(
  "0xE19122416BeeD4cbaDd663878de9af7c0eb32368"
);
// export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29)

// export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

// export const ACC_SUSHI_PRECISION = BigInt.fromString('1000000000000')

// export const BENTOBOX_DEPOSIT = 'deposit'

// export const BENTOBOX_TRANSFER = 'transfer'

// export const BENTOBOX_WITHDRAW = 'withdraw'

// export const KASHI_PAIR_MEDIUM_RISK_TYPE = 'medium'

// export const PAIR_ADD_COLLATERAL = 'addCollateral'

// export const PAIR_REMOVE_COLLATERAL = 'removeCollateral'

// export const PAIR_ADD_ASSET = 'addAsset'

// export const PAIR_REMOVE_ASSET = 'removeAsset'

// export const PAIR_BORROW = 'borrow'

// export const PAIR_REPAY = 'repay'

// export const FACTORY_ADDRESS = Address.fromString(
//   '{{ factory_address }}{{^factory_address}}0x0000000000000000000000000000000000000000{{/factory_address}}'
// )

// export const TRIBAL_CHIEF_V2_ADDRESS = Address.fromString('0xef0881ec094552b2e128cf945ef17a6752b4ec5d')

// export const SUSHI_BAR_ADDRESS = Address.fromString(
//   '{{ sushi_bar_address }}{{^sushi_bar_address}}0x0000000000000000000000000000000000000000{{/sushi_bar_address}}'
// )

// export const SUSHI_MAKER_ADDRESS = Address.fromString(
//   '{{ sushi_maker_address }}{{^sushi_maker_address}}0x0000000000000000000000000000000000000000{{/sushi_maker_address}}'
// )

// export const SUSHI_TOKEN_ADDRESS = Address.fromString(
//   '{{ sushi_address }}{{^sushi_address}}0x0000000000000000000000000000000000000000{{/sushi_address}}'
// )

// export const SUSHI_USDT_PAIR_ADDRESS = Address.fromString(
//   '{{ sushi_usdt_pair_address }}{{^sushi_usdt_pair_address}}0x0000000000000000000000000000000000000000{{/sushi_usdt_pair_address}}'
// )

// export const XSUSHI_USDC_PAIR_ADDRESS = Address.fromString(
//   '{{ xsushi_usdc_pair_address }}{{^xsushi_usdc_pair_address}}0x0000000000000000000000000000000000000000{{/xsushi_usdc_pair_address}}'
// )

// export const XSUSHI_WETH_PAIR_ADDRESS = Address.fromString(
//   '{{ xsushi_weth_pair_address }}{{^xsushi_weth_pair_address}}0x0000000000000000000000000000000000000000{{/xsushi_weth_pair_address}}'
// )

// export const SUSHI_DISTRIBUTOR_ADDRESS = Address.fromString(
//   '{{ sushi_distributor_address }}{{^sushi_distributor_address}}0x0000000000000000000000000000000000000000{{/sushi_distributor_address}}'
// )

// export const USDC_WETH_PAIR =
//   '{{ usdc_weth_pair }}{{^usdc_weth_pair}}0x0000000000000000000000000000000000000000{{/usdc_weth_pair}}'

// export const DAI_WETH_PAIR =
//   '{{ dai_weth_pair }}{{^dai_weth_pair}}0x0000000000000000000000000000000000000000{{/dai_weth_pair}}'

// export const USDT_WETH_PAIR =
//   '{{ usdt_weth_pair }}{{^usdt_weth_pair}}0x0000000000000000000000000000000000000000{{/usdt_weth_pair}}'

// export const SUSHI_USDT_PAIR =
//   '{{ sushi_usdt_pair }}{{^sushi_usdt_pair}}0x0000000000000000000000000000000000000000{{/sushi_usdt_pair}}'

// // minimum liquidity required to count towards tracked volume for pairs with small # of Lps
// export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
//   '{{ minimum_usd_threshold_new_pairs }}{{^minimum_usd_threshold_new_pairs}}3000{{/minimum_usd_threshold_new_pairs}}'
// )

// // minimum liquidity for price to get tracked
// export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('{{ minimum_liquidity_threshold_eth }}')

// export const WETH_ADDRESS = Address.fromString(
//   '{{ weth_address }}{{^weth_address}}0x0000000000000000000000000000000000000000{{/weth_address}}'
// )

// export const SUSHISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString(
//   '{{ sushiswap_weth_usdt_pair_address }}{{^sushiswap_weth_usdt_pair_address}}0x0000000000000000000000000000000000000000{{/sushiswap_weth_usdt_pair_address}}'
// )

// export const USDT_ADDRESS = Address.fromString(
//   '{{ usdt_address }}{{^usdt_address}}0x0000000000000000000000000000000000000000{{/usdt_address}}'
// )

export const UNISWAP_FACTORY_ADDRESS = Address.fromString(
  '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f'
)

const CUSTOM_BASES = new Map<string, string>()
