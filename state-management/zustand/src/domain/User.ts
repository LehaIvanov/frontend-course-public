export type User = {
  first: string;
  last: string;
  actions: {
    update: (property: 'last' | 'first', value: string) => void;
  };
};
