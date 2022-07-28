enum RouteName {
  PWA = '/',
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
  Success = '/success',

  Send = '/home/operations/send',
  Swap = '/home/operations/swap',
  BasicSendConfirm = '/home/operations/send/confirm',
  BasicSwapConfirm = '/home/operations/swap/confirm',

  Receive = '/home/receive',
  AssetInfo = '/home/assets',
  XLMAsset = '/home/xlm-asset',
  AddAsset = '/home/add-asset',

  AboutSetting = '/settings/about',
  BackupSetting = '/settings/backup',
  GeneralSetting = '/settings/general',
  ContactsSetting = '/settings/contacts',
  ChangePasswordSetting = '/settings/change-password',
  ContactActionSetting = '/settings/contacts/action',

  LoadingOne = '/loading-one',
  LoadingNetwork = '/loading-network',

  WalletOption = '/home/wallet-option',
  EditName = '/home/wallet-option/edit-name',
  ConnectedWebsites = '/home/wallet-option/connected-websites',
  PrivateKey = '/home/wallet-option/private-key',
}

export default RouteName;
