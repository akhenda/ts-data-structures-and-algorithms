import 'jest-extended';

export {};

declare global {
  type ArrayItem = number | string | undefined;
  type StackItem = number | string | undefined;
}
