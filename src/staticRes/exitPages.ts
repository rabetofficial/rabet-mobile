import RouteName from './routes';

type Page = {
  route: string;
  title: string;
  borderless?: boolean;
};

const pages: Page[] = [
  { route: RouteName.Send, title: 'Send' },
  { route: RouteName.About, title: 'About' },
  { route: RouteName.Backup, title: 'Backup' },
  { route: RouteName.Receive, title: 'Receive' },
  { route: RouteName.Contacts, title: 'Contacts' },
  { route: RouteName.AddAsset, title: 'AddAsset' },
  { route: RouteName.EditName, title: 'Edit name' },
  { route: RouteName.General, title: 'General settings' },
  { route: RouteName.CreateWallet, title: 'Create Wallet' },
  { route: RouteName.Swap, title: 'Swap', borderless: true },
  { route: RouteName.RestoreWallet, title: 'Import wallet' },
  { route: RouteName.PrivateKey, title: 'Show private key' },
  { route: RouteName.WalletOption, title: 'Wallet options' },
  { route: RouteName.ChangePassword, title: 'Change Password' },
  { route: RouteName.ConnectedWebsites, title: 'Connected websites' },
  { route: RouteName.BasicSendConfirm, title: 'Confirm send' },
  { route: RouteName.BasicSwapConfirm, title: 'Confirm swap' },
];

export default pages;
