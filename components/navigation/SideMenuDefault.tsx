import React from 'react';
import { useSelector } from 'react-redux';
import { UI } from '../../constants';
import { IState } from '../../state/reducers';
import { SideMenuActiveIndicator } from './SideMenuActiveIndicator';
import { SideMenuInner } from './SideMenuInner';

export function SideMenuDefault() {
  const { sideMenuActive: active } = useSelector(
    (state: IState) => state.navigation,
  );

  return (
    <div
      style={{
        width: '50vw',
        minWidth: '375px',
      }}
      className="relative flex text-primary"
    >
      <div
        style={{
          height: `calc(100vh - ${UI.HEADER_HEIGHT_PX}px`,
        }}
        className="w-full overflow-y-auto duration-300 children:last:border-b-0"
      >
        <SideMenuInner />
      </div>

      <SideMenuActiveIndicator />
    </div>
  );
}