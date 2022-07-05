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
  Swap = '/swap',
  Confirm = '/confirm',
  BasicOperation = '/basic-operation',
  AdvancedOperation = '/advance-operation',
  BasicSendConfirm = '/send/confirm',
  BasicSwapConfirm = '/swap/confirm',
  ClaimableBalances = '/claimable-balances',

  AssetInfo = '/asset',
  XLMAsset = '/xlm-asset',

  About = '/settings/about',
  Backup = '/settings/backup',
  General = '/settings/general',
  Contacts = '/settings/contacts',

  ChangePassword = '/settings/change-password',

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
