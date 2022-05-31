# Shorum Subgraph

## Shorum Protocol

Shorum is a NFT social platform where you can back a Web3 User and also create your own Backing module and share your profit with your backers

## Subgraph

This subgraph dynamically tracks related protocol data.

Right now it is mainly to track the binding relationship between `profile id` and created `distributor` contract address. It is very important to get the distributor address so that the folowee or the others can send funds to reward the folowers.

## Running Locally

Make sure to update package.json settings to point to your own graph account.

## Deployment

Demo Subgraph Deployed at `https://thegraph.com/hosted-service/subgraph/starit/shorum-demo`

## Scheme

In the future, more data can be tracked and connected by subgraph.

```graphql
type BackerFeeFollowModule @entity {
  # Contract address
  id: ID!

  hub: Bytes!

  moduleGlobals: Bytes!

  totalDistributors: BigInt!

  updateAt: BigInt!
}

type ProfileDistributor @entity {

  id: ID!

  createdBlock: BigInt!

  profileId: BigInt!

  distributor: Bytes!

  timestamp: BigInt!
}
```
