import { FC } from 'react';
import {
  ManagementGroup,
  PaymentGroup,
  Expense as ExpenseType,
} from 'src/openapi-generator';
import { useGetExpense } from 'src/features/expenses/api/getExpense';
import { CenterTitle, OneLineCard } from 'src/components/elements';
import { Spinner } from '@chakra-ui/react';
import dayjs from 'dayjs';

type ExpenseProps = {
  managementGroupId: ManagementGroup['id'];
  paymentGroupId: PaymentGroup['id'];
  expenseId: ExpenseType['id'];
};

export const Expense: FC<ExpenseProps> = ({
  managementGroupId,
  paymentGroupId,
  expenseId,
}) => {
  const { expense, error } = useGetExpense(
    managementGroupId,
    paymentGroupId,
    expenseId
  );

  if (error?.response?.status === 404) {
    return <CenterTitle mt={5}>費用が見つかりません</CenterTitle>;
  }

  return (
    <div>
      {expense === undefined && <Spinner />}
      {expense !== undefined && (
        <OneLineCard
          mx='auto'
          bg='#164b9f1b'
          boxShadow='dark-lg'
          rounded='md'
          width={400}
          pl={3}
          mt={5}
          py={2}
        >
          {expense.description}
          <br />
          <br />
          支払ったユーザー: {expense.user.name}
          <br />
          金額: {expense.amount_of_money.toLocaleString()}円
          <br />
          支払日: {dayjs(new Date(expense.paid_on)).format('YYYY/MM/DD')}
        </OneLineCard>
      )}
    </div>
  );
};
