import React, { ReactNode } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'icon-circle'
  | 'danger'
  | 'danger-fill'
  | 'default'
  | 'outlined';

export type ButtonSize = 'small' | 'medium' | 'large';

export type InputVariant = 'password' | 'max' | 'borderless' | 'icon';

export type InputSize = 'small' | 'medium' | 'large' | 'x-large';

export type ModalSize = 'small' | 'medium' | 'large';

export type JustifyContent = 'start' | 'end' | 'center';

export type Placement = 'top' | 'bottom' | 'right' | 'left';

export type FullPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export interface ElementOption {
  value: string | number;
  label: string | React.ReactNode;
}

export interface GenericElementOption<T> {
  value: T;
  label: string | React.ReactNode;
}

export type Tab = {
  id: number | string;
  title: string;
  content: ReactNode;
};

export type Usage = 'desktop' | 'extension';

export type NavItemMenu = {
  id: number;
  name: string;
  icon: ReactNode;
};

export type NavItemContent = {
  id: number;
  component: ReactNode;
};

export type Page = {
  route: string;
  title: string;
  borderless?: boolean;
  routerPath?: any;
};
