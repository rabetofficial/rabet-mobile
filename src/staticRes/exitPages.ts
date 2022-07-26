import RouteName from './routes';

type Page = {
  route: string;
  title: string;
  borderless?: boolean;
};

const pages: Page[] = [
  { route: RouteName.Send, title: 'Send' },
  { route: RouteName.AboutSetting, title: 'About' },
  { route: RouteName.BackupSetting, title: 'Backup' },
  { route: RouteName.Receive, title: 'Receive' },
  { route: RouteName.ContactsSetting, title: 'Contacts' },
  { route: RouteName.AddAsset, title: 'Add Asset' },
  { route: RouteName.EditName, title: 'Edit name' },
  { route: RouteName.GeneralSetting, title: 'General settings' },
  { route: RouteName.CreateWallet, title: 'Create Wallet' },
  { route: RouteName.Swap, title: 'Swap', borderless: true },
  { route: RouteName.RestoreWallet, title: 'Import wallet' },
  { route: RouteName.PrivateKey, title: 'Show private key' },
  { route: RouteName.WalletOption, title: 'Wallet options' },
  {
    route: RouteName.ChangePasswordSetting,
    title: 'Change Password',
  },
  { route: RouteName.ConnectedWebsites, title: 'Connected websites' },
  { route: RouteName.BasicSendConfirm, title: 'Confirm send' },
  { route: RouteName.BasicSwapConfirm, title: 'Confirm swap' },
];

export default pages;
