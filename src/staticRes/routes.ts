enum RouteName {
  Home = '/',
  Login = '/login',
  Register = '/confirm-login',
  First = '/first',
  Introduction = '/intro',
  IntroSlides = '/intro/slides',
  OfflineMode = '/offline-mode',
  CreateWallet = '/create-wallet',
  RestoreWallet = '/restore-wallet',
  LoggedCreateWallet = '/logged-create-wallet',
  LoggedImportWallet = '/logged-import-wallet',

  Error = '/error',
  Sucess = '/sucess',
  ShowPrivateKey = '/show-private-key',

  Send = '/send',
  Confirm = '/confirm',
  BasicOperation = '/basic-operation',
  AdvancedOperation = '/advance-operation',
  BasicSendConfirm = '/basic-operation/send/confirm',
  BasicSwapConfirm = '/basic-operation/swap/confirm',
  SendExtension = '/send-extension',
  SwapExtension = '/swap-extension',
  ClaimableBalances = '/claimable-balances',

  Flags = '/flag',
  AssetInfo = '/asset',
  DeleteAccount = '/delete-account',
  // ConnectedWebsites = '/connected-website',
  XLMAsset = '/xlm-asset',
  Setting = '/setting',
  AddAsset = '/add-asset',
  Receive = '/receive',
  ConfirmFlag = '/confirm-flag',
  AddContact = '/add-contact',
  EditContact = '/edit-contact',

  FetchData = '/fetch-data',
  BackupFile = '/backup-file',
  ContactRequest = '/contact-request',

  LoadingOne = '/loading-one',
  LoadingOverlay = '/loading-overlay',
  LoadingNetwork = '/loading-network',

  AccountManager = '/account-manager',

  WalletOption = '/wallet-option',
  EditName = '/wallet-option/edit-name',
  ConnectedWebsites = '/wallet-option/connected-websites',
  PrivateKey = '/wallet-option/private-key',
}

export default RouteName;
