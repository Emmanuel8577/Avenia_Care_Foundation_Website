declare module "@paystack/inline-js" {
  interface PaystackOptions {
    key: string;
    email: string;
    amount: number;
    currency?: string;
    ref?: string;
    reference?: string;
    onSuccess?: (transaction: { reference: string; [key: string]: any }) => void;
    onCancel?: () => void;
    [key: string]: any;
  }

  export default class PaystackPop {
    newTransaction(options: PaystackOptions): void;
    setup(options: PaystackOptions): void;
  }
}