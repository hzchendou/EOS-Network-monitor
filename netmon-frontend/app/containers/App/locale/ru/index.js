export default Object.freeze({
  translations: {
    // <NavigationMenu />
    i18nNavigationMenu: {
      headLink: 'EOS Network Monitor.io',
      accountInfo: 'Account Info',
      accountHistory: 'Account History',
      txInfo: 'TX Info',
      api: 'API',
      p2p: 'P2P',
      testnet: 'Testnet',
      nodeInstallation: 'Node Installation',
      legend: 'Легенда',
    },
    // <Modal/>
    i18nModal: {
      // <AccountInfo />
      i18nAccountInfo: {
        // <Header />
        title: 'ACCOUNT INFO',
        placeholder: 'Account Name',
        getButton: 'Get',
        getAccountsTransactionsHistory: 'Get accounts transactions history',
        historyLink: 'History',
        // <Main />
        balance: 'Balance',
        created: 'Created',
        lastCodeUpdate: 'Last code Update',
        activeKey: 'Active Key',
        ownerKey: 'Owner Key',
        ramUsed: 'RAM used',
        bytes: 'bytes',
        quota: 'quota',
        // 2 Blocks
        netBandwidth: 'NET bandwidth',
        cpuBandwidth: 'CPU bandwidth',
        staked: 'staked',
        delegated: 'delegated',
        current: 'current',
        available: 'available',
        max: 'max',
        time: 'time',
        // Last block
        voterInfo: 'Voter Info',
        proxy: 'Proxy',
        producers: 'Producers',
        stakedLB: 'Staked',
        lastVoteWeight: 'Last vote weight',
        proxieVoteWeight: 'Proxie vote weight',
        isProxy: 'Is proxy',
        deferredTrxId: 'Deferred trx id',
        lastUnstakeTime: 'Last unstake time',
        unstaking: 'Unstaking',
      },
      // <AccountHistory />
      i18nAccountHistory: {
        // <Header />
        title: 'ACCOUNT HISTORY',
        placeholder: 'Account Name',
        getButton: 'Get',
        GetInformationAboutAccountAndBalance: 'Get information about account and balance',
        accountInfoLink: 'Account info',
        // <Main />
        // Pagination
        prev: 'Prev',
        page: 'Page',
        next: 'Next',
        // Data Block
        block: 'Block',
        txId: 'TXid',
        date: 'Date',
        action: 'Action',
        from: 'From',
        info: 'Info',
      },
      // <Transactions />
      i18nTransactions: {
        // <Header />
        title: 'TRANSACTION',
        placeholder: 'TX id',
        getButton: 'Get',
        findTransaction: 'Find a Transaction',
        // <Main />
        block: 'Block',
        txId: 'TXid',
        date: 'Date',
        action: 'Action',
        from: 'From',
        info: 'Info',
      },
      // <BlockInfo />
      i18nBlockInfo: {
        title: 'BLOCK INFO',
        getButton: 'Get',
      },
      // <Legend />
      i18nLegend: {
        title: 'LEGEND',
        // About block
        about: 'ABOUT',
        content: [
          'All information comes from quering PUBLIC nodes. Block producing nodes are usually hidden',
          'EOS Network Monitor is a tool to check EOS public endpoints and show general info',
          'It shows all registerd producers and ftech info about endpoints from bp.json file',
        ],
        tps: ['TPS', 'Transaction per second'],
        aps: ['APS', 'Actions in transaction per second'],
        // Colors legend block
        colorsLegend: 'COLORS LEGEND',
        producingRightNow: 'producing right now',
        noResponse: 'No response from public API endpoint (Does not necessarily mean that producers node is down)',
        versionInformation: `Version information is obtained from querying public nodes. Block producing nodes are usually hidden. There may be legitimate reasons for "off version" public nodes, like sidestepping a known bug, but these are rare`,
        unsynced: 'Unsynced',
        thisDoesNot: `This does NOT necessarily mean there's a fork or a difference in consensus. It could be that the node is resynchronizing and will soon by synced again`,
        bps: `BPs marked in grey have incorrect or missing bp.json file. We do a period check. Also, we're only checking the top 60`,
        moreinfo: 'More info',
        // Ping color explanation block
        pingColorExplanation: 'PING COLOR EXPLANATION',
        greyName: 'Grey ',
        greyPing: 'Ping result: last status received',
        blackPing: 'Black Ping result: status being recalculated',
        // Notes
        note1: 'NOTE 1',
        ManyBp: `Many BPs use some load balancer with many nodes behind it. For this reason, even subsequent querries sometimes return different information`,
        note2: 'NOTE 2',
        wePull:
          'We pull the list of node producers from `cleos system list producers`. We do this every several seconds',
      },
      // <Vote />
      i18nVote: {
        title: 'VOTE',
        // Main Text
        byCompletingThisAction: 'By completing this action, I agree to the',
        eosConstitution: 'EOS Constitution',
        theIntentOf: `The intent of the 'vote producer' action is to cast a valid vote for up to 30 BP candidates.`,
        iAmEitherThe: `I am either the beneficial owner of the tokens with which I am voting, or I have proof that I have been authorized to vote on behalf of the beneficial owner(s).`,
        iStipulateThat: `I stipulate that I have not and will not accept anything of value in exchange for these votes, on penalty of confiscation of these tokens, and other penalties.`,
        iStipulateThatIAmNot: `I stipulate that I am not using any system of automatic voting, re-voting, or vote refreshing. Doing so violates this contract.`,
        thisFeatureWas: `This feature was created to help with voting. It creates a cleos command based on checked producers, and
      uses`,
        ourCleosWrapper: 'our cleos wrapper (which just configures ports and addresses)',
        selectedProducers: 'Selected producers',
        // Input
        placeholder: 'Your account name...',
        // Button
        installScatter: 'Install Scatter',
        vote: 'Vote',
        initScatter: 'Init Scatter',
        // Footer
        voteProducerProds: './cleos.sh system voteproducer prods',
        checkAtLeastOne: 'Check at least one producer (check box)',
      },
    },
    // <FirstSection />
    i18nFirstSection: {
      // <CurrentBlockInfo />
      i18nCurrentBlockInfo: {
        title: 'Current block info',
        irreversibleBlock: 'Irreversible Block',
        producedBy: 'Produced by',
        next: 'Next',
      },
      // <GeneralInfo />
      i18nGeneralInfo: {
        title: 'General info',
        stakedTotal: 'Staked total',
        tps: 'TPS Live/All time high',
        aps: 'APS Live/All time high',
        connectedUsers: 'Connected Users',
        maxRamSize: 'RAM in chain',
        totalUnpaidBlocks: 'Unpaid blocks',
        coreLiquidBalance: 'Core liquid balance',
        savingTotalBalance: 'Saving total balance',
      },
      // <Transactions />
      i18nTransactions: {
        title: 'transactions',
        total: 'Total',
        transactions: 'Transactions',
        blockNumber: 'Block #',
        transactionsWillAppear: 'Transactions will appear after synchronization...',
      },
    },
    // <SecondSection />
    i18nSecondSection: {
      i18nVote: 'VOTE',
      // <TableColumnMenu /> && <TableHeading />
      i18nFixedTableColumnNames: {
        name: 'Name',
      },
      i18nTableColumnNames: {
        ping: 'Ping from Europe',
        answered: 'Answered',
        blkSeen: 'Blk seen',
        produced: 'Produced',
        blkProduced: 'Blk produced',
        version: 'Version',
        address: 'Address',
        http: 'HTTP',
        p2p: 'P2P',
        location: 'Location',
        numberProduced: '# produced',
        txs: '# TXs',
        organisation: 'Org Name',
        votes: 'Votes',
        expectedIncome: 'Expected income',
        missedBlocks: 'Missed blocks',
      },
      // <TableColumnMenu />
      i18nTableColumnMenu: {
        title: 'Columns',
        hintText: ['Hint', 'Shift + scroll', 'to scroll table horizontally'],
        reset: 'Reset',
      },
    },
    // <Footer />
    footer: {
      createdBy: 'Created by',
      cryptoLions: 'CryptoLions.io',
      gitHub: 'GitHub',
    },
  },
});
