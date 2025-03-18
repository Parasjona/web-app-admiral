import { useState } from "react";
import {
  Button,
  ID,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemStatus,
  NotificationItemTitle,
  StyledNotificationItem,
  TextButton,
  Toast,
  ToastItemProps,
  ToastItemWithProgress,
  ToastProvider,
  useToast,
} from "@admiral-ds/react-ui";
import styled from "styled-components";

function uid(): string {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  > * {
    flex: 1 1 auto;
  }
`;

const toastStatuses: NotificationItemStatus[] = [
  "info",
  "error",
  "success",
  "warning",
];

const handleTextButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log("TextButton click");
};

const titleValue = "Toast title";
const contentValue = "Toast content";
const textButton1Value = "TextButton1";
const textButton2Value = "TextButton2";

const MessageForm = () => {
  const [toastIdStack, setToastIdStack] = useState<Array<ToastItemProps>>([]);
  const [toastStatus, setToastStatus] = useState(0);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const id = uid();
    const renderFunction = (id: ID) => {
      const handleCloseToast = () => {
        removeToastItem({ id, renderToast: renderFunction });
        // eslint-disable-next-line no-console
        console.log("Toast is closed");
        setToastIdStack((prevToastIdStack) =>
          prevToastIdStack.filter(
            (toast) => toast.renderToast !== renderFunction
          )
        );
      };

      return (
        <ToastItemWithProgress
          status={toastStatuses[toastStatus]}
          autoDeleteTime={autoDeleteTime}
          onRemoveNotification={handleCloseToast}
        >
          <StyledNotificationItem
            status={toastStatuses[toastStatus]}
            isClosable={true}
            displayStatusIcon={true}
            onClose={handleCloseToast}
          >
            <NotificationItemTitle>{titleValue}</NotificationItemTitle>
            <NotificationItemContent>{contentValue}</NotificationItemContent>
            <NotificationItemButtonPanel>
              <TextButton
                dimension="s"
                text={textButton1Value}
                onClick={handleTextButtonClick}
              />
              <TextButton
                dimension="s"
                text={textButton2Value}
                onClick={handleTextButtonClick}
              />
            </NotificationItemButtonPanel>
          </StyledNotificationItem>
        </ToastItemWithProgress>
      );
    };
    addToastItem({ id, renderToast: renderFunction });
    setToastIdStack((prev) => [...prev, { id, renderToast: renderFunction }]);
    setToastStatus((prevStatus) => (prevStatus + 1) % 4);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const removeToast = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (removeToast) {
      removeToastItem(removeToast);
    }
  };

  return (
    <div style={{ width: "550px" }}>
      <Wrapper>
        <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
        <Button
          disabled={toastIdStack.length === 0}
          onClick={onClickHandlerRemove}
        >
          Удалить первое сообщение
        </Button>
      </Wrapper>
    </div>
  );
};

export const Template = () => {
  return (
    <ToastProvider>
      <MessageForm />
      <Toast />
    </ToastProvider>
  );
};
