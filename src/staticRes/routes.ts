enum RouteName {
  Home = '/home',
  Login = '/login',
  Register = '/confirm-login',
  First = '/first',
  Introduction = '/intro',
  IntroSlides = '/intro/slides',
  OfflineMode = '/offline-mode',
  CreateWallet = '/create-wallet',
  RestoreWallet = '/restore-wallet',

  Error = '/error',
  Sucess = '/sucess',

  Send = '/home/operations/send',
  Swap = '/home/operations/swap',
  BasicSendConfirm = '/home/operations/send/confirm',
  BasicSwapConfirm = '/home/operations/swap/confirm',

  Receive = '/home/receive',
  AssetInfo = '/home/asset',
  XLMAsset = '/home/xlm-asset',
  AddAsset = '/home/add-asset',

  About = '/settings/about',
  Backup = '/settings/backup',
  General = '/settings/general',
  Contacts = '/settings/contacts',
  ChangePassword = '/settings/change-password',
  ContactAction = '/settings/contacts/action',

  LoadingOne = '/loading-one',
  LoadingNetwork = '/loading-network',

  WalletOption = '/home/wallet-option',
  EditName = '/home/wallet-option/edit-name',
  ConnectedWebsites = '/home/wallet-option/connected-websites',
  PrivateKey = '/home/wallet-option/private-key',
}

export default RouteName;
