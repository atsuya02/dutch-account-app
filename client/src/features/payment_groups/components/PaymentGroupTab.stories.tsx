import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaymentGroupTab } from 'src/features/payment_groups/components/PaymentGroupTab';
import {
  getPaymentGroupPaymentAffiliationsHandler,
  getPaymentGroupExpensesHandler,
} from 'src/test/server/handlers/paymentGroup';

export default {
  component: PaymentGroupTab,
  parameters: {
    msw: {
      handlers: [
        getPaymentGroupPaymentAffiliationsHandler(),
        getPaymentGroupExpensesHandler(),
      ],
    },
  },
} as ComponentMeta<typeof PaymentGroupTab>;

const Template: ComponentStory<typeof PaymentGroupTab> = (args) => (
  <PaymentGroupTab {...args} />
);

export const Default = Template.bind({});
Default.args = {
  managementGroupId: '1',
  paymentGroupId: '1',
};
