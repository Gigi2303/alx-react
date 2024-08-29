import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = {
    notifications: {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, message: 'Notification 1' },
        { id: 2, isRead: true, message: 'Notification 2' },
        { id: 3, isRead: false, message: 'Notification 3' }
      ]
    }
  };

  it('filterTypeSelected should return the selected filter type', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications should return the list of notifications', () => {
    expect(getNotifications(state)).toEqual(state.notifications.notifications);
  });

  it('getUnreadNotifications should return a list of unread notifications', () => {
    const expectedUnreadNotifications = [
      { id: 1, isRead: false, message: 'Notification 1' },
      { id: 3, isRead: false, message: 'Notification 3' }
    ];
    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});
