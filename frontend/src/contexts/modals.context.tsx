'use client';

import React, {
  createContext, useState, useCallback, useMemo,
} from 'react';

import { MODAL_COMPONENTS } from 'constants/modals-list.constants';
import { MODAL_TYPES } from 'constants/modals.constants';

type ModalState = {
  [key in MODAL_TYPES]: {
    show: boolean;
    props: Record<string, unknown>;
  };
};

const initialState: ModalState = Object
  .values(MODAL_TYPES)
  .reduce((types, type) => ({ ...types, [type]: { show: false, props: {} } }), {}) as ModalState;

export const ModalContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  showModal: (_type: MODAL_TYPES, _props?: Record<string, unknown>) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  hideModal: (_type: MODAL_TYPES) => {},
  state: initialState,
});

const { Provider, Consumer: ModalConsumer } = ModalContext;

type Types = {
  children: React.ReactNode,
}

function ModalProvider({ children }: Types) {
  const [modalsState, setModalsState] = useState<ModalState>(initialState);

  const showModal = useCallback(
    (type: string, props: unknown) => {
      setModalsState((currentState) => ({ ...currentState, [type]: { show: true, props } }));
    },
    [],
  );

  const hideModal = useCallback(
    (type: string) => {
      setModalsState((currentState) => ({ ...currentState, [type]: { show: false, props: {} } }));
    },
    [],
  );

  const state = useMemo(() => ({ showModal, hideModal, state: modalsState }), [showModal, hideModal, modalsState]);

  const modals = useMemo(() => {
    const openedModals: MODAL_TYPES[] = Object
      .keys(modalsState)
      .filter((key) => modalsState[key as MODAL_TYPES].show) as MODAL_TYPES[];

    return openedModals.map((modal) => {
      const Component = MODAL_COMPONENTS[modal];

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <Component {...modalsState[modal].props} onClose={() => hideModal(modal)} key={modal} />;
    });
  }, [modalsState, hideModal]);

  return (
    <Provider value={state}>
      {modals}
      {children}
    </Provider>
  );
}

export { ModalConsumer, ModalProvider };
