class PageOpened {
  static readonly type = '[Dashboard] Page Opened';
}

class PageClosed {
  static readonly type = '[Dashboard] Page Closed';
}

export const DashboardActions = {
  PageOpened,
  PageClosed,
};
