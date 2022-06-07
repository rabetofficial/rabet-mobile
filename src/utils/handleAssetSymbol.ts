import { IOption } from 'reducers/options';
import { Currencies } from 'reducers/currencies';

const handleAssetSymbol = (
  currencies: Currencies,
  options: IOption,
) => {
  const currency = options.currency || 'USD';

  return currencies[currency]?.symbol || '$';
};

export default handleAssetSymbol;
