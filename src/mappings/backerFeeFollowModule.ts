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
import { Address, BigDecimal, Bytes, BigInt, dataSource, ethereum, log } from '@graphprotocol/graph-ts'
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
    profileDistributor.createdBlock = BIG_INT_ZERO;
    profileDistributor.timestamp = BIG_INT_ZERO;
    profileDistributor.save();
  }

  return profileDistributor as ProfileDistributor;
}

// emit DistributorCreated(profileId, distributor, allDistributors.length);
export function handleDistributorCreated(event: DistributorCreated): void {
  
  const profileId = event.params.param0;
  const allDistributors = event.params.param2;

  const contract = BackerFeeFollowModuleContract.bind(BACKER_FEE_FOLLOW_MODULE_ADDRESS);
  const profileDistributor = getProfileDistributor(profileId, event.block)


  profileDistributor.profileId = profileId
  profileDistributor.distributor = contract.getProfileData(profileId).distributor
  profileDistributor.createdBlock = event.block.number
  profileDistributor.timestamp = event.block.timestamp
  profileDistributor.save()
  
  log.info("Distributor {} Created for profile id: {}", [
    profileDistributor.distributor.toString(),
    event.params.param0.toString(),
  ]);

  const followModule = getBackerFeeFollowModule(event.block)
  followModule.totalDistributors = allDistributors;
  followModule.save()
}