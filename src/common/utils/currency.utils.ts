import { formatValue } from "react-currency-input-field";

export const formatCurrency = (
  value: string,
  prefix?: string,
  suffix?: string
) =>
  formatValue({
    value,
    decimalSeparator: ".",
    prefix,
    suffix,
  });