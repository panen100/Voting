# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

## Voting Business Introduction

### Roles
- voter
- candidate
- admin

### Scenarios
- 管理员创建候选人和投票人
- 拥有投票权限的人可以对候选人进行投票
- 每个投票人只有一次机会投票，投票后会被标记voted

## 项目部署

### 本地部署和环境配置

#### 项目环境准备
1. node.js
2. [创建pinata账号](https://app.pinata.cloud)
    创建pinata账号使用ipfs服务用于投票中上传候选人和投票人照片）
3. [创建apikey]（https://app.pinata.cloud/developers/api-keys）
4. 配置JWT：把JWT写到./context/JWT.js

#### 项目配置
1. 依赖安装 `yarn`
2. 启动本地链 `npx hardhat node`
3. 部署合约（本地），此步骤在生产环境中用管理员的账号进行部署 `npx hardhat run ./scripts/deploy.js --network localhost`






