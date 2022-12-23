import { createContext, ReactElement } from "react";
import { notification } from "antd";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const NotificationContext = createContext<((type: NotificationType, message: string) => void)>(() => {})

const NotificationProvider = (props: {children: ReactElement}) => {
  const [notification_api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType, message: string) => {
    notification_api[type]({
      message: 'Notification Title',
      description: message,
    });
  };
  return (
    <NotificationContext.Provider value={openNotificationWithIcon}>
      { contextHolder }
      { props.children }
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
