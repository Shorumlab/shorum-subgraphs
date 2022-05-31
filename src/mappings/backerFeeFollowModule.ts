import {
  DistributorCreated,
  BackerFeeFollowModule as BackerFeeFollowModuleContract,
} from '../types/BackerFeeFollowModule/BackerFeeFollowModule'
import {
  BIG_DECIMAL_1E12,
  BIG_DECIMAL_1E18,
  BIG_DECIMAL_ZERO,
  BIG_INT_ONE,
  BIG_INT_ONE_DAY_SECONDS,
  ADDRESS_ZERO,
  BIG_INT_ZERO,
  BACKER_FEE_FOLLOW_MODULE_ADDRESS,
} from "./helper";
import { Address, BigDecimal, BigInt, dataSource, ethereum, log } from '@graphprotocol/graph-ts'
import { BackerFeeFollowModule, ProfileDistributor } from "../types/schema";

function getBackerFeeFollowModule(block: ethereum.Block): BackerFeeFollowModule{
  let backerFeeFollowModule = BackerFeeFollowModule.load(BACKER_FEE_FOLLOW_MODULE_ADDRESS.toHex())

  if (backerFeeFollowModule == null) {
    const contract = BackerFeeFollowModuleContract.bind(
      BACKER_FEE_FOLLOW_MODULE_ADDRESS
    );
    backerFeeFollowModule = new BackerFeeFollowModule(
      BACKER_FEE_FOLLOW_MODULE_ADDRESS.toHex()
    );
    backerFeeFollowModule.totalDistributors = BIG_INT_ZERO;
    backerFeeFollowModule.hub = contract.HUB();
    backerFeeFollowModule.moduleGlobals = contract.MODULE_GLOBALS();

    backerFeeFollowModule.updateAt = block.timestamp;
    backerFeeFollowModule.save();
  }

  return backerFeeFollowModule as BackerFeeFollowModule;
}

function getProfileDistributor(
  id: BigInt,
  block: ethereum.Block
): ProfileDistributor {
  let profileDistributor = ProfileDistributor.load(id.toString());

  if (profileDistributor == null) {
    // const contract = BackerFeeFollowModuleContract.bind(
    //   BACKER_FEE_FOLLOW_MODULE_ADDRESS
    // );
    profileDistributor = new ProfileDistributor(id.toString());
    profileDistributor.profileId = id;
    profileDistributor.distributor = ADDRESS_ZERO;
    profileDistributor.save();
  }

  return profileDistributor as ProfileDistributor;
}

// emit DistributorCreated(profileId, distributor, allDistributors.length);
export function handleDistributorCreated(event: DistributorCreated): void {
  
  // log.info("Distributor {} Created for profile id: {}", [
  //   event.parameters[1].value.toString(),
  //   event.parameters[0].value.toString(),
  // ]);
  const profileId = event.parameters[0].value.toBigInt();
  const distributor = event.parameters[1].value.toBytes();
  const allDistributors = event.parameters[2].value.toBigInt();
  
  const profileDistributor = getProfileDistributor(profileId, event.block)
  profileDistributor.profileId = profileId
  profileDistributor.distributor = distributor
  profileDistributor.createdBlock = event.block.number
  profileDistributor.timestamp = event.block.timestamp
  profileDistributor.save()

  const followModule = getBackerFeeFollowModule(event.block)
  followModule.totalDistributors = BigInt.fromString(allDistributors.toString());
  followModule.save()
}