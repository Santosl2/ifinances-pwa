export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type SignInFormData = {
  email: string;
  password: string;
};

export type TransactionTypes = "income" | "outcome";

export type CreateTransactionModalFormData = {
  id?: string;
  transactionName: string;
  price: number;
  category: string;
  type: TransactionTypes;
};
