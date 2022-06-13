import { Provider } from "react-redux";

import withMock from "storybook-addon-mock";

import { openModal } from "@/store/modal/ModalReducers";
import { testStore } from "@/testsUtils/renderWithStoreAndClient";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CreateTransactionModal } from "./CreateTransaction";

export default {
  title: "Components/CreateTransactionModal",
  component: CreateTransactionModal,
  decorators: [withMock],
} as ComponentMeta<typeof CreateTransactionModal>;

const Template: ComponentStory<typeof CreateTransactionModal> = (args) => {
  const store = testStore({ modal: { isOpen: true } });
  return (
    <Provider store={store}>
      <CreateTransactionModal />

      <button
        type="button"
        onClick={() => {
          store.dispatch(openModal());
        }}
      >
        Open Modal
      </button>
    </Provider>
  );
};

export const Default = Template.bind({});

Default.args = {};
