<template>
  <single-column class="documentation">
    <slim-column class="documentation__sidebar">
      <ul>
        <li>
          <a href="/developers/introduction/what-is-secret-network">What is secret network</a>
        </li>
        <li>
          <a href="/developers/introduction/overview">Overview</a>
        </li>
        <li>
          <a href="/developers/introduction/network-architecture">Network architecture</a>
        </li>
        <li>
          <a href="/developers/introduction/development-roadmap">Development roadmap</a>
        </li>
        <li>
          <a href="/developers/introduction/using-scrt-with-ledger-cli">Using scrt with ledger CLI</a>
        </li>
        <li>
          <a href="/developers/secret-contract-devs/developing-secret-contracts">Developing secret contracts</a>
        </li>
        <li>
          <a href="/developers/secret-contract-devs/secret-contracts">Secret contracts</a>
        </li>
        <li>
          <a href="/developers/secret-contract-devs/privacy-model-of-secret-contracts">Privacy model of secret contracts</a>
        </li>
        <li>
          <a href="/developers/secret-contract-devs/quickstart">Quickstart</a>
        </li>
        <li>
          <a href="/developers/secret-contract-devs/secret-contract-devs">Secret contract devs</a>
        </li>
        <li>
          <a href="/developers/secret-contract-devs/secretjs">Secretjs</a>
        </li>
        <li>
          <a href="/developers/node-operators/validators/validators">Validators</a>
        </li>
        <li>
          <a href="/developers/node-operators/secret-light-client">Secret light client</a>
        </li>
        <li>
          <a href="/developers/node-operators/validators/setup-sgx">Setup sgx</a>
        </li>
        <li>
          <a href="/developers/node-operators/validators/run-a-full-node">Run a full node</a>
        </li>
        <li>
          <a href="/developers/node-operators/validators/join-as-a-validator">Join as a validator</a>
        </li>
        <li>
          <a href="/developers/node-operators/validators/backup-a-validator">Backup a validator</a>
        </li>
        <li>
          <a href="/developers/node-operators/validators/migrate-a-validator">Migrate a validator</a>
        </li>
        <li>
          <a href="/developers/node-operators/validators/sentry-nodes">Sentry nodes</a>
        </li>
        <li>
          <a href="/developers/node-operators/validators/vulcan-netwrok-upgrade">Vulcan netwrok upgrade</a>
        </li>
        <li>
          <a href="/developers/node-operators/delegators/delegators">Delegators</a>
        </li>
        <li>
          <a href="/developers/testnet/validators-cli/validators-cli">Validators cli</a>
        </li>
        <li>
          <a href="/developers/testnet/validators-cli/setup-sgx">Setup sgx</a>
        </li>
        <li>
          <a href="/developers/testnet/validators-cli/verify-sgx">Verify sgx</a>
        </li>
        <li>
          <a href="/developers/testnet/validators-cli/run-a-full-node">Run a full node</a>
        </li>
        <li>
          <a href="/developers/testnet/validators-cli/run-a-full-node-docker">Run a full node docker</a>
        </li>
        <li>
          <a href="/developers/testnet/validators-cli/join-as-a-validator">Join as a validator</a>
        </li>
        <li>
          <a href="/developers/testnet/validators-cli/backup-a-validator">Backup a validator</a>
        </li>
        <li>
          <a href="/developers/testnet/validators-cli/migrate-a-validator">Migrate a validator</a>
        </li>
        <li>
          <a href="/developers/protocol/protocol">Protocol</a>
        </li>
        <li>
          <a href="/developers/protocol/components">Components</a>
        </li>
        <li>
          <a href="/developers/protocol/encryption">Encryption</a>
        </li>
        <li>
          <a href="/developers/protocol/transactions">Transactions</a>
        </li>
        <li>
          <a href="/developers/protocol/governance">Governance</a>
        </li>
        <li>
          <a href="/developers/protocol/intel-sgx">Intel</a>
        </li>
      </ul>
    </slim-column>
    <slim-column class="documentation__body">
      <slot name="default"></slot>
    </slim-column>
  </single-column>
</template>

<style lang="scss" scoped>
.documentation {
  display: grid;
  justify-content: space-between;

  @include respond-to("large and up") {
    grid-template-columns: rem(250px) 1fr;
  }

  @include respond-to("medium and down") {
    grid-auto-flow: row;
  }

  &__sidebar {
    @include respond-to("large and up") {
      position: sticky;
      top: 0;
      overflow: auto;
      height: min-content;
    }
  }
}
</style>
